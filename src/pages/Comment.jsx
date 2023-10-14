// import React from 'react';

// const Comment = () => {
//     return (
//         <div>
//             <h1>Comment page</h1>
//         </div>
//     );
// };

// export default Comment;


import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function DonutChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Purchased", "Not Purchased", "Frequent Buyers"],
        datasets: [
          {
            data: [70, 20, 10],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "black",
            ],
            borderWidth: [10, 10, 20], // Make the third color wider
          },
        ],
      },
      options: {
        cutout: "80%", // Adjust the size of the center hole (0-100%)
      },
    });
  }, []);

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
     <div style={{width:"290px",margin:"auto",padding:"1rem"}} id="chart-container">
     <h4 >Customers <span >that buy products</span></h4>

      <canvas ref={chartRef} width={50} height={20}></canvas>
      <div id="center-text">
       <div >
       <strong style={{padding:"10px"}}>65%</strong>
       </div>
        <div><p>Total New Customers</p></div>
        </div>
      
     </div>
    </div>
  );
}

export default DonutChart;
