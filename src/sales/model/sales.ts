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
  status:string
  orderStatus:string
  address: string;
  totalTax: string;
  subTotal: string;
  totalDiscount: string;
  grandTotal: number;
  description: string;
  postedBy: any | ObjectId;
  completed: boolean;
  date:Date
  createdAt:string
}
const salesSchema: Schema = new Schema<ISales>(
  {
    status: { type: String },
    orderStatus: { type: String },
    customer: { type: Schema.Types.ObjectId, ref: "customers" },
    saleDate: { type: String },
    supplier: { type: Schema.Types.ObjectId, ref: "vendors" },
    paymentMode: { type: String },
    paymentStatus: { type: String },
    address: { type: String },
    totalTax: { type: String, required: false },
    totalDiscount: { type: String, required: false },
    grandTotal: { type: Number, required: false },
    description: { type: String, required: false ,default:"default value"},
    completed: {
      type: Boolean,
      default: false,
    },
    postedBy: { type: ObjectId, ref: "users" },
    date:{type:Date,default:Date.now()},
    createdAt:{type:String,default:Date.now().toString()}
  },
  {
    versionKey: false,
    // autoIndex: false,
    // autoCreate: false,
  }
);
const Sales = model<ISales>("sales", salesSchema);
export default Sales;
