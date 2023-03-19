/**
* 
* getApi.ts
* desc:
* 
* Author: Ernest John Decina
*/

import { Request, Response } from "express";

async function getApi(req: Request, res: Response) {
   res.send("<p>Invalid API Route</p>");
}

export {
    getApi
}