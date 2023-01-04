import user, { IUser } from "../model/user";
import { generateToken } from "../../usertoken/token";

export async function login(email: string, password: string): Promise<any> {
  return new Promise<any>(async (resolve, reject) => {
    const data: any = await user.findOne({ email });
    //if no data
    if (data) {
     await generateToken(data._id)
        .catch((err) => reject(err))
        .then((data) => resolve({ token: data }));
      reject({ message: "user cannot be found" });
    } else {
      resolve({ token: "welcome" });
    }
  });
}
