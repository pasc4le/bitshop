import React, { useEffect } from "react";

const RedirectToForm = () => {
  useEffect(() => {
    window.location.href =
      "https://docs.google.com/forms/d/1gjUFOvNS-35djtsNUn-eFFHGktdzKNtntFRjhZgpH2Y";
  }, []);

  return null;
};

export default RedirectToForm;
