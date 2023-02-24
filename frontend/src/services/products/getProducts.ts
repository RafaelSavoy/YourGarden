import { api } from '../../api/axiosConfig';

interface Product {
  id: number;
  name: string;
  price: number;
}

export async function getProducts(): Promise<Product[]> {
  try {
    const result = await api.get('/products');
    return result.data.products;
  } catch (e) {
    throw new Error('Erro ao resgatar os produtos');
  }
}
