import mongoose, { Schema, model, Document } from "mongoose";
import { ObjectId } from "bson";

export interface ICustomer {
  id: any;
  name: string;
  email: string;
  phone: number;
  type: string;
  address: string;

  GSTno: string;
  postedBy: any | ObjectId;
}
const customersSchema: Schema = new Schema<ICustomer>(
  {
    name: { type: String ,unique:true},
    email: { type: String ,unique:true},
    phone: { type: Number ,unique:true},
    type: { type: String },
    GSTno: { type: String ,unique:true},
    address: { type: String },
    postedBy: { type: ObjectId, ref: "users" },
  },
  {
    versionKey: false,
   
  }
);
const Customer = model<ICustomer>("customers", customersSchema);
export default Customer;
