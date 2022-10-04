import {cleanEnv, num, str } from 'envalid';
import {config} from 'dotenv';
config({path: `src/envs/.env.${process.env.NODE_ENV}`});

const validateEnv = ()=> {
  return cleanEnv(process.env,  {
    PORT: num(),
    NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging']}),
  });
}

export default validateEnv;