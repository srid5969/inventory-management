import { Schema, model } from "mongoose";

export interface ISalesProduct {
  salesOrder: any;
  product: any;
  quantity: number;
  mrp: number;
  unit: string;
  price: number;
  discount: number;
  discountPrice: number;
  tax: number;
  taxPrice: number;
  total: number;
}
const salesProductSchema: Schema = new Schema<ISalesProduct>(
  {
    salesOrder: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "sales",
    },
    product: { type: Schema.Types.ObjectId, required: true, ref: "products" },
    quantity: { type: Number, required: true },
    mrp: { type: Number, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    unit: { type: String, required: true },
    tax: { type: Number, required: true },
    total: { type: Number, required: false },
  },
  {
    versionKey: false,
    // autoIndex: false,
    // autoCreate: false,
  }
);
const SalesProducts = model<ISalesProduct>(
  "salesProducts",
  salesProductSchema
);
export default SalesProducts;
