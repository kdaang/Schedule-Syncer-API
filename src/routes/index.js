import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDB from '../db';
import schedule from '../controller/schedule';

let router = express();

//connect to DB
initializeDB(db => {
    //internal middleware
    router.use(middleware({config, db}));

    //api routes v1 (/v1)
    router.use('/schedule', schedule({ config, db }));
})

export default router;