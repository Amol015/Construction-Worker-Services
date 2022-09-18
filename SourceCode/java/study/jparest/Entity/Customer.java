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
@Table(name="customer_info_tbl")
public class Customer {

	@Id
	@Column(name="customer_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int Id;
	
	@NotEmpty(message = "Field must not be null")
	@Column(name="customer_firstname")
	private String firstName;
	
	
	@Column(name="customer_lastname")
	private String lastName;
	
	@Column(name="customer_mobile")
	@Pattern(regexp = "^$|[0-9]{10}",message = "Please input proper format")
	private long mobile;
	
	@NotEmpty(message = "Field must not be null")
	@Column(name="customer_username")
	private String userName;
	
	@Size(min = 4,max = 10,message = "Password must be more than 4 and less than 10 charcters")
	@Column(name="customer_password")
	private String password;
	
	@Column(unique = true)
	@Email(message = "Please input proper format")
	private String emailId;
	
	@Column(name="customer_address")
	private String address;

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Customer(int id, String firstName, String lastName, long mobile, String userName, String password,
			String emailId, String address) {
		super();
		Id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobile = mobile;
		this.userName = userName;
		this.password = password;
		this.emailId = emailId;
		this.address = address;
	}

	public Customer() {
		super();
	}
	
	
}
