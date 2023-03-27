/**
 * 
 * api.ts
 * desc:
 * 
 * Author: Ernest John Decina
 */

// Dependencies
import { Router } from 'express';

// Controllers
import { getInvalidApiRoute } from '../controllers/invalidApiRoute';
import { postGptQuery } from '../controllers/query';

const apiRoute: Router = Router();

apiRoute.post('/', getInvalidApiRoute);
apiRoute.post('/gpt/query', postGptQuery);

export {
    apiRoute
}