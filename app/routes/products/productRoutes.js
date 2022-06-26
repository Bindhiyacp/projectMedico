import {Router} from 'express';
const router = Router();

import {
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomer,
  getCustomers,
} from '../../controllers/products/productController.js';


router.post('/createProduct', createCustomer);
router.post('/updateProduct', updateCustomer);
router.delete('/deleteProduct', deleteCustomer);
router.get('/getProduct', getCustomer);
router.get('/getProducts', getCustomers);


export default router;

