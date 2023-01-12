import purchasedProducts, {
  IPurchasedProducts,
} from "../model/purchasedProducts";
import purchase from '../../purchase/model/purchase'


export async function addProducts(data: IPurchasedProducts, po: string) {
const isTheDetailsAdded=await   purchase.findOne({})
  const Data = await purchasedProducts.create(data);
}
