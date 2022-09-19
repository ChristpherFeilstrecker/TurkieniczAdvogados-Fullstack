import { HighlightsDatabase } from "../data/HighlightsDatabase";
import { TokenGenerator } from "../services/tokenGenerator";

export class HighlightsBusiness {

   constructor(
      private highlightsDatabase: HighlightsDatabase,
      private tokenGenerator: TokenGenerator
   ) {

   }
   public async highlights(

   ) {
      try {

         const highlights = await this.highlightsDatabase.getHighlights();

         if (!highlights || highlights.length === 0) {

            throw new Error("BD - Erro ao retornar destaques");
         }

         return (highlights);
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao retornar destaques")
         }
      }
   }

   public async editHighlights(
      token:string,
      id: String,
      descricao: String,
      imagem: String
   ) {
      try {
         const tokenValidation: any = this.tokenGenerator.verify(token)

            const highlights = await this.highlightsDatabase.editHighlight(
               id,
               descricao,
               imagem
            );
         
         return ("Business - Destaque editado com sucesso");
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Business - Erro ao editar destaque")
         }
      }
   }


   
}
export default new HighlightsBusiness(
   new HighlightsDatabase(),
   new TokenGenerator()
)