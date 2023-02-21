import Product from "../../Product/model/product";
import Purchase from "../../purchase/model/purchase";
import PurchasedProducts from "../../purchasedProducts/model/purchasedProducts";
import Sales from "../../sales/model/sales";
import SalesProducts from "../../salesProducts/model/salesProduct";

export async function getReportForInward(po: any) {
  let Data: any = {};
  let data: any = await Purchase.findOne(
    { _id: po },
    {
      purchaseOrderNumber: 1,
      _id: 0,
      id: "$_id",
      grandTotal: 1,
      totalDiscount: 1,
      totalTax: 1,
      subTotal: 1,

      paymentMode: 1,
      paymentStatus: 1,
      address: 1,
      companyName: 1,
      createdAt: 1,
    }
  )
    // .populate({model:Vendors});
    .populate({
      path: "companyName",
      model: "vendors",
      select:
        "companyName vendorAddress vendorName vendorEmail vendorContactNumber website GSTIN contactPersonName emailAddress workContactNumber ",
    });
  let data1 = await PurchasedProducts.find(
    { po },
    {
      _id: 0,
      id: "$_id",
      quantity: 1,
      mrp: 1,
      price: 1,
      discount: 1,
      unit: 1,
      tax: 1,
      product: 1,
    }
  ).populate({ path: "product", transform: (doc) => doc.productName });
  Data.data = data;
  Data.productsDetails = data1;
  return await Data;
}
export async function getReportForSales(salesOrder: any) {
  const data = await Sales.findOne({ _id: salesOrder });
  const products = await SalesProducts.find({ salesOrder }).populate({
    path: "product",
    transform: (doc) => doc.productName,
  });
  let Data: any = {};
  Data.data = data;
  Data.productsDetails = products;
  return Data;
}
//customers report
export async function customerReport(customerId: any, from , to) {
  return new Promise<any>(async (resolve, reject) => {
    let data;
    try {
      data.salesDetail = await Sales.find({
        customer: customerId,
        saleDate: { $gte: from, $lte: to },
      });
      for (let index = 0; index < data.salesDetail.length; index++) {
        data.salesDetail[index].products = await SalesProducts.find({
          salesOrder: data.salesDetail[index]._id,
        });
      }
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
  //
}
//vendors report
export async function vendorsReport(vendorId: any, from, to) {
  let data;
  return new Promise<any>(async (resolve, reject) => {
    try {
      data.purchaseDetails = await Purchase.find({
        companyName: vendorId,
        date: { $gte: from, $lte: to },
      });
      for (let index = 0; index < data.purchaseDetails.length; index++) {
        data.purchaseDetails[index].products = await PurchasedProducts.find({
          po: data.purchaseDetails[index]._id,
        });
      }
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });

  //
}
//product
export async function productReport(productId) {
  return new Promise<any>(async (resolve, reject) => {
    const product = await Product.findOne({ _id: productId });
    if (product) {
      //products log
      return resolve(product);
    }
    return reject({ message: "The product cannot be found" });
  });
}
var day = new Date("2023-02-17");
console.log(day.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
