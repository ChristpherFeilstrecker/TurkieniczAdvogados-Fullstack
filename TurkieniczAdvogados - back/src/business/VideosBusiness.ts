import { VideosDatabase } from "../data/VideosDatabase";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

export class VideosBusiness {

   constructor(
      private idGenerator: IdGenerator,
      private videosDatabase: VideosDatabase,
      private tokenGenerator: TokenGenerator
   ) {

   }
   public async videos(

   ) {
      try {

         const info = await this.videosDatabase.getVideos();

         if (!info || info.length === 0) {

            throw new Error("BD - Erro ao retornar videos");
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

   public async addVideo(
      token:string,
      nome: String,
      descricao: String,
      url: String
   ) {
      try {
         const tokenValidation: any = this.tokenGenerator.verify(token)

         if ( !nome || !descricao || !url ) {
            throw new Error("Business - Necessário informar todos requisitos");
         }

         const id = this.idGenerator.generate();
         
          await this.videosDatabase.addVideo(
            id,
            nome,
            descricao,
            url
         );

         return ("Business - |Video adicionado com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao adicionar galeria")
         }
      }
   }



   public async editVideo(
      token:string,
      id: String,
      nome: String,
      descricao: String,
      url: String
   ) {
      try {
         const tokenValidation: any = this.tokenGenerator.verify(token)

         if (!id ) {
            throw new Error("Business - Necessário informar um ID válido");
         }

         if (!nome && !descricao && !url ) {
            throw new Error("Business - Necessário informar no mínimo um atributo para editar");
         }
         
         
            const Gallerie = await this.videosDatabase.editVideo(
               id,
               nome,
               descricao,
               url
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

   public async deleteVideo(
      token:string,
      id: String
   ) {
      try {
         const tokenValidation: any = this.tokenGenerator.verify(token)

         if (!id) {
            throw new Error("Business - Necessário informar id para deletar produto");
         }

         await this.videosDatabase.deleteVideo(
            id
         );

         return ("Business - Produto deletado com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao deletar produto")
         }
      }
   }  

}
export default new VideosBusiness(
   new IdGenerator(),
   new VideosDatabase(),
   new TokenGenerator()
)