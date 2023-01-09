import purchase,{IPurchase} from '../model/purchase'
import manufacturer from '../../manufacturer/model/manufacturer'
import ventor from '../../ventor/model/ventor'




export async function addpurchase(data: IPurchase): Promise<any> {
    try {
      data.companyName = await (
        await manufacturer.findOne({ companyName: data.companyName }, { _id: 1 })
      )._id;
      data.supplierName = await (await ventor.findOne({vendorName:data.supplierName}, { _id: 1 }))._id;
      return await purchase.create(data);
    } catch (error) {
     return  (error);
    }
  }
  export async function getAllpurchase(): Promise<IPurchase[]> {
    return await purchase
      .find(
        {},
        {
          _id: 0,
          id: "$_id",
        }
      )
      .populate({ path: "companyName", transform: (doc) => doc.companyName })
      .populate({ path: "supplierName", transform: (doc) => doc.vendorName });
  }
  export async function editpurchaseById(_id: any, body: IPurchase): Promise<any> {
    return await purchase.findByIdAndUpdate({ _id }, { body });
  }
  export async function deleteApurchase(_id: any): Promise<any> {
    return await purchase.deleteOne({ _id });
  }
  export async function getApurchase(_id: any): Promise<any> {
    return await purchase
      .findOne({ _id })
      .populate({ path: "companyName", transform: (doc) => doc.companyName })
      .populate({ path: "supplierName", transform: (doc) => doc.vendorName });
  }
  export async function importBulkpurchase(data: IPurchase[]) {
    return await purchase.insertMany(data);
  }
  