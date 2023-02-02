import salesProduct, { ISalesProduct } from "../model/salesProduct";
import purchasedProducts from "../../purchasedProducts/model/purchasedProducts";
import Product from "../../Product/model/product";
import Sales from "../../sales/model/sales";

export async function addSalesProduct(data: ISalesProduct, salesOrder: any) {
  return new Promise<any>(async (resolve, reject) => {
    
    var discount = data.discount / 100;
    discount = data.price * discount;
    var price = data.price - discount;
    var tax = data.tax / 100;
    tax = data.price * tax;
    price = price + tax;
    var total = price * data.quantity;
    data.total = total;

    data.salesOrder = salesOrder;
    await Product.updateOne(
      { productName: data.product },
      { $inc: { stock: -data.quantity } }
    );
    data.product = await Product.findOne({ productName: data.product });
    
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
