import { useState, useEffect } from 'react';
import { Pie, Bar } from 'react-chartjs-2';

import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale,  LinearScale,);

function Charts() {
  const [pieChartData, setPieChartData] = useState({
    labels: ['Blue', 'Red', 'Yellow', 'Green'],
    datasets: [
      {
        data: [12.21, 15.58, 11.25, 8.32],
        backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
      },
    ],
  })
  const [barChartData, setBarChartData] = useState({
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [{
      label: "Revenue",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 5312, 6251, 7841, 9821, 14984],
    }],
  })
  const [areaChartData, setAreaChartData] = useState(null)

  return (
  
      <div class="row">
    
           {/* <h1>Charts Page</h1> */}
             <div class="col-lg-6">
        
                  <div class="card mb-4">
                  <div class="card-header">
                  <i class="fas fa-chart-bar me-1"></i>
                      Bar Chart Example
              </div>
          <div class="card-body" width="100%" height="50%"><Bar data={barChartData} options={{
            scales: {
            xAxes: [{
            time: {
            unit: 'month'
            },
            gridLines: {
            display: false
            },
            ticks: {
            maxTicksLimit: 6
            }
           }],
              yAxes: [{
              ticks: {
              min: 0,
              max: 15000,
              maxTicksLimit: 5
           },
              gridLines: {
              display: true
             }
            }],
               },
              legend: {
                       display: false
                }
                 }}/></div>
                <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
               </div> 

               <div class="col-lg-6">
            <div class="card mb-4">
                <div class="card-header">
                  <i class="fas fa-chart-pie me-1"></i>
                      Pie Chart Example
                </div>
                  <div class="card-body" width="100%" height="50%"><Pie data={pieChartData} /></div>
                    <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>
        </div>
        </div>
  );
}

export default Charts;
