import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";



function Barchart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        datasets: [
          {
            label: "Sample Data",
            data: [65, 59, 80, 81, 56, 55, 40, 90, 70, 50, 60, 45],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x:{
           
            grid:{
                display:false,
            }
          },
          y: {
            grid:{
              display:false,
            },
            beginAtZero: true,
            display:false,
            
          },
        },
      },
    });
  }, []);

  return (
    <div>
<div style={{width:"90%",}} className="chart">
<div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
<div>
<h4 style={{marginRight:"200px"}}>Overview</h4>
<span style={{marginRight:"150px"}}>Monthly Earnings</span>
</div>
<select style={{border:"none",outline:"none",backgroundColor:"lightgray",borderRadius:"5px 5px 5px 5px",padding:"6px"}}>
    
    <option value="1">Quaterly</option>
    <option value="2">Halfyearly</option>
    <option value="3">Monthly</option>
    <option value="4">Yearly</option>
    
  </select>
</div>
      <canvas ref={chartRef} width={40} height={20}></canvas>
</div>
    </div>



  );
}

export default Barchart;



{/* <div>
  <div style="width: 90%;">
    <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
      <div style="flex: 1; max-width: 50%;">
        <h4 style="margin-right: 20px;">Overview</h4>
      </div>
      <div style="flex: 1; max-width: 50%;">
        <span style="margin-right: 20px;">Monthly Earnings</span>
      </div>
      <select style="border: none; outline: none; background-color: lightgray; border-radius: 5px; padding: 6px;">
        <option value="1">Quaterly</option>
        <option value="2">Halfyearly</option>
        <option value="3">Monthly</option>
        <option value="4">Yearly</option>
      </select>
    </div>
    <canvas ref={chartRef} width="100%" height="200"></canvas>
  </div>
</div> */}