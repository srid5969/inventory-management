import EventEmitter from "events";
import {afterClickingTheSubmitButton} from "../../../sales/service/sales";



var eventEmitter = new EventEmitter();

eventEmitter.on("salesProductCalculation", async (id: any) => {
await afterClickingTheSubmitButton(id)
});

export default eventEmitter;