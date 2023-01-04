import user from "../model/user";
export default class Demo {
  login=async(email:string,password:string)=>{
    return new Promise<any>((resolve, reject) => {
      // const data= await user.
      resolve('welcome')
    })
  }
}

