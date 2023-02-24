import { Request, Response } from 'express';
import { productService } from '../../../services/products/products.service';

export async function deleteProduct(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const response = await productService.deleteProduct(Number(id));
    console.log(response);
    res.status(200).json({ message: 'Produto deletado com sucesso' });
  } catch (e: any) {
    res.status(e.code || 500).json({
      msg: e.message || 'Erro desconhecido, contate o administrador.'
    });
  }
}
