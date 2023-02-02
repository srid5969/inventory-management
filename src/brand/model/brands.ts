import mongoose, { Schema, model } from "mongoose";

export interface IBrand {
  id: object;
  brandName: string;
  brandImage: string;
  brandDescription: string;
  createDate: any;
}
export const brandSchema: Schema = new Schema<IBrand>(
  {
    brandName: {required: true , type: String,unique:true },
    brandImage: { required: false, type: String },
    brandDescription: { required: false, type: String },
    
    createDate: { type: Date, default: Date.now(), select: false },
  },
  {
    versionKey: false,
    // autoIndex: false,
    // autoCreate: false,
    // _id: false,
  }
);
const Brand = model<IBrand>("brands", brandSchema);
export default Brand;
