package study.jparest.Entity;
import java.util.List;

import javax.persistence.CascadeType;
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
@Table(name="service_provider_info_tbl")
public class ServiceProvider {

	@Id
	@Column(name = "provider_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;

	@Column(name="provider_firstname")
	private String firstName;

	@Column(name="provider_lastname")
	private String lastName;

	@Column(name="provider_mobile")
	private long mobile;

	@Column(name="provider_username")
	private String userName;

	@Column(name="provider_password")
	private String password;

	@Column(name="provider_email_id")
	private String emailId;

	@Column(name="provider_city")
	private String city;

	@Column(name="provider_role")
	private String role;

	@Column(name="provider_is_verified")
	private boolean isVerified;
	
	@OneToOne(mappedBy = "serviceProfile", cascade = CascadeType.ALL)
	private ServiceInfo serviceInfo;
	
	@OneToOne(mappedBy = "serviceProvider")
	private Review review;

	
	@OneToMany(mappedBy = "serviceProvider")
	private List<Booking> booking;
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public long getMobile() {
		return mobile;
	}

	public void setMobile(long mobile) {
		this.mobile = mobile;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public boolean isVerified() {
		return isVerified;
	}

	public void setVerified(boolean isVerified) {
		this.isVerified = isVerified;
	}

	public ServiceInfo getServiceInfo() {
		return serviceInfo;
	}

	public void setServiceInfo(ServiceInfo serviceInfo) {
		this.serviceInfo = serviceInfo;
	}

	public Review getReview() {
		return review;
	}

	public void setReview(Review review) {
		this.review = review;
	}

	public ServiceProvider(int id, String firstName, String lastName, long mobile, String userName, String password,
			String emailId, String city, String role, boolean isVerified, ServiceInfo serviceInfo, Review review) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobile = mobile;
		this.userName = userName;
		this.password = password;
		this.emailId = emailId;
		this.city = city;
		this.role = role;
		this.isVerified = isVerified;
		this.serviceInfo = serviceInfo;
		this.review = review;
	}
	
	public ServiceProvider(int id, String firstName, String lastName, long mobile, String userName, String password,
			String emailId, String city, String role, boolean isVerified) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobile = mobile;
		this.userName = userName;
		this.password = password;
		this.emailId = emailId;
		this.city = city;
		this.role = role;
		this.isVerified = isVerified;
	}
	
	


}
