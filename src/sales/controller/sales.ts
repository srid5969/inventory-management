import { Request, Response, Express } from "express";
let router: Express = require("express").Router();
import {
  addSalesPre,
  afterClickingTheSubmitButton,
  getInvoiceForOutward,
  listAllSales,
} from "../service/sales";

router.post("/sale", async (req: Request, res: Response) => {
  // req.body.postedBy=req.user
  addSalesPre(req.body)
    .then((data) => res.send(data))
    .catch((data) => res.send(data));
});
router.post("/sales/added/submit/", async (req: Request, res: Response) => {
  afterClickingTheSubmitButton(req.query.id)
    .then((data) => res.send(data))
    .catch((err) => res.json(err));
});
router.get("/sales", async (req: Request, res: Response) => {
  listAllSales()
    .then((data) => res.send(data))
    .catch((err) => res.json(err));
});
router.get("/outward/invoice", async (req: Request, res: Response) => {
  getInvoiceForOutward(req.query.id)
    .then((data) => res.send(data))
    .catch((data) => res.send(data));
});
export default router;
