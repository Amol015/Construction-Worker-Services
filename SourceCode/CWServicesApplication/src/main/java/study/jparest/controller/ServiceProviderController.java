package study.jparest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.RequestBody;

import study.jparest.Entity.ServiceProvider1;
import study.jparest.repository.ServiceProviderRepository;
import study.jparest.services.ServiceProviderServices;

@RestController
@RequestMapping("/cws")
public class ServiceProviderController {
	
	@Autowired
	ServiceProviderRepository ser;
	
	@GetMapping("/getAll")
	public List<ServiceProvider1> getAllServiceProviders()
	{
		return ser.findAll();
	}
	
	@GetMapping("/getElectricians/{role}")
	public List<ServiceProvider1> getElectricians(@PathVariable String role)
	{
		return ser.findByRole(role);
	}

	  @PostMapping("/register") 
	  public String register(@RequestBody ServiceProvider1 sp1)
	  {
		  ServiceProvider1 sp = new ServiceProvider1(sp1.getId(),sp1.getFirstName(),sp1.getLastName(),sp1.
	  getMobile(),sp1.getUserName(),sp1.getPassword(),sp1.getEmailId(),sp1.getCity(
	  ),sp1.getRole(),sp1.isVerified());
		  ser.save(sp); 
		  return "inserted";
	 }
	  
	  @PostMapping("/login/{eid}/{pwd}")
	  public ServiceProvider1 Login(@PathVariable String eid, @PathVariable String pwd)
	  {
		ServiceProvider1 sp1 = ser.checkLogin(eid,pwd);
		if(sp1!= null)
		{
			return sp1;
		}
		return null;	  
	  }
	  
	  
	  @PutMapping("/changePass/{email}/{oldpwd}/{newpwd}")
	  public String changePassword(@PathVariable String email,@PathVariable String oldpwd,@PathVariable String newpwd)
		{	
			ServiceProvider1 u= ser.findByEmailId(email);	
			if(u!=null)
			{
				if(u.getPassword().equals(oldpwd))
				{
					u.setPassword(newpwd);
					System.out.println(u.getFirstName());
					ser.save(u);
					return "Password changed";
				}
			}	
			 return "Incorrect Credentials";		
		}
	  
	  
	  @PutMapping("/update/{id}/{isVerified}")
	  public String updateVerification(@PathVariable int id , @PathVariable boolean isVerified)
	  {
		  List<ServiceProvider1> list= ser.findAll(); 
			for(ServiceProvider1 service : list) 
			{
				if(service.getId()==id)
				{ 
					service.setVerified(isVerified);
				}
			}
			ser.saveAll(list);
			return "changes successfull :) "; 	  
	  }
	  
	  @DeleteMapping("/delete/{id}")
	  public String deletebyId(@PathVariable int id)
	  {
			ser.deleteById(id);
			return "deleted";
	  }  
	  
	/*	@PostMapping("/login/{email}/{pwd}")
		public ServiceProvider checkLogin(@PathVariable String email,@PathVariable String pwd)
		{
			return ser.checkLoginCustomer(email, pwd);
		} */
}






