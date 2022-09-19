import BaseDataBase from "./BaseDatabase";

export class NoticiasDatabase extends BaseDataBase {

   protected tableName: string = "pcgarage_galerias";

   
   public async getNoticias(): Promise<void | any> {
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

   public async editNoticias(
      id: String,
      titulo: String,
      descricao: String,
      imagem: String,
      data: String,
      fonte: String
        
     ): Promise<void | any> {
      try {
         let query = `UPDATE \`${this.tableName}\` 
         SET \`titulo\`="${titulo}",
          \`descricao\`="${descricao}", 
          \`imagem\`="${imagem}", 
          \`data\`="${data}", 
          \`fonte\`="${fonte}" 
           WHERE \`id\`="${id}";`
  
         const result = await BaseDataBase.connection.raw(
           query
         );
  
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message)
         }
      }
   }
  
 
  

   public async addNoticias(
      id: String,
      titulo: String,
      descricao: String,
      imagem: String,
      data: String,
      fonte: String
   ): Promise<void> {
      try {

         await BaseDataBase.connection.raw(`
            INSERT INTO ${this.tableName} (id, titulo, descricao, imagem, data, fonte)
            VALUES (
            '${id}', 
            '${titulo}', 
            '${descricao}',
            '${imagem}',
            '${data}',
            '${fonte}'
            )`
         );
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message) 
         }
         
      }
   }

   public async deleteNoticias(
      id: String
        
     ): Promise<void | any> {
      try {
         
         let query = `DELETE FROM \`${this.tableName}\` WHERE \`id\`="${id}";`
      
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