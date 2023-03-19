/**
 * 
 * getInvalidRoute.ts
 * desc:
 * 
 * Author: Ernest John Decina
 */

import { Request, Response } from "express";

async function getInvalidRoute(req: Request, res: Response) {
    res.send("<p>Invalid Route</p>");
}

export {
    getInvalidRoute
}