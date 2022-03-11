import Express, { json } from 'express';

const app = Express();
const PORT = 3000;

app.get('/', (_req, res) => res.send('Hello Typescript !!!'));

app.listen(PORT, () => { console.log(`application running in the port ${PORT}`) });
