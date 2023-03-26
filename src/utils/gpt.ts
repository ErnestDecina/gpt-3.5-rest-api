/**
 * 
 * getInvalidRoute.ts
 * desc:
 * 
 * Author: Ernest John Decina
 */

// Dependencies
import { AxiosResponse } from "axios";
import { Configuration, CreateChatCompletionResponse, CreateChatCompletionResponseChoicesInner, OpenAIApi } from "openai";  
import { openai_api_key, openai_organisation_key } from "../config/config";

// Setup OpenAIApi Configuration
const configuration: Configuration = new Configuration({  
    organization: openai_organisation_key,
    apiKey: openai_api_key
});

// Setup OpenAIApi
const openai: OpenAIApi = new OpenAIApi(configuration);

console.log("OpenAIApi is active");

/**
 * 
 * Query Function
 * 
 */
// Query OpenAIapi
async function gptQuery(userQuery: string): Promise<CreateChatCompletionResponseChoicesInner[]> {
    const completion: AxiosResponse<CreateChatCompletionResponse, any> = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{
            "role": "user",
            "content": userQuery
        }]
    });
    
    var gptResponse: CreateChatCompletionResponseChoicesInner[] = completion.data.choices ?? [];
    return gptResponse;
} // End function query()

export {
    openai,
    gptQuery
}