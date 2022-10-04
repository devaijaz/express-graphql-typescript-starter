import validateEnv from "./configurations/validate-env";
import app from './app';
import { logger } from "./configurations/logger";

const env = validateEnv();

app.listen(env.PORT, ()=> {
  logger.info(`Server running on port ${env.PORT}`);
})
