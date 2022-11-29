import express from 'express';
import 'reflect-metadata';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createConnection } from 'net';

const PORT = process.env.PORT || 3000;

const databaseUrl: string = process.env.DATABASE_URL;

const connection = createConnection(typeOrmOptions);

connection.then(async () => {
  const app = express();
  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.json());

  app.use('/', routes);

  app
    .listen(port, () => console.log(`listenig on port $(PORT)`))
    .catch((error) => console.log('error connecting', error));
});
