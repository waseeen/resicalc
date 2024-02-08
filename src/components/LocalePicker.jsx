import React from "react";
import Toggle from "./UI/toggle/Toggle";

const LocalePicker = ({ setLocale, selectOptions, defaultLocale }) => {
  return (
    <div className="locale-picker">
      <Toggle
        options={selectOptions}
        toggleName="localeSelection"
        valueChange={(e) => setLocale(e.target.value)}
        defaultValue={defaultLocale}
      />
    </div>
  );
};

export default LocalePicker;
