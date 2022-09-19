import { Request, Response } from "express";
import ProductsBusiness from "../business/ProductsBusiness";
import { body, validationResult } from "express-validator";

export class ProductsController {

   public async products(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const { token } = req.body

         const result = await ProductsBusiness.products(token);
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao coletar produtos" })
         }
      }
   }

 

   public async addProduct(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const {token, id_galeria, nome, descricao, observacao, imagem1 } = req.body

         const result = await ProductsBusiness.addProduct(
            token,
            id_galeria,
            nome,
            descricao,  
            observacao, 
            imagem1
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao adicionar produto" })
         }
      }
   }

   public async addImgProduct(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const { id, imagem2,imagem3,imagem4,imagem5} = req.body

         const result = await ProductsBusiness.addImgProduct( 
            id,
            imagem2,
            imagem3,
            imagem4,
            imagem5
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao adicionar produto" })
         }
      }
   }

  public async editProduct(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const {token, id, id_galeria, nome, descricao, observacao, imagem1,imagem2,imagem3,imagem4,imagem5 } = req.body

         const result = await ProductsBusiness.editProduct(
            token,
            id,
            id_galeria,
            nome,
            descricao,  
            observacao, 
            imagem1,
            imagem2,
            imagem3,
            imagem4,
            imagem5
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao editar produto" })
         }
      }
   }

   public async deleteImgProduct(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const {token, id, imagem} = req.body

         const result = await ProductsBusiness.deleteImgProduct( 
            token,
            id,
            imagem
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao deletar imagem de produto" })
         }
      }
   }

   public async deleteProduct(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }
         
         const  id  = req.query.id
         const { token } = req.body

         const result = await ProductsBusiness.deleteProduct(
            token,
            id as string
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao deletar produto" })
         }
      }
   }


}

export default new ProductsController()