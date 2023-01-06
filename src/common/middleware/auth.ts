"use strict";
import { Request, Response, NextFunction } from "express";
export default async (req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.removeHeader("x-powered-by");
  //set the allowed HTTP methods to be requested
  res.setHeader("Access-Control-Allow-Methods", "POST");
  //headers clients can use in their requests
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  let originalUrl: string = req.originalUrl;
  console.log(req.body);

  console.log(
    `\n\n \t http://${req.hostname}:8080${originalUrl} \t ${req.method}`
  );
  console.log("\tIP Address ", req.ip);

  let username: string = req.body.username;
  let password: string = req.body.password;
  if (username && password) {
    next();
  } else if (req.headers.authorization) {
    const token = "";
    next();
  } else {
    // next()
    res.status(404).json({
      message: "No data found",
      error: " Enter through login In order to avoid inconvenience",
    });
    // .redirect('http://192.168.0.137/ims_system/login.php')
  }
};
