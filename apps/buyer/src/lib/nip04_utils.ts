import {
  nip04,
  nip06,
  VerifiedEvent,
  finishEvent,
  verifySignature,
  validateEvent,
} from "nostr-tools";
import { ec as EllipticCurve } from "elliptic";

// Define key-pair interface
export interface KeyPair {
  priv: string;
  pub: string;
}

const ec = new EllipticCurve("secp256k1");

export function keyGen(): KeyPair {
  const Alicee = ec.genKeyPair();
  const privAlice: string = Alicee.priv.toBuffer();
  const pubAlice: string = Alicee.getPublic().getX().toString(16);

  return { priv: privAlice, pub: pubAlice };
}

const BLASTR_EP = "http://45.77.57.129:8787/event";

export async function publishEvent(i: VerifiedEvent): Promise<any> {
  const w = ["EVENT", i];
  console.log(w);

  const r = await fetch(BLASTR_EP, { method: "POST", body: JSON.stringify(w) });

  const ok: boolean = r.ok;
  const body: any = await r.json();

  if (!ok) {
    throw new Error("Could not publish event");
  }

  console.log("Event Published");

  return body;
}

// Assuming import statements from the previous example are here.

// Define the Event interface
interface Event {
  pubkey: string;
  created_at: number;
  kind: number;
  tags: [string, string][];
  content: string;
}

// Function to encrypt a message
export async function encryptMessage(
  privAlice: string,
  pubBob: string,
  text: string
): Promise<string | null> {
  try {
    const encryptedData: string = await nip04.encrypt(privAlice, pubBob, text);
    return encryptedData;
  } catch (error) {
    console.error("An error occurred while encrypting the message:", error);
    return null;
  }
}

// Function to decrypt a message
export async function decryptMessage(
  privBob: string,
  pubAlice: string,
  encryptedData: string
): Promise<string | null> {
  try {
    const decryptedText: string = await nip04.decrypt(
      privBob,
      pubAlice,
      encryptedData
    );
    return decryptedText;
  } catch (error) {
    console.error("An error occurred while decrypting the message:", error);
    return null;
  }
}

// Function to create a message event
export function createMessageEvent(
  pubFrom: string,
  pubTo: string,
  encryptedData: string
): Event {
  const event: Event = {
    pubkey: pubFrom,
    created_at: Math.floor(Date.now() / 1000),
    kind: 4,
    tags: [["p", pubTo]],
    content: encryptedData,
  };
  return event;
}

// Function to sign an event
export function signEvent(privKey: string, event: Event): VerifiedEvent {
  const signed: VerifiedEvent = finishEvent(event, privKey);
  //   const signed: VerifiedEvent = finishEvent(event, privKey.toString("hex"));
  const verified: boolean = verifySignature(signed) && validateEvent(signed);

  if (!verified) {
    throw new Error("Event failed verification");
  }

  return signed;
}
