import salesProduct, { ISalesProduct } from "../model/salesProduct";
import purchasedProducts from "../../purchasedProducts/model/purchasedProducts";
import Product from "../../Product/model/product";

export async function addSalesProduct(data: ISalesProduct, salesOrder: any) {
  return new Promise<any>(async (resolve, reject) => {
    data.salesOrder = salesOrder;
    await Product.updateOne(
      { productName: data.product },
      { $inc: { stock: -data.quantity } }
    );
    data.product = await Product.findOne({ productName: data.product });
    console.log(data);
    
    const Data = await salesProduct.create(data);
    if (Data._id) {
      return resolve(Data);
    }
    return reject(Data);
  });
}
export async function salesProducts() {
  //listing all the sales products which are all added in purchase
  const data = await purchasedProducts.find(
    {},
    { product: 1, quantity: 1, mrp: 1 }
  );
}
