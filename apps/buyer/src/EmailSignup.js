import React, { useState, useContext } from "react";
import { EmailContext } from "./EmailContext";

function EmailSignUp() {
  const [email, setEmail] = useState("");
  const { emailList, setEmailList } = useContext(EmailContext);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignUp = () => {
    // Simple email validation regex, you might want to use a more robust solution
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(email)) {
      setEmailList([...emailList, email]); // Update the email list in the context
      setEmail(""); // Optional: Clear the input after signup
      //   alert("Success! You have signed up with the email: " + email);
      // Here you would send the email to the server to save it to a file
      // Example: saveEmailToFile(email);
      fetch("https://bitshop.fadibarbara.it/save-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      })
        .then((response) => response.text())
        .then((data) => {
          alert("Success! You have been signed up.");
          //   alert("Success: " + data);
        })
        .catch((error) => {
          alert("Error: " + error);
        });
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter your email address"
        aria-label="Email address"
        aria-describedby="basic-addon2"
        pattern="\S+@\S+\.\S+"
        title="Please enter a valid email address."
        onChange={handleInputChange}
      />
      <span
        className="input-group-text"
        id="basic-addon2"
        onClick={handleSignUp}
      >
        Sign up
      </span>
    </div>
  );
}

export default EmailSignUp;
