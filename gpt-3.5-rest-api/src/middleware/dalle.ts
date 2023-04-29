/**
 * 
 * dalle.ts
 * desc:
 * 
 * Author: Ernest John Decina
 */

// Dependencies
import { AxiosResponse } from "axios";
import { Configuration, CreateChatCompletionResponse, CreateChatCompletionResponseChoicesInner, ImagesResponse, OpenAIApi } from "openai";  
import { openai_api_key, openai_organisation_key } from "../config/gpt_api.config";

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
async function dalleQuery(userPrompt: string): Promise<String> {

    
    try {
        const completion: AxiosResponse<ImagesResponse, any> = await openai.createImage({
            prompt: userPrompt,
            n: 1,
            size: "512x512"
        });

        return completion.data.data[0].url ?? "";
    } catch (error) {
        return "NULL";
    }
} // End function query()

export {
    openai,
    dalleQuery
}