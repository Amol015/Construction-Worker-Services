package study.jparest.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.persistence.Id;

@Entity
@Table(name="service_info_tbl")
public class ServiceInfo {
	
	@Id
	@Column(name="service_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int Id;
	
	@Column(name="provider_id")
	private int provider_id;
	
	@NotEmpty(message = "Field must not be null")
	@Column(name="service_name")
	private String service_name;
	
	@NotEmpty(message = "Field must not be null")
	@Column(name="service_charges")
	private int service_charges;
	
	@Column(name="provider_time")
	private String provider_time;

	@Column(name="numberof_service_perday")
	private double numberof_service_perday;

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

	public ServiceInfo(int id, int provider_id, String service_name, int service_charges, String provider_time,
			double numberof_service_perday) {
		super();
		Id = id;
		this.provider_id = provider_id;
		this.service_name = service_name;
		this.service_charges = service_charges;
		this.provider_time = provider_time;
		this.numberof_service_perday = numberof_service_perday;
	}

	public ServiceInfo() {
		super();
	}
}
