import { Request, Response, NextFunction } from "express";
export default async (req:Request,res:Response,next:NextFunction) => {
    let originalUrl:string = req.originalUrl;
    console.log(
      `\n\n \t http://192.168.0.174:8080${originalUrl} \t ${req.method}`
    );
    let email:string = req.body.username;
    let password:string = req.body.password;
        if(email&&password){
            next()
        }


};
