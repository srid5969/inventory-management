import mongoose, { Schema, model } from "mongoose";

export interface IBrand {
  id: object;
  company: any;
  brand: string;
  brandImage: string;
  brandDescription: string;
  createDate: any;
}
export const brandSchema: Schema = new Schema<IBrand>(
  {
    id: {
      type: Schema.Types.ObjectId,
      unique: true,
      index: true,
      auto: true,
      default: mongoose.Types.ObjectId,
    },
    company: {
      required: false,
      type: Schema.Types.ObjectId,
      ref: "manufacturers",
    },
    brand: { required: false, type: String },
    createDate: { type: Date, default: Date.now() },
  },
  {
    versionKey: false,
    autoIndex: false,
    autoCreate: false,
    // _id: false,
  }
);

const Brand = model<IBrand>("brands", brandSchema);

export default Brand;
