import React from "react";
import { VictoryPie, VictoryTooltip } from "victory";

export default function StatsCondition({ stats }) {
  console.log(stats);
  const data = [
    { x: stats.cases, y: stats.cases, label: "Cases:" + stats.cases },
    { x: stats.deaths, y: stats.deaths, label: "Deaths:" + stats.deaths },
    { x: stats.recovered, y: stats.recovered, label: "Recovered:" + stats.recovered }
  ];
  return (
    <VictoryPie
      colorScale={["grey", "red", "green"]}
      labelComponent={<VictoryTooltip />}
      height={300}
      width={600}
      data={data}
    />
  );
}
