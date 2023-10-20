// OAuthComponent.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";

function OAuthComponent() {
  const [code, setCodeRaw] = useState(null);

  useEffect(() => {
    const url = window.location.href;
    const params = new URLSearchParams(new URL(url).search);
    const codeValue = params.get("code");
    setCodeRaw(codeValue);
  }, []);

  const redirectToOAuth = () => {
    window.location.href =
      "https://getalby.com/oauth?client_id=hRWonTARLq&response_type=code&redirect_uri=http://localhost:3000/login&scope=account:read%20invoices:create%20invoices:read%20transactions:read%20balance:read%20payments:send";
  };

  const handleOAuth = async () => {
    // await redirectToOAuth;
    const clientId = "hRWonTARLq";
    const clientSecret = "HHYwwbed3yDBCESdGQoJ";
    const authString = btoa(`${clientId}:${clientSecret}`); // Use btoa instead of Buffer

    console.log("the code is", code);
    // const code = code;
    // const redirectUri =
    // ("https://getalby.com/oauth?client_id=hRWonTARLq&response_type=code&redirect_uri=http://localhost:3000/&scope=account:read invoices:create invoices:read transactions:read balance:read payments:send");
    // const codeVerifier = "<code_verifier>"; // Optional, in case of PKCE
    const redirectUri = "http://localhost:3000/login";

    try {
      const response = await axios({
        method: "post",
        url: "https://api.getalby.com/oauth/token",
        headers: {
          //   Authorization: `Basic ${authString}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: qs.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code,
          grant_type: "authorization_code",
          redirect_uri: redirectUri,
          //   codeRaw,
          //   grant_type: "authorization_code",
          //   redirect_uri: redirectUri,
          //   code_verifier: codeVerifier, // Optional, in case of PKCE
        }),
      });
      console.log("the response is:", response.data); // Handle the response
      console.log("the access token is", response.data.access_token); // Handle the response
      const accessToken = response.data.access_token;
      localStorage.setItem("access_token", accessToken);
      window.location.reload(false); // The argument false denotes that the page should be reloaded from the server, not from the cache
      window.location.reload(false);
      //   // check if exist and get it
      //   if (localStorage.getItem("access_token")) {
      //     const accessToken = localStorage.getItem("access_token");
      //     // ... use accessToken ...
      //   } else {
      //     // ... accessToken not found, prompt user to log in again or handle accordingly ...
      //   }

      //   //delete it
      //   localStorage.removeItem("access_token");
    } catch (error) {
      console.error("Error:", error); // Handle errors
    }
  };

  return <button onClick={handleOAuth}>Get OAuth Token</button>;
}

export default OAuthComponent;
