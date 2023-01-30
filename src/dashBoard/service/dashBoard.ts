import Product from "../../Product/model/product";
import customers from "../../customers/model/customers";
import vendor from "../../ventor/model/ventor";
import purchase from "../../purchase/model/purchase";
import sales from "../../sales/model/sales";

//customers count
//vendors count
//purchase count
//sales count
//recent products
export async function dashBoard() {
  let Data: any = {};
  Data.customers = await customers.count();
  Data.suppliers = await vendor.count();
  Data.purchase = await purchase.count({completed:true});
  Data.sales = await sales.count({completed:true});
  Data.recentlyAddedProducts=await Product.find({},{_id:0,id:"$_id",productName:1,uniqueId:1,sku:1,category:1,brand:1,stock:1})
  .populate({path:"category",transform:doc=>doc.categoryName})
  .populate({path:"brand",transform:doc=>doc.brandName})
  .sort({createDate:-1}).limit(5)
  return Data;
}
