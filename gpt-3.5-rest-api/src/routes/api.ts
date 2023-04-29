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
import { postLogin } from '../controllers/login';
import { postDALLEGenerate } from '../controllers/generateDALLEImage';
import { test } from '../controllers/test';



const apiRoute: Router = Router();

apiRoute.post('/', getInvalidApiRoute);
// apiRoute.post('/gpt/test', test);
apiRoute.post('/gpt/query', postGptQuery);
apiRoute.post('/dalle/image', postDALLEGenerate);
apiRoute.post('/login', postLogin);

export {
    apiRoute
}