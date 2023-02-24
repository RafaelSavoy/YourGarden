import { ProductModel } from '../../database/models/Product.model';
import { HTTPError } from '../errors/httpError';

export async function createProduct(name: string, price: number, image: string): Promise<ProductModel> {
  try{
    return await ProductModel.create({
    name,
    price,
    image
  });
  }catch(e){
    console.log(e)
    throw new HTTPError('Erro interno ao criar produto', 500);
  }
}
