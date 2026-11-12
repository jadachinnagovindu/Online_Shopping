package com.vcube.onlineshopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vcube.onlineshopping.entity.CustomerEntity;
import com.vcube.onlineshopping.repo.CustomerRepo;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {
	
	@Autowired
	CustomerRepo customerrepo;
	@PostMapping("/post")
	CustomerEntity postData(@RequestBody CustomerEntity cus)
	{
		return customerrepo.save(cus);
	}
	@GetMapping("/getbyid/{id}")
	CustomerEntity getDataById(@PathVariable Long id)
	{
		return customerrepo.findById(id).get();
	}
	@GetMapping("/getall")
	List <CustomerEntity> getAllData()
	{
		return customerrepo.findAll();
	}
	@DeleteMapping("/delete/{id}")
	void deleteData(@PathVariable Long id)
	{
		customerrepo.deleteById(id);
	}
	@PutMapping("/update/{id}")
	CustomerEntity updateData(@PathVariable Long  id,@RequestBody CustomerEntity cus)
	{
		CustomerEntity customerdetails=customerrepo.findById(id).get();
		
		customerdetails.setCustomerId(cus.getCustomerId());
		customerdetails.setCustomerName(cus.getCustomerName());
		customerdetails.setEmail(cus.getEmail());
		customerdetails.setMobileNumber(cus.getMobileNumber());
		customerdetails.setPassword(cus.getPassword());
		customerdetails.setAddress(cus.getAddress());
		
		return customerrepo.save(customerdetails);
		
	}
	

}
