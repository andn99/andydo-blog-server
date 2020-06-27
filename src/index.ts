import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hello World 1!'));

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const _server = app.listen(PORT, '0.0.0.0', () => {
  // console.warn('Server listening on:', 'http://localhost:5000');
});
