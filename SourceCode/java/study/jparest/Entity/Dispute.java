package study.jparest.Entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="dispute_tbl")
public class Dispute {
	
	@Id
	@Column(name="dispute_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int Id;
	
	@Column(name="dispute_info")
	private String disputeInfo;
	

	@Column(name="raise_date")
	private Date raiseDate;

	@Column(name="resolve_date")
	private Date resolveDate;
	

	@Column(name="dispute_status")
	private String disputeStatus;
	
	@OneToOne
	@JoinColumn(name="booking_id")
	private Booking bookingId;
	

	public Dispute(int id, String disputeInfo, Date raiseDate, Date resolveDate, String disputeStatus,
			Booking bookingId) {
		super();
		Id = id;
		this.disputeInfo = disputeInfo;
		this.raiseDate = raiseDate;
		this.resolveDate = resolveDate;
		this.disputeStatus = disputeStatus;
		this.bookingId = bookingId;
	}

	

	@Override
	public String toString() {
		return "Dispute [Id=" + Id + ", disputeInfo=" + disputeInfo + ", raiseDate=" + raiseDate + ", resolveDate="
				+ resolveDate + ", disputeStatus=" + disputeStatus + ", bookingId=" + bookingId + "]";
	}



	public int getId() {
		return Id;
	}


	public void setId(int id) {
		Id = id;
	}


	public String getDisputeInfo() {
		return disputeInfo;
	}


	public void setDisputeInfo(String disputeInfo) {
		this.disputeInfo = disputeInfo;
	}


	public Date getRaiseDate() {
		return raiseDate;
	}


	public void setRaiseDate(Date raiseDate) {
		this.raiseDate = raiseDate;
	}


	public Date getResolveDate() {
		return resolveDate;
	}


	public void setResolveDate(Date resolveDate) {
		this.resolveDate = resolveDate;
	}


	public String getDisputeStatus() {
		return disputeStatus;
	}


	public void setDisputeStatus(String disputeStatus) {
		this.disputeStatus = disputeStatus;
	}


	public Booking getBookingId() {
		return bookingId;
	}


	public void setBookingId(Booking bookingId) {
		this.bookingId = bookingId;
	}


	public Dispute() {
		super();
	}
}
