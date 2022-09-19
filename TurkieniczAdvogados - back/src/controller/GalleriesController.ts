import { Request, Response } from "express";
import GalleriesBusiness from "../business/GalleriesBusiness";
import { body, validationResult } from "express-validator";

export class GalleriesController {

   public async galleries(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const { token } = req.body

         const result = await GalleriesBusiness.galleries(token);
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao coletar galerias" })
         }
      }
   }

   public async editGallerie(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const {token, id, nome, descricao, imagem } = req.body

         const result = await GalleriesBusiness.editGallerie(
            token,
            id,
            nome,
            descricao,   
            imagem
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao editar galeria" })
         }
      }
   }

   public async addGallerie(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const {token, nome, descricao, imagem } = req.body

         const result = await GalleriesBusiness.addGallerie(
            token,
            nome,
            descricao,   
            imagem
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao adicionar galeria" })
         }
      }
   }

   public async deleteGallerie(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }
         
         const  id  = req.query.id
         const { token } = req.body
        
         const result = await GalleriesBusiness.deleteGallerie(
            token,
            id as string
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao deletar galeria" })
         }
      }
   }

   

}

export default new GalleriesController()