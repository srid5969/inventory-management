"use strict";
import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../../usertoken/token";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.removeHeader("x-powered-by");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  
  let originalUrl: string = req.originalUrl;
  console.log(
    `\n\n \t http://${req.hostname}:8080${originalUrl} \t ${req.method}`
    );
    console.log(req.body);
    if (req.method === "DELETE") {
     return res.send({ message: "This api is temporary not available" });
    }

  let username: string = req.body.username;
  let password: string = req.body.password;
  if (username && password && originalUrl === "/api/user/login") {
    return next();
  }
  if (req.headers.authorization) {
    const token = req.headers.authorization;
    const isUserAlreadyLoggedIn = await verifyToken(token);
    if (isUserAlreadyLoggedIn) {
      req.body.postedBy = isUserAlreadyLoggedIn;
      return next();
    }
    return res.status(404).json({
      message: "Token Not  verified",
      error: "Enter through login In order to avoid inconvenience",
    });
  }
  res.status(404).json({
    message: "No data found",
    error: "Enter through login In order to avoid inconvenience",
  });
}
