"use strict";
import product, { IProduct } from "../model/product";
import brands, { IBrand } from "../../brand/model/brands";
import category, { ICategory } from "../../category/model/category";

//TODO : import bulk document
//TODO : csv to json
export async function addProduct(data: IProduct): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      data.brand = await brands.findOne({ brand: data.brand },{_id:1});
      data.category=await category.findOne({},{_id:1})
      resolve(await product.create(data));
    } catch (error) {
      reject(error);
    }
  });
}
export async function getAllProduct(): Promise<IProduct[]> {
  return await product
    .find(
      {},
      {
        id: 1,
        productName: 1,
        sku: 1,
        category: 1,
        brand: 1,
        price: 1,
        quantity: 1,
      }
    )
    .populate({ path: "brand" })
    .populate({ path: "category" });
}
export async function editProductById(id: any, body: IProduct): Promise<any> {
  return await product.findByIdAndUpdate({ id }, { body });
}
export async function deleteAProduct(id: any): Promise<any> {
  return await product.deleteOne({ id });
}
export async function getAProduct(id: any): Promise<any> {
  return await product
    .findOne({ id })
    .populate({ path: "brand" })
    .populate({ path: "category" });
}
export async function importBulkProduct(data: IProduct[]) {
  return await product.insertMany(data);
}
