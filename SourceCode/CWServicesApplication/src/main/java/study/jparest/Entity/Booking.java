package study.jparest.Entity;

import java.util.Date;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="booking_tbl")
public class Booking {
	
	@Id
	@Column(name="booking_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id;
	
	
	@Column(name="service_date")
	private Date serviceDate;
	
	@Column(name="service_time")
	private String serviceTime;
	
	@Column(name="booking_date")
	private Date bookingDate;
	
	@Column(name=" booking_status")
	private boolean  bookingStatus;
	
	@Column(name="discount")
	private double discount;
	
	@Column(name="total_amount")
	private double totalAmount;
	
	@Column(name="service_address")
	private String address;
	
	@Column(name="service_contactNo")
	private long servicecontactNo;
	
	
	@ManyToOne
	@JoinColumn(name="provider_id")
	private ServiceProvider1 providerId;
	
	@OneToOne
	@JoinColumn(name="customer_id")
	private Customer customerId;
	
	@OneToOne
	@JoinColumn(name="service_id")
	private ServiceInfo serviceId;

	public Booking(int id, Date serviceDate, String serviceTime, Date bookingDate, boolean bookingStatus,
			double discount, double totalAmount, String address, long servicecontactNo, ServiceProvider1 providerId,
			Customer customerId, ServiceInfo serviceId) {
		super();
		Id = id;
		this.serviceDate = serviceDate;
		this.serviceTime = serviceTime;
		this.bookingDate = bookingDate;
		this.bookingStatus = bookingStatus;
		this.discount = discount;
		this.totalAmount = totalAmount;
		this.address = address;
		this.servicecontactNo = servicecontactNo;
		this.providerId = providerId;
		this.customerId = customerId;
		this.serviceId = serviceId;
	}
	

	public Booking(Date serviceDate, String serviceTime, Date bookingDate, String address, long servicecontactNo) {
		super();
		this.serviceDate = serviceDate;
		this.serviceTime = serviceTime;
		this.bookingDate = bookingDate;
		this.address = address;
		this.servicecontactNo = servicecontactNo;
	}


	public Booking() {
		super();
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public Date getServiceDate() {
		return serviceDate;
	}

	public void setServiceDate(Date serviceDate) {
		this.serviceDate = serviceDate;
	}

	public String getServiceTime() {
		return serviceTime;
	}

	public void setServiceTime(String serviceTime) {
		this.serviceTime = serviceTime;
	}

	public Date getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}

	public boolean isBookingStatus() {
		return bookingStatus;
	}

	public void setBookingStatus(boolean bookingStatus) {
		this.bookingStatus = bookingStatus;
	}

	public double getDiscount() {
		return discount;
	}

	public void setDiscount(double discount) {
		this.discount = discount;
	}

	public double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public long getServicecontactNo() {
		return servicecontactNo;
	}

	public void setServicecontactNo(long servicecontactNo) {
		this.servicecontactNo = servicecontactNo;
	}

	public ServiceProvider1 getProviderId() {
		return providerId;
	}

	public void setProviderId(ServiceProvider1 providerId) {
		this.providerId = providerId;
	}

	public Customer getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Customer customerId) {
		this.customerId = customerId;
	}

	public ServiceInfo getServiceId() {
		return serviceId;
	}

	public void setServiceId(ServiceInfo serviceId) {
		this.serviceId = serviceId;
	}

	@Override
	public String toString() {
		return "Booking [Id=" + Id + ", serviceDate=" + serviceDate + ", serviceTime=" + serviceTime + ", bookingDate="
				+ bookingDate + ", bookingStatus=" + bookingStatus + ", discount=" + discount + ", totalAmount="
				+ totalAmount + ", address=" + address + ", servicecontactNo=" + servicecontactNo + ", providerId="
				+ providerId + ", customerId=" + customerId + ", serviceId=" + serviceId + "]";
	}
	
	

	
	
}
