import React from "react";

function BookingPage() {
  return (
    <div>
      <br />
      <br /> <h3 style={{ textAlign: "center" }}>BOOK SERVICE</h3>
      <div className="form-group">
        <label className="mx-4,my-4"> Service Date</label>
        <input
          type="date"
          className="form-control"
          placeholder="First name"
          name="firstName"
        />
      </div>
      <div className="form-group">
        <label className="mx-4,my-4"> Book Your Slot</label>

        <div className="radio">
          <br />
          <label>
            <input
              name="Slot"
              type="radio"
              value="option1"
              // checked={true}
            />
            10:00AM-12:00PM(MORNING)
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="Slot" type="radio" value="option2" />
            12:00PM-02:00PM(AFTERNOON)
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="Slot" type="radio" value="option3" />
            03:00PM-05:00PM (EVENING)
          </label>
        </div>
        <div className="radio">
          <label>
            <input name="Slot" type="radio" value="option3" />
            06:00PM-08:00PM(NIGHT)
          </label>
        </div>
      </div>
      <div className="form-group">
        <br /> <label>Service Address</label>
        <input
          type="textbox"
          className="form-control"
          placeholder="Enter Address"
          name="password"
        />
      </div>
      <div className="form-group">
        <br /> <label>Customer Contact Number</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Mobile Number"
          name="mobileNo"
        />
      </div>
      <br />{" "}
      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Book Service
      </button>
      {/* &nbsp;{" "}
      <button type="submit" className="btn btn-dark btn-lg btn-block">
        GetAll
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="./login">log in?</a>
      </p> */}
    </div>
  );
}

export default BookingPage;
