/*
 * gpt-3.5-turbo.ts 
 * desc:
 *  
 *  
 * Author: Ernest John Decina
 * Date: 19th March 2023
 */


// Dependencies
import { Configuration, OpenAIApi } from 'openai';
import dotenv from "dotenv";

// Setup .env
dotenv.config();

// Variables
var configuration: Configuration;
var openai: OpenAIApi;

