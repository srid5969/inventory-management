import salesProduct, { ISalesProduct } from "../model/salesProduct";
import purchasedProducts from "../../purchasedProducts/model/purchasedProducts";
import Product from "../../Product/model/product";
import Sales from "../../sales/model/sales";
import trigger from "../../common/triggers/salesProductsCalculations/sales";


export async function addSalesProduct(data: ISalesProduct, salesOrder: any) {
  trigger.emit("salesProductCalculation",salesOrder)
  return new Promise<any>(async (resolve, reject) => {
    var discount = data.discount / 100; //10
    discount = data.price * discount; //0.1*1000=100

    var price = data.price - discount; //1000-100=900
    var tax = data.tax / 100; //15/100=.15
    tax = price * tax; //900*.15

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
