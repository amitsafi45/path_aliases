import { Request, Response } from "express";

export const first=(req:Request,res:Response)=>{
    res.send("first controller")

}