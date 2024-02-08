import React from "react";
import Toggle from "./UI/toggle/Toggle";

const StripesSelector = ({
  text,
  defaultStripes,
  setStripes,
  stripesOptions,
}) => {
  return (
    <div className="stripes-selector">
      {text}
      <Toggle
        options={stripesOptions}
        toggleName="stripesSelection"
        valueChange={(e) => setStripes(e.target.value)}
        defaultValue={defaultStripes}
      />
    </div>
  );
};

export default StripesSelector;
