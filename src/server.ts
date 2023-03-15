import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

const app: Application = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.get('/', function (_req: Request, res: Response) {
        res.send('Hello, world!');
    });

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
