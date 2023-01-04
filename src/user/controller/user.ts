import { Request, Response, Express } from "express";
let router = require("express").Router();
import express from "express";
import service from "../service/user";
let userService = new service();
router.post("/login", async (req: Request, res: Response) => {
  userService
    .login(req.body.username, req.body.password)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

router.get("/", (req: Request, res: Response) => {
  res.json({
    mess: "Its Working",
  });
});
router.post("/", (req: Request, res: Response) => {
  console.log(req);
  res.json(req);
});
export default router;
