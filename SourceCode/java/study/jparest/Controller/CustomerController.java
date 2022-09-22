package study.jparest.controller;

import java.util.Date;
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

import study.jparest.Entity.Dispute;
import study.jparest.repository.DisputeRepository;

@RestController
@RequestMapping("/cws/Dispute")
public class DisputeController {
	
	@Autowired
	DisputeRepository disputerepo;
	
	@GetMapping("/getAllDisputes")
	public List<Dispute> getDispute()
	{
		return disputerepo.findAll();
	}

	@PostMapping("/generateDispute")
	public String generateDispute(@RequestBody Dispute d)
	{
		Dispute d1 = new Dispute(d.getId(),d.getDisputeInfo(),d.getRaiseDate(),d.getResolveDate(),d.getDisputeStatus(),d.getBookingId());
		disputerepo.save(d1);
		return "dispute generated";
	}
	
	@PutMapping("/updateDispute/{id}/{dispute_status}")
	public String updateStatus(@PathVariable int id , @PathVariable String dispute_status )
	{
		List<Dispute> list =disputerepo.findAll();
		for(Dispute d :list)
		{
			if(d.getId()==id)
			{
				d.setDisputeStatus(dispute_status);
			}
		}
		disputerepo.saveAll(list);
		return "status updated";
	}
	
	
	
	@DeleteMapping("/delete/{id}")
	public String deleteDispute(@PathVariable int id)
	{
		disputerepo.deleteById(id);
		return "dispute Deleted";
	}
	
	
	
	
	
	
}
