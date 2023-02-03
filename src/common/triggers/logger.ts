import EventEmitter from "events";
import { writeFile } from "../logger/looger";

var eventEmitter = new EventEmitter();

eventEmitter.on("logRequest", async (data: any) => {
  var date=new Date()
  let filename="logs/"+date.getHours()+'-0-clock-date-'+date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear()+"log.txt"
  await writeFile(filename,data);
});

export default eventEmitter;