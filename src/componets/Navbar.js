import React, { useEffect, useRef, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Profile.css";
import axios from "axios";

function Navbar(props) {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const ref = useRef(null);
  const { pathname } = useLocation();
  const handlelogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  useEffect(() => {
    axios
      .post("http://localhost:5000/getcart", {
        userId: localStorage.getItem("userId"),
      })
      .then((response) => {
        if (response) {
          setData(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <LoadingBar color="#FDA12B" height={3} ref={ref} />
      <div style={{ zIndex: "999" }} className="position-sticky top-0">
        <div className="container-fluid bg-light p-0">
          <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center border-start border-end px-3">
                <small className="fa fa-phone me-2" />
                <small>+012 345 6789</small>
              </div>
              <div className="h-100 d-inline-flex align-items-center border-end px-3">
                <small className="far fa-envelope-open me-2" />
                <small>info@example.com</small>
              </div>
              <div className="h-100 d-inline-flex align-items-center border-end px-3">
                <small className="far fa-clock me-2" />
                <small>Mon - Fri : 09 AM - 09 PM</small>
              </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
              <div className="h-100 d-inline-flex align-items-center">
                <Link
                  className="btn btn-outline-primary me-2"
                  to="https://facebook.com/"
                >
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link
                  className="btn btn-outline-info me-2"
                  to="https://twitter.com/"
                >
                  <i className="fab fa-twitter" />
                </Link>
                <Link
                  className="btn btn-outline-primary me-2"
                  to="https://linkedin.com/"
                >
                  <i className="fab fa-linkedin-in" />
                </Link>
                <Link
                  className="btn btn-outline-danger"
                  to="https://instagram.com/"
                >
                  <i className="fab fa-instagram" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <h1 className="m-0 text-center d-flex align-items-center">
              <i
                className="fa fa-gear fa-spin"
                style={{ fontSize: "50px", color: "#FDA12B" }}
              />
              GO Services
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-3 py-lg-0">
              <Link
                to="/"
                className={`nav-item nav-link ${
                  pathname === "/" ? "active" : ""
                }`}
                onClick={() => ref.current.complete()}
              >
                Home
              </Link>
              <Link
                to="/About"
                className={`nav-item nav-link ${
                  pathname === "/About" ? "active" : ""
                }`}
                onClick={() => ref.current.complete()}
              >
                About Us
              </Link>
              <Link
                to="/Service"
                className={`nav-item nav-link ${
                  pathname === "/Service" ? "active" : ""
                }`}
                onClick={() => ref.current.complete()}
              >
                Our Services
              </Link>
              <Link
                to="/worker"
                className={`nav-item nav-link ${
                  pathname === "/worker" ? "active" : ""
                }`}
              >
                Worker
              </Link>
              <Link
                to="/hire"
                className={`nav-item nav-link ${
                  pathname === "/hire" ? "active" : ""
                }`}
              >
                hire
              </Link>

              <Link
                to="/contact"
                className={`nav-item nav-link ${
                  pathname === "/contact" ? "active" : ""
                }`}
                onClick={() => ref.current.complete()}
              >
                Contact Us
              </Link>
              <Link
                to="/workercart"
                className={`nav-item h5 nav-link ${
                  pathname === "/workercart" ? "active" : ""
                }`}
                onClick={() => ref.current.complete()}
              >
                <i className="bi bi-cart4"></i>
              </Link>
            </div>
          </div>
          {/* profile */}
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                onClick={toggleDropdown}
                role="button"
                aria-haspopup="true"
                aria-expanded={isOpen}
              >
                <img
                  src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                  width="40"
                  height="40"
                  alt="/"
                />
              </div>

              {isOpen && (
                <div
                  className="card-container dropdown-menu image d-flex flex-column justify-content-center align-items-center"
                  style={{ width: "300px" }}
                >
                  <img
                    className="round"
                    src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                    alt="user"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <p className="mt-2">Username: {data?.data?.username}</p>
                  <p>Email : {data?.data?.email}</p>
                  <div className="buttons">
                    <button className="primary1" onClick={handlelogout}>
                      Logout{" "}
                      <i className="fa fa-sign-out" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
