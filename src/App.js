import React, { useMemo, useState, useEffect } from "react";
import Resistor from "./components/Resistor";

import "./style.css";
import { getLocale } from "./locales/getLocale";
import LocalePicker from "./components/LocalePicker";
import { useResistorColors } from "./hooks/useResistorColors";
import StripesSelector from "./components/StripesSelector";
import ColorSelector from "./components/ColorSelector";
import Calculator from "./components/Calculator";
import { defResistorColors, Colors } from "./utils/settings";

const App = () => {
  const localeOptions = [
    { title: "Ru", value: "ru_RU" },
    { title: "En", value: "en_EN" },
  ];
  const latestLocale = localStorage.getItem("lastLocale") ?? "ru_RU";
  const latestStripes = localStorage.getItem("lastStripes") ?? "4";
  useEffect(() => {
    if (!latestLocale) {
      localStorage.setItem("lastLocale", "ru_RU");
    }
    if (!latestStripes) {
      localStorage.setItem("lastStripes", "4");
    }
  }, [latestLocale, latestStripes]);
  const updateLocale = (l) => {
    localStorage.setItem("lastLocale", l);
    setLocale(l);
  };
  const updateStripes = (stripes) => {
    localStorage.setItem("lastStripes", stripes);
    setStripes(stripes);
  };
  const [locale, setLocale] = useState(latestLocale);
  const [stripes, setStripes] = useState(latestStripes);
  const usedLocale = useMemo(() => {
    return getLocale(locale);
  }, [locale]);

  const stripesOptions = useMemo(() => {
    return [
      { title: "3 " + usedLocale.stripes, value: "3" },
      { title: "4 " + usedLocale.stripes, value: "4" },
      { title: "5 " + usedLocale.stripes2, value: "5" },
      { title: "6 " + usedLocale.stripes2, value: "6" },
    ];
  }, [usedLocale]);

  const eachColorOptions = useMemo(() => {
    return [
      ...[1, 2, 3].map((n) => {
        return [
          { title: usedLocale.black, value: n + Colors.black },
          { title: usedLocale.brown, value: n + Colors.brown },
          { title: usedLocale.red, value: n + Colors.red },
          { title: usedLocale.orange, value: n + Colors.orange },
          { title: usedLocale.yellow, value: n + Colors.yellow },
          { title: usedLocale.green, value: n + Colors.green },
          { title: usedLocale.blue, value: n + Colors.blue },
          { title: usedLocale.violet, value: n + Colors.violet },
          { title: usedLocale.grey, value: n + Colors.grey },
          { title: usedLocale.white, value: n + Colors.white },
        ];
      }),
      ...[4, 5, 6].map((n) => {
        return [
          { title: usedLocale.black, value: n + Colors.black },
          { title: usedLocale.brown, value: n + Colors.brown },
          { title: usedLocale.red, value: n + Colors.red },
          { title: usedLocale.orange, value: n + Colors.orange },
          { title: usedLocale.yellow, value: n + Colors.yellow },
          { title: usedLocale.green, value: n + Colors.green },
          { title: usedLocale.blue, value: n + Colors.blue },
          { title: usedLocale.violet, value: n + Colors.violet },
          { title: usedLocale.grey, value: n + Colors.grey },
          { title: usedLocale.white, value: n + Colors.white },
          { title: usedLocale.gold, value: n + Colors.gold },
          { title: usedLocale.silver, value: n + Colors.silver },
        ];
      }),
    ];
  }, [usedLocale]);

  const [resistorColors, setResistorColors] = useState(defResistorColors);

  const setColor = (args) => {
    const [number, color] = args;
    setResistorColors({
      ...resistorColors,
      ["line" + number]: {
        ...resistorColors["line" + number],
        color: color.slice(1),
      },
    });
  };

  const numberedResistorColors = useResistorColors(resistorColors, stripes);
  return (
    <div className="wrapper">
      <h1 style={{ textAlign: "center" }}>ResiCalc</h1>
      <StripesSelector
        text={usedLocale.selectStripes}
        defaultStripes={latestStripes}
        setStripes={updateStripes}
        stripesOptions={stripesOptions}
      />
      <Resistor resistorColors={numberedResistorColors}></Resistor>
      <ColorSelector
        resistorColors={numberedResistorColors}
        setColor={setColor}
        colorOptions={eachColorOptions}
      />
      <div className="bottom">
        <Calculator
          resistorColors={numberedResistorColors}
          stripes={stripes}
          usedLocale={usedLocale}
        />
        <LocalePicker
          defaultLocale={latestLocale}
          setLocale={updateLocale}
          selectOptions={localeOptions}
        />
      </div>
      <div className="bottom">
        <span>
          ©2024 <a href="https://github.com/waseeen">waseeen</a>
        </span>
        <span>
          <a href="https://github.com/waseeen/resicalc">Source code</a>
        </span>
      </div>
    </div>
  );
};

export default App;
