/**
 * 
 * authentication.ts
 * desc:
 * 
 * Author: Ernest John Decina
 */

// Dependencies
import jwt from 'jsonwebtoken';
import { jsonWebTokenKey } from "../config/jwt.config";






function jwtSign(responseJson: object): string {
    console.log(jsonWebTokenKey)
    return jwt.sign(responseJson, jsonWebTokenKey, {expiresIn: "1h"})
}

export {
    jwtSign
}