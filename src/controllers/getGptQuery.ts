/**
* 
* getGptQuery.ts
* desc:
* 
* Author: Ernest John Decina
*/

import { Request, response, Response } from "express";
import { CreateChatCompletionResponseChoicesInner } from "openai";
import { gptQuery } from "../utils/gpt";

async function getGptQuery(req: Request, res: Response) {
    /**
     * 
     * JSON FORMAT
     * {
     *  query: "Hi"
     * }
     * 
     */

    // Generate GPT3.5-turbo Response
    var gptResponse: string = await gptQuery(req.body.query) as string;
    
    var responseJson: object = {
                                    "query": req.body.query,
                                    "response": gptResponse
                                };

    res.json(responseJson);
}

export {
    getGptQuery
}