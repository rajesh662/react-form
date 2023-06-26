import React from 'react';
import { useState } from "react"
import { Link } from 'react-router-dom';
import './design.css';

const Home = () => {
    const gets = JSON.parse(localStorage.getItem("value"));
    const [items,removeItems] = useState(gets);

   const handleDelete=(rk)=>{
      delete gets[rk];
      let a = gets.flat();
      localStorage.removeItem("value");
      localStorage.setItem("value",JSON.stringify(a));
      removeItems(a); 
   }

    
    return (
    <div className='container'>
      <div className='row'>
        <div className='col-6 mt-5'>
          <div className='link'>
          <Link to='/Form'>Form page</Link>
          <div>
            <table className='table table-bordered mt-5 shadow '>
              <tr>
                <th>student-name</th>
                <th>task-name</th>
                <th>complete or uncomplete</th>
              </tr>
             {items.map((rk,i)=>{
              return<tr key={i} >
                <td>{rk.name}</td>
                <td>{rk.desp}</td>
                <td>{rk.completed}  <button onClick={()=>handleDelete(i)}><i class="fa-solid fa-trash"></i>
                </button><Link to="/Form" state={[{name:rk.name,task:rk.desp,com:rk.completed},i]} ><i class="fa-solid fa-pen-to-square"></i></Link></td>

              </tr>
             })}
            </table>
        </div>
      </div>
    </div>
  
    </div>
     </div>
  )
}

export default Home
