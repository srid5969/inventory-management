import category ,{ICategory}from "../model/category";


export function listAllCategory(): Promise<ICategory[]> {
  return new Promise<ICategory[]>(async (resolve, reject) => {
    try {
      const data = await category.find({},{"id":"$_id",_id:0,description:1,categoryName:1,categoryCode:1});
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
export function editCategoryById(_id: any, data: ICategory): Promise<any> {
  
  return new Promise<any>(async (resolve, reject) => {
    try {
      const result=await category.findByIdAndUpdate({ _id:_id },  data )
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
export function deleteById(_id: any): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      resolve(await category.deleteOne({ _id }));
    } catch (error) {
      reject(error);
    }
  });
}
export function getById(_id: any): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      resolve(await category.findOne({ _id }));
    } catch (error) {
      reject(error);
    }
  });
}
