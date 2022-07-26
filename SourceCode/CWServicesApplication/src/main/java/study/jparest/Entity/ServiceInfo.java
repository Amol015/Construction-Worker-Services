package study.jparest.Entity;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.persistence.Id;

@Entity
@Table(name="service_info_tbl")
public class ServiceInfo {
	
	@Id
	@Column(name="service_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id;
	
	@NotEmpty(message = "Field must not be null")
	@Column(name="service_name")
	private String serviceName;
	
	@NotEmpty(message = "Field must not be null")
	@Column(name="service_charges")
	private int serviceCharges;
	
	@Column(name="provider_time")
	private String providerTime;

	@NotNull
	@Column(name="numberof_service_per_day")
	private int numberofServicePerDay;
	
	@OneToOne
	@JoinColumn(name="provider_id")
	private ServiceProvider1 providerId;

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getServiceName() {
		return serviceName;
	}

	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}

	public int getServiceCharges() {
		return serviceCharges;
	}

	public void setServiceCharges(int serviceCharges) {
		this.serviceCharges = serviceCharges;
	}

	public String getProviderTime() {
		return providerTime;
	}

	public void setProviderTime(String providerTime) {
		this.providerTime = providerTime;
	}

	public int getNumberofServicePerDay() {
		return numberofServicePerDay;
	}

	public void setNumberofServicePerDay(int numberofServicePerDay) {
		this.numberofServicePerDay = numberofServicePerDay;
	}

	public ServiceProvider1 getProviderId() {
		return providerId;
	}

	public void setProviderId(ServiceProvider1 providerId) {
		this.providerId = providerId;
	}

	/*
	public ServiceInfo(int id, @NotEmpty(message = "Field must not be null")
	String serviceName,
			@NotEmpty(message = "Field must not be null") int serviceCharges, String providerTime,
			double numberofServicePerDay, ServiceProvider providerId) {
		super();
		Id = id;
		this.serviceName = serviceName;
		this.serviceCharges = serviceCharges;
		this.providerTime = providerTime;
		this.numberofServicePerDay = numberofServicePerDay;
		this.providerId = providerId;
	}*/

	public ServiceInfo() {
		super();
	}

	public ServiceInfo(int id, String serviceName, int serviceCharges, String providerTime,
	int numberofServicePerDay, ServiceProvider1 providerId) {
		super();
		Id = id;
		this.serviceName = serviceName;
		this.serviceCharges = serviceCharges;
		this.providerTime = providerTime;
		this.numberofServicePerDay = numberofServicePerDay;
		this.providerId = providerId;
	}

	@Override
	public String toString() {
		return "ServiceInfo [Id=" + Id + ", serviceName=" + serviceName + ", serviceCharges=" + serviceCharges
				+ ", providerTime=" + providerTime + ", numberofServicePerDay=" + numberofServicePerDay
				+ ", providerId=" + providerId + "]";
	}

	
	
}
