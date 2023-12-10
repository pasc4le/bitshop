import React, { createContext, useState } from "react";

export const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const [emailList, setEmailList] = useState([]);

  return (
    <EmailContext.Provider value={{ emailList, setEmailList }}>
      {children}
    </EmailContext.Provider>
  );
};
