import { Request, Response } from "express";
import AreasBusiness from "../business/AreasBusiness";
import { body, validationResult } from "express-validator";

export class AreasController {

   public async areas(req: Request, res: Response) {
      try {

         const result = await AreasBusiness.areas();
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao coletar areas" })
         }
      }
   }

 
  public async editAreas(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const {token, id, nome, descricao, imagem } = req.body

         const result = await AreasBusiness.editAreas(
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
            res.send({ message: "Controller - Algo de errado ao editar area" })
         }
      }
   }

}

export default new AreasController()