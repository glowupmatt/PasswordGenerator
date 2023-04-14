import React from "react";
import "../styles/PasswordComp.scss";
import { toast } from "react-hot-toast";

export default function PasswordComp({ password }) {
  const handleClipboard = async () => {
    if (password) {
      await navigator.clipboard.writeText(password);
      toast.success("Copied to your clipboard");
    } else {
      toast.error("No password to copy");
    }
  };
  return (
    <div className="password-copy-container">
      <input type="text" placeholder="PASSWORD" value={password}></input>
      <button onClick={handleClipboard}>
        <img src="/assets/images/icon-copy.svg" />
      </button>
    </div>
  );
}
