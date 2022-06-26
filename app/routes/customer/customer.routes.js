import {Router} from 'express';
const router = Router();

import {
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomer,
  getCustomers,
} from '../../controllers/customer/customer.controller.js';


router.post('/createCustomer', createCustomer);
router.post('/updateCustomer', updateCustomer);
router.delete('/deleteCustomer', deleteCustomer);
router.get('/getCustomer', getCustomer);
router.get('/getCustomers', getCustomers);


export default router;

