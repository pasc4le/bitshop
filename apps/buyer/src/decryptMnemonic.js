import { Buffer } from "buffer";
import React, { useState } from "react";
// import bip39 from "bip39";
import { generateMnemonic } from "bip39";
import axios from "axios";
import CryptoJS from "crypto-js";

global.Buffer = Buffer;

export function DecryptMnemonic() {
  const [password, setPassword] = useState("");
  const [mnemonic, setMnemonic] = useState(null);
  const [error, setError] = useState(null);

  const getMnemonic = (password) => {
    const encryptedMnemonic = localStorage.getItem("encryptedMnemonic");
    if (!encryptedMnemonic) {
      throw new Error("No encrypted mnemonic found");
    }
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedMnemonic, password);
      const mnemonic = bytes.toString(CryptoJS.enc.Utf8);
      if (!mnemonic) {
        throw new Error("Failed to decrypt mnemonic or wrong password");
      }
      return mnemonic;
    } catch (error) {
      console.error("Decryption error:", error.message);
      throw error;
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    try {
      const decryptedMnemonic = getMnemonic(password);
      setMnemonic(decryptedMnemonic);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="decrypt-mnemonic">
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {mnemonic && <div>Your mnemonic: {mnemonic}</div>}
    </div>
  );
}

export default DecryptMnemonic;
