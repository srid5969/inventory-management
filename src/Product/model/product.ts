import mongoose, { Schema, model, Document } from "mongoose";
export interface IProduct extends Document {
  id: number;
  productName: string;
  category: string;
  brand: string;
  uniqueId: string;
  sku: any;
  quantity: number;
  description: string;
  tax: any;
  discountType: any;
  price: number;
  status: string;
  productImage: any;
  barCode: any;
}
export const productSchema: Schema = new Schema<IProduct>(
  {
    id: { required: false, unique: true, index: true },
    productName: { type: String },
    category: { type: String },
    brand: { type: String },
    uniqueId: { type: String },
    sku: { type: String },
    quantity: { type: Number },
    description: { type: String },
    tax: { type: Schema.Types.Mixed },
    discountType: { type: Schema.Types.Mixed },
    price: { type: Number },
    status: { type: Schema.Types.String },
    productImage: {},
    barCode: { type: mongoose.Types.ObjectId },
  },
  {
    versionKey: false,
    autoIndex: false,
    autoCreate: false,
  }
);
productSchema.statics.findAllMethod =
  async function findAllMethod(): Promise<IProduct[]> {
    return await mongoose.model("products").find();
  };
productSchema.methods.saveProductMethod = async (
  data: IProduct
): Promise<IProduct> => {
  return await Product.create(data);
};

const Product = model<IProduct>("products", productSchema);

// data.findAllMethod()
export default Product;
