import sales, { ISales } from "../model/sales";
import customers from "../../customers/model/customers";
import vendor from "../../ventor/model/ventor";

export async function listAllSales() {
  return await sales.find();
}
export async function addSalesPre(data: ISales) {
  data.customer = await (await customers.findOne({ name: data.customer }))._id;
  data.supplier = await (
    await vendor.findOne({ companyName: data.supplier })
  )._id;
  return sales.create(data)
}
export async function addSalesPost() {}
