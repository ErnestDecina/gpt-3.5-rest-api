/**
 * 
 * invalidRoute.ts
 * desc:
 * 
 * Author: Ernest John Decina
 */

// Dependencies
import { Router } from 'express';

// Controller
import { getInvalidRoute } from '../controllers/getInvalidRoute';

const invalidRoute: Router = Router();

invalidRoute.get('*', getInvalidRoute);

export {
    invalidRoute
}