import sales, { ISales } from "../model/sales";
import customers from "../../customers/model/customers";
import vendor from "../../ventor/model/ventor";
import * as invoice from "../../common/helpers/invoiceCalculation";
import salesProduct from "../../salesProducts/model/salesProduct";

export async function listAllSales() {
  return await sales
    .find()
    .populate({ path: "supplier" })
    .populate({ path: "customer" });
}
export async function addSalesPre(data: ISales) {
  data.customer = await (await customers.findOne({ name: data.customer }))._id;
  data.supplier = await (
    await vendor.findOne({ companyName: data.supplier })
  )._id;
  const Data = await sales.create(data);
  return { id: Data._id };
}

export async function afterClickingTheSubmitButton(salesOrder) {
  const data = await salesProduct.find({ salesOrder });
  const totalDiscount = await invoice.calculateTotalDiscount(data);
  const totalTax = await invoice.calculateTotalTax(data);
  const subTotal = await invoice.calculateSubTotal(data);
  const grandTotal = await invoice.grandTotal(
    totalTax,
    totalDiscount,
    subTotal
  );
  const Data = await sales.updateOne(
    { _id: salesOrder },
    { totalDiscount, totalTax, subTotal, grandTotal, completed: true }
  );
  return Data;
}
export async function getInvoiceForOutward(salesOrder: any) {
  const data = await sales.findOne({ _id: salesOrder });
  const products = await salesProduct.find({ salesOrder });
  let Data: any = {};
  Data.data = data;
  Data.products = products;
  return Data;
}
