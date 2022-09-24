import React, { useState } from "react";
import axios from "axios";

function DisputePage() {
  const [dispute, setDispute] = useState({
    disputeInfo: "",
    raiseDate: "",
    resolveDate: "",
    disputeStatus: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDispute({ ...dispute, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/cws/Dispute/generateDispute", {
        disputeInfo: dispute.disputeInfo,
        raiseDate: dispute.raiseDate,
        resolveDate: dispute.resolveDate,
        disputeStatus: dispute.disputeStatus,
      })
      .then((response) => {
        console.log(response.data);
        alert("Dispute Raised SuccessFully");
      })
      .catch((e) => {
        console.log(e);
        alert("Not Raised");
      });
  };
  const getAll = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8080/cws/Dispute/getAllDisputes", {})
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
        <h3>Raise Dispute</h3>

        <div className="form-group">
          <label>Dispute Info</label>
          <input
            type="text"
            className="form-control"
            name="disputeInfo"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Raised date</label>
          <input
            type="date"
            className="form-control"
            // placeholder="Last name"
            name="raiseDate"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Resolved Date</label>
          <input
            type="date"
            className="form-control"
            // placeholder="Enter Mobile Number"
            name="resolveDate"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Dispute Status</label>
          <input
            type="text"
            className="form-control"
            // placeholder="Username name"
            name="disputeStatus"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          onClick={handleClick}
          className="btn btn-dark btn-lg btn-block"
        >
          Raise Dispute
        </button>
        <button
          type="submit"
          onClick={getAll}
          className="btn btn-dark btn-lg btn-block"
        >
          Get All Disputes
        </button>
        {/* <p className="forgot-password text-right">
          Already registered <a href="#">log in?</a>
        </p> */}
      </form>
    </div>
  );
}

export default DisputePage;
