import mongoose, { Schema, model } from "mongoose";

export interface IBrand {
  _id: any;
  id: object;
  brandName: string;
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
    brandName: { required: false, type: String },
    brandImage: { required: false, type: String },
    brandDescription: { required: false, type: String },
    createDate: { type: Date, default: Date.now(), select: false },
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
