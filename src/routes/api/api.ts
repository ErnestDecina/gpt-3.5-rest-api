/**
 * 
 * api.ts
 * desc:
 * 
 * Author: Ernest John Decina
 */

// Dependencies
import { Router } from 'express';

import { getApi } from '../../controllers/api/getApi';

const apiRoute: Router = Router();

apiRoute.use("/", getApi);

export {
    apiRoute
}