import { categoryList } from "../../data";
import { Category } from "../entities/category-entity";

export const createCategory = async (): Promise<void> => {
  try {
    await Category.collection.drop();
    console.log("Borradas categorys");
    const documents = categoryList.map((category) => new Category(category));
    for (let i = 0; i < documents.length; i++) {
      const document = documents[i];
      await document.save();
    }
    console.log("Creadas categorias correctamente");
  } catch (error) {
    console.error(error);
  }
};
