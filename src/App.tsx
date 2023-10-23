import "./styles.css";
import { BarChart } from "./BarChart";
import { LineChart } from "./LineChart";
import { AreaChart } from "./AreaChart";
import { getBarData } from "./bar-data";
import { useState } from "react";

const colorMaps = {
  default: [
    "#6690F2",
    "#70D6A3",
    "#B4E6E2",
    "#63B5FC",
    "#FF8F62",
    "#FFDC83",
    "#BCC5FD",
    "#A29BFE",
    "#63C4C7",
    "#F68484"
  ],
  red: [
    "#c12e34",
    "#e6b600",
    "#0098d9",
    "#2b821d",
    "#005eaa",
    "#339ca8",
    "#cda819",
    "#32a487"
  ]
};

export default function App() {
  const [barData, setBarData] = useState<any[]>(getBarData());
  const [colors, setColors] = useState<string[]>(colorMaps.default);
  const handleUpdateBarData = () => {
    setBarData(getBarData());
  };

  const handleUpdateColors = () => {
    if (colors === colorMaps.default) {
      setColors(colorMaps.red);
    } else {
      setColors(colorMaps.default);
    }
  };

  return (
    <div className="App">
      <div>
        <img src="https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/logo_500_200_light.png" />
      </div>
      <button onClick={handleUpdateBarData}>
        Update the data of bar chart
      </button>

      <button onClick={handleUpdateColors}>update colors</button>

      <h2>A Bar Chart</h2>

      <BarChart data={barData} colors={colors} />

      <h2>A Line Chart</h2>
      <LineChart colors={colors} />

      <h2>A Area Chart</h2>
      <AreaChart colors={colors} />
    </div>
  );
}
