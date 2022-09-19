import { Request, Response } from "express";
import AdminBusiness from "../business/AdminBusiness";
import { body, validationResult } from "express-validator";

export class AdminController {

   public async admin(req: Request, res: Response) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const { token } = req.body

         const result = await AdminBusiness.admin(token);
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao retornar administrador" })
         }
      }
   }

    public async addadmin(req: Request, res: Response) {
      try {

         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const {token, nome, password } = req.body

         const result = await AdminBusiness.addadmin(
            nome,
            password,
            token
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

      public async login(req: Request, res: Response) {
      try {

         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const { nome, password } = req.body
         const result = await AdminBusiness.login(nome, password);
         res.status(200).send(result);
      } catch (error) {
         if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.send({ message: "controller - Algo deu errado ao logar" })
        }
      }
   }

   public async deleteAdmin(req: Request, res: Response) {
      try {

         const errors = validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
         }

         const  id  = req.query.id
         const {token} = req.body

         if(typeof id !== 'string'){
            res.send({ message: "Controller - Id deve ser uma string" })
         }
         
         const result = await AdminBusiness.deleteAdmin(
            token as string,
            id as string
         );
         
         res.status(200).send("result");
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Controller - Algo de errado ao deletar administrador" })
         }
      }
   }


}

export default new AdminController()