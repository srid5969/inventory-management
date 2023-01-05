import brands, { IBrand } from "../model/brands";

export function listAllCategory(): Promise<IBrand[]> {
  return new Promise<IBrand[]>(async (resolve, reject) => {
    try {
      const data = await brands.find();
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
export function editById(id: any, data: IBrand): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      resolve(await brands.findOneAndUpdate({ id }, { data }));
    } catch (error) {
      reject(error);
    }
  });
}
export function deleteById(id: any): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      resolve(await brands.deleteOne({ id }));
    } catch (error) {
      reject(error);
    }
  });
}
export function getById(id: any): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      resolve(await brands.findOne({ id }));
    } catch (error) {
      reject(error);
    }
  });
}
