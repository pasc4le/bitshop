import { env } from "~env";
import logger from "bitshop-logger";
import { Buyer } from "~types/Buyer";
import { App, DEDICATED_COMPRESSOR_256KB, WebSocket } from "uWebSockets.js";

export class MessageHandler {
  public app = App();
  private privateKey = env.PRIVATE_KEY;

  constructor() {
    this.app.ws<Buyer>('/*', {
      compression: DEDICATED_COMPRESSOR_256KB,
      message: this.message,
      open: this.open
    })

    this.app.get('/merchant/public-key', async (res, req) => {
      res
        .writeHeader('Content-Type', 'application/json')
        .end(JSON.stringify({ publicKey: env.PUBLIC_KEY }));
    })

    this.app.listen(env.HOST, env.PORT, (socket) => {
      if (socket) logger.info(`Server is listening on port ${env.PORT}`);
    })
  }


  public async open(ws: WebSocket<Buyer>) {
    // this.decryptProducts()
  }

  public async message(ws: WebSocket<Buyer>, data: ArrayBuffer) {
    const secret = data;

    // Decode data using protobuf
    // const decoded = data.decode();
    // decoded.


  }
}

