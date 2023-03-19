/**
 * 
 * config.js
 * desc:
 * 
 * 
 * Author: Ernest John Decina
 * Date: 19th March 2023
 */

// Dependencies
import dotenv from 'dotenv';
dotenv.config();

const api_port: number = Number(process.env.API_PORT);
const openai_api_key: string = String(process.env.OPENAI_API_KEY);
const openai_organisation_key: string = String(process.env.OPENAI_ORGANISATION_KEY);

export {
    api_port,
    openai_api_key,
    openai_organisation_key
};