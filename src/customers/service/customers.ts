import customers, { ICustomer } from "../model/customers";

export function listAllCustomers(): Promise<ICustomer[]> {
  return new Promise<ICustomer[]>(async (resolve, reject) => {
    try {
      const data = await customers.aggregate([
        {
          $project: {
            _id: 0,
            id: "$_id",
            name: 1,
            email: 1,
            GSTno: 1,
            phone: 1,
            type: 1,
          },
        },
      ]);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}
export function addCustomer(data: ICustomer): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      resolve(await customers.create(data));
    } catch (error) {
      reject(error);
    }
  });
}
export function editById(_id: any, data: any): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      resolve(await customers.findOneAndUpdate({ _id },  data ));
    } catch (error) {
      reject(error);
    }
  });
}
export function deleteById(_id: any): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      resolve(await customers.deleteOne({ _id }));
    } catch (error) {
      reject(error);
    }
  });
}
export function getById(_id: any): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    try {
      resolve(await customers.findOne({ _id }));
    } catch (error) {
      reject(error);
    }
  });
}
