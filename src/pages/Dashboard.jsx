import React from 'react';
import earn from '../assets/saving.png'
import order from '../assets/shopping-bag.png'
import balance from '../assets/scale.png'
import sale from '../assets/interest.png'
import Chart from './chart'
import Donut from './Comment'
import Table from '../pages/Product'

import './about.css'
const Dashboard = () => {
    return (
        <div>
           
           <div >
          <div style={{}} className='DASHB'>
          <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",padding:"10px",width:"75vw"}} className='topBar'>
           <h1>Hello Sai Kumar 👋 ,</h1>
         
           <input class="search" type="search" placeholder="Search..." ></input>
           
         
          
           </div>
          </div>
          
            <div class="card">
           <div style={{display:"flex",justifyContent:"space-around"}}>
           <img src={earn} alt="Earnings" width="100"/>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",gap:"8px"}}>
    
    <p>Earnings</p>
    <p style={{fontWeight:"bold"}}>$5,000</p>
    <span class="arrow up-arrow">&#8593; 37.8% <span style={{color:"black",fontWeight:"normal"}}>this month</span></span>
    </div>
           </div>
  </div>

  <div class="card">
   
  <div style={{display:"flex",justifyContent:"space-around"}}>
           <img src={order} alt="Orders" width="100"/>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",gap:"8px"}}>
    
    <p>Orders</p>
    <p style={{fontWeight:"bold"}}>$5,000</p>
    <span class="arrow down-arrow">&#8595; 2% <span style={{color:"black",fontWeight:"normal"}}>this month</span> </span>
    </div>
           </div>
  </div>

  <div class="card">
  <div style={{display:"flex",justifyContent:"space-around"}}>
           <img src={balance} alt="Balance" width="100"/>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",gap:"8px"}}>
    
    <p>Balance</p>
    <p style={{fontWeight:"bold"}}>$5,000</p>
    <span class="arrow down-arrow">&#8595; 2% <span style={{color:"black",fontWeight:"normal"}}>this month</span></span>
    </div>
           </div>
  </div>

  <div class="card">
  <div style={{display:"flex",justifyContent:"space-around"}}>
           <img src={sale} alt="Sales" width="100"/>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",gap:"8px"}}>
    
    <p>Total Sales</p>
    <p style={{fontWeight:"bold"}}>$5,000</p>
    <span class="arrow up-arrow">&#8593; 11% <span style={{color:"black",fontWeight:"normal"}}>this week</span></span>
    </div>
           </div>
  </div>
  
  </div>
 
 <div>


 <div class="card1">
     
          
           <Chart/>
  </div>



 <div class="card2">
 
  
 <Donut/>
 
 </div>
  <div class="card3">
     
        <Table/>  
           
  </div>
 </div>
  
        </div>
    );
};

export default Dashboard;