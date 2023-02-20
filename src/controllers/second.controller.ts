import { Request, Response } from "express";

 export const second=(req:Request,res:Response)=>{
    res.send("first controller")

}