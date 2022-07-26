package study.jparest.controller;

import java.util.Date;
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

import study.jparest.Entity.Booking;

import study.jparest.repository.BookingRepository;

@CrossOrigin
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

	
/*	@PostMapping("/BookService")
	public String BookService(@RequestBody Booking b1)
	{
		Booking b = new Booking(b1.getId(),b1.getProvider_id(),b1.getCustomer_id(),b1.getService_id(),
				b1.getService_date(),b1.getService_time(),b1.getBooking_date(),b1.isBooking_status(),
				b1.getDiscount(),b1.getTotal_amount(),b1.getAddress(),b1.getService_contact_person());
		br.save(b);
		return "Service Added";
	} */
	
	@PostMapping("/BookService")
	public String BookService(@RequestBody Booking b1)
	{
		Booking b = new Booking(b1.getId(), b1.getServiceDate(), b1.getServiceTime(),
				b1.getBookingDate(),b1.isBookingStatus(), b1.getDiscount(),
				b1.getTotalAmount(),b1.getAddress(),b1.getServicecontactNo(),
				b1.getProviderId(),b1.getCustomerId(),b1.getServiceId());
		br.save(b);
		return "Service Booked";
		
	}
	
	@PostMapping("/BookService1")
	public String BookService1(@RequestBody Booking b1)
	{
		Booking b = new Booking(b1.getServiceDate(),b1.getServiceTime(),b1.getBookingDate(),b1.getAddress(),b1.getServicecontactNo());
		br.save(b);
		return "Service Booked";
		
	}
	
	@PutMapping("/updateBook/{id}/{bookingStatus}")
	public String updateBooking(@PathVariable int id , @PathVariable boolean bookingStatus)
	{
		List<Booking> booklist = br.findAll();
		for(Booking book :booklist)
		{
			if(book.getId()==id)
			{
				book.setBookingStatus(bookingStatus);
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
