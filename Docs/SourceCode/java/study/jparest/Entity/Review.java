package study.jparest.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="review_tbl")
public class Review {
	
	@Id
	@Column(name="review_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int Id;
	
	@Column(name="customer_id")
	private int customerId;
	
	@Column(name="booking_id")
	private int bookingId;
	
	@Column(name="provider_id ")
	private int providerId ;

	@Column(name="review_comment")
	private String reviewComment;
	
	@Column(name="review_rating")
	private double reviewRating;

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public int getBookingId() {
		return bookingId;
	}

	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}

	public int getProviderId() {
		return providerId;
	}

	public void setProviderId(int providerId) {
		this.providerId = providerId;
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

	public Review(int id, int customerId, int bookingId, int providerId, String reviewComment, double reviewRating) {
		super();
		Id = id;
		this.customerId = customerId;
		this.bookingId = bookingId;
		this.providerId = providerId;
		this.reviewComment = reviewComment;
		this.reviewRating = reviewRating;
	}

	public Review() {
		super();
	}
	
	
	

}
