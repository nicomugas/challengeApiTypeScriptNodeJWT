// import dotenv from 'dotenv';
// import { resolve } from 'path';
// import { config } from 'dotenv';


// config({ path: resolve(__dirname, '../../../.env') });

import * as dotenv from 'dotenv' 
dotenv.config()



import app from './app';
import './db';


const PORT = process.env.PORT || 3001;
app.listen(PORT);
console.log(`Listening server on port: ${PORT}`);
 
