import { Schema, model } from "mongoose";
import PurchasedProducts from "../../purchasedProducts/model/purchasedProducts";

export interface IPurchase {
  postedBy: any;
  companyName: Schema.Types.ObjectId | any;
  purchaseOrderNumber: string;
  address: string;
  paymentMode: string;
  paymentStatus: string;
  completed: boolean;
  status: string;
  orderStatus: string;
  totalTax: number;
  subTotal: number;
  description: string;
  totalDiscount: number;
  grandTotal: number;
  date: Date;
  createdAt: string;
}
const purchaseSchema: Schema = new Schema<IPurchase>(
  {
    postedBy: {
      type: Schema.Types.ObjectId,
      required: false,
      ref: "users",
      select: false,
    },
    companyName: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "vendors",
    },
    purchaseOrderNumber: {
      type: String,
      required: true,
      unique: true,
      index: true,
      
    },

    address: { type: String ,required: true },
    paymentMode: { type: String ,required: true },
    status: { type: String ,required: false },
    orderStatus: { type: String ,required: false,default:null },
    paymentStatus: { type: String ,required: true },
    totalTax: { type: Number, required: false },
    totalDiscount: { type: Number, required: false },
    subTotal: { type: Number, required: false },
    grandTotal: { type: Number, required: false },
    description: { type: String, required: false },
    completed: {
      type: Boolean,
      default: false,
    },
    date: { type: Date, default: Date.now() },
    createdAt: { type: String, default: Date.now().toString() },
  },
  {
    versionKey: false,
  }
);
const Purchase = model<IPurchase>("purchases", purchaseSchema);
export default Purchase;

