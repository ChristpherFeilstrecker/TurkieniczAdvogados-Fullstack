import { Request, Response } from "express";
import NoticiasBusiness from "../business/NoticiasBusiness";
import { body, validationResult } from "express-validator";

export class NoticiasController {

   public async noticias(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const result = await NoticiasBusiness.noticias();
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao coletar noticias" })
         }
      }
   }

   public async editNoticias(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const {token, id, titulo, descricao, imagem, data, fonte } = req.body

         const result = await NoticiasBusiness.editNoticias(
            token,
            id,
            titulo, 
            descricao, 
            imagem, 
            data, 
            fonte
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao editar noticia" })
         }
      }
   }

   public async addNoticias(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const {token, titulo, descricao, imagem, data, fonte } = req.body

         const result = await NoticiasBusiness.addNoticias(
            token,
            titulo, 
            descricao, 
            imagem, 
            data, 
            fonte
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao adicionar noticias" })
         }
      }
   }

   public async deleteNoticias(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }
         
         const  id  = req.query.id
         const { token } = req.body
        
         const result = await NoticiasBusiness.deleteNoticias(
            token,
            id as string
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao deletar noticia" })
         }
      }
   }

   

}

export default new NoticiasController()