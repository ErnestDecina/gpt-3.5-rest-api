/**
 * 
 * google_authentication.config.ts
 * desc:
 * 
 * 
 * Author: Ernest John Decina
 * Date: 19th March 2023
 */

// Dependencies
import dotenv from 'dotenv';
import { OAuth2ClientOptions } from 'google-auth-library';
dotenv.config();

const google_authentication_client_id: string | undefined = process.env.GOOGLE_AUTH_CLIENT_ID;
const google_authentication_client_secret: string | undefined = process.env.GOOGLE_AUTH_CLIENT_SECRET;

export {
    google_authentication_client_id,
    google_authentication_client_secret
}