import React, { useState, useContext } from "react";
import { EmailContext } from "./EmailContext";
function EmailSignUp() {
  const { setEmailList } = useContext(EmailContext);
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignUp = () => {
    // Simple email validation regex, you might want to use a more robust solution
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(email)) {
      alert("Success! You have signed up with the email: " + email);
      // Here you would send the email to the server to save it to a file
      // Example: saveEmailToFile(email);
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
