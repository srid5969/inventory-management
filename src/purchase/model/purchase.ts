import mongoose, { Schema, model, Document } from "mongoose";

export interface IPurchase {
  postedBy: any;
  companyName: Schema.Types.ObjectId|any;
  purchaseOrderNumber: string;
  address: string;
  paymentMode: string;
  paymentStatus: string;
  completed: boolean;
  products: any;
  totalTax: string;
  totalDiscount: string;
  grandTotal: number;
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
    purchaseOrderNumber: { type: String, required: true, unique: true,index:true },
    products: [
      {
        type: Schema.Types.ObjectId,
        required: false,
        ref: "purchasedProducts",
      },
    ],
    address: { type: String },
    paymentMode: { type: String },
    paymentStatus: { type: String },
    totalTax: { type: String, required: false },
    totalDiscount: { type: String, required: false },
    grandTotal: { type: Number, required: false },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
   
  }
);
const Purchase = model<IPurchase>("purchases", purchaseSchema);
export default Purchase;
