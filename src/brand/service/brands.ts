import brands, { IBrand } from "../model/brands";

export function listAllBrands(): Promise<IBrand[]> {
  return new Promise<IBrand[]>(async (resolve, reject) => {
    try {
      const data = await brands.aggregate([{$project: {_id: 0, id: '$_id',brandName:1,brandImage:1,brandDescription:1}}]);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}
export function addBrand(data: IBrand): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      resolve(await brands.create(data));
    } catch (error) {
      reject(error);
    }
  });
}
export function editById(_id: any, data: any): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      resolve(await brands.updateOne({ _id },  data ));
    } catch (error) {
      reject(error);
    }
  });
}
export function deleteById(_id: any): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      resolve(await brands.deleteOne({ _id }));
    } catch (error) {
      reject(error);
    }
  });
}
export function getById(_id: any): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      resolve(await brands.findOne({ _id }));
    } catch (error) {
      reject(error);
    }
  });
}
