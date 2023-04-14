import PasswordComp from "./components/PasswordComp";
import PasswordInputForm from "./components/PasswordInputForm";

import "./App.scss";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(10);
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <div className="generator-container">
        <div className="password-container">
          <PasswordComp password={password} />
        </div>
        <div className="main-input-container">
          <PasswordInputForm
            length={length}
            setLength={setLength}
            password={password}
            setPassword={setPassword}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
