import pkg from 'mongoose';
const {Schema: _Schema, model} = pkg;
const Schema = _Schema;
import mongoose from 'mongoose';

const schema = new Schema({
  username: {type: String, unique: true, required: true},
  shopName: {type: String, required: true},
  sAddress: {type: String, required: true},
  phoneNumber: {type: String, required: true},
  whatsappNumber: {type: String, required: true},
  sLocation: {type: String},
  image: {type: String},
},
);

schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret) {
    delete ret._id;
    delete ret.hash;
  },
});

export const Vendor = mongoose.model('Vendor', schema);
