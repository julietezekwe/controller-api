import dotenv from 'dotenv';

dotenv.config();
// required environment variables
[
  'NODE_ENV', 'PORT', 'API_PREFIX',
].forEach((name) => {
  if (!process.env[name]) {
    throw new Error(`Environment variable ${name} is missing`);
  }
});

const config = {
  env: process.env.NODE_ENV,
  hostname: process.env.HOSTNAME,
  secret: process.env.SECRET,
  port: process.env.PORT,
  logs: {
    label: process.env.LOG_LABEL,
    level: process.env.LOG_LEVEL,
    filename: process.env.LOG_FILE,
  },
  api: {
    prefix: process.env.API_PREFIX,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
  rabbitmq: {
    host: process.env.RABBITMQ_HOST,
    port: process.env.RABBITMQ_PORT,
    password: process.env.RABBITMQ_PASSWORD,
    username: process.env.RABBITMQ_USERNAME,
  },
};

export default config;
