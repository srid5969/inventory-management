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
        createdAt:1
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
    const products = await SalesProducts.find({ salesOrder });
    let Data: any = {};
    Data.data = data;
    Data.productsDetails = products;
    return Data;
  }