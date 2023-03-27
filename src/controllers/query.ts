/**
* 
* getGptQuery.ts
* desc:
* 
* Author: Ernest John Decina
*/

import { CreateChatCompletionResponseChoicesInner } from "openai";
import { Request, Response } from "express";
import { gptQuery } from "../middleware/gpt";
import { queryResponseJson } from "../models/query"


async function postGptQuery(req: Request, res: Response) {
    var gptResponse: CreateChatCompletionResponseChoicesInner[] = await gptQuery(req.body.query);

    const response: queryResponseJson = new queryResponseJson(0, 
        Date.now(), 
        req.body.query, 
        gptResponse[0].message?.content || "Unable to reach api"
    )
 
    // Send result to client
    res.json(response.createJson());
} 

export {
    postGptQuery
}