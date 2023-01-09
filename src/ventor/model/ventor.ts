import { Schema, model } from "mongoose";

export interface IVendor {
  id: any;
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
    companyName: { type: String, required: true },
    vendorAddress: { type: String, required: true },
    vendorEmail: { type: String, required: true },
    vendorContactNumber: { type: Number, required: true },
    website: { type: String, required: true },
    GSTIN: { type: String, required: true },
    contactPersonName: { type: String, required: true },
    emailAddress: { type: String, required: [true,"Please Enter Email Address"] },
    workContactNumber: { type: Number, required: true },
    personalContactNumber: { type: Number, required: true },
    designation: { type: String, required: true },
  },
  {
    versionKey: false,
    autoIndex: false,
    autoCreate: false,
  }
);

const Vendors = model<IVendor>("vendors", vendorSchema);
export default Vendors;
