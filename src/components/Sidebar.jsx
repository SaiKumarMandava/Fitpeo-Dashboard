import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import user from '../assets/user.jpg'


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
           
        },
        {
            path:"/comment",
            name:"Customers",
            icon: <FaUserAlt/>
            
        },
        {
            path:"/chart",
            name:"Income",
            icon:<FaRegChartBar/>
        },
        {
            path:"/about",
            name:"Promote" ,
            icon:<FaThList/>
        },
        
        {
            path:"/productList",
            name:"Help",
            icon: <FaCommentAlt/>
           
        }
    ]
    return (
       <div>
         <div className="container">
           <div style={{width: isOpen ? "210px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <p style={{display: isOpen ? "block" : "none"}} className="logo">Dashboard</p>
                   <div style={{marginLeft: isOpen ? "30px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                          
                       </NavLink>
                   ))
               }
               <div style={{display: isOpen ? "block" : "none"}}>
               <footer style={{padding:"20px",}}>
               <div class="dropdown" style={{top:"250px"}}>
    <button class="dropbtn" style={{display:"flex",}}> 
    <div style={{display:" flex",gap:"10px"}}>
    <img src={user} alt="User" class="user-image"/>
          <b style={{padding:"6px"}}>  Admin</b>
    </div>
            </button>
  
</div>
               </footer>
               </div>
           </div>
           <main>
            {children}
            </main>
           
        </div>
        
       </div>
    );
};

export default Sidebar;