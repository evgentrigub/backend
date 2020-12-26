import express from 'express';
import { router } from './routes';

const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.static(__dirname + '/static'));

app.get('/', (request, response) => {
    response.end('<h1>Home</h1>');
})

app.get('/home', (request, response) => {
    response.end('<h1>Home</h1>');
})

app.get('/about', (request, response) => {
    response.end('<h1>About</h1>');
})

app.use('/api', router);

const PORT:string = '5000';

function start() {
    try {
        app.listen(PORT, () => console.log(`hosting port ${PORT}`))
    } catch (error) {
        console.log('Server Error', error)
    }
}

start();