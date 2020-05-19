
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors'

import routes from './routes/index';

require('dotenv').config();

const PORT = process.env.PORT

const app = express();
const router = express.Router()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));

routes(router)

app.use('/api/v1', router)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
