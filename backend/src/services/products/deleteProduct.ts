import { ProductModel } from '../../database/models/Product.model';
import { HTTPError } from '../errors/httpError';

export async function deleteProduct(id: number) {
  try {
    const response = await ProductModel.destroy({ where: { id: id } });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
    throw new HTTPError('Não foi possível excluir o produto', 500);
  }
}
