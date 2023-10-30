// import { RelayHandler, MessageHandler } from "~handlers";
// export class Master {
//   private databaseConnector: any;
//   private relayHandler = new RelayHandler();
//   private messageHandler = new MessageHandler();
//
//   constructor() { }
// }
//
// export default new Master();

import { App, HttpResponse } from "uWebSockets.js";
import { env } from "~env";
import cities from '~assets/cities.json';

type City = {
  country: string;
  name: string;
  lat: string;
  lng: string;
}

const app = App();

let reqNum = 0;
let cache: Record<string, City[]> = {};

function sendJson(res: HttpResponse, data: object) {
  res
    .writeHeader('Content-Type', 'application-json')
    .writeHeader('Access-Control-Allow-Origin', '*')
    .writeStatus('200 OK')
    .end(
      JSON.stringify(data)
    )
}

function findHit(name: string) {
  let slice: string;
  for (const i of Array(name.length - env.MIN_HIT_LEN).keys()) {
    slice = name.slice(env.MIN_HIT_LEN, i + 1);
    if (cache[slice]) return cache[slice]
  }
}

function checkCacheExpiry() {
  reqNum++;
  if (reqNum >= env.MAX_CACHE) cache = {};
}

app.get('/api/cities', (res, req) => {
  checkCacheExpiry();

  const query = new URLSearchParams(req.getQuery());

  const name = query.get('name');
  if (!name || name.length < env.MIN_HIT_LEN) {
    res.writeStatus("400 Bad Request").end('Bad Request');
    return;
  }

  const cacheHit = findHit(name);
  if (cacheHit) {
    sendJson(res, cacheHit);
    return;
  }

  const matches = (cities as City[]).filter((city) => city.name.match(`.*${name}.*`));

  cache[name] = matches;
  sendJson(res, matches);
})

app.listen(env.HOST, env.PORT, (socket) => {
  if (socket) console.log(`Server is listening on port ${env.PORT}`);
})
