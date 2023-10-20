import { RelayHandler, MessageHandler } from "~handlers";

export class Master {
  private databaseConnector: any;
  private relayHandler = new RelayHandler();
  private messageHandler = new MessageHandler();

  constructor() { }
}

export default new Master();
