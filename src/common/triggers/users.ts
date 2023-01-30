import EventEmitter from "events";
import { generateUniqueId } from "../helpers/uniquieIdGenerate";
var eventEmitter = new EventEmitter();

eventEmitter.on("generateUniqueId", async (_id: any) => {
  await generateUniqueId(_id);
});

export default eventEmitter;
