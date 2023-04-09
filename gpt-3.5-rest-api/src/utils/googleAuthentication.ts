/**
 * 
 * googleAuthentication.ts
 * desc:
 * 
 * 
 * Author: Ernest John Decina
 * Date: 19th March 2023
 */

// Dependencies
import { OAuth2Client } from "google-auth-library";
import { google_authentication_client_id, google_authentication_client_secret } from "../config/google_authentication.config";

// Create Google OAuth2Client
const client = new OAuth2Client(google_authentication_client_id, google_authentication_client_secret);

/**
 * 
 * @params
 */
async function verifyGoogleIdToken(userGoogleIdToken: string) {
    const ticket = await client.verifyIdToken({
        idToken: userGoogleIdToken,
        audience: google_authentication_client_id
    });

    const payload = ticket.getPayload()! || null;
    const userid = payload['sub'];
    console.log(payload);
} // End function verifyGoogleIdToken

export {
    verifyGoogleIdToken	
}