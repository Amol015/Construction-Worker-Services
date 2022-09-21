package study.jparest.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="review_tbl")
public class Review {
	
	@Id
	@Column(name="review_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int Id;

	@Column(name="review_comment")
	private String reviewComment;
	
	@Column(name="review_rating")
	private double reviewRating;

	@ManyToOne
	@JoinColumn(name="booking_id", nullable=false)
	private Booking booking;
	
	@OneToOne
	@JoinColumn(name="customer_id", nullable=false)
	private Customer customer;
	
	@OneToOne
	@JoinColumn(name="provider_id", nullable=false)
	private ServiceProvider serviceProvider;

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

	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public ServiceProvider getServiceProvider() {
		return serviceProvider;
	}

	public void setServiceProvider(ServiceProvider serviceProvider) {
		this.serviceProvider = serviceProvider;
	}

	public Review(int id,Booking booking, Customer customer,
			ServiceProvider serviceProvider ,String reviewComment, double reviewRating) {
		super();
		Id = id;
		this.reviewComment = reviewComment;
		this.reviewRating = reviewRating;
		this.booking = booking;
		this.customer = customer;
		this.serviceProvider = serviceProvider;
	}

	public Review(){
		super();
	}
		

}
