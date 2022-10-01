import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import imglogin from "../assets/cafe-mozaic.webp";
import Footer from "../Components/Footer";
import { URL } from "../config";

const BookingServiceProvider = (props) => {
  const location = useLocation();
  const [restaurant, setRestaurant] = useState(location.state.restaurant);
  const [image, setImage] = useState(location.state.image);
  const [bookingDate, setBookingDate] = useState("");
  const [guestName, setGuestName] = useState("");
  const [numberOfGuest, setNumberOfGuest] = useState(0);
  const [tableBookingStatus, setTableBookingStatus] = useState(false);
  const [tableBookingAmount, setTableBookingAmount] = useState(0);
  const [specialRequest, setSpecialRequest] = useState("");
  const [timeslot, setTimeSlot] = useState("");
  const [feature, setFeatures] = useState([]);

  const navigate = useNavigate();

  const disablesDates = () => {
    let today, dd, mm, yyyy;
    today = new Date();
    dd = today.getDate() + 1;
    mm = today.getMonth() + 1;
    yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const [custLoginStatus, setCustLoginStatus] = useState(0);
  const [customerId, setCustomerId] = useState(0);

  useEffect(() => {
    const data = window.sessionStorage.getItem("custLoginStatus");
    const data2 = window.sessionStorage.getItem("customerId");
    if (data !== null) setCustLoginStatus(JSON.parse(data));
    setCustomerId(JSON.parse(data2));
  }, [custLoginStatus]);

  const Logout = (e) => {
    e.preventDefault();
    window.sessionStorage.setItem("custLoginStatus", JSON.stringify(0));
    window.sessionStorage.setItem("customerId", 0);
    navigate("/home");
  };

  const save = (e) => {
    e.preventDefault();

    if (bookingDate.length == 0) {
      alert("please enter booking date");
    } else if (guestName.length == 0) {
      alert("please enter guest name");
    } else if (numberOfGuest.length == 0) {
      alert("please enter number of guest");
    } else {
      const body = {
        guestName: guestName,
        numberOfGuest: numberOfGuest,
        tableBookingStatus: tableBookingStatus,
        tableBookingAmount: tableBookingAmount,
        specialRequest: specialRequest,
        timeslot: timeslot,
      };

      const url = `${URL}/tableBooking/addTableBooking/${bookingDate}/${customerId}/${restaurant.restaurantInfoId}`;

      axios.post(url, body).then((response) => {
        const result = response.data;
        console.log(result);
        if (result["status"] == "Success") {
          alert("booking successful");
          navigate("/myBookings");
        } else {
          alert("booking failed");
        }
      });
    }
  };

  const getAllFeatures = (e) => {
    const url2 = `${URL}/restaurantInfo/getAllFeatures/${restaurant.restaurantInfoId}`;

    axios.get(url2).then((response) => {
      const result = response.data;
      console.log(result);
      if (result["status"] == "Success") {
        let data = result["data"];
        setFeatures(data);
      } else {
        alert("booking failed");
      }
    });
  };

  useEffect(() => {
    getAllFeatures();
  }, []);

  return (
    <div className="container-xxl bg-white p-0">
      <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <a href="" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-utensils me-3"></i>DineEazy
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4">
              <Link to="/home" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/tableBooking" className="nav-item nav-link active">
                Book A Table
              </Link>
              <Link to="/restaurant" className="nav-item nav-link">
                Restaurant
              </Link>
              <Link to="/aboutUs" className="nav-item nav-link">
                About Us
              </Link>
              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
              {custLoginStatus == 1 ? (
                <Link
                  to="/logout"
                  className="nav-item nav-link"
                  onClick={Logout}
                >
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="nav-item nav-link">
                  Login
                </Link>
              )}
            </div>
            {custLoginStatus == 1 ? (
              <Link to="/myBookings" className="btn btn-primary py-2 px-4">
                My Bookings
              </Link>
            ) : (
              <Link to="/signUp" className="btn btn-primary py-2 px-4">
                Sign Up
              </Link>
            )}
          </div>
        </nav>

        <div className="container-xxl py-2 bg-dark hero-header mb-2">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Book A Table
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Book A Table
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div
        className="container-xxl py-4 px-0 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="col-md-2"></div>
        <div className="row g-0">
          <div className="col-md-12 bg-dark d-flex align-items-center">
            <div className="p-0 wow fadeInUp" data-wow-delay="0.2s"></div>
            <div>
              <br></br>
              <br></br>
              <br></br>
              <center>
                <img
                  src={`data:image/jpg;base64,${image}`}
                  className="card-img"
                  style={{ maxWidth: "56rem", maxHeight: "25rem" }}
                />
              </center>
              <div className="col-12">
                <center>
                  <div className="card-body col-md-12 bg-dark">
                    <div
                      style={{ maxWidth: 900 }}
                      className="card-text btn btn-primary w-100 py-1"
                    >
                      <h2 style={{ color: "#0F172B" }}>
                        {restaurant.restaurantName}
                      </h2>
                      <h6 style={{ color: "#0F172B" }}>
                        {restaurant.restaurantAddress}
                      </h6>
                      <h6 style={{ color: "#0F172B" }}>
                        &#8377;{restaurant.minBookingAmountPerPerson} for 1
                        approx
                      </h6>
                      <h6 style={{ color: "#0F172B" }}>
                        Open from {restaurant.openingTime} -{" "}
                        {restaurant.closingTime}
                      </h6>
                    </div>
                  </div>
                </center>
              </div>

              <br />
              <h4 className="section-title ff-secondary text-start text-primary fw-normal">
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Features
              </h4>

              <div className="col-md-3 py-2"></div>
              <div className="col-md-12">
                <div className="htmlForm-floating">
                  <div
                    className="form-check"
                    style={{ color: "white", marginLeft: 250 }}
                  >
                    {feature.length > 0 ? (
                      <tbody>
                        {feature.map((feature) => {
                          return (
                            <tr>
                              <td>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDisabled"
                                  checked
                                  readOnly
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckDisabled"
                                >
                                  {feature.featureName}&ensp;&ensp;&ensp;
                                  &ensp;&ensp;&ensp;&ensp;&ensp;
                                  &ensp;&ensp;&ensp;&ensp;&ensp;
                                </label>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    ) : (
                      <tbody>
                        <tr>
                          <td className="card-body">No features.</td>
                        </tr>
                      </tbody>
                    )}
                  </div>
                </div>
              </div>

              <br />
              <br />
              <h4 className="section-title ff-secondary text-start text-primary fw-normal">
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Make
                a Revervation
              </h4>
              <div className="col-md-2 py-2"></div>
              <form>
                <div className="row g-3">
                  <div className="col-md-2"></div>

                  <div className="col-md-8">
                    <input
                      type="date"
                      id="DatetimeLocal"
                      className="form-control"
                      onChange={(e) => {
                        setBookingDate(e.target.value);
                      }}
                      min="2022-09-21"
                      required
                    />
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-2"></div>
                  <div className="col-md-2">
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle w-100 py-1"
                        style={{ backgroundColor: "#FEA116" }}
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        &ensp;&ensp;Break Fast&ensp;&ensp;
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item">
                            <input
                              class="form-check-input"
                              name="a"
                              type="radio"
                              value="7.00 AM"
                              onClick={(e) => {
                                setTimeSlot(e.target.value);
                              }}
                            />
                            <label class="form-check-label">
                              &ensp; 7.00 AM &ensp;
                            </label>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            <input
                              class="form-check-input"
                              name="a"
                              type="radio"
                              value="8.00 AM"
                              onClick={(e) => {
                                setTimeSlot(e.target.value);
                              }}
                            />
                            <label class="form-check-label">
                              &ensp; 8.00 AM &ensp;
                            </label>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            <input
                              class="form-check-input"
                              name="a"
                              type="radio"
                              value="9.00 AM"
                              onClick={(e) => {
                                setTimeSlot(e.target.value);
                              }}
                            />
                            <label class="form-check-label">
                              &ensp; 9.00 AM &ensp;
                            </label>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            <input
                              class="form-check-input"
                              name="a"
                              type="radio"
                              value="10.00 AM"
                              onClick={(e) => {
                                setTimeSlot(e.target.value);
                              }}
                            />
                            <label class="form-check-label">
                              &ensp; 10.00 AM &ensp;
                            </label>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            <input
                              class="form-check-input"
                              name="a"
                              type="radio"
                              value="11.00 AM"
                              onClick={(e) => {
                                setTimeSlot(e.target.value);
                              }}
                            />
                            <label class="form-check-label">
                              &ensp; 11.00 AM &ensp;
                            </label>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/******************************************************************************************************/}
                  <div className="col-md-1"></div>
                  <div className="col-md-2">
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle w-100 py-1"
                        style={{ backgroundColor: "#FEA116" }}
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        &ensp;&ensp;&ensp;Lunch&ensp;&ensp;&ensp;&ensp;
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="a"
                              value="12.00 PM"
                              onClick={(e) => {
                                setTimeSlot(e.target.value);
                              }}
                            />
                            <label class="form-check-label">
                              &ensp; 12.00 PM &ensp;
                            </label>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="a"
                              value="1.00 PM"
                              onClick={(e) => {
                                setTimeSlot(e.target.value);
                              }}
                            />
                            <label class="form-check-label">
                              &ensp; 1.00 PM &ensp;
                            </label>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="a"
                              value="2.00 PM"
                              onClick={(e) => {
                                setTimeSlot(e.target.value);
                              }}
                            />
                            <label class="form-check-label">
                              &ensp; 2.00 PM &ensp;
                            </label>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="a"
                              value="3.00 PM"
                              onClick={(e) => {
                                setTimeSlot(e.target.value);
                              }}
                            />
                            <label class="form-check-label">
                              &ensp; 3.00 PM &ensp;
                            </label>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="a"
                              value="4.00 PM"
                              onClick={(e) => {
                                setTimeSlot(e.target.value);
                              }}
                            />
                            <label class="form-check-label">
                              &ensp; 4.00 PM &ensp;
                            </label>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="a"
                              value="5.00 PM"
                              onClick={(e) => {
                                setTimeSlot(e.target.value);
                              }}
                            />
                            <label class="form-check-label">
                              &ensp; 5.00 PM &ensp;
                            </label>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/*******************************************************************************************/}
                  <div className="col-md-1"></div>
                  <div className="col-md-2">
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle w-100 py-1"
                        style={{ backgroundColor: "#FEA116" }}
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        &ensp;&ensp;&ensp;Dinner&ensp;&ensp;&ensp;&ensp;
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="a"
                              value="6.00 PM"
                              onClick={(e) => {
                                setTimeSlot(e.target.value);
                              }}
                            />
                            <label class="form-check-label">
                              &ensp; 6.00 PM &ensp;
                            </label>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="a"
                              value="7.00 PM"
                              onClick={(e) => {
                                setTimeSlot(e.target.value);
                              }}
                            />
                            <label class="form-check-label">
                              &ensp; 7.00 PM &ensp;
                            </label>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="a"
                              value="8.00 PM"
                              onClick={(e) => {
                                setTimeSlot(e.target.value);
                              }}
                            />
                            <label class="form-check-label">
                              &ensp; 8.00 PM &ensp;
                            </label>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="a"
                              value="9.00 PM"
                              onClick={(e) => {
                                setTimeSlot(e.target.value);
                              }}
                            />
                            <label class="form-check-label">
                              &ensp; 9.00 PM &ensp;
                            </label>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="a"
                              value="10.00 PM"
                              onClick={(e) => {
                                setTimeSlot(e.target.value);
                              }}
                            />
                            <label class="form-check-label">
                              &ensp; 10.00 PM &ensp;
                            </label>
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="a"
                              value="11.00 PM"
                              onClick={(e) => {
                                setTimeSlot(e.target.value);
                              }}
                            />
                            <label class="form-check-label">
                              &ensp; 11.00 PM &ensp;
                            </label>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/*******************************************************************************************/}
                  {/*******************************************************************************************/}
                  <div className="col-md-2"></div>
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="text"
                        placeholder="contact person name"
                        onChange={(e) => {
                          setGuestName(e.target.value);
                        }}
                      />
                      <label htmlFor="text">Name</label>
                    </div>
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="number"
                        placeholder="number"
                        onChange={(e) => {
                          setNumberOfGuest(e.target.value);
                        }}
                      />
                      <label htmlFor="number">Number of Guest</label>
                    </div>
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="text"
                        placeholder="contact person name"
                        onChange={(e) => {
                          setSpecialRequest(e.target.value);
                        }}
                        onBlur={(e) => {
                          setTableBookingAmount(
                            numberOfGuest * restaurant.minBookingAmountPerPerson
                          );
                        }}
                      />
                      <label htmlFor="text">Special Request</label>
                    </div>
                  </div>

                  <div className="col-md-2"></div>
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="number"
                        placeholder="number"
                        value={
                          numberOfGuest * restaurant.minBookingAmountPerPerson
                        }
                        disabled
                      />
                      <label htmlFor="number">Payable Amount</label>
                    </div>
                  </div>

                  <div className="col-md-2"></div>
                  <div className="col-md-8"></div>
                  <div className="col-md-2"></div>
                  <div className="col-md-2"></div>
                  <div className="col-md-2"></div>
                  <div className="col-8">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                      onClick={save}
                    >
                      Pay &ensp;&ensp; & &ensp;&ensp;Book
                    </button>
                  </div>
                </div>
              </form>
              <div className="col-md-2 py-4"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BookingServiceProvider;
