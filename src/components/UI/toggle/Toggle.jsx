import React from "react";
const Toggle = ({
  options,
  valueChange,
  toggleName,
  defaultValue,
  vertical,
  hidden,
}) => {
  return (
    <div
      onChange={valueChange}
      className={
        "toggle" +
        (vertical ? " toggle_vertical" : "") +
        (hidden ? " toggle_hidden" : "")
      }
    >
      {options.map((option) => {
        return option.value === defaultValue ? (
          <div className="toggle__option" key={option.value}>
            <input
              className="toggle__input"
              type="radio"
              value={option.value}
              id={option.value}
              key={option.value}
              name={toggleName}
              defaultChecked
            ></input>
            <label
              className="toggle__label"
              key={option.value + "_label"}
              htmlFor={option.value}
            >
              {option.title}
            </label>
          </div>
        ) : (
          <div className="toggle__option" key={option.value}>
            <input
              className="toggle__input"
              type="radio"
              value={option.value}
              id={option.value}
              key={option.value}
              name={toggleName}
            />
            <label
              className="toggle__label"
              key={option.value + "_label"}
              htmlFor={option.value}
            >
              {option.title}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Toggle;
