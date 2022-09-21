package study.jparest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import study.jparest.Entity.ServiceInfo;
import study.jparest.repository.ServiceInfoRepository;

@CrossOrigin
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
		ServiceInfo ser = new ServiceInfo(se.getId(),se.getServiceProfile(),
				se.getService_name(),se.getService_charges(),
				se.getProvider_time(),se.getNumberof_service_perday(),se.getBooking());
		serrp.save(ser);
		return "ServiceAdded";
	}
	
	@DeleteMapping("/deleteService/service_name")
	public String deleteService(@PathVariable String service_name)
	{
		serrp.deleteByName(service_name);
		System.out.println("hello");
		return "service deleted";
	}
}
