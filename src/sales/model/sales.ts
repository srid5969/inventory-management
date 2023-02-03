import { ObjectId } from "bson";
import { Schema, model } from "mongoose";
// Customer Name, Sale Date, Supplier Name, Product Name, Quantity,
//  Payment status, Product price, Unit, Total and Description.
export interface ISales {
  customer: any; //customers module
  saleDate: string;
  supplier: any; //vendor id
  paymentMode: string;
  paymentStatus: string;
  status: string;
  orderStatus: string;
  address: string;
  totalTax: string;
  subTotal: string;
  totalDiscount: string;
  grandTotal: number;
  description: string;
  postedBy: any | ObjectId;
  completed: boolean;
  date: Date;
  createdAt: string;
}
const salesSchema: Schema = new Schema<ISales>(
  {
    status: { type: String, required: false },
    orderStatus: { type: String, required: false },
    customer: { type: Schema.Types.ObjectId, ref: "customers", required: true },
    saleDate: { type: String, required: true },
    supplier: { type: Schema.Types.ObjectId, ref: "vendors", required: true },
    paymentMode: { type: String, required: true },
    paymentStatus: { type: String, required: true },
    address: { type: String, required: true },
    totalTax: { type: String, required: false },
    totalDiscount: { type: String, required: false },
    grandTotal: { type: Number, required: false },
    description: { type: String, required: false, default: "default value" },
    completed: {
      type: Boolean,
      default: false,
    },
    postedBy: { type: ObjectId, ref: "users" },
    date: { type: Date, default: Date.now() },
    createdAt: { type: String, default: Date.now().toString() },
  },
  {
    versionKey: false,
    // autoIndex: false,
    // autoCreate: false,
  }
);
const Sales = model<ISales>("sales", salesSchema);
export default Sales;
