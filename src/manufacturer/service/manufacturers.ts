import Model, { IManufacturer } from "../model/manufacturer";
import { addBrand } from "../../brand/service/brands";

export async function registerManufacturer(data: any): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      let addBrands = await addBrand(data);
      data.brand = addBrands;
      await Model.create(data);
      resolve({ status: "success" });
    } catch (error) {
      error.status=400
      reject(error);
    }
  });
}
export async function getAllManufacturersDetail(): Promise<IManufacturer[]> {
  return await Model.find(
    {},
    { _id: 0, id: "$_id", companyName: 1, email: 1, phone: 1, location: 1 }
  );
}
export async function editManufacturer(
  _id: any,
  body: IManufacturer
): Promise<any> {
 const data=await Model.updateOne(  {_id} ,  body );
 return Promise.resolve(data)
}
export async function deleteManufacturer(_id: any): Promise<any> {
  return await Model.deleteOne({ _id });
}
export async function getAManufacturer(_id: any): Promise<any> {
  return await Model.findOne({ _id });
}
