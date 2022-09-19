import express from "express";
import { InformationController } from "../controller/InformationController";
import { HighlightsController } from "../controller/HighlightsController";
import { NoticiasController } from "../controller/NoticiasController";
import { AreasController } from "../controller/AreasController";
import { VideosController } from "../controller/VideosController";
import { AdminController } from "../controller/AdminController";
import multer from 'multer';
import { storage } from '../multerConfig';
import path from 'path';
import { body, validationResult } from "express-validator";
import bodyParser from "body-parser";

const app = express();


export const AdvRouter = express.Router();
AdvRouter.use(bodyParser.json())
const upload = multer({ storage: storage }) ;

const informationController = new InformationController();
const highlightsController = new HighlightsController();
const noticiasController = new NoticiasController();
const areasController = new AreasController();
const videosController = new VideosController();
const adminController = new AdminController();


//teste rota principal
AdvRouter.get("/", 
 (a,b) => {
     b.send('<p>teste app adv</p>');
 }
 ); // teste Back

 AdvRouter.get("/admin",[
    body("token").isString(),
 ], adminController.admin);//Retorna email e senha administrador 

 AdvRouter.post("/login",[
    body("nome").isString(),
    body("password").isString()
 ], adminController.login); // login - retorna token 

 AdvRouter.post("/addadmin",[
    body("token").isString(),
    body("nome").isString(),
    body("password").isString()
 ], adminController.addadmin); //cria admin 

 AdvRouter.delete("/deletaradmin",[
    body("token").isString()
 ], adminController.deleteAdmin); //deleta admin

 

 AdvRouter.get("/destaques", highlightsController.highlights);//Retorna destaques 

 AdvRouter.put("/editardestaque",[
   body("token").isString(),
   body("id").isString(),
   body("descricao").isString(),
   body("imagem").isString()
], highlightsController.editHighlights); //Editar destaque 


AdvRouter.get("/informacoes", informationController.information);//Retorna informacoes

AdvRouter.put("/editarinformacoes",[
   body("token").isString(),
   body("id").isString(),
   body("telefone").isString(),
   body("whats").isString(),
   body("email").isString(),
   body("endereco").isString(),
   body("bairro").isString(),
   body("cidade").isString(),
   body("estadoPaisCep").isString(),
   body("facebook").isString(),
   body("instagram").isString(),
   body("twiter").isString()
], informationController.editInformation); //Editar informações 


AdvRouter.get("/noticias", noticiasController.noticias);//Retorna noticias

AdvRouter.post("/addnoticias",[
   body("token").isString(),
   body("titulo").isString(),
   body("descricao").isString(),
   body("imagem").isString(),
   body("data").isString(),
   body("fonte").isString()
], noticiasController.addNoticias); //Adicionar noticias

AdvRouter.put("/editarnoticias",[
   body("token").isString(),
   body("id").isString(),
   body("titulo").isString(),
   body("descricao").isString(),
   body("imagem").isString(),
   body("data").isString(),
   body("fonte").isString()
], noticiasController.editNoticias); //Editar noticias 

AdvRouter.delete("/deletarnoticias",[
   body("token").isString(),
   body("id").isString()
], noticiasController.deleteNoticias); //Deletar noticias


AdvRouter.get("/areas", areasController.areas);//Retorna areas  

AdvRouter.put("/editararea",[
   body("token").isString(),
   body("id").isString(),
   body("nome").isString(),
   body("descricao").isString(),
   body("imagem").isString(),
], areasController.editAreas); //Editar area


AdvRouter.get("/videos", videosController.videos);//Retorna videos 

AdvRouter.post("/addvideo",[
   body("token").isString(),
   body("nome").isString(),
   body("descricao").isString(),
   body("url").isString()
], videosController.addVideo); //Adicionar video

AdvRouter.put("/editarvideo",[
   body("token").isString(),
   body("id").isString(),
   body("nome").isString(),
   body("descricao").isString(),
   body("url").isString()
], videosController.editVideo); // Editar video

AdvRouter.delete("/deletarvideo",[
   body("token").isString(),
   body("id").isString()
], videosController.deleteVideo); // Deletar video


AdvRouter.post("/upload", upload.single('image'), async (req,res)=>{
    if(req.file){
        return res.json(req.file?.filename)
    }
}); // upload de imagens
