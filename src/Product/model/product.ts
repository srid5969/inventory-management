import mongoose, { Schema, model, Document } from "mongoose";
export interface IProduct extends Document {
  id: number;
  productName: string;
  category: any;
  brand: any;
  uniqueId: string;
  sku: any;
  description: string;
  status: string;
  productImage: any;
  barCode: any;
  createDate: any;
}
export const productSchema: Schema = new Schema<IProduct>(
  {
    productName: { type: String, required: true },
    category: { required: false, type: Schema.Types.Mixed, ref: "categories" },
    brand: { required: false, type: Schema.Types.Mixed, ref: "brands" },
    uniqueId: { type: String, required: true },
    sku: { type: String, required: true },
    description: { type: String },

    status: { type: Schema.Types.String },
    productImage: { type: Schema.Types.Mixed, required: false },
    barCode: { type: Schema.Types.Mixed, required: false },
    createDate: { type: Date, default: Date.now(), select: false },
  },
  {
    versionKey: false,
    autoIndex: false,
    autoCreate: false,
  }
);
productSchema.statics.findAllMethod = async function findAllMethod(): Promise<
  IProduct[]
> {
  return await mongoose.model("products").find();
};
productSchema.methods.saveProductMethod = async (
  data: IProduct
): Promise<IProduct> => {
  return await Product.create(data);
};

const Product = model<IProduct>("products", productSchema);

export default Product;
