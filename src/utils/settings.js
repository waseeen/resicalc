export const Colors = {
  black: "#0e0e10",
  brown: "#784a2a",
  red: "#9d2825",
  orange: "#e97635",
  yellow: "#eeb32c",
  green: "#6a9742",
  blue: "#317eae",
  violet: "#756a98",
  grey: "#7c888e",
  white: "#e1d8c7",
  gold: "#f9d433",
  silver: "#c0c0c0",
};

export const defResistorColors = {
  line1: {
    number: 1,
    color: Colors.brown,
    visible: "visible",
    name: "First digit",
  },
  line2: {
    number: 2,
    color: Colors.black,
    visible: "visible",
    name: "Second digit",
  },
  line3: {
    number: 3,
    color: Colors.orange,
    visible: "visible",
    name: "Third digit",
  },
  line4: {
    number: 4,
    color: Colors.red,
    visible: "visible",
    name: "Multiplier",
  },
  line5: {
    number: 5,
    color: Colors.gold,
    visible: "hidden",
    name: "Tolerance",
  },
  line6: {
    number: 6,
    color: Colors.brown,
    visible: "hidden",
    name: "Temperature coefficient",
  },
};
