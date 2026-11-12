import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getcustomerById, updatecustomerById } from "./CustomerService";


function EditCustomer()
{
    const {id}=useParams();
    const [customer, setcustomer] = useState({
    customerId: "",
    customerName: "",
    email: "",
    password: "",
    mobileNumber: "",
    address: ""
});
    const navigate=useNavigate();

    useEffect(()=>{
        loadData();
    },[]);

    const loadData=async()=>{
        const result=await getcustomerById(id);
        setcustomer(result.data)

    };
    const handleChange=(e)=>{
        setcustomer({...customer,[e.target.name]:e.target.value});
    }
    const update=async()=>
    {
       await updatecustomerById(id,customer);
        navigate("/get");
    };
    

return(
    <div>
        <h1>Edit Customer</h1>
        <p>{id}</p>
        <input type="text" name="customerId"  placeholder="CUSTOMER NAME"
        ></input>
        <input type="text" name="customerName" value={customer.customerName ?? ""} placeholder="CUSTOMER NAME"
        onChange={handleChange}></input>
        <input type="email" name="email" value={customer.email ?? ""} placeholder="EMAIL"
        onChange={handleChange}></input>
        <input type="password" name="password" value={customer.password ?? ""} placeholder="PASSWORD"
        onChange={handleChange}></input>
        <input type="number" name="mobileNumber" value={customer.mobileNumber ?? ""} placeholder="MOBILENUMBER"
        onChange={handleChange}></input>
        <input type="text" name="address" value={customer.address ?? ""} placeholder="ADDRESS"
        onChange={handleChange}></input>
        <input type="button" value="UPDATE" 
        onClick={update}></input>
    </div>
);
}

export default EditCustomer;