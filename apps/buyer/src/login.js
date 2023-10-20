import React, { useState, useEffect } from "react";
import OAuthComponent from "./OAuthComponent"; // Adjust the path to match the file location of OAuthComponent.js
import axios from "axios";

// Utility Functions
const enableWebLn = async () => {
  try {
    if (window.webln) {
      const response = await window.webln.enable();
      console.log("webln enabled:", response);
    } else {
      console.error("webln not available");
    }
  } catch (error) {
    console.error("Error enabling webln:", error);
  }
};

const redirectToOAuth = () => {
  const currentDomain = window.location.origin;
  const baseOAuthURL = "https://getalby.com/oauth?";
  const params = new URLSearchParams({
    client_id: "hRWonTARLq",
    response_type: "code",
    redirect_uri: `${currentDomain}/login`,
    scope:
      "account:read invoices:create invoices:read transactions:read balance:read payments:send",
  });

  window.location.href = `${baseOAuthURL}${params.toString()}`;
};

// const redirectToOAuth = () => {
//   window.location.href =
//     "https://getalby.com/oauth?client_id=hRWonTARLq&response_type=code&redirect_uri=http://localhost:3000/login&scope=account:read%20invoices:create%20invoices:read%20transactions:read%20balance:read%20payments:send";
// };

const handleErrorResponse = (error) => {
  if (error.response && error.response.status === 401) {
    console.error("Token is no longer valid");
    localStorage.removeItem("access_token");
    window.location.reload(false);
  } else {
    console.error(
      "Error fetching data:",
      error.response ? error.response.data : error.message
    );
  }
};

const makeAuthenticatedRequest = async (url) => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
      return response.data; // Return the response data
    } catch (error) {
      handleErrorResponse(error);
    }
  } else {
    console.error("No access token found");
  }
  return null; // Return null if the request failed
};

const fetchAndLogData = async (url) => {
  const data = await makeAuthenticatedRequest(url);
  if (data) {
    console.log(data);
  }
};

const fetchBalance = () => fetchAndLogData("https://api.getalby.com/balance");
const fetchUserPersonal = () =>
  fetchAndLogData("https://api.getalby.com/user/me");
const fetchUserSummary = () =>
  fetchAndLogData("https://api.getalby.com/user/summary");
const fetchUserInfo = () =>
  fetchAndLogData("https://api.getalby.com/user/value4value");

// Component
class SignInComponent extends React.Component {
  // handleSignIn = () => {
  //   enableWebLn();
  // };

  handleClick = () => {
    redirectToOAuth();
  };

  renderButtons = () => {
    const buttonHandlers = {
      "get Balance": fetchBalance,
      "get user info": fetchUserInfo,
      "get user summary": fetchUserSummary,
      "get user personal": fetchUserPersonal,
    };

    return Object.entries(buttonHandlers).map(([label, handler], index) => (
      <button key={index} onClick={handler}>
        {label}
      </button>
    ));
  };

  render() {
    if (!localStorage.getItem("access_token")) {
      return (
        <div>
          <button onClick={this.handleClick}>Sign In</button>;
          <OAuthComponent /> {/* This line renders the OAuthComponent */}
        </div>
      );
    } else {
      return <div>{this.renderButtons()}</div>;
    }
  }
}

export default SignInComponent;
