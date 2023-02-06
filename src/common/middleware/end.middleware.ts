import {Request,Response,NextFunction} from 'express'
import eventEmitter from '../triggers/logger';


export function logResponseBody(req:Request, res, next) {
    var oldWrite = res.write,
        oldEnd = res.end;
  
    var chunks = [];
  
    res.write = function (chunk) {
      chunks.push(new Buffer(chunk));
  
      oldWrite.apply(res, arguments);
    };
  
    res.end = function (chunk) {
      if (chunk)
        chunks.push(Buffer.from(chunk));
        
      var body = Buffer.concat(chunks).toString('utf8');
      eventEmitter.emit("logRequest", {Request:"http://192.168.0.123:8080"+req.originalUrl,ReqMeth:req.method,RequestBody:req.body,Response:JSON.parse(body)});
      oldEnd.apply(res, arguments);
    };
  
    next();
  }
  