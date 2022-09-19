import { NoticiasDatabase } from "../data/NoticiasDatabase";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

export class NoticiasBusiness {

   constructor(
      private idGenerator: IdGenerator,
      private noticiasDatabase: NoticiasDatabase,
      private tokenGenerator: TokenGenerator
   ) {

   }
   public async noticias(

   ) {
      try {

         const info = await this.noticiasDatabase.getNoticias();

         if (!info || info.length === 0) {

            throw new Error("BD - Erro ao retornar noticias");
         }

         return (info);
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao retornar noticias")
         }
      }
   }

   public async editNoticias(
      token:string,
      id: String,
      titulo: String,
      descricao: String,
      imagem: String,
      data: String,
      fonte: String
   ) {
      try {
         const tokenValidation: any = this.tokenGenerator.verify(token)        
        
            const Gallerie = await this.noticiasDatabase.editNoticias(
               id,
               titulo, 
               descricao, 
               imagem, 
               data, 
               fonte
            );
         

         return ("Business - Noticia editada com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao editar noticia")
         }
      }
   }

   public async addNoticias(
      token:string,
      titulo: String,
      descricao: String,
      imagem: String,
      data: String,
      fonte: String
   ) {
      try {
         const tokenValidation: any = this.tokenGenerator.verify(token)

         const id = this.idGenerator.generate();
         
          await this.noticiasDatabase.addNoticias(
            id,
            titulo, 
               descricao, 
               imagem, 
               data, 
               fonte
         );

         return ("Business - Noticia adicionada com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao adicionar noticia")
         }
      }
   }

   public async deleteNoticias(
      token:string,
      id: String
   ) {
      try {
         const tokenValidation: any = this.tokenGenerator.verify(token)


          await this.noticiasDatabase.deleteNoticias(
            id
         );

         return ("Business - Noticia excluida com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao excluir noticia")
         }
      }
   }


   
}
export default new NoticiasBusiness(
   new IdGenerator(),
   new NoticiasDatabase(),
   new TokenGenerator()
)