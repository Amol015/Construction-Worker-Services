package study.jparest.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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

	@PostMapping("/BookService")
	public String BookService(@RequestBody Booking b1)
	{
		Booking b = new Booking(b1.getId(),b1.getServiceProvider(),
				b1.getCustomer(),b1.getServiceInfo(),
				b1.getService_date(),b1.getService_time(),
				b1.getBooking_date(),b1.isBooking_status(),
				b1.getDiscount(),b1.getTotal_amount(),
				b1.getAddress(),b1.getService_contact_person());
		br.save(b);
		return "Service Added";				
	}

	public String BookSlot(@RequestBody Booking b1)
	{
		Booking b = new Booking(b1.getId(),b1.getService_date(),
				b1.getService_time(),b1.getBooking_date(),
				b1.isBooking_status(),b1.getDiscount(),
				b1.getTotal_amount(),b1.getAddress(),
				b1.getService_contact_person(),
				b1.getMorningSlot(),b1.getAfternoonSlot()
				,b1.getEveningSlot(),
				b1.getServiceProvider(),b1.getCustomer(),
				b1.getServiceInfo(),b1.getReview());
		return "Slot is confirmed";
	}


}
