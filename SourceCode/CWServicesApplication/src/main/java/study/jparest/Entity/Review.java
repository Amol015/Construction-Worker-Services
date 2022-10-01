package study.jparest.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="review_tbl")
public class Review {
	
	@Id
	@Column(name="review_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id;
		
	@Column(name="review_comment")
	private String reviewComment;
	
	@Column(name="review_rating")
	private double reviewRating;
	
	@OneToOne
	@JoinColumn(name="customer_id")
	private Customer customerId;
	
	@OneToOne
	@JoinColumn(name="booking_id")
	private Booking bookingId;
	
	@OneToOne
	@JoinColumn(name="provider_id ")
	private ServiceProvider1 providerId ;

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getReviewComment() {
		return reviewComment;
	}

	public void setReviewComment(String reviewComment) {
		this.reviewComment = reviewComment;
	}

	public double getReviewRating() {
		return reviewRating;
	}

	public void setReviewRating(double reviewRating) {
		this.reviewRating = reviewRating;
	}

	public Customer getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Customer customerId) {
		this.customerId = customerId;
	}

	public Booking getBookingId() {
		return bookingId;
	}

	public void setBookingId(Booking bookingId) {
		this.bookingId = bookingId;
	}

	public ServiceProvider1 getProviderId() {
		return providerId;
	}

	public void setProviderId(ServiceProvider1 providerId) {
		this.providerId = providerId;
	}

	public Review(int id, String reviewComment, double reviewRating, Customer customerId, Booking bookingId,
			ServiceProvider1 providerId) {
		super();
		Id = id;
		this.reviewComment = reviewComment;
		this.reviewRating = reviewRating;
		this.customerId = customerId;
		this.bookingId = bookingId;
		this.providerId = providerId;
	}

	public Review() {
		super();
	}

	@Override
	public String toString() {
		return "Review [Id=" + Id + ", reviewComment=" + reviewComment + ", reviewRating=" + reviewRating
				+ ", customerId=" + customerId + ", bookingId=" + bookingId + ", providerId=" + providerId + "]";
	}
}

