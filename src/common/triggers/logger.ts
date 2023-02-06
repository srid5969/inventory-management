import EventEmitter from "events";
import { writeFile } from "../logger/looger";

var eventEmitter = new EventEmitter();

eventEmitter.on("logRequest", async (data: any) => {
  var date=new Date()
  let filename="logs/"+date.getHours()+'-0-clock-date-'+date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear()+"log.txt"
  // filename="https://docs.google.com/document/d/1PO-BK5stRKuu2uiF9Mb39y8mZKPHis_YuE9TTeNJWzQ/edit?usp=sharing"
  await writeFile(filename,data);
});

export default eventEmitter;