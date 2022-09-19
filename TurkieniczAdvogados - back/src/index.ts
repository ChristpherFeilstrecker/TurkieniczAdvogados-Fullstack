import cors from "cors";
import { AddressInfo } from "net";
import express from "express";
import { AdvRouter } from "./routes/AdvRouter";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST,DELETE");
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
  app.use(cors());
  next();
})

const path = require('path')

app.use(express.json());

// libera acesso aos arquivos
app.use("/files", express.static(`src/uploads`));

app.use("/app",AdvRouter);



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
})
//http://localhost:
