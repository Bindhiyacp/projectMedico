/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import mongoose from 'mongoose';
import {Customer} from '../../model/customer/customer.model.js';
export {createCustomer, getCustomers, updateCustomer, deleteCustomer, getCustomer};

// const router = express.Router();

/**
 * Create a new customer.
 * @param {any} userParam response object.
 * @return {any} response object.
*/
// eslint-disable-next-line require-jsdoc
async function createCustomer(req, res) {
  const {username, customername, cAddress, phoneNumber, cLocation} = req.body;

  const newCustomer = new Customer({username: username, customername: customername, cAddress: cAddress, phoneNumber: phoneNumber, cLocation: cLocation});

  try {
    await newCustomer.save();
    const saved = await newCustomer.save();
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
async function getCustomers(req, res) {
  try {
    const mysort = {pname: 1};


    const CustomerList = await Customer.find().sort(mysort);


    res.status(200).json(CustomerList);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}


// eslint-disable-next-line require-jsdoc
async function updateCustomer(req, res) {
  const {username, customername, cAddress, phoneNumber, cLocation, id} = req.body;
  console.log(id);
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Customer with id: ${id}`);

    const updatedCustomer = {username: username, customername: customername, cAddress: cAddress, phoneNumber: phoneNumber, cLocation: cLocation, _id: id};

    await Customer.findByIdAndUpdate(id, updatedCustomer, {new: true});

    res.json(updatedCustomer);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

async function deleteCustomer(req, res) {
  const {id} = req.body;
  console.log(id);

  try {
    const CustomerDetails = await Customer.findById(id);
    console.log(CustomerDetails);

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`);

    await Customer.findByIdAndRemove(id);

    res.json({message: 'Customer deleted successfully.'});
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

// eslint-disable-next-line require-jsdoc
async function getCustomer(req, res) {
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
    const CustomerDetails = await Customer.findById(id);
    console.log(CustomerDetails);

    res.status(200).json(CustomerDetails);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}


