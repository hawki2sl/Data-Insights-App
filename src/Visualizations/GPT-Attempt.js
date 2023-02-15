import React, { useEffect } from "react";
import * as d3 from "d3";

const GPT_Attempt = (props) => {
  const { forestData, insightTimerData } = props;

  useEffect(() => {
    drawChart(forestData, insightTimerData);
  }, [forestData, insightTimerData]);

  const drawChart = (forestData, insightTimerData) => {
    // Set up the SVG canvas
    const svg = d3.select("svg");
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = +svg.attr("width") - margin.left - margin.right;
    const height = +svg.attr("height") - margin.top - margin.bottom;
    const g = svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Define the scales
    const x = d3
      .scaleUtc()
      .domain(d3.extent(forestData.concat(insightTimerData), (d) => d.date))
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(forestData.concat(insightTimerData), (d) => d.value)])
      .range([height, 0]);

    // Define the line function
    const line = d3
      .line()
      .x((d) => x(d.date))
      .y((d) => y(d.value));

    // Draw the forest data line
    g.append("path")
      .datum(forestData)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);

    // Draw the insight timer data line
    g.append("path")
      .datum(insightTimerData)
      .attr("fill", "none")
      .attr("stroke", "orange")
      .attr("stroke-width", 1.5)
      .attr("d", line);

    // Add the X axis
    g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add the Y axis
    g.append("g").call(d3.axisLeft(y));
  };

  return (
    <>
      <h1>Visual (GPT's Attempt)</h1>
    </>
  );
};

export default GPT_Attempt;
