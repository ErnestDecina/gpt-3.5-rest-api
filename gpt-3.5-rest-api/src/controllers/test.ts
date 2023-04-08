/**
* 
* getGptQuery.ts
* desc:
* 
* Author: Ernest John Decina
*/
import { Request, Response } from "express";
import os from "os";



async function test(req: Request, res: Response) {
    const value: string = req.body.query
    const osHostName: string = os.hostname();

    const responseJson = {
        value: value,
        hostName: osHostName
    }
    
    // Send result to client
    res.json(responseJson);
}

export {
    test
}