import Model, { IManufacturer } from "../model/manufacturer";

export async function registerManufacturer(data: IManufacturer):Promise<any> {

  return new Promise<any>(async(resolve, reject) => {
    try {
     resolve (await Model.create(data));
    } catch (error) {
      reject(error)
    }
  })
}
export async function getAllManufacturersDetail():Promise<any> {
  return await Model.find(
    {},
    { id: 1, companyName: 1, location: 1, phone: 1, email: 1 }
  );
}
export async function editManufacturer(id: string, body: IManufacturer):Promise<any> {
  return await Model.findByIdAndUpdate({ id }, { body });
}
export async function deleteManufacturer(id: string):Promise<any> {
  return await Model.deleteOne({ id });
}
export async function getAManufacturer(id: string):Promise<any> {
  return await Model.findOne({ id });
}