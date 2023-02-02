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
    companyName: { required: true , type: String,unique:true },
    location: { required: true , type: String },
    phone: { required: true , type: Number ,unique:true},
    email: { required: true , type: String ,unique:true},
    website: { required: true , type: String ,unique:true},
    establishment: { required: true , type: Number },
    brand: [{ required: true , type: Schema.Types.ObjectId, ref: "brands" }],
    createDate: { type: Date, default: Date.now() },
  },
  {
    versionKey: false,
   
  }
);

const Manufacturer = model<IManufacturer>("manufacturers", manufacturerSchema);

export default Manufacturer;
