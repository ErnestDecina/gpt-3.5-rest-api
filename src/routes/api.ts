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
import { getApi } from '../controllers/getApi';
import { getGptQuery } from '../controllers/getGptQuery';

const apiRoute: Router = Router();

apiRoute.post('/', getApi);
apiRoute.post('/gpt/query', getGptQuery);

export {
    apiRoute
}