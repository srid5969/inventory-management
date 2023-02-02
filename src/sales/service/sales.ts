import sales, { ISales } from "../model/sales";
import customers from "../../customers/model/customers";
import vendor from "../../ventor/model/ventor";
import * as invoice from "../../common/helpers/invoiceCalculation";
import salesProduct from "../../salesProducts/model/salesProduct";

export async function listAllSales() {
  return await sales
    .find(
      {},
      {
        _id: 0,
        id: "$_id",
        customer: 1,
        saleDate: 1,
        paymentMode: 1,
        paymentStatus: 1,
        address: 1,
        description: 1,
      }
    )
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

export async function afterClickingTheSubmitButton(salesOrder): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
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
        { completed: true, totalDiscount, totalTax, subTotal, grandTotal }
      );
      resolve({ status: "success" });
    } catch (error) {
      reject({ status: "error" });
    }
  });
}
export async function getInvoiceForOutward(salesOrder: any) {
  const data = await sales.findOne({ _id: salesOrder });
  const products = await salesProduct.find({ salesOrder });
  let Data: any = {};
  Data.data = data;
  Data.productsDetails = products;
  return Data;
}
