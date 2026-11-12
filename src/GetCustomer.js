import React, { useEffect, useState } from "react";
import { getCustomers } from "./CustomerService";   
import { deletecustomerById } from "./CustomerService";

import { Navigate, useNavigate } from "react-router-dom";



function GetCustomer()
{
    const [customers, setCustomers]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        loadData();
    },[]);
    const loadData= async()=>{
       const result=await getCustomers();
        setCustomers(result.data);
    }
    const deleteCustomer=async(customerId)=>
    {
        await deletecustomerById(customerId);
        loadData();
    }
return(
    <div>
        <h1>Get Customer</h1>
        <table border="1">
            <thead>
                <tr>
                <th>CustomerId</th>
                <th>CustomerName</th>
                <th>Email</th>
                <th>MobileNumber</th>
                <th>Address</th>
                <th colSpan="2">Action</th>
                </tr>
            </thead>
            <tbody>
                {customers.map(c => (
                    <tr key={c.customerId}>
                        <td>{c.customerId}</td>
                        <td>{c.customerName}</td>
                        <td>{c.Email}</td>
                        <td>{c.mobileNumber}</td>
                        <td>{c.address}</td>
                        <td>
                        <input type="button"value="Edit"
                        onClick={() => navigate(`/edit/${c.customerId}`)}/></td>
                        <td><input type="button" value="Delete"
                        onClick={()=>(deleteCustomer(c.customerId))}></input></td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
}

export default GetCustomer;