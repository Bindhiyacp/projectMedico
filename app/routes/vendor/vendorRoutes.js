import {Router} from 'express';
const router = Router();

import {
  createVendor,
  updateVendor,
  deleteVendor,
  getVendors,
  getVendor,
} from '../../controllers/vendor/vendorController.js';


router.post('/createVendor', createVendor);
router.post('/updateVendor', updateVendor);
router.delete('/deleteVendor', deleteVendor);
router.get('/getVendor', getVendor);
router.get('/getVendor', getVendors);


export default router;

