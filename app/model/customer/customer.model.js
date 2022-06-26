import pkg from 'mongoose';
const {Schema: _Schema, model} = pkg;
const Schema = _Schema;
import mongoose from 'mongoose';

const schema = new Schema({
  username: {type: String, unique: true, required: true},
  customername: {type: String, required: true},
  cAddress: {type: String, required: true},
  phoneNumber: {type: String, required: true},
  cLocation: {type: String},
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

export const Customer = mongoose.model('Customer', schema);
