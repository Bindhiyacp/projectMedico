﻿import express from 'express';
const app = express();
// import {createRequire} from 'module';
// import {upload, download} from './s3.js';

// const required = createRequire(import.meta.url);
import cors from 'cors';
// const fs = required('fs');
import jwt from './helpers/jwt_helper.js';
import errorHandler from './helpers/error-handler.js';
import userRoute from './routes/users/user.routes.js';
import customerRoute from './routes/customer/customer.routes.js';
import vendorRoute from './routes/vendor/vendorRoutes.js';
import productRoute from './routes/products/productRoutes.js';

// const multer = required('multer');
// const uploader = multer({dest: 'uploads/'});

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(jwt());

app.use('/users', userRoute);
app.use('/customers', customerRoute);
app.use('/vendor', vendorRoute);
app.use('/products', productRoute);
// app.post('/upload', uploader.single('image'), async (req, res) => {
//  const file = req.file;
//  try {
//    const response = await upload(file);
//   console.log(response);
//    res.status(200).send({'url':"http://3.138.118.207:3000/images?key=" + response.key});
//  } catch (e) {
//    console.log(e);
//    res.sendStatus(201);
// }
// });

// app.get('/images', async (req, res) => {
//  const key = req.query.key;
//  const readStream = download(key);
//  await download(key);
//  readStream.pipe(res);
// });


app.use(errorHandler);

const port = process.env.PORT||3000;

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});


