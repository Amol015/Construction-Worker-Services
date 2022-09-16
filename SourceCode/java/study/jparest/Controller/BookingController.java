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

import study.jparest.Entity.Booking;
import study.jparest.repository.BookingRepository;

@RestController
@RequestMapping("/cws/Booking")
public class BookingController {
	
	@Autowired
	public BookingRepository br;
	
	@GetMapping("/getBookings")
	public List<Booking> getBooking()
	{
		return br.findAll();
	}

	@PostMapping("/BookService")
	public String BookService(@RequestBody Booking b1)
	{
		Booking b = new Booking(b1.getId(),b1.getProvider_id(),b1.getCustomer_id(),b1.getService_id(),
				b1.getService_date(),b1.getService_time(),b1.getBooking_date(),b1.isBooking_status(),
				b1.getDiscount(),b1.getTotal_amount(),b1.getAddress(),b1.getService_contact_person());
		br.save(b);
		return "Service Added";
	}
	
	@PutMapping("/updateBook/{id}/{bookingStatus}")
	public String updateBooking(@PathVariable int id , @PathVariable boolean bookingStatus)
	{
		List<Booking> booklist = br.findAll();
		for(Booking book :booklist)
		{
			if(book.getId()==id)
			{
				book.setBooking_status(bookingStatus);
			}
		}
		br.saveAll(booklist);
		return "Booking Status changed";
			
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteBooking(@PathVariable int id)
	{
		br.deleteById(id);
		return "deleted";
	}
	
	
	
}
