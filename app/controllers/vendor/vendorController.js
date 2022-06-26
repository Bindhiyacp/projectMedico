/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

import mongoose from 'mongoose';
import {Vendor} from '../../model/vendor/vendorModel.js';
export {createVendor, getVendors, updateVendor, deleteVendor, getVendor};

// const router = express.Router();

/**
 * Create a new customer.
 * @param {any} userParam response object.
 * @return {any} response object.
*/
// eslint-disable-next-line require-jsdoc
async function createVendor(req, res) {
  const {
    username,
    shopName,
    sAddress,
    phoneNumber,
    whatsappNumber,
    sLocation,
    image} = req.body;

  const newVendor= new Vendor({
    username: username,
    shopName: shopName,
    sAddress: sAddress,
    phoneNumber: phoneNumber,
    whatsappNumber: whatsappNumber,
    sLocation: sLocation,
    image: image});

  try {
    await newVendor.save();
    const saved = await newVendor.save();
    console.log('reach here');
    res.status(201).json(saved );
  } catch (error) {
    res.status(409).json({message: error.message});
  }
}

/**
 * Get all customers .
 * @param {any} userParam response object.
 * @return {any} response object.
*/

// eslint-disable-next-line require-jsdoc
async function getVendors(req, res) {
  try {
    const mysort = {pname: 1};


    const VendorList = await Vendor.find().sort(mysort);


    res.status(200).json(VendorList);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}


// eslint-disable-next-line require-jsdoc
async function updateVendor(req, res) {
  const {
    username,
    shopName,
    sAddress,
    phoneNumber,
    whatsappNumber,

    sLocation,
    image,
    id} = req.body;
  console.log(id);
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Customer with id: ${id}`);

    const updatedVendor = {
      username: username,
      shopName: shopName,
      sAddress: sAddress,
      phoneNumber: phoneNumber,
      whatsappNumber: whatsappNumber,

      sLocation: sLocation,
      image: image,
      _id: id};

    await Vendor.findByIdAndUpdate(id, updatedVendor, {new: true});

    res.json(updatedVendor);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

async function deleteVendor(req, res) {
  const {id} = req.body;
  console.log(id);

  try {
    const VendorDetails = await Vendor.findById(id);
    console.log(VendorDetails);

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`);

    await Vendor.findByIdAndRemove(id);

    res.json({message: 'Customer deleted successfully.'});
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

// eslint-disable-next-line require-jsdoc
async function getVendor(req, res) {
  //  const filters = req.query.pname;

  /* const querypattern = {
      username: {
        $regex: req.query.username,

      },
    };
    console.log(querypattern);
    const query = querypattern;
    const CustomerList = await Customer.find(query);*/

  const {id} = req.body;
  console.log(id);

  try {
    const VendorDetails = await Vendor.findById(id);
    console.log(VendorDetails);

    res.status(200).json(VendorDetails);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}
