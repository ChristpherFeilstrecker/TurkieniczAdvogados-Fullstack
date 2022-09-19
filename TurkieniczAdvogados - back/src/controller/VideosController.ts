import { Request, Response } from "express";
import VideosBusiness from "../business/VideosBusiness";
import { body, validationResult } from "express-validator";

export class VideosController {

   public async videos(req: Request, res: Response) {
      try {


         const result = await VideosBusiness.videos();
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao coletar videos" })
         }
      }
   }

   public async addVideo(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const {token, nome, descricao, url } = req.body

         const result = await VideosBusiness.addVideo(
            token,
            nome,
            descricao,   
            url
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao adicionar video" })
         }
      }
   }


   public async editVideo(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const {token, id, nome, descricao, url } = req.body

         const result = await VideosBusiness.editVideo(
            token,
            id,
            nome,
            descricao,   
            url
         );
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao editar video" })
         }
      }
   }

   public async deleteVideo(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const  id  = req.query.id
         const { token } = req.body

         const result = await VideosBusiness.deleteVideo(
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

export default new VideosController()