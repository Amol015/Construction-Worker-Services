package study.jparest.Entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="booking_tbl")
public class Booking {
	
	@Id
	@Column(name="booking_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int Id;
	
	@Column(name="provider_id")
	private int provider_id;
	
	@Column(name="customer_id")
	private int customer_id;
	
	@Column(name="service_id")
	private int service_id;
	
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

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public int getProvider_id() {
		return provider_id;
	}

	public void setProvider_id(int provider_id) {
		this.provider_id = provider_id;
	}

	public int getCustomer_id() {
		return customer_id;
	}

	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}

	public int getService_id() {
		return service_id;
	}

	public void setService_id(int service_id) {
		this.service_id = service_id;
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

	public Booking(int id, int provider_id, int customer_id, int service_id, Date service_date, String service_time,
			Date booking_date, boolean booking_status, double discount, double total_amount, String address,
			long service_contact_person) {
		super();
		Id = id;
		this.provider_id = provider_id;
		this.customer_id = customer_id;
		this.service_id = service_id;
		this.service_date = service_date;
		this.service_time = service_time;
		this.booking_date = booking_date;
		this.booking_status = booking_status;
		this.discount = discount;
		this.total_amount = total_amount;
		this.address = address;
		this.service_contact_person = service_contact_person;
	}

	public Booking() {
		super();
	}
	
	
}
