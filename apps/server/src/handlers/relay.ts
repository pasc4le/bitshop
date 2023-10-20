
const QUEUE_FLUSH_MS = 5000;
const CACHE_MAX_ELEMENTS = 1000;

export class RelayHandler {
  private queue = new Set();
  private cache = new Set();

  // Flush everything to db
  private flushQueue() {
  }

}
