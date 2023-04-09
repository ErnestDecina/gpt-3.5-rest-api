/**
* 
* login.ts
* desc:
* 
* Author: Ernest John Decina
*/
import { Request, Response } from "express";
import { verifyGoogleIdToken } from "../utils/googleAuthentication";


async function postLogin(req: Request, res: Response) {
    const userGoogleIdToken: string = req.body.userGoogleIdToken
    verifyGoogleIdToken(userGoogleIdToken);

    // Send result to client
    res.json({userGoogleJWT: "ass"});
}


export {
    postLogin
}