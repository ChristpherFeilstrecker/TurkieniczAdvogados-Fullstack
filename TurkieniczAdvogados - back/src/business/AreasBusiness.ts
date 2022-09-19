import { AreasDatabase } from "../data/AreasDataBase";
import idGenerator, { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

export class AreasBusiness {

   constructor(
      private idGenerator: IdGenerator,
      private areasDatabase: AreasDatabase,
      private tokenGenerator: TokenGenerator
   ) {

   }
   public async areas(

   ) {
      try {

         const info = await this.areasDatabase.getAreas();

         if (!info || info.length === 0) {

            throw new Error("BD - Erro ao retornar Areas");
         }

         return (info);
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao retornar Areas")
         }
      }
   }

 public async editAreas(
      token:string,
      id: String,
      nome: String,
      descricao: String,
      imagem: String
   ) {
      try {
         const tokenValidation: any = this.tokenGenerator.verify(token)

         const highlights = await this.areasDatabase.editAreas(
            id,
            nome,
            descricao,
            imagem
         );

         return ("Business - Area editada com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao editar area")
         }
      }
   }

}
export default new AreasBusiness(
   new IdGenerator(),
   new AreasDatabase(),
   new TokenGenerator()
)