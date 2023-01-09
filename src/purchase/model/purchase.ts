import mongoose, { Schema, model, Document } from "mongoose";

export interface IPurchase {
  companyName: any;
  supplierName: any;
  purchaseOrderNumber: number;
  Address: string;
  buyerName: string;
  modeOfShipment: string;
  FOB: string;
  productName: string;
  Quantity: number;
  Unit: string;
  Total: number;
  Description: string;
}
const purchaseSchema: Schema = new Schema<IPurchase>(
  {
    companyName: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "manufacturers",
    },
    supplierName: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "vendors",
    },
    purchaseOrderNumber: { type: Number, required: true },
    Address: { type: String, required: true },
    buyerName: { type: String, required: false },
    modeOfShipment: {
      type: String,
    },
    FOB: {
      type: String,
      enum: {
        values: ["COD", "UPI", "Net Banking", ""],
      },
      required: [true, ""],
    },
    productName: { type: String, required: true },
    Quantity: { type: Number, required: true },
    Unit: { type: String, required: true },
    Total: { type: Number, required: true },
    Description: { type: String, required: false },
  },
  {
    versionKey: false,
    autoIndex: false,
    autoCreate: false,
  }
);
const Purchase = model<IPurchase>("purchases", purchaseSchema);
export default Purchase;
