/**
* 
* getGptQuery.ts
* desc:
* 
* Author: Ernest John Decina
*/

import { Request, Response } from "express";
import { gptQuery } from "../utils/gpt";
import { CreateChatCompletionResponseChoicesInner } from "openai";

async function getGptQuery(req: Request, res: Response) {
    var gptResponse: CreateChatCompletionResponseChoicesInner[] = await gptQuery(req.body.query);
    const responseJson: object = {
                                    "user": {
                                                "query": req.body.query,
                                            },
                                    "assistant": {
                                                "response": gptResponse[0].message?.content
                                            },
                                };

    // Send result to client
    res.json(responseJson);
} 

export {
    getGptQuery
}