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
    var reply = {}

    const userGoogleIdToken: string = req.body.userGoogleIdToken
    if( await verifyGoogleIdToken(userGoogleIdToken) ) {
        reply = { userGoogleIdTokenValidity: true }
    } 
    else {
        reply = { userGoogleIdTokenValidity: false }
    }



    // Send result to client
    res.json(reply);
}


export {
    postLogin
}