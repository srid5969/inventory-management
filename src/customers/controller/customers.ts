
import { Request, Response, Express } from "express";
let router: Express = require("express").Router();

import {addCustomer,deleteById,editById,getById,listAllCustomers,} from "../service/customers";


router.post("/customer", async (req: Request|any, res: Response) => {
    
    addCustomer(req.body).then((data) => res.json(data));
  });
router.get("/customers", async (req: Request, res: Response) => {
    listAllCustomers().then((data) => res.json(data));
});
router.get("/customer/", async (req: Request, res: Response) => {
  getById(req.query.id).then((data) => res.json(data));
});
router.delete("/customer/", async (req: Request, res: Response) => {
  deleteById(req.query.id).then((data) => res.json(data));
});
router.patch("/customer/", async (req: Request, res: Response) => {
  editById(req.query.id, req.body).then((data) => res.json(data));
});
export default router