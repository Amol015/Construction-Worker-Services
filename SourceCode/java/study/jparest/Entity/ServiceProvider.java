package study.jparest.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
	
	@Column(name="provider_is_verified")
	private boolean isVerified;

	public ServiceProvider(int id, String firstName, String lastName, long mobile, String userName, String password,
			String emailId, String city, boolean isVerified) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobile = mobile;
		this.userName = userName;
		this.password = password;
		this.emailId = emailId;
		this.city = city;
		this.isVerified = isVerified;
	}

	public ServiceProvider() {
		super();
	}

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

	public boolean isVerified() {
		return isVerified;
	}

	public void setVerified(boolean isVerified) {
		this.isVerified = isVerified;
	}
	
	
	
	

	
}
