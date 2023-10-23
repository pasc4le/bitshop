const { nip04, nip06 } = require("nostr-tools");
const EllipticCurve = require("elliptic").ec;
const crypto = require("crypto-browserify");
const webcrypto = require("crypto").webcrypto;
// import * as Nostr from "nostr-tools";
const Nostr = require("nostr-tools");

const ec = new EllipticCurve("secp256k1");

function keyGen() {
  Alicee = ec.genKeyPair();
  privAlice = Alicee.priv.toBuffer();
  pubAlice = Alicee.getPublic().getX().toString(16);
  //   return [privAlice, pubAlice];
  return { priv: privAlice, pub: pubAlice };
}

const BLASTR_EP = "http://127.0.0.1:8787/event";

// async function publishEvent(i: Nostr.VerifiedEvent) {
async function publishEvent(i) {
  const w = ["EVENT", i];
  console.log(w);
  const r = await fetch(BLASTR_EP, { method: "POST", body: JSON.stringify(w) });

  const [ok, body] = [r.ok, await r.json()];

  if (!ok) {
    throw new Error("Could not publish event");
  }

  console.log("Event Published");

  return body;
}

// privAlice = Alice.priv.toString(16);
const Alice = keyGen();
// console.log(`Alice private key:\n${Alice.priv.hexslice()}`);
// console.log(`Alice public key:\n${Alice.pub}`);

const Bob = keyGen();
// pubBob = getCompressedPublicKey(pubBob);
// console.log(`Bob private key:\n ${Bob.priv.hexslice()}`);
// console.log(`Bob public key:\n ${Bob.pub}`);

const text = "cioa a tutti";

async function encryptMessage(privAlice, pubBob, text) {
  try {
    const encryptedData = await nip04.encrypt(privAlice, pubBob, text);
    return encryptedData;
  } catch (error) {
    console.error("An error occurred while encrypting the message:", error);
    return null;
  }
}

async function decryptMessage(privBob, pubAlice, encryptedData) {
  try {
    const decryptedText = await nip04.decrypt(privBob, pubAlice, encryptedData);
    return decryptedText;
  } catch (error) {
    console.error("An error occurred while decrypting the message:", error);
    return null;
  }
}

function createMessageEvent(pubFrom, pubTo, encryptedData) {
  let event = {
    pubkey: pubFrom,
    created_at: Math.floor(Date.now() / 1000),
    kind: 4,
    tags: [["p", pubTo]],
    content: encryptedData,
  };
  return event;
}

function signEvent(privKey, event) {
  const signed = Nostr.finishEvent(event, privKey.hexSlice());
  const verified = Nostr.verifySignature(signed) && Nostr.validateEvent(signed);

  if (!verified) {
    throw new Error("Event failed verification");
  }

  return signed;
}

// async sendText(privFrom, pub)

// const encryptedMessage = encryptMessage(Alice.priv, Bob.pub, text);
// console.log(encryptedMessage);

encryptMessage(Alice.priv, Bob.pub, text)
  .then((encrypted) => {
    console.log(encrypted); // Do something with the encrypted data
    const event = createMessageEvent(Alice.pub, Bob.pub, encrypted);
    // console.log(event);
    const signedEvent = signEvent(Alice.priv, event);

    publishEvent(signedEvent).then((body) => {
      console.log(body);
    });
  })
  .catch(console.error); // Catch and log the error
