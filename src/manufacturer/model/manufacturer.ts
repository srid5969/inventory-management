import mongoose, { Schema, model } from "mongoose";

export interface IManufacturer {
  id: object;
  companyName: string;
  location: string;
  phone: number;
  email: string;
  website: string;
  establishment: number;
  brand: string;
  createDate: any;
}
export const manufacturerSchema: Schema = new Schema<IManufacturer>(
  {
    id: {
      type: Schema.Types.ObjectId,
      unique: true,
      index: true,
      auto: true,
      default: mongoose.Types.ObjectId,
    },
    companyName: { required: false, type: String },
    location: { required: false, type: String },
    phone: { required: false, type: Number },
    email: { required: false, type: String },
    website: { required: false, type: String },
    establishment: { required: false, type: Number },
    brand: [{ required: false, type: Schema.Types.ObjectId, ref: "brands" }],
    createDate: { type: Date, default: Date.now() },
  },
  {
    versionKey: false,
    autoIndex: false,
    autoCreate: false,
    // _id: false,
  }
);

const Manufacturer = model<IManufacturer>("manufacturers", manufacturerSchema);

export default Manufacturer;
