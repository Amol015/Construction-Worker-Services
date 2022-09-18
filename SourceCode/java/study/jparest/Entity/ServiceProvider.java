package study.jparest.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Entity
@Table(name="service_provider_info_tbl")
public class ServiceProvider {
	
	@Id
	@Column(name = "provider_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
	
	@NotEmpty(message = "Field must not be null")
	@Column(name="provider_firstname")
	private String firstName;
	
	@Column(name="provider_lastname")
	private String lastName;
	
	@Pattern(regexp = "^$|[0-9]{10}",message = "Please input proper format")
	@Column(name="provider_mobile")
	private long mobile;
	
	@Column(name="provider_username")
	private String userName;
	
	@Size(min = 4,max = 10,message = "Password must be more than 4 and less than 10 charcters")
	@Column(name="provider_password")
	private String password;
	
	@Column(unique = true)
	@Email(message = "Please input proper format")
	private String emailId;
	
	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Column(name="provider_city")
	private String city;
	
	@Column(name="provider_role")
	private String role;
	
	@Column(name="provider_is_verified")
	private boolean isVerified;

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
		this.role=role;
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
