import bcrypt from "bcrypt";

import user, { IUser } from "../model/user";
import { generateToken } from "../../usertoken/token";

export async function login(username: string, password: string): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    let data: any = await user.findOne({ username }, { _id: 1, password: 1 ,username:1});


    if (!(username && password)) {
      reject({ "message":"First enter username and password miss Frontend developer" });
      return;
    }
    //if  data
    if (data) {
      /**
       * TODO : Login
       * !comparing
       * @param password  plain text password
       * @param data.password bcrypt password
       */
      const Data = await bcrypt.compare(password, data.password);
      if (Data) {
        await generateToken(data._id)
          .catch((err) => reject({message:err.toString()}))
          .then((token) => resolve({ username:data.username,id:data._id,token }));
      } else {
        reject({ message: "wrong password" });
      }
    } else {
      reject({ message: "user cannot be found" });
    }
  });
}
export async function UserSignUp(data: IUser): Promise<IUser> {
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(data.password, salt);
  return await user.create({
    username: data.username,
    password,
    role: data.role,
  });
}
export async function logout(data){
  

}
