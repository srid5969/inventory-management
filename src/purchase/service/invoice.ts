import product from "../../Product/model/product";
import Purchase from "../model/purchase";
import PurchasedProducts from "../../purchasedProducts/model/purchasedProducts";

export async function getInvoiceForInward(po: any) {
  let Data: any = {};
  let data: any = await Purchase.findOne({ _id: po });
  let data1 = await PurchasedProducts.find({ po }).populate({path:"products"});
  Data.data = data;
  Data.productsDetails = data1;
  console.log(Data);
  return await Data;
}
