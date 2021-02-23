import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import pool from './dbconfig/db';
import urlRouter from './routers/shorterUrlRouter';

const server = () => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json({}));
  app.use(cors({}));
  app.use('/', urlRouter);

  app.get('/', (req, res) => {
    res.send(
      'Welcome to Shorten Url API 🇧🇷. \b You can access it by entering in /api route'
    );
  });

  const start = (port: number) => {
    return new Promise((resolve, reject) => {
      app
        .listen(port, () => {
          resolve(port);
        })
        .on('error', (err: Object) => reject(err));
    });
  };

  const dbConnect = () => {
    pool.connect(function (err, client, done) {
      if (err) {
        throw new Error(err);
      }
      console.log('Connected');
    });
  };

  return { start, dbConnect };
};

export default server;
