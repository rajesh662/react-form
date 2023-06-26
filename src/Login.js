 import { useState } from "react"
 import {useNavigate} from 'react-router-dom';
 import './design.css';
 
 
 const Login = () => {

    const [inputValue,inputName]=useState("");
    const [input1Pass,inputPass]=useState("");
    const [requred,formRequred]=useState(false);

    const nava = useNavigate();

    const formInput=(rk)=>{
        if(rk.target.name === "name" ){
            inputName(rk.target.value)
        }
        else{
          inputPass(rk.target.value)
        }
        
    }

   
    const formSubmit=(rk)=>{
        rk.preventDefault();
        formRequred(true)
        if(inputValue === "" || input1Pass === "")return

        const users = [
          {
            name:"rajesh",
            password:"12345",
          },
          {
            name:"mukela",
            password:"12345",
          },
          {
            name:"viki",
            password:"12345",
          },
          {
            name:"anand",
            password:"12345",
          },
          {
            name:"rk",
            password:"12345",
          },
        ]

        let check = users.find((rk)=>rk.name === inputValue && rk.password === input1Pass)
        console.log(check);
        if(check){
        nava('/Form');
        }
    }

   return (
     <div className="d-flex justify-content-center mt-3">
       <form onSubmit={formSubmit} className="form1 shadow">
        <h2 className="pt-3 pb-2">LOGIN</h2>
        <label>Name</label>
            <input name="name" type='text' onChange={formInput} value={inputValue} className="mt-4 mb-3 p-2"></input><br></br>
       {inputValue === "" &&  requred && <div className="requred">name is requred</div>}

            <label>Password</label>
            <input name="pass" type='password' onChange={formInput} value={input1Pass} className="p-2"></input ><br></br>
       {input1Pass === "" &&  requred && <div className="requred">pass is requred</div>}

            <input type='submit' className="button"></input>

        </form> 
     </div>
   )
 }
 
 export default Login
 