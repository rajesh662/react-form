import React,{useState} from 'react';
import {useNavigate,Link,useParams,useLocation,useSearchParams} from 'react-router-dom';
import './design.css';
// localStorage.setItem(JSON.stringify([]));

let r=[];
// localStorage.setItem("value",JSON.stringify([]));


const Form = () => {
  const location = useLocation();
  // const{form} = location.state;
const geting = location.state;

const [getPass,passItem]=useState(geting)
console.log(getPass);
  const [input1Value,setValue1]=useState(getPass ? getPass[0].name : '')
  const [input2Value,setValue2]=useState(getPass ? getPass[0].task : "")
  const [sumbit,formSumbit] = useState(false);
  const [value, setValue] = useState("notcomplete")
 
  const nava = useNavigate()

 
  

  
    const dataInputs=(rk)=>{
      console.log(rk.target.value,rk.target.name);
    
      if(rk.target.name === "data1"){
        setValue1(rk.target.value);
     
      }
     
      else{
        setValue2(rk.target.value);

      }

    }
    const checkbox = (rk)=>{
      
      if(rk.target.checked){
        setValue('complete')
      }
      
     
    }

    
const buttonSubmit = (rk)=>{
  rk.preventDefault() ;
    setValue1("");
    setValue2("");
  formSumbit(true);
  if(input1Value === "" || input2Value === "")return
  // console.log(input1Value,input2Value,checking);

  const obj =
    {
      name:input1Value,
      desp: input2Value,
      completed:value
    }
    if(getPass != null){
        r[getPass[1]]=obj;
    }
    else{
      r.push(obj);
    }
   
   localStorage.setItem("value",JSON.stringify(r));
}
let rk =JSON.parse( localStorage.getItem("value"));
// console.log(r);

r= rk;
  return (
    
    <div>
      <div>
    <section>
      <div className='container'>
         <div className='row'>
            <div className='col-4 home-btn mt-3'>
               <Link to={'/Home'}>home page</Link>
            </div>
            <div className='col-5'>
              
            </div>
            <div className='col-3'>
              
            </div>
         </div>
      </div>
    </section>
  </div>
    <section>

      <div className='container'>
       
        <div className='row'>
          <div className='col-4'>
          <h2 className='text-center mt-5 mb-2'>Task details</h2>
          
      <form onSubmit={ buttonSubmit} className='form border p-3  text-center  border-dark'>
        <label >Student-Name</label><br></br>
        <input name='data1' onChange={dataInputs}  value={input1Value} className='mt-2'></input><br></br>
       {input1Value === "" &&  sumbit && <div className='requred'>name is requred</div>}
       <label>Task-Name</label><br></br>
        <input name='data2' onChange={dataInputs} value={input2Value}  className='mt-2'></input><br></br>
       {input2Value === "" && sumbit && <div className='requred'>id is requred</div>}
      
       <input type='checkbox' onChange={checkbox} ></input><br></br>

        {/* <button onClick={()=> buttonSubmit()}>sumbit</button> */}
        <input type='submit' className='button'></input>
       
      </form>
      </div>
      </div>
      </div>
      </section>
    </div>
  )
}

export default Form
