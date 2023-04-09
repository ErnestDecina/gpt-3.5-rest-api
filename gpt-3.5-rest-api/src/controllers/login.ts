/**
* 
* login.ts
* desc:
* 
* Author: Ernest John Decina
*/
import { Request, Response } from "express";


async function postLogin(req: Request, res: Response) {
    // Send result to client
    res.json({bitch: "ass"});
}


export {
    postLogin
}