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
import { getInvalidRoute } from '../controllers/invalidRoute';

const invalidRoute: Router = Router();

invalidRoute.get('*', getInvalidRoute);

export {
    invalidRoute
}