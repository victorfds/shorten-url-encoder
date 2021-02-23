import { Request, Response } from 'express';
import { Client } from 'pg';
import { generateShortUrl } from '../utils/functions';

const dbCredentials = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  ssl: process.env.DATABASE_URL ? true : false,
};

const urlControl = {
  async get(req: Request, res: Response) {
    try {
      const now = new Date().getTime();
      const client = new Client(dbCredentials);

      client.connect();
      const { shortUrl } = req.params;

      const {
        rows,
      } = await client.query('SELECT * FROM urls WHERE short_url = $1', [
        shortUrl,
      ]);
      const result = rows[0];

      if (result.expiry_time <= now) {
        const idToRemove = result.id;
        await client.query('DELETE FROM urls WHERE id = $1', [idToRemove]);

        return res.status(404).send('URL not found');
      }

      return res.redirect(301, `http://${result.url}`);
    } catch (error) {
      res.status(404).send('URL not found');
    }
  },

  async post(req: Request, res: Response) {
    try {
      const client = new Client(dbCredentials);

      client.connect();
      const { url, expiryTime, leng = 5 } = req.body;
      const createdAt = new Date().getTime();
      // tempo para convertido para segundos
      const visibleUntil = createdAt + expiryTime * 1000;

      // gera ids de tamanho 5 por padrão ou length
      const shortUrl = generateShortUrl(Number(leng));

      const {
        rows,
      } = await client.query(
        'INSERT INTO urls (short_url, url, expiry_time, created_at) VALUES ($1, $2, $3, $4)',
        [shortUrl, url, visibleUntil, createdAt]
      );

      res.send({ newUrl: shortUrl });

      client.end();
    } catch (error) {
      res.status(200).send(error);
    }
  },
};

export default urlControl;
