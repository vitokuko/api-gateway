import * as dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

// Environment
const NODE_ENV: string = process.env.NODE_ENV;

// Application
const DOMAIN: string = process.env.DOMAIN;
const PORT: number = +process.env.PORT;
const SERVICE_PREFIX: string = process.env.SERVICE_PREFIX;

// Services
const SERVICE_USER_NAME: string = process.env.SERVICE_USER_NAME;
const SERVICE_USER_URL: string = process.env.SERVICE_USER_URL;

// JWT
const SECRET_TOKEN_KEY: string = process.env.SECRET_TOKEN_KEY;

export {
  NODE_ENV,
  DOMAIN,
  PORT,
  SERVICE_PREFIX,
  SERVICE_USER_NAME,
  SERVICE_USER_URL,
  SECRET_TOKEN_KEY,
};
