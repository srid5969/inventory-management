import EventEmitter from "events";
import {afterClickingTheSubmitButton} from "../../../purchase/service/purchase";




var eventEmitter = new EventEmitter();

eventEmitter.on("purchaseProductCalculation", async (id: any) => {
await afterClickingTheSubmitButton(id)
});

export default eventEmitter;