import BaseDataBase from "./BaseDatabase";

export class AreasDatabase extends BaseDataBase {

   protected tableName: string = "pcgarage_produtos";

   
   public async getAreas(): Promise<void | any> {
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

   public async editAreas(
      id: String,
      nome: String,
      descricao: String,
      imagem: String
     ): Promise<void | any> {
      try {
         let query = `UPDATE \`${this.tableName}\` SET \`nome\`="${nome}", \`descricao\`="${descricao}", \`imagem\`="${imagem}" WHERE \`id\`="${id}";`
  
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