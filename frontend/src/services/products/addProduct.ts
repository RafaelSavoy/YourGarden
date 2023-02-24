import { api } from '../../api/axiosConfig';

interface Product {
  name: string;
  price: number;
}

export async function addProduct(product: Product, userToken: string) {
  await api.post('/products/create', product, {
    headers: { Authorization: `Bearer ${userToken}` }
  });
}