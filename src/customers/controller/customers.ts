import { Request, Response, Express } from "express";
let router: Express = require("express").Router();
import {
  addCustomer,
  deleteById,
  editById,
  getById,
  listAllCustomers,
} from "../service/customers";

router.post("/customer", async (req: Request | any, res: Response) => {
  addCustomer(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
router.get("/customers", async (req: Request, res: Response) => {
  listAllCustomers()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
router.get("/customer/", async (req: Request, res: Response) => {
  getById(req.query.id)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
router.delete("/customer/", async (req: Request, res: Response) => {
  deleteById(req.query.id)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
router.patch("/customer/", async (req: Request, res: Response) => {
  editById(req.query.id, req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
export default router;
