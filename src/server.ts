import express from 'express';
import { searchRoutes } from './routes/search.routes';

const app = express();

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

app.use('/api', searchRoutes);

const PORT:string = '5000';

function start() {
    try {
        app.listen(PORT, () => console.log(`hosting port ${PORT}`))
    } catch (error) {
        console.log('Server Error', error)
    }
}

start();