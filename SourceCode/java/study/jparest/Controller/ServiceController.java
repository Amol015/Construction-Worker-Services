package study.jparest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import study.jparest.Entity.ServiceInfo;
import study.jparest.repository.ServiceInfoRepository;

@RestController
@RequestMapping("/cws3")
public class ServiceController {
	
	@Autowired
	ServiceInfoRepository serrp; 
	
	@GetMapping("/getServices")
	public List<ServiceInfo> getServices()
	{
		return serrp.findAll();
	}
	
	@PostMapping("/addService")
	public String addService(@RequestBody ServiceInfo se)
	{
		ServiceInfo ser = new ServiceInfo(se.getId(),se.getProvider_id(),se.getService_name(),se.getService_charges(),se.getProvider_time(),se.getNumberof_service_perday());
		serrp.save(ser);
		return "ServiceAdded";
	}
	
	/*@DeleteMapping("/delete/{serviceName}")
	public String deleteService(@PathVariable String serviceName )
	{
		serrp.deleteByName(serviceName);
		return "deleted";
	} */
	
	@DeleteMapping("/deleteById/{serviceId}")
	public String deleteService(@PathVariable int serviceId )
	{
		serrp.deleteById(serviceId);
		return "deleted";
	}
	
	  @PutMapping("/updateService/{id}/{serviceName}")
	  public String updateService(@PathVariable int id ,@PathVariable String serviceName )
	  {
		  List<ServiceInfo> list = serrp.findAll();
		 for(ServiceInfo service :list)
		 {
		  if(service.getId()==id)
		  {
			  service.setService_name(serviceName);
		  }
		 }
	    serrp.saveAll(list);
	    return "change done";	 
	  }
	 

}
