
import axios from 'axios';

const API_URL = 'http://localhost:2005/customer';

export const insertCustomer = (customer) =>
    axios.post(`${API_URL}/post`, customer);

export const getCustomers = () =>
    axios.get(`${API_URL}/getall`);
export const deletecustomerById=(sid)=>
    axios.delete(`${API_URL}/delete/${sid}`);
export const getcustomerById=(sid)=>
    axios.get(`${API_URL}/getbyid/${sid}`);

export const updatecustomerById=(sid,customer)=>
    axios.put(`${API_URL}/update/${sid}`,customer);