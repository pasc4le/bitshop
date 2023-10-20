import { nip04, nip06 } from "nostr-tools";
const EllipticCurve = require("elliptic").ec;

const ec = new EllipticCurve("secp256k1");

Alice = ec.genKeyPair();
privAlice = Alice.priv.toString(16);
pubAlice = Alice.getPublic().encode("hex");
console.log(`Alice private key:\n$(privAlice)`);
console.log(`Alice public key:\n$(pubAlice)`);

Bob = ec.genKeyPair();
privBob = Bob.priv.toString(16);
pubBob = Bob.getPublic().encode("hex");
console.log(`Bob private key:\n$(privBob)`);
console.log(`Bob public key:\n$(pubBob)`);

const text = "cioa a tutti";
