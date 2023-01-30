import { Schema, model } from "mongoose";

export interface IVendor {
  id: any;
  vendorName: string;
  companyName: string;
  vendorAddress: string;
  vendorEmail: string;
  vendorContactNumber: number;
  website: string;
  GSTIN: string;
  contactPersonName: string;
  emailAddress: string;
  workContactNumber: number;
  personalContactNumber: number;
  designation: string;
}
const vendorSchema: Schema = new Schema<IVendor>(
  {
    companyName: { type: String, required: true, unique: true },
    vendorAddress: { type: String, required: true },
    vendorName: { type: String, required: false },
    vendorEmail: { type: String, required: true, unique: true },
    vendorContactNumber: { type: Number, required: true, unique: true },
    website: { type: String, required: true, unique: true },
    GSTIN: { type: String, required: true, unique: true },
    contactPersonName: { type: String, required: true },
    emailAddress: {
      type: String,
      required: [true, "Please Enter Email Address"],
      unique: true,
    },
    workContactNumber: { type: Number, required: true, unique: true },
    personalContactNumber: { type: Number, required: true, unique: true },
    designation: { type: String, required: true },
  },
  {
    versionKey: false,
    // autoIndex: false,
    // autoCreate: false,
  }
);

const Vendors = model<IVendor>("vendors", vendorSchema);
export default Vendors;
