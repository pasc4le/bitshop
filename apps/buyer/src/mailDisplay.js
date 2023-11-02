import { useContext } from "react";
import { EmailContext } from "./EmailContext";

function EmailListPage() {
  const { emailList } = useContext(EmailContext);

  return (
    <div>
      <h3>Email List:</h3>
      <ul>
        {emailList.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
    </div>
  );
}

export default EmailListPage;
