import setRateLimit from "express-rate-limit";
import express from "express";

const app = express();
const rateLimiter = setRateLimit({
    windowMs:1*60*1000,
    max:500,
    statusCode:200,
    message:null,
    headers:true,
    handler:async(req,res,next)=>{
        res.redirect(307, "/404");
        console.log(`IP clientIP has been rate limited`);
}});

export default rateLimiter;
