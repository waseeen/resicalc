import { useMemo } from "react";

export const useResistorColors = (resistorColors, stripes) => {
  const resistorColorsVisibility = useMemo(() => {
    if (stripes === "3")
      return {
        ...resistorColors,
        line3: { ...resistorColors.line3, visible: "hidden" },
        line5: { ...resistorColors.line5, visible: "hidden" },
        line6: { ...resistorColors.line6, visible: "hidden" },
      };
    if (stripes === "4")
      return {
        ...resistorColors,
        line3: { ...resistorColors.line3, visible: "hidden" },
        line5: { ...resistorColors.line5, visible: "hidden" },
        line6: { ...resistorColors.line6, visible: "visible" },
      };
    if (stripes === "5")
      return {
        ...resistorColors,
        line3: { ...resistorColors.line3, visible: "visible" },
        line5: { ...resistorColors.line5, visible: "hidden" },
        line6: { ...resistorColors.line6, visible: "visible" },
      };
    if (stripes === "6")
      return {
        ...resistorColors,
        line3: { ...resistorColors.line3, visible: "visible" },
        line5: { ...resistorColors.line5, visible: "visible" },
        line6: { ...resistorColors.line6, visible: "visible" },
      };
    return resistorColors;
  }, [resistorColors, stripes]);
  return resistorColorsVisibility;
};
