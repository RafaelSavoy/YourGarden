import { api } from '../../api/axiosConfig';

export async function deleteProduct(id: number, userToken: string) {
  await api.delete(`/products/${id}`, {
    headers: { Authorization: `Bearer ${userToken}` }
  });
}
