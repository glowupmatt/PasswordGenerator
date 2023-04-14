import React from "react";
import { data } from "../strengthData";

export default function PasswordCheckBox({ active, setActive }) {
  return (
    <div>
      <div className="checkbox-container">
        {data.options.map((data, index) => {
          return (
            <>
              <div className="checkbox-data">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={data.checked}
                  onClick={() => {
                    if (!active.includes(data.id)) {
                      setActive((prev) => {
                        return [...prev, data.id];
                      });
                    } else {
                      setActive((prev) => {
                        const idFilter = prev.filter((id) => id !== data.id);
                        return idFilter;
                      });
                    }
                  }}
                />
                <label>{data.name}</label>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
