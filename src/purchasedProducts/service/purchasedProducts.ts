import purchasedProducts, {IPurchasedProducts,
} from "../model/purchasedProducts";
import purchase,{IPurchase} from "../../purchase/model/purchase";

export async function addProducts(data: IPurchasedProducts, purchaseId: any) {
  const purchaseOrderNumber = await (
    await purchase.findOne({ _id: purchaseId }, { purchaseOrderNumber: 1 })
  ).purchaseOrderNumber;
  data.po = purchaseOrderNumber;
  data.purchaseOrderNumber = purchaseOrderNumber;
  const Data = await purchase.create(data);
  const _data = new purchase({
    productDetails: [Data],
  });
  await _data.save();
  return Data;
}
