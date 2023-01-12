"use strict";
import product, { IProduct } from "../model/product";
import brands, { IBrand } from "../../brand/model/brands";
import category, { ICategory } from "../../category/model/category";

//TODO : import bulk document
//TODO : csv to json
export async function addProduct(data: IProduct): Promise<any> {
  try {
    data.brand = await (
      await brands.findOne({ brand: data.brand }, { _id: 1 })
    )._id;
    data.category = await (await category.findOne({}, { _id: 1 }))._id;
    const data1 = await new product(data);
    const Data: IProduct = await data1.save();
    return await Data;
  } catch (error) {
    console.error();

    return error;
  }
}
export async function getAllProduct(): Promise<IProduct[]> {
  return await product
    .find(
      {},
      {
        _id: 0,
        id: "$_id",
        productName: 1,
        sku: 1,
        category: 1,
        brand: 1,
        price: 1,
        description:1,
        status:1,
        uniqueid:"$uniqueId",
        productImage:1,
        quantity: 1,
      }
    )
    .populate({ path: "brand", transform: (doc) => doc.brandName })
    .populate({ path: "category", transform: (doc) => doc.categoryName });
}
export async function editProductById(id: any, body: IProduct): Promise<any> {
  return await product.findByIdAndUpdate({ id }, { body });
}
export async function deleteAProduct(id: any): Promise<any> {
  return await product.deleteOne({ id });
}
export async function getAProduct(_id: any): Promise<any> {
  return await product
    .findOne({ _id })
    .populate({ path: "brand", transform: (doc) => doc.brandName })
    .populate({ path: "category", transform: (doc) => doc.categoryName });
}
export async function importBulkProduct(data: IProduct[]) {
  return await product.insertMany(data);
}
