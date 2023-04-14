import React, { useState } from "react";
import { data } from "../strengthData";
import { getRandomChar, getSpecialChar } from "../characters.js";
import PasswordCheckBox from "./PasswordCheckBox";
import StrengthContainer from "./StrengthContainer";
import "../styles/PasswordInputForm.scss";

export default function PasswordInputForm({
  length,
  setLength,
  password,
  setPassword,
}) {
  const [active, setActive] = useState([]);

  const fieldsArray = [
    {
      field: active.includes(data.options[0].id),
      getChar: () => getRandomChar(65, 90),
    },
    {
      field: active.includes(data.options[1].id),
      getChar: () => getRandomChar(97, 122),
    },
    {
      field: active.includes(data.options[2].id),
      getChar: () => getRandomChar(48, 57),
    },
    {
      field: active.includes(data.options[3].id),
      getChar: () => getSpecialChar(),
    },
  ];
  console.log(active.includes(data.options[0].id));

  return (
    <div className="form-container">
      <div className="range-container">
        <div className="character-length-container">
          <p>Character Length</p>
          <p>{length}</p>
        </div>
        <input
          id="password-length"
          type="range"
          max="20"
          min="1"
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
      </div>
      <PasswordCheckBox active={active} setActive={setActive} />
      <StrengthContainer active={active} setActive={setActive} />
      <div className="button-container">
        <button
          onClick={(e) => {
            let generatedPassword = "";
            const checkedFields = fieldsArray.filter(({ field }) => field);

            for (let i = 0; i < length; i++) {
              const index = Math.floor(Math.random() * checkedFields.length);
              const letter = checkedFields[index]?.getChar();

              if (letter) {
                generatedPassword += letter;
              }
            }
            if (generatedPassword) {
              setPassword(generatedPassword);
            }
          }}
        >
          GENERATE
        </button>
      </div>
    </div>
  );
}
