import React from "react";
import { data } from "../strengthData";

export default function StrengthContainer({ active, setActive }) {
  const strengthValue = ["TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];
  return (
    <div>
      <div className="strength-container">
        <p>Strength</p>
        <div className="space-between-container">
          <p className="strength-text">{strengthValue[active.length - 1]}</p>
          <div className="strength-selected-container">
            {data.options.map((data, index) => {
              const inRange = active.length - 1 >= index;
              const classComp =
                inRange && active.length <= 1
                  ? "too-weak"
                  : inRange && active.length <= 2
                  ? "weak"
                  : inRange && active.length <= 3
                  ? "medium"
                  : inRange && active.length <= 4
                  ? "strong"
                  : "strength";
              return <div className={classComp}></div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
