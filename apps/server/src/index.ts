import { env } from "~env";
import logger from 'bitshop-logger';
import { App } from "uWebSockets.js";

const app = App();

app.get('/', async (res, _req) => {
  res.end('Hello, world');
})

app.listen(env.HOST, env.PORT, (socket) => {
  if (socket) logger.info(`Server is listening on port ${env.PORT}`);
})
