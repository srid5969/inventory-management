import ventor, { IVendor } from "../model/ventor";

export function listAllVendors(): Promise<IVendor[]> {
  return new Promise<IVendor[]>(async (resolve, reject) => {
    try {
      const data = await ventor.find(
        {},
        {
          _id: 0,
          id: "$_id",
          primaryContactNumber: "$workContactNumber",
          companyName: 1,
          contactPersonName:1,
          vendorEmail: 1,
          vendorContactNumber: 1,
          vendorName:1
        }
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}
export function addVendor(data: IVendor): Promise<any> {
const Data=new ventor(data) 

return Data.save()
}
export function editById(_id: any, data: any): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      resolve(await ventor.findOneAndUpdate(_id, data));
    } catch (error) {
      reject(error);
    }
  });
}
export function deleteVendorById(_id: any): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      resolve(await ventor.deleteOne({ _id }));
    } catch (error) {
      reject(error);
    }
  });
}
export function getVentorById(_id: any): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      resolve(await ventor.findOne({ _id }));
    } catch (error) {
      reject(error);
    }
  });
}
