import product from "../../Product/model/product";
import purchase from "../../purchase/model/purchase";
import purchasedProducts from "../model/purchasedProducts";
import trigger from "../../common/triggers/purchaseProductsCalculation/products";


export async function addProducts(data: any, po: any) {
  trigger.emit("purchaseProductCalculation",po)
  const _Data = await purchase.findOne({ _id: po }, { purchaseOrderNumber: 1 });
  // data.total = (data.price * data.quantity)-;

  data.po = _Data._id;
  data.purchaseOrderNumber = _Data.purchaseOrderNumber;
  // data.total =
  //   data.price +
  //   data.price * (data.tax / 100) -
  //   data.price * (data.discount / 100);

  // 100 +
  // 18 -
  // 1000;

  // 800

  // 100
  // 18
  // 10
//price 1000

  var discount = data.discount / 100;//10
  discount = data.price * discount;//0.1*1000=100
  
  var price = data.price - discount;//1000-100=900
  var tax = data.tax / 100;//15/100=.15
  tax = price * tax;//900*.15
  
  price = price + tax;
  var total = price * data.quantity;
  data.total = total;
  data.product = await (
    await product.findOne({ productName: data.productName })
  )._id;
  await product.updateOne(
    { _id: data.product },
    { $inc: { stock: data.quantity } }
  );
  const Data = await purchasedProducts.create(data);
  // const _data = new purchase({
  //   productDetails: [data],
  // });
  // await _data.save();
  return Data;
}
async function calculateTotalValueForAProduct(data) {
  const { discount: any, tax, price } = data;
  const t: number = price * (tax / 100);
  return 100;
}
