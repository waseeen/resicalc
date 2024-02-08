import React from "react";
import Toggle from "./UI/toggle/Toggle";

const ColorSelector = ({ resistorColors, setColor, colorOptions }) => {
  return (
    <div className="color-selector">
      {Object.getOwnPropertyNames(resistorColors).map((color, i) => {
        const thisColorOptions = colorOptions[i];
        return resistorColors[color].visible === "visible" ? (
          <Toggle
            options={thisColorOptions}
            valueChange={(e) => {
              setColor([resistorColors[color].number, e.target.value]);
            }}
            toggleName={`color${resistorColors[color].number}Selector`}
            defaultValue={`${resistorColors[color].number}${resistorColors[color].color}`}
            key={`color${resistorColors[color].number}Selector`}
            vertical
          />
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default ColorSelector;
