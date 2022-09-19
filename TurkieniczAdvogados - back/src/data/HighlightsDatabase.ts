import idGenerator from "../services/idGenerator";
import BaseDataBase from "./BaseDatabase";

export class HighlightsDatabase extends BaseDataBase {

   protected tableName: string = "pcgarage_destaque";

   public async getHighlights(): Promise<void | any> {
      try {
         const result = await BaseDataBase.connection.raw(`
         SELECT * from ${this.tableName};
         `);

         return result[0]
         
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message)
         }
      }
   }

   public async getHighlightById(
    id: String
   ): Promise<void | any> {
    try {
       const result = await BaseDataBase.connection.raw(`
       SELECT * from "pcgarage_destaque";
       `);

       return result[0]
       
    } catch (error) {
       if (error instanceof Error) {
          throw new Error(error.message)
       }
    }
 }

 public async editHighlight(
   id: String,
   descricao: String,
   imagem: String
   
  ): Promise<void | any> {
   try {
  let query = `UPDATE \`pcgarage_destaque\` SET \`descricao\`="${descricao}", \`imagem\`="${imagem}" WHERE \`id\`="${id}";`

      const result = await BaseDataBase.connection.raw(
        query
      );

   } catch (error) {

      if (error instanceof Error) {
         throw new Error(error.message)
      }
   }
}

 

 


}