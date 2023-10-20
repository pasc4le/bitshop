import { Buffer } from "buffer";
import React, { useState } from "react";
import { generateMnemonic } from "bip39";
import axios from "axios";
import CryptoJS from "crypto-js";
import { nip06, nip19 } from "nostr-tools";
// import { EC as EllipticCurve } from "elliptic";
// import EllipticCurve from "elliptic";
const EllipticCurve = require("elliptic").ec;

global.Buffer = Buffer;

function Registration() {
  const [username, setUsername] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true); // New state for email validation
  const [seed, setSeed] = useState(null);

  const [password, setPassword] = useState("");
  const [step, setStep] = useState(0); // 0 for seed generation, 1 for verification
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // const [countdown, setCountdown] = useState(null);

  // Define a helper function to collect mouse movements
  let mouseMovements = "";
  const handleMouseMove = (event) => {
    mouseMovements += `${event.clientX},${event.clientY};`;
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setUsername(email);

    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  };

  const nsecGen = (mnemonic, password) => {
    const priv = nip06.privateKeyFromSeedWords(mnemonic);
    const ec = new EllipticCurve("secp256k1");
    const keyPair = ec.keyFromPrivate(priv, "hex");

    const pub = keyPair.getPublic("hex");

    const nsec = nip19.nsecEncode(priv);
    const npub = nip19.npubEncode(pub.substring(2, 66));

    //TODO: remove them; just for dev
    console.log("nsec:", nsec);
    console.log("npub:", npub);

    const encryptednsec = CryptoJS.AES.encrypt(nsec, password).toString();
    localStorage.setItem("encryptednsec", encryptednsec);
    localStorage.setItem("npub", npub);

    // console.log("prova usando dati di alby");
    // const nsecAlby =
    //   "nsec1dtzgr8nuy95kx8nxhckecrdr40fuvt2vanmjct62usmx5qqdvr9s72hczh";
    // const npubAlby =
    //   "npub1lpgqlw4xg3hw6exjdjv2dc5muk2ecmjshqy7adfgmk42ha2lsg5sd8c4h0";

    // console.log("pre nsec decoded");
    // const nsecDecoded = nip19.decode(nsecAlby);
    // console.log("nsecDecoded:", nsecDecoded.data);
    // console.log("post nsec decoded");

    // console.log("pre keypair");
    // const keyPairAlby = ec.keyFromPrivate(nsecDecoded.data, "hex");
    // console.log("post keypair");

    // const pubAlby = keyPairAlby.getPublic("hex");
    // console.log("pubAlby:", pubAlby);

    // console.log("pubAlby lunght", pubAlby.length);
    // console.log("a:", pubAlby.substring(0, 2));
    // console.log("b:", pubAlby.substring(2, 66));
    // console.log("c:", pubAlby.substring(66, 130));

    // const npubAlbyNew66 = nip19.npubEncode(pubAlby.substring(0, 66));
    // const npubAlbyNew64 = nip19.npubEncode(pubAlby.substring(2, 66));
    // const npubAlbyNew130 = nip19.npubEncode(pubAlby);

    // console.log("npubAlbyNew64", npubAlbyNew64);
    // console.log("npubAlbyNew66", npubAlbyNew66);
    // console.log("npubAlbyNew130", npubAlbyNew130);
    // console.log("npubAlbyorig", npubAlby);
  };

  const verifyWords = () => {
    const seedWords = seed.split(" ");
    let isCorrect = true;

    selectedIndices.forEach((index, i) => {
      if (seedWords[index] !== inputValues[i]) {
        isCorrect = false;
      }
    });

    if (!isCorrect) {
      setErrorMessage("One or more words are incorrect.");
      setSuccessMessage(null);
    } else {
      // Move to the next step in your process
      setErrorMessage(null);
      setSuccessMessage("Good! you are now registered!");

      console.log("Verification successful. Move to the next step.");
    }
  };

  const KGen = (password) => {
    if (!password) {
      throw new Error("Password is required");
    }
    const mnemonic = generateMnemonic();
    const encryptedMnemonic = CryptoJS.AES.encrypt(
      mnemonic,
      password
    ).toString();
    localStorage.setItem("encryptedMnemonic", encryptedMnemonic);

    console.log("mnemonic:", mnemonic);
    return mnemonic;
  };

  const handleRegister = async () => {
    // Generate seed (if necessary, though this is not utilized in the current workflow)

    // Create SHA-256 hash of the password
    const passwdHash = new TextEncoder().encode(password);
    const digest = await crypto.subtle.digest("SHA-256", passwdHash);
    const hashArray = Array.from(new Uint8Array(digest));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    try {
      const seed2 = KGen(password);
      setSeed(seed2);
      setStep(1);

      const nsec = nsecGen(seed2, password);

      // Randomly select 4 unique indices from the seed words
      const indices = [];
      const words = seed2.split(" ");
      while (indices.length < 4) {
        const randIndex = Math.floor(Math.random() * words.length);
        if (!indices.includes(randIndex)) {
          indices.push(randIndex);
        }
      }
      setSelectedIndices(indices.sort((a, b) => a - b));
    } catch (error) {
      console.error("Error generating seed:", error.message);
      // Handle error, e.g., display an error message to the user
    }

    // try {
    // } catch (error) {
    //   console.error("Error generating mnemonic:", error.message);
    //   // Handle error, e.g., display an error message to the user
    // }
    // Send username and password hash to the server (now saving locally)
    try {
      // Saving credentials to localStorage
      try {
        if (!username & isValidEmail) {
          throw new Error("Email is required");
        }
        localStorage.setItem("email", username);
        // ... rest of your code
      } catch (error) {
        console.error("Error:", error.message);
        // Handle error, e.g., display an error message to the user
      }

      localStorage.setItem("passwdHash", hashHex);

      // Optionally, you could create a response object to mimic server behavior
      const response = { data: { message: "Registration successful" } };
      // console.log(response.data.message);
      // alert(response.data.message);

      // Handle successful registration, e.g., navigate to a different page
    } catch (error) {
      // Handle registration error, e.g., display an error message
      console.error("Registration error:", error);
    }

    //   // Send username and password hash to the server
    //   try {
    //     const response = await axios.post("/saveCreds", {
    //       email: username,
    //       passwdHash: hashHex,
    //     });
    //     // Handle successful registration, e.g., navigate to a different page
    //   } catch (error) {
    //     // Handle registration error, e.g., display an error message
    //     console.error("Registration error:", error);
    //   }
  };

  return (
    <div className="registration">
      <button
        onClick={() => {
          /* navigate to login form */
        }}
      >
        Login
      </button>{" "}
      {/* New Login button */}
      <button
        onClick={() => {
          /* navigate to registration form */
        }}
      >
        Register
      </button>
      {step === 0 && (
        <div className="registration-form">
          <input
            type="email"
            value={username}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
          {!isValidEmail && (
            <div style={{ color: "red" }}>A valid email is required</div>
          )}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          {/* Placeholder for password checks */}
          <button onClick={handleRegister}>Submit</button>
        </div>
      )}
      {/* removed because we use bip39  */}
      {/* {countdown !== null && (
        <div className="countdown-alert">
          Move your mouse randomly for {countdown} seconds
        </div>
      )} */}
      {/* Code to display seed words */}
      {step === 1 && (
        <>
          <div className="note">
            Write the seed somewhere because you will be asked for it in the
            next step.
          </div>
          <div className="seed-list">
            {seed.split(" ").map((word, index) => (
              <div className="seed-item" key={index}>
                {`${index + 1}. ${word}`}
              </div>
            ))}
          </div>
          <button onClick={() => setStep(2)}>Next >></button>
        </>
      )}
      {/* {seed && (
        <div className="seed-list">
          {seed.split(" ").map((word, index) => (
            <div className="seed-item" key={index}>
              {`${index + 1}. ${word}`}
            </div>
          ))}
        </div>
      )} */}
      {step === 2 && (
        <>
          {selectedIndices.map((index, i) => (
            <div key={i}>
              <label>{`Word ${index + 1}: `}</label>
              <input
                type="text"
                onChange={(e) =>
                  setInputValues({ ...inputValues, [i]: e.target.value })
                }
              />
            </div>
          ))}
          <button onClick={verifyWords}>Verify</button>
          {(errorMessage && (
            <div style={{ color: "red" }}>{errorMessage}</div>
          )) ||
            (successMessage && (
              <div style={{ color: "green" }}>{successMessage}</div>
            ))}
        </>
      )}
    </div>
  );
}

export default Registration;
