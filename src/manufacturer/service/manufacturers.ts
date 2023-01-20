import Model, { IManufacturer } from "../model/manufacturer";
import { addBrand } from "../../brand/service/brands";

export async function registerManufacturer(data: any): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      let addBrands=await addBrand(data)
      console.log(addBrands);
      data.brand=addBrands;
      console.log(await Model.create(data));
      resolve({ status: "success" });
    } catch (error) {
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
  id: string,
  body: IManufacturer
): Promise<any> {
  return await Model.findByIdAndUpdate({ id }, { body });
}
export async function deleteManufacturer(id: string): Promise<any> {
  return await Model.deleteOne({ id });
}
export async function getAManufacturer(id: string): Promise<any> {
  return await Model.findOne({ id });
}
