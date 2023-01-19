import purchase, { IPurchase } from "../model/purchase";
import manufacturer from "../../manufacturer/model/manufacturer";
import ventor from "../../ventor/model/ventor";
import purchasedProducts, {
  IPurchasedProducts,
} from "../../purchasedProducts/model/purchasedProducts";
import * as productCalculations from "./productCalculations";

export async function addPurchase(data: IPurchase): Promise<any> {
  try {
    console.log(data);

    data.companyName = await (
      await ventor.findOne({ companyName: data.companyName }, { _id: 1 })
    )._id;
    console.log(data);

    const Data: any = await purchase.create(data);

    return await { id: Data._id };
  } catch (error) {
    return error;
  }
}
// purchase list
//Purchase list page contains Supplier name, Purchase order(PO) number, Product name, Quantity, Price and Action.
export async function purchaseList(): Promise<any[]> {
  const data: IPurchase[] = await purchase
    .find(
      { completed: true },
      {
        _id: 0,
        id: "$_id",
        companyName: 1,
        purchaseOrderNumber: 1,
        address: 1,
        paymentMode: 1,
        paymentStatus: 1,
        completed: 1,
        // productDetails: 1,
        totalTax: 1,
        totalDiscount: 1,
        grandTotal: 1,
      }
    )
    .populate({ path: "companyName", transform: (doc) => doc.companyName });
  // .populate({ path: "productDetails"});
  // console.log(data);

  return data;
}
export async function draftPurchaseList(): Promise<any[]> {
  const data: IPurchase[] = await purchase
    .find(
      { completed: false },
      {
        _id: 0,
        id: "$_id",
        companyName: 1,
        purchaseOrderNumber: 1,
        address: 1,
        paymentMode: 1,
        paymentStatus: 1,
        completed: 1,
        totalTax: 1,
        totalDiscount: 1,
        grandTotal: 1,
      }
    )
    .populate({ path: "companyName", transform: (doc) => doc.companyName });
  console.log(data);

  return data;
}
export async function editPurchaseById(
  _id: any,
  body: IPurchase
): Promise<any> {
  return await purchase.findByIdAndUpdate(_id, body);
}
export async function cancel_or_delete_Purchase(_id: any): Promise<any> {
  return await purchase.deleteOne({ _id });
}
export async function getPurchaseDetailsById(_id: any): Promise<any> {
  return await purchase
    .findOne(
      { _id },
      {
        _id: 0,
        id: "$_id",
        purchaseOrderNumber: 1,
        address: 1,
        paymentMode: 1,
        paymentStatus: 1,
        products: 1,
        type: 1,
        totalTax: 1,
        totalDiscount: 1,
        grandTotal: 1,
      }
    )
    .populate({ path: "companyName", transform: (doc) => doc.companyName })
    .populate({ path: "products" });
}
export async function importBulkPurchase(data: IPurchase[]) {
  return await purchase.insertMany(data);
}
/**
 *
 *
 * @export
 * @param {string} purchaseOrderNumber
 * @return {} 
 */
export async function afterClickingTheSubmitButton(
  purchaseOrderNumber: string
) {
  const data = await purchasedProducts.find({ purchaseOrderNumber });
  const totalDiscount = await productCalculations.calculateTotalDiscount(data);
  const totalTax = await productCalculations.calculateTotalTax(data);
  const subTotal = await productCalculations.calculateSubTotal(data);
  const grandTotal = await productCalculations.calculateTotalTax(data);
  const Data = await purchase.updateOne(
    { purchaseOrderNumber },
    { totalDiscount, totalTax, subTotal, grandTotal,completed:true }
  );
  return await Data;
}
