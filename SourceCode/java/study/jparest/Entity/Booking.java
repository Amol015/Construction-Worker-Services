package study.jparest.Entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name="booking_tbl")
public class Booking {

	@Id
	@Column(name="booking_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id;
	
	@ManyToOne
	@JoinColumn(name="provider_id", nullable=false)
	private ServiceProvider serviceProvider;

	@ManyToOne
	@JoinColumn(name="customer_id", nullable=false)
	private Customer customer;

	@OneToOne
	@JoinColumn(name="service_id", nullable=false)
	private ServiceInfo serviceInfo;

	@OneToMany(mappedBy = "booking")
	private List<Review> review;

	@Column(name="service_date")
	private Date service_date;

	@Column(name="service_time")
	private String service_time;

	@Column(name="booking_date")
	private Date booking_date;

	@Column(name=" booking_status")
	private boolean  booking_status;

	@Column(name="discount")
	private double discount;

	@Column(name="total_amount")
	private double total_amount;

	@Column(name="service_address")
	private String address;

	@Column(name="service_contact_person")
	private long service_contact_person;

	@Column
	private String morningSlot; //morning,evening,afternoon,
	
	@Column
	private String eveningSlot;
	
	@Column
	private String afternoonSlot;
				
	public Booking() {
		super();
	}

	public Booking(int id, Date service_date, String service_time, 
			Date booking_date, boolean booking_status,
			double discount, double total_amount,
			String address, long service_contact_person,
			ServiceProvider serviceProvider, Customer customer, 
			ServiceInfo serviceInfo, List<Review> review) {
		super();
		Id = id;
		this.service_date = service_date;
		this.service_time = service_time;
		this.booking_date = booking_date;
		this.booking_status = booking_status;
		this.discount = discount;
		this.total_amount = total_amount;
		this.address = address;
		this.service_contact_person = service_contact_person;
		this.serviceProvider = serviceProvider;
		this.customer = customer;
		this.serviceInfo = serviceInfo;
		this.review = review;
	}

	public Booking(int id,ServiceProvider serviceProvider, Customer customer, ServiceInfo serviceInfo, 
			Date service_date, String service_time, Date booking_date, boolean booking_status,
			double discount, double total_amount, String address, long service_contact_person
			) {
		super();
		Id = id;
		this.service_date = service_date;
		this.service_time = service_time;
		this.booking_date = booking_date;
		this.booking_status = booking_status;
		this.discount = discount;
		this.total_amount = total_amount;
		this.address = address;
		this.service_contact_person = service_contact_person;
		this.serviceProvider = serviceProvider;
		this.customer = customer;
		this.serviceInfo = serviceInfo;
	}		


	public Booking(int id, Date service_date, String service_time, Date booking_date, boolean booking_status,
			double discount, double total_amount, String address, long service_contact_person, String morningSlot,
			 String afternoonSlot,String eveningSlot, ServiceProvider serviceProvider, Customer customer,
			ServiceInfo serviceInfo, List<Review> review) {
		super();
		Id = id;
		this.service_date = service_date;
		this.service_time = service_time;
		this.booking_date = booking_date;
		this.booking_status = booking_status;
		this.discount = discount;
		this.total_amount = total_amount;
		this.address = address;
		this.service_contact_person = service_contact_person;
		this.morningSlot = morningSlot;
		this.eveningSlot = eveningSlot;
		this.afternoonSlot = afternoonSlot;
		this.serviceProvider = serviceProvider;
		this.customer = customer;
		this.serviceInfo = serviceInfo;
		this.review = review;
	}


	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	
	public String getMorningSlot() {
		return morningSlot;
	}

	public void setMorningSlot(String morningSlot) {
		this.morningSlot = morningSlot;
	}

	public String getEveningSlot() {
		return eveningSlot;
	}

	public void setEveningSlot(String eveningSlot) {
		this.eveningSlot = eveningSlot;
	}

	public String getAfternoonSlot() {
		return afternoonSlot;
	}

	public void setAfternoonSlot(String afternoonSlot) {
		this.afternoonSlot = afternoonSlot;
	}

	public Date getService_date() {
		return service_date;
	}

	public void setService_date(Date service_date) {
		this.service_date = service_date;
	}

	public String getService_time() {
		return service_time;
	}

	public void setService_time(String service_time) {
		this.service_time = service_time;
	}

	public Date getBooking_date() {
		return booking_date;
	}

	public void setBooking_date(Date booking_date) {
		this.booking_date = booking_date;
	}

	public boolean isBooking_status() {
		return booking_status;
	}

	public void setBooking_status(boolean booking_status) {
		this.booking_status = booking_status;
	}

	public double getDiscount() {
		return discount;
	}

	public void setDiscount(double discount) {
		this.discount = discount;
	}

	public double getTotal_amount() {
		return total_amount;
	}

	public void setTotal_amount(double total_amount) {
		this.total_amount = total_amount;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public long getService_contact_person() {
		return service_contact_person;
	}

	public void setService_contact_person(long service_contact_person) {
		this.service_contact_person = service_contact_person;
	}

	public ServiceProvider getServiceProvider() {
		return serviceProvider;
	}

	public void setServiceProvider(ServiceProvider serviceProvider) {
		this.serviceProvider = serviceProvider;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public ServiceInfo getServiceInfo() {
		return serviceInfo;
	}

	public void setServiceInfo(ServiceInfo serviceInfo) {
		this.serviceInfo = serviceInfo;
	}

	public List<Review> getReview() {
		return review;
	}

	public void setReview(List<Review> review) {
		this.review = review;
	}			
}
