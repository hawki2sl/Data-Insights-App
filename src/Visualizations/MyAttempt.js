import React, { useEffect, useState } from "react";
import * as d3 from "d3";

const MyAttempt = (props) => {
  const { forestData, insightTimerData } = props;

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {

    if (forestData && insightTimerData) {
      setLoaded(true);
      drawChart(forestData, insightTimerData);
    }
      
}, [forestData, insightTimerData]);
  

  const drawChart = (forestData, insightTimerData) => {

    // clean up previous SVG element if it exists
    d3.select(".visHolder svg").remove();

    console.log("ello, poppet.");

    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 30, left: 60 },
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;
    
      var svg = d3.select(".visHolder")
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
    
          // Use the forestData and insightTimerData props instead of the hard-coded data
  var data = [
    { GrLivArea: forestData.area, SalePrice: forestData.price },
    { GrLivArea: insightTimerData.area, SalePrice: insightTimerData.price },
  ];

          console.log("ello, poppet 2.");
          // Add X axis
          var x = d3.scaleLinear()
            .domain([0, 4000])
            .range([ 0, width ]);
          svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));
        
          // Add Y axis
          var y = d3.scaleLinear()
            .domain([0, 500000])
            .range([ height, 0]);
          svg.append("g")
            .call(d3.axisLeft(y));
        
          // Add dots
          svg.append('g')
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
              .attr("cx", function (d) { return x(d.GrLivArea); } )
              .attr("cy", function (d) { return y(d.SalePrice); } )
              .attr("r", 1.5)
              .style("fill", "#69b3a2")
        
      

    // const svg = d3
    //   .select("#visHolder")
    //   .append("svg")
    //   .attr("id", "svg")
    //   .attr("width", w)
    //   .attr("height", h);

    // svg
    //   .append("rect")
    //   .attr("x", 0)
    //   .attr("y", 0)
    //   .attr("width", w - margin.left - margin.right)
    //   .attr("height", h - margin.top - margin.bottom)
    //   .style("fill", "goldenrod");

    // // var el = document.getElementById("svg");
    // // // console.log(el);
    // // var rect = el.getBoundingClientRect();

    // // const svgHeight = rect.height,
    // //   svgWidth = rect.width;
  };

  return (
    <>
      <h1>Visual (My Attempt)</h1>
      {loaded && <div className="visHolder"></div>}
    </>
  );
};

export default MyAttempt;
