import { GalleriesDatabase } from "../data/GalleriesDatabase";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

export class GalleriesBusiness {

   constructor(
      private idGenerator: IdGenerator,
      private galleriesDatabase: GalleriesDatabase,
      private tokenGenerator: TokenGenerator
   ) {

   }
   public async galleries(
      token:string
   ) {
      try {
         const tokenValidation: any = this.tokenGenerator.verify(token)

         const info = await this.galleriesDatabase.getGalleries();

         if (!info || info.length === 0) {

            throw new Error("BD - Erro ao retornar galerias");
         }

         return (info);
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao retornar galerias")
         }
      }
   }

   public async editGallerie(
      token:string,
      id: String,
      nome: String,
      descricao: String,
      imagem: String
   ) {
      try {
         const tokenValidation: any = this.tokenGenerator.verify(token)

         if (!id ) {
            throw new Error("Business - Necessário informar um ID válido");
         }

         if (!nome || !descricao || !imagem ) {
            throw new Error("Business - Necessário informar todos atributos para edição");
         }
         
        
            const Gallerie = await this.galleriesDatabase.editGallerie(
               id,
               nome,
               descricao,
               imagem
            );
         

         return ("Business - Galeria editada com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao editar galeria")
         }
      }
   }

   public async addGallerie(
      token:string,
      nome: String,
      descricao: String,
      imagem: String
   ) {
      try {
         const tokenValidation: any = this.tokenGenerator.verify(token)

         if ( !nome || !descricao || !imagem ) {
            throw new Error("Business - Necessário informar todos requisitos");
         }

         const id = this.idGenerator.generate();
         
          await this.galleriesDatabase.addGallerie(
            id,
            nome,
            descricao,
            imagem
         );

         return ("Business - Galeria adicionada com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao adicionar galeria")
         }
      }
   }

   public async deleteGallerie(
      token:string,
      id: String
   ) {
      try {
         const tokenValidation: any = this.tokenGenerator.verify(token)

         if ( !id ) {
            throw new Error("Business - Necessário informar idpara deletar galeria");
         }

          await this.galleriesDatabase.deleteGallerie(
            id
         );

         return ("Business - Galeria excluida com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao excluir galeria")
         }
      }
   }


   
}
export default new GalleriesBusiness(
   new IdGenerator(),
   new GalleriesDatabase(),
   new TokenGenerator()
   
)