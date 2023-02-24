import { Router } from 'express';
import {
  createProduct,
  getProducts,
  editProduct,
  deleteProduct
} from './controllers/';
import { verifyPermissionMiddleware } from '../admin/middlewares/adminVerifiyMiddleware';

const productRoutes = Router();

productRoutes.get('/', getProducts);

productRoutes.post('/create', verifyPermissionMiddleware, createProduct);

productRoutes.put('/:id', verifyPermissionMiddleware, editProduct);

productRoutes.delete('/:id', verifyPermissionMiddleware, deleteProduct);

export { productRoutes };
