package study.jparest.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import study.jparest.Entity.Customer;
import study.jparest.Entity.ServiceProvider1;
import study.jparest.repository.CustomerRepository;
import study.jparest.repository.ServiceProviderRepository;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin("*")
@RestController
@RequestMapping("/cws1")
public class CustomerController {
	
	@Autowired
	CustomerRepository cus;
	
	@GetMapping("/getAllCustomers")
	public List<Customer> getAllServiceProviders()
	{
		return cus.findAll();
	}

	@PostMapping("/registerCustomer")
	public String register(@RequestBody Customer c)
	{
		Customer c1 = new Customer(c.getId(),c.getFirstName(),c.getLastName(),c.getMobile(),c.getEmailId(),c.getUserName(),c.getPassword(),c.getAddress());
		cus.save(c1);
		return "customer inserted";
	}
	
	@PostMapping("/login/{userName}/{password}")
	  public String Login(@PathVariable String userName, @PathVariable String password)
	  {
		Customer sp1 = cus.checkLogin(userName,password);
		if(sp1!= null)
		{
			return "pass";
		}
		return "fail";	  
	  }
	
	 @PutMapping("/changePass/{email}/{oldpwd}/{newpwd}")
	  public String changePassword(@PathVariable String email,@PathVariable String oldpwd,@PathVariable String newpwd)
		{	
			Customer u= cus.findByEmailId(email);	
			if(u!=null)
			{
				if(u.getPassword().equals(oldpwd))
				{
					u.setPassword(newpwd);
					System.out.println(u.getFirstName());
					cus.save(u);
					return "Password changed";
				}
			}	
			return "Incorrect Credentials";		
		}
	  
	 @DeleteMapping("/delete/{id}")
     public String deleteCustomer(@PathVariable int id)
     {
		  cus.deleteById(id);
		  return "Deleted Customer";
     }	
	 
	 public void ResetPassword(String email, String Token) throws CustomerNotFoundException
	 {
		 Customer c2= cus.findByEmailId(email);
		 if(c2 !=null)
		 {
			 c2.setResetPasswordToken(Token);
			 cus.save(c2);
		 }
		 else
		 {
			 throw new CustomerNotFoundException("Could not Found Customer");
		 }
	 }
	 
	 public Customer get(String resetPasswordToken)
	 {
		 return  cus.findByResetPasswordToken(resetPasswordToken);
	 }
	 
	 
	 
	 
	 
	 
}
