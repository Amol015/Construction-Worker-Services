package study.jparest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import study.jparest.Entity.ServiceProvider1;
import study.jparest.repository.ServiceProviderRepository;

public class ServiceProviderServices {

	@Autowired 
	ServiceProviderRepository rep;
	
	public List<ServiceProvider1> findAll() {
		
		return rep.findAll();
	}

	public ServiceProvider1 addServiceProvider(ServiceProvider1 u)
	{
		return rep.save(u);
	}
	
	
}
