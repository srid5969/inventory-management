import category ,{ICategory}from "../model/category";


export function listAllCategory(): Promise<ICategory[]> {
  return new Promise<ICategory[]>(async (resolve, reject) => {
    try {
      const data = await category.find({},{"id":"$_id",_id:0,categoryDescription:1,categoryName:1,categoryCode:1});
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}
export function addCategory(data: ICategory): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      resolve(await category.create(data));
    } catch (error) {
      reject(error);
    }
  });
}
export function editById(id: any, data: ICategory): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      resolve(await category.findOneAndUpdate({ id }, { data }));
    } catch (error) {
      reject(error);
    }
  });
}
export function deleteById(id: any): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      resolve(await category.deleteOne({ id }));
    } catch (error) {
      reject(error);
    }
  });
}
export function getById(id: any): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      resolve(await category.findOne({ id }));
    } catch (error) {
      reject(error);
    }
  });
}
