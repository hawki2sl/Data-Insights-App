import React, { useEffect } from "react";
import * as d3 from "d3";

const MyAttempt = (props) => {
  const { forestData, insightTimerData } = props;

  useEffect(() => {
    drawChart(forestData, insightTimerData);
  }, [forestData, insightTimerData]);

  const drawChart = (forestData, insightTimerData) => {


    const w = "90%",
      h = "90%",
      margin = { top: 20, right: 20, bottom: 30, left: 20 };

    const svg = d3
      .select("#visHolder")
      .append("svg")
      .attr("id", "svg")
      .attr("width", w)
      .attr("height", h);
    
    svg.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", w - margin.left - margin.right)
      .attr("height", h - margin.top - margin.bottom)
      .style("fill", "goldenrod");


    // var el = document.getElementById("svg");
    // // console.log(el);
    // var rect = el.getBoundingClientRect();

    // const svgHeight = rect.height,
    //   svgWidth = rect.width;
    
  };

  return (
    <>
      <h1>Visual (My Attempt)</h1>
    </>
  );
};

export default MyAttempt;
