import mongoose, { Schema, model, Document } from "mongoose";

export interface IPurchasedProducts {
  po: any;
  purchaseOrderNumber: number;
  productId: any;
  quantity: number;
  mrp: number;
  unit: string;
  price: number;
  discount: number;
  tax: number;
  total: number;
}
const purchasedProductSchema: Schema = new Schema<IPurchasedProducts>(
  {
    po: { type: Schema.Types.ObjectId, required: true, ref: "purchases" },
    purchaseOrderNumber: { type: Number, required: true },
    productId: { type: Schema.Types.ObjectId, required: true, ref: "products" },
    quantity: { type: Number, required: true },
    mrp: { type: Number, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    unit: { type: String, required: true },
    tax: { type: Number, required: true },
    total: { type: Number, required: true },
  },
  {
    versionKey: false,
    autoIndex: false,
    autoCreate: false,
  }
);
const Purchase = model<IPurchasedProducts>(
  "purchasedProducts",
  purchasedProductSchema
);
export default Purchase;
