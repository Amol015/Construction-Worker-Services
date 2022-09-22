package study.jparest.Entity;

import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="dispute_tbl")
public class Dispute {
	
	@Id
	@Column(name="dispute_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int Id;
	
	@Column(name="booking_id")
	private int bookingId;
	

	@Column(name="dispute_info")
	private String disputeInfo;
	

	@Column(name="raise_date")
	private Date raiseDate;

	@Column(name="resolve_date")
	private Date resolveDate;
	

	@Column(name="dispute_status")
	private String disputeStatus;

	@ManyToMany(targetEntity = Booking.class, cascade = { CascadeType.ALL })
	private Set<Booking> booking;
	
	public int getId() {
		return Id;
	}


	public void setId(int id) {
		Id = id;
	}


	public int getBooking_id() {
		return bookingId;
	}


	public void setBooking_id(int booking_id) {
		this.bookingId = booking_id;
	}


	public String getDispute_info() {
		return disputeInfo;
	}


	public void setDispute_info(String dispute_info) {
		this.disputeInfo = dispute_info;
	}


	public Date getRaise_date() {
		return raiseDate;
	}


	public void setRaise_date(Date raise_date) {
		this.raiseDate = raise_date;
	}


	public Date getResolve_date() {
		return resolveDate;
	}


	public void setResolve_date(Date resolve_date) {
		this.resolveDate = resolve_date;
	}


	public String getDispute_status() {
		return disputeStatus;
	}


	public void setDispute_status(String dispute_status) {
		this.disputeStatus = dispute_status;
	}


	public Dispute(int id, int booking_id, String dispute_info, Date raise_date, Date resolve_date,
			String dispute_status) {
		super();
		Id = id;
		this.bookingId = booking_id;
		this.disputeInfo = dispute_info;
		this.raiseDate = raise_date;
		this.resolveDate = resolve_date;
		this.disputeStatus = dispute_status;
	}

	public Dispute() {
		super();
	}
}
