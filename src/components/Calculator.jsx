import React from "react";
import { format } from "../utils/format";
import { Colors } from "../utils/settings";
const Digit = {
  [Colors.black]: 0, // black
  [Colors.brown]: 1, // brown
  [Colors.red]: 2, // red
  [Colors.orange]: 3, // orange
  [Colors.yellow]: 4, // yellow
  [Colors.green]: 5, // green
  [Colors.blue]: 6, // blue
  [Colors.violet]: 7, // violet
  [Colors.grey]: 8, // grey
  [Colors.white]: 9, // white
  [Colors.gold]: -1, // gold
  [Colors.silver]: -2, // silver
};
const Tolerance = {
  [Colors.black]: "", // black
  [Colors.brown]: "+-1", // brown
  [Colors.red]: "+-2", // red
  [Colors.orange]: "+-3", // orange
  [Colors.yellow]: "+-4", // yellow
  [Colors.green]: "+-0.5", // green
  [Colors.blue]: "+-0.25", // blue
  [Colors.violet]: "+-0.1", // violet
  [Colors.grey]: "+-0.5", // grey
  [Colors.white]: "+-1", // white
  [Colors.gold]: "+-5", // gold
  [Colors.silver]: "+-10", // silver
};
const Temperature = {
  [Colors.black]: "250", // black
  [Colors.brown]: "100", // brown
  [Colors.red]: "50", // red
  [Colors.orange]: "15", // orange
  [Colors.yellow]: "25", // yellow
  [Colors.green]: "20", // green
  [Colors.blue]: "10", // blue
  [Colors.violet]: "5", // violet
  [Colors.grey]: "1", // grey
  [Colors.white]: "", // white
  [Colors.gold]: "", // gold
  [Colors.silver]: "", // silver
};
const Calculator = ({ resistorColors, stripes, usedLocale }) => {
  let value = 0;
  let tolerance = "";
  let temp = "";
  if (stripes === "3") {
    value =
      (Digit[resistorColors.line1.color] * 10 +
        Digit[resistorColors.line2.color]) *
      Math.pow(10, Digit[resistorColors.line4.color]);
  }
  if (stripes === "4") {
    value =
      (Digit[resistorColors.line1.color] * 10 +
        Digit[resistorColors.line2.color]) *
      Math.pow(10, Digit[resistorColors.line4.color]);
    tolerance = Tolerance[resistorColors.line6.color];
  }
  if (stripes === "5") {
    value =
      (Digit[resistorColors.line1.color] * 100 +
        Digit[resistorColors.line2.color] * 10 +
        Digit[resistorColors.line3.color]) *
      Math.pow(10, Digit[resistorColors.line4.color]);
    tolerance = Tolerance[resistorColors.line6.color];
  }
  if (stripes === "6") {
    value =
      (Digit[resistorColors.line1.color] * 100 +
        Digit[resistorColors.line2.color] * 10 +
        Digit[resistorColors.line3.color]) *
      Math.pow(10, Digit[resistorColors.line4.color]);
    tolerance = Tolerance[resistorColors.line5.color];
    temp = Temperature[resistorColors.line6.color];
  }

  return (
    <div className="calculator">
      <span>
        {usedLocale.resistance}: {format(value, 2)}Ω
      </span>
      {tolerance ? (
        <>
          <br />
          {`${usedLocale.tolerance}: ${tolerance}%`}
        </>
      ) : (
        ""
      )}
      {temp ? (
        <>
          <br />
          {`${usedLocale.temp}: ${temp}ppm/°C`}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Calculator;
