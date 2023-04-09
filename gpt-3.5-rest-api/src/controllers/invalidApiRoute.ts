/**
* 
* getApiController.ts
* desc:
* 
* Author: Ernest John Decina
*/

import { Request, Response } from "express";

async function getInvalidApiRoute(req: Request, res: Response) {
    res.statusCode = 400;
    res.send("<p>Invalid Route</p>");
}

export {
    getInvalidApiRoute
}