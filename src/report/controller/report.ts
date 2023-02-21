import { Request, Response, Express } from "express";
import { customerReport, getReportForInward, getReportForSales, vendorsReport } from "../service/report";
let router: Express = require("express").Router();
router.get("/purchase/report", async (req: Request, res: Response) => {
  getReportForInward(req.query.id)
    .then((data) => res.send(data))
    .catch((data) => res.send(data));
});
router.get("/sale/report", async (req: Request, res: Response) => {
  getReportForSales(req.query.id)
    .then((data) => res.send(data))
    .catch((data) => res.send(data));
});
router.get("/vendors/report", async (req: Request, res: Response) => {
  vendorsReport(req.query.id,req.query.from,req.query.to)
    .then((data) => res.send(data))
    .catch((data) => res.send(data));
});
router.get("/customer/report", async (req: Request, res: Response) => {
  customerReport(req.query.id,req.query.from,req.query.to)
    .then((data) => res.send(data))
    .catch((data) => res.send(data));
});

export default router;
