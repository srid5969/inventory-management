import mongoose, { Schema, model, Document } from "mongoose";
import { ObjectId } from "bson";

export interface ICustomer {
  id: any;
  name: string;
  email: string;
  phone: number;
  type: string;
  GSTno: string;
  postedBy: any | ObjectId;
}
const customersSchema: Schema = new Schema<ICustomer>(
  {
    name: { type: String },
    email: { type: String },
    phone: { type: Number },
    type: { type: String },
    GSTno: { type: String },
    postedBy: { type: ObjectId, ref: "users" },
  },
  {
    versionKey: false,
    autoIndex: false,
    autoCreate: false,
  }
);
const Customer = model<ICustomer>("customers", customersSchema);
export default Customer;
