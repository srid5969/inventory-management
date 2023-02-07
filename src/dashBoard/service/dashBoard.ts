import Product from "../../Product/model/product";
import customers from "../../customers/model/customers";
import vendor from "../../ventor/model/ventor";
import purchase from "../../purchase/model/purchase";
import sales from "../../sales/model/sales";
import purchasedProducts from "../../purchasedProducts/model/purchasedProducts";
import SalesProducts from "../../salesProducts/model/salesProduct";

export async function dashBoard() {
  try {
    let Data: any = {};
    Data.customers = await customers.countDocuments();
    Data.suppliers = await vendor.countDocuments();
    Data.purchase = await purchase.countDocuments({ completed: true });
    Data.sales = await sales.countDocuments();
    var recentlyAddedProducts = await Product.find(
      {},
      {
        _id: 0,
        id: "$_id",
        productName: 1,
        uniqueId: 1,
        sku: 1,
        category: 1,
        brand: 1,
        stock: 1,
      }
    )
      .populate({ path: "category", transform: (doc) => doc.categoryName })
      .populate({ path: "brand", transform: (doc) => doc.brandName })
      .sort({ createDate: -1 })
      .limit(5);
    Data.recentlyAddedProducts = recentlyAddedProducts;
    Data.availableProducts = 0;
    Data.availableProducts = recentlyAddedProducts.reduce((acc, value) => {
      return acc + value.stock;
    }, 0);
    var totalPurchaseDetail = await purchasedProducts.find({ completed: true });
    var totalSalesDetail = await SalesProducts.find({ completed: true });
    //Total Purchase Quantity
    Data.totalPurchaseQuantity = 0;
    //Total Purchase Price
    Data.totalPurchasePrice = 0;

    //Total Sales Quantity
    Data.totalSalesQuantity = 0;

    //Total Sales Price
    Data.totalSalesPrice = 0;

    totalSalesDetail.map((data) => {
      // Data.availableProducts+=data.quantity;
      Data.totalSalesQuantity += data.quantity;
      Data.totalSalesPrice += data.total;
    });
    // Data.topSellingProducts=await SalesProducts.aggregate
    totalPurchaseDetail.map((data) => {
      // Data.availableProducts-=data.quantity;
      Data.totalPurchaseQuantity += data.quantity;
      Data.totalPurchasePrice += data.total;
    });
    var topSellingProduct = await SalesProducts.aggregate([
      {
        $group: {
          _id: "$product",
          totalQuantity: {
            $sum: "$quantity",
          },
        },
      },
      {
        $sort: {
          totalQuantity: -1,
        },
      },
      {
        $limit: 5,
      },
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "_id",
          as: "result",
        },
      },
      // {
      //   $project:{
      //     products:"result"
      //   }
      // }
    ]);
    // //purchase success order count
    Data.deliveredPurchases=await purchase.countDocuments({orderStatus:""})
    // //purchase failed order count
    Data.notDeliveredPurchases=await purchase.countDocuments({orderStatus:{$ne:"Delivered"}})
    // //sales success order count
    Data.deliveredSales=await sales.countDocuments({orderStatus:""})
    // //sales failed order count
    Data.notDeliveredSales=await sales.countDocuments({orderStatus:{$ne:"Delivered"}})
    Data.totalSuccessOrders=Data.deliveredPurchases+Data.deliveredSales
    Data.totalFailedOrders=Data.notDeliveredPurchases+Data.notDeliveredSales
    
    Data.topSellingProduct=topSellingProduct


    
    return Data;
  } catch (error) {
    return error;
  }
}
