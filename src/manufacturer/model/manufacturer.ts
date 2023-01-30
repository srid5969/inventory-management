import mongoose, { Schema, model } from "mongoose";

export interface IManufacturer {
  id: any;
  companyName: string;
  location: string;
  phone: number;
  email: string;
  website: string;
  establishment: number;
  brand: string[];
  createDate: any;
}
export const manufacturerSchema: Schema = new Schema<IManufacturer>(
  {
    companyName: { required: false, type: String,unique:true },
    location: { required: false, type: String },
    phone: { required: false, type: Number ,unique:true},
    email: { required: false, type: String ,unique:true},
    website: { required: false, type: String ,unique:true},
    establishment: { required: false, type: Number },
    brand: [{ required: false, type: Schema.Types.ObjectId, ref: "brands" }],
    createDate: { type: Date, default: Date.now() },
  },
  {
    versionKey: false,
   
  }
);

const Manufacturer = model<IManufacturer>("manufacturers", manufacturerSchema);

export default Manufacturer;
