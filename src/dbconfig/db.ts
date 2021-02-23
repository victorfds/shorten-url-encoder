import { Pool } from 'pg';

export default new Pool({
  // connectionString: 'postgres://postgres:postgres@172.17.0.2:5432/',
  host: '172.17.0.2',
  user: 'postgres',
  password: 'postgres',
  port: 5432,
  database: 'api',
});
