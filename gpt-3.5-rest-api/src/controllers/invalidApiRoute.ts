/**
* 
* getApiController.ts
* desc:
* 
* Author: Ernest John Decina
*/

import { Request, Response } from "express";

async function getInvalidApiRoute(req: Request, res: Response) {
    res.send("<p>Invalid API Route</p>");
}

export {
    getInvalidApiRoute
}