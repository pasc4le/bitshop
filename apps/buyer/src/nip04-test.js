// const { nip04, nip06 } = require("nostr-tools");
// const EllipticCurve = require("elliptic").ec;
// // const crypto = require("crypto-browserify");
// const webcrypto = require("crypto").webcrypto;
// // import * as Nostr from "nostr-tools";
// const Nostr = require("nostr-tools");
console.log("Current Directory:", process.cwd());

// USAGE:
// 1. do `tsc -module commonjs nip04_utils.ts` inside `lib`
// 2. `node nip04-test.js` inside `src`

const nip04utils = require("./lib/nip04_utils");

// privAlice = Alice.priv.toString(16);
const Alice = nip04utils.keyGen();
// console.log(`Alice private key:\n${Alice.priv.hexslice()}`);
// console.log(`Alice public key:\n${Alice.pub}`);

const Bob = nip04utils.keyGen();
// pubBob = getCompressedPublicKey(pubBob);
// console.log(`Bob private key:\n ${Bob.priv.hexslice()}`);
// console.log(`Bob public key:\n ${Bob.pub}`);

const text = "ciao a tutti";
console.log("text to encrypt" + text);

nip04utils
  .encryptMessage(Alice.priv, Bob.pub, text)
  .then((encrypted) => {
    console.log(encrypted); // Do something with the encrypted data
    const event = nip04utils.createMessageEvent(Alice.pub, Bob.pub, encrypted);
    // console.log(event);
    const signedEvent = nip04utils.signEvent(Alice.priv, event);

    nip04utils.publishEvent(signedEvent).then((body) => {
      console.log(body);
    });
  })
  .catch(console.error); // Catch and log the error
