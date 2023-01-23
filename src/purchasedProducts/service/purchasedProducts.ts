import purchasedProducts, {
  IPurchasedProducts,
} from "../model/purchasedProducts";
import purchase, { IPurchase } from "../../purchase/model/purchase";
import product from "../../Product/model/product";


export async function addProducts(data: any, po: any) {
  const _Data = await await purchase.findOne(
    { _id: po },
    { purchaseOrderNumber: 1 }
  );
  // data.total = (data.price * data.quantity)-;

  data.po = _Data._id;
  data.purchaseOrderNumber = _Data.purchaseOrderNumber;
  data.productId = await (await product.findOne({ productName:data.productName}))._id;
  console.log(data);
  
  const Data = await purchasedProducts.create(data);
  // const _data = new purchase({
  //   productDetails: [data],
  // });
  // await _data.save();
  return Data;
}
