import React, { useState } from "react";
import axios from "axios";

function ReviewPage() {
  const [review, setReview] = useState({
    reviewComment: "",
    reviewRating: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setReview({ ...review, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/cws/Review/addReview", {
        reviewComment: review.reviewComment,
        reviewRating: review.reviewRating,
      })
      .then((response) => {
        console.log(response.data);
        alert("Review raised SuccessFully");
      })
      .catch((e) => {
        console.log(e);
        alert("Not Raised");
      });
  };
  const getAll = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8080/cws/Review/getAllReviews", {})
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
        alert("Empty ");
      });
  };
  return (
    <div>
      <form>
        <h3>Give Review</h3>

        <div className="form-group">
          <label>Add Comment</label>
          <input
            type="text"
            className="form-control"
            name="reviewComment"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Review Rating</label>
          <input
            type="number"
            className="form-control"
            // placeholder="Last name"
            name="reviewRating"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          onClick={handleClick}
          className="btn btn-dark btn-lg btn-block"
        >
          Submit Review
        </button>

        {/* <p className="forgot-password text-right">
          Already registered <a href="#">log in?</a>
        </p> */}
      </form>
    </div>
  );
}

export default ReviewPage;
