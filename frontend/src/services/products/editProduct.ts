import { api } from '../../api/axiosConfig';
import { Product } from '../../components/Store';

export async function editProduct(product: Product, userToken: string) {
  await api.put(`/products/:${product.id}`, product, {
    headers: { Authorization: `Bearer ${userToken}` }
  });
}
