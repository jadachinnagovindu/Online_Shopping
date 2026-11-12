import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { insertCustomer } from "./CustomerService"; 

function CreateCustomer()
{
    const navigate=useNavigate();
    const [customer,setCustomer]= useState({
        customerName:'',
        Email:'',
        Password:'',
        mobileNumber:'',
        address:'',

    });
    const handleChange=(e)=>{
        setCustomer({
            ...customer,[e.target.name]:e.target.value
        });
    }
    const save=()=>
    {
        insertCustomer(customer);
        navigate('/get');   
    }
return(
    <div>
        <h1>Create Customer</h1>
        <input type="text" name="customerName" placeholder="CUSTOMERNAME" 
        onChange={handleChange}></input>
        
        <input type="email" name="Email" placeholder="EMAIL" 
        onChange={handleChange}></input>
        
        <input type="text" name="Password" placeholder="PASSWORD" 
        onChange={handleChange}></input>
        
        <input type="number" name="mobileNumber" placeholder="MOBILE NUMBER" 
        onChange={handleChange}></input>
        
        <input type="text" name="address" placeholder="ADDRESS" 
        onChange={handleChange}></input>
       
        <input type="button" onClick={save} value="SUBMIT"/>


        
    </div>
);
}

export default CreateCustomer;