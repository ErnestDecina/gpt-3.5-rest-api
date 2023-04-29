/**
* 
* generateDALLEImage.ts
* desc:
* 
* Author: Ernest John Decina
*/

import { Request, Response } from "express";
import { dalleQuery } from "../middleware/dalle";
import { imageResponseJSON } from "../models/image";



async function postDALLEGenerate(req: Request, res: Response) {
    var gptResponse: String  = await dalleQuery(req.body.prompt);

    if(gptResponse == "NULL") {res.sendStatus(400); return; }

    const response: imageResponseJSON = new imageResponseJSON(gptResponse);

    

    const responseJson: object = response.createJson()
    
    // Send result to client
    res.json(responseJson);
}

export {
    postDALLEGenerate
}