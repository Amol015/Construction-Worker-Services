package study.jparest.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.OneToOne;


@Entity
@Table(name="service_info_tbl")
public class ServiceInfo {
	
	@Id
	@Column(name="service_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int Id;
	
	@Column(name="service_name")
	private String service_name;
	
	@Column(name="service_charges")
	private int service_charges;
	
	@Column(name="provider_time")
	private String provider_time;

	@Column(name="numberof_service_perday")
	private double numberof_service_perday;
	
	@OneToOne
	private ServiceProvider serviceProfile;
	
	@OneToOne(mappedBy = "serviceInfo")
	private Booking booking;

	public ServiceInfo() {
		super();
	}
	
	public ServiceInfo(int id, ServiceProvider serviceProfile,String service_name, int service_charges, String provider_time,
			double numberof_service_perday,Booking booking) {
		super();
		Id = id;
		this.service_name = service_name;
		this.service_charges = service_charges;
		this.provider_time = provider_time;
		this.numberof_service_perday = numberof_service_perday;
		this.serviceProfile = serviceProfile;
		this.booking = booking;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getService_name() {
		return service_name;
	}

	public void setService_name(String service_name) {
		this.service_name = service_name;
	}

	public int getService_charges() {
		return service_charges;
	}

	public void setService_charges(int service_charges) {
		this.service_charges = service_charges;
	}

	public String getProvider_time() {
		return provider_time;
	}

	public void setProvider_time(String provider_time) {
		this.provider_time = provider_time;
	}

	public double getNumberof_service_perday() {
		return numberof_service_perday;
	}

	public void setNumberof_service_perday(double numberof_service_perday) {
		this.numberof_service_perday = numberof_service_perday;
	}

	public ServiceProvider getServiceProfile() {
		return serviceProfile;
	}

	public void setServiceProfile(ServiceProvider serviceProfile) {
		this.serviceProfile = serviceProfile;
	}

	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}
}
