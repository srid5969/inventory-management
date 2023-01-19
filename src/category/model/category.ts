import mongoose, { Schema, model } from "mongoose";

export interface ICategory {
  id: object;
  categoryName: object;
  categoryCode: string;
  description: string;
  createDate: any;
}
export const categorySchema: Schema = new Schema<ICategory>(
  {
   
    description: {
      type: String,
    },
    categoryName: {
      type: String,
    },
    categoryCode: {
      type: String,
    }, 
    createDate: { type: Date, default: Date.now() },
  },
  {
    versionKey: false,
    autoIndex: false,
    autoCreate: false
    // _id: false,
  }
);

const Category = model<ICategory>("categories", categorySchema);

export default Category;
