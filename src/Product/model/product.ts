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
    uniqueId: { type: String, required: false },
    sku: { type: String, required: false },
    description: { type: String , required: false },

    status: { type:String ,required: false},
    productImage: { type:String, required: false },
    barCode: { type: String, required: false },
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
