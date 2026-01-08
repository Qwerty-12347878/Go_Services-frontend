// import React, { useEffect, useRef, useState } from "react";
// import LoadingBar from "react-top-loading-bar";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import "./Profile.css";
// import axios from "axios";

// function Navbar(props) {
//   const [data, setData] = useState([]);

//   const navigate = useNavigate();
//   const ref = useRef(null);
//   const { pathname } = useLocation();
//   const handlelogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userId");
//     navigate("/login");
//   };

//   useEffect(() => {
//     axios
//       .post("http://localhost:5000/getcart", {
//         userId: localStorage.getItem("userId"),
//       })
//       .then((response) => {
//         if (response) {
//           setData(response.data);
//         }
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <LoadingBar color="#FDA12B" height={3} ref={ref} />
//       <div style={{ zIndex: "999" }} className="position-sticky top-0">
//         <div className="container-fluid bg-light p-0">
//           <div className="row gx-0 d-none d-lg-flex">
//             <div className="col-lg-7 px-5 text-start">
//               <div className="h-100 d-inline-flex align-items-center border-start border-end px-3">
//                 <small className="fa fa-phone me-2" />
//                 <small>+012 345 6789</small>
//               </div>
//               <div className="h-100 d-inline-flex align-items-center border-end px-3">
//                 <small className="far fa-envelope-open me-2" />
//                 <small>info@example.com</small>
//               </div>
//               <div className="h-100 d-inline-flex align-items-center border-end px-3">
//                 <small className="far fa-clock me-2" />
//                 <small>Mon - Fri : 09 AM - 09 PM</small>
//               </div>
//             </div>
//             <div className="col-lg-5 px-5 text-end">
//               <div className="h-100 d-inline-flex align-items-center">
//                 <Link
//                   className="btn btn-outline-primary me-2"
//                   to="https://facebook.com/"
//                 >
//                   <i className="fab fa-facebook-f" />
//                 </Link>
//                 <Link
//                   className="btn btn-outline-info me-2"
//                   to="https://twitter.com/"
//                 >
//                   <i className="fab fa-twitter" />
//                 </Link>
//                 <Link
//                   className="btn btn-outline-primary me-2"
//                   to="https://linkedin.com/"
//                 >
//                   <i className="fab fa-linkedin-in" />
//                 </Link>
//                 <Link
//                   className="btn btn-outline-danger"
//                   to="https://instagram.com/"
//                 >
//                   <i className="fab fa-instagram" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
//           <Link to="/" className="navbar-brand d-flex align-items-center">
//             <h1 className="m-0 text-center d-flex align-items-center">
//               <i
//                 className="fa fa-gear fa-spin"
//                 style={{ fontSize: "50px", color: "#FDA12B" }}
//               />
//               GO Services
//             </h1>
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarCollapse"
//             aria-controls="navbarCollapse"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarCollapse">
//             <div className="navbar-nav ms-auto py-3 py-lg-0">
//               <Link
//                 to="/"
//                 className={`nav-item nav-link text-10 ${
//                   pathname === "/" ? "active" : ""
//                 }`}
//                 onClick={() => ref.current.complete()}
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/About"
//                 className={`nav-item nav-link ${
//                   pathname === "/About" ? "active" : ""
//                 }`}
//                 onClick={() => ref.current.complete()}
//               >
//                 About Us
//               </Link>
//               <Link
//                 to="/Service"
//                 className={`nav-item nav-link ${
//                   pathname === "/Service" ? "active" : ""
//                 }`}
//                 onClick={() => ref.current.complete()}
//               >
//                 Our Services
//               </Link>
//               <Link
//                 to="/worker"
//                 className={`nav-item nav-link ${
//                   pathname === "/worker" ? "active" : ""
//                 }`}
//               >
//                 Worker
//               </Link>
//               <Link
//                 to="/hire"
//                 className={`nav-item nav-link ${
//                   pathname === "/hire" ? "active" : ""
//                 }`}
//               >
//                 hire
//               </Link>

//               <Link
//                 to="/contact"
//                 className={`nav-item nav-link ${
//                   pathname === "/contact" ? "active" : ""
//                 }`}
//                 onClick={() => ref.current.complete()}
//               >
//                 Contact Us
//               </Link>
//               <Link
//                 to="/workercart"
//                 className={`nav-item h5 nav-link ${
//                   pathname === "/workercart" ? "active" : ""
//                 }`}
//                 onClick={() => ref.current.complete()}
//               >
//                 <i className="bi bi-cart4"></i>
//               </Link>
//             </div>
//           </div>
//           {/* profile */}
//           <ul className="navbar-nav">
//             <li className="nav-item dropdown">
//               <div
//                 className="nav-link dropdown-toggle"
//                 onClick={toggleDropdown}
//                 role="button"
//                 aria-haspopup="true"
//                 aria-expanded={isOpen}
//               >
//                 <img
//                   src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
//                   width="40"
//                   height="40"
//                   alt="/"
//                 />
//               </div>

//               {isOpen && (
//                 <div
//                   className="card-container dropdown-menu image d-flex flex-column justify-content-center align-items-center"
//                   style={{ width: "300px" }}
//                 >
//                   <img
//                     className="round"
//                     src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
//                     alt="user"
//                     style={{ width: "150px", height: "150px" }}
//                   />
//                   <p className="mt-2">Username: {data?.data?.username}</p>
//                   <p>Email : {data?.data?.email}</p>
//                   <div className="buttons">
//                     <button className="primary1" onClick={handlelogout}>
//                       Logout{" "}
//                       <i className="fa fa-sign-out" aria-hidden="true"></i>
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// }

// export default Navbar;


// import React, { useEffect, useRef, useState } from "react";
// import LoadingBar from "react-top-loading-bar";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Profile.css";

// function Navbar() {
//   const [userData, setUserData] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const [cartCount, setCartCount] = useState(0);

//   const navigate = useNavigate();
//   const { pathname } = useLocation();
//   const ref = useRef(null);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userId");
//     navigate("/login");
//   };

//   // Fetch user/cart data
//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     if (!userId) return;

//     axios
//       .post("http://localhost:5000/getcart", { userId })
//       .then((res) => setUserData(res.data?.data))
//       .catch((err) => console.error(err));
//   }, []);

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     if (!userId) return;

//     axios
//       .post("http://localhost:5000/getcart", { userId })
//       .then((res) => {
//         const cartItems = res.data?.data?.cart || [];
//         setCartCount(cartItems.length);   // 👈 counter here
//         setUserData(res.data?.data);
//       })
//       .catch((err) => console.error(err));
//   }, []);


//   // Close profile dropdown on route change
//   useEffect(() => {
//     setIsOpen(false);
//   }, [pathname]);

//   return (
//     <>
//       <LoadingBar color="#FDA12B" height={3} ref={ref} />

//       <div className="sticky-top" style={{ zIndex: 999 }}>
//         {/* Top info bar (hidden on mobile) */}
//         <div className="container-fluid bg-light d-none d-lg-block">
//           <div className="row gx-0">
//             <div className="col-lg-7 px-5">
//               <div className="d-flex h-100 align-items-center gap-3">
//                 <small><i className="fa fa-phone me-2" />+012 345 6789</small>
//                 <small><i className="far fa-envelope me-2" />info@example.com</small>
//                 <small><i className="far fa-clock me-2" />Mon - Fri : 09 AM - 09 PM</small>
//               </div>
//             </div>
//             <div className="col-lg-5 px-5 text-end">
//               <div className="d-flex justify-content-end gap-2">
//                 <a className="btn btn-outline-primary" href="https://facebook.com">
//                   <i className="fab fa-facebook-f" />
//                 </a>
//                 <a className="btn btn-outline-info" href="https://twitter.com">
//                   <i className="fab fa-twitter" />
//                 </a>
//                 <a className="btn btn-outline-primary" href="https://linkedin.com">
//                   <i className="fab fa-linkedin-in" />
//                 </a>
//                 <a className="btn btn-outline-danger" href="https://instagram.com">
//                   <i className="fab fa-instagram" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Navbar */}
//         <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-3 px-lg-5">
//           <Link to="/" className="navbar-brand d-flex align-items-center">
//             <i className="fa fa-gear fa-spin me-2" style={{ fontSize: 40, color: "#FDA12B" }} />
//             <span className="fw-bold fs-4">GO Services</span>
//           </Link>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarCollapse"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>

//           <div className="collapse navbar-collapse" id="navbarCollapse">
//             <ul className="navbar-nav ms-auto align-items-lg-center gap-3 flex">
//               {[
//                 { path: "/", label: "Home" },
//                 { path: "/About", label: "About Us" },
//                 { path: "/Service", label: "Our Services" },
//                 { path: "/worker", label: "Worker" },
//                 { path: "/hire", label: "Hire" },
//                 { path: "/contact", label: "Contact Us" },
//               ].map((item) => (
//                 <li className="nav-item" key={item.path}>
//                   <Link
//                     to={item.path}
//                     onClick={() => ref.current?.complete()}
//                     className={`nav-link ${pathname === item.path ? "active fw-bold" : ""}`}
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}

//               {/* Cart */}
//               {/* <li className="nav-item">
//                 <Link
//                   to="/workercart"
//                   className={`nav-link ${pathname === "/workercart" ? "active" : ""}`}
//                 >
//                   <i className="bi bi-cart4 fs-5" />
//                 </Link>
//               </li> */}

//               <li className="nav-item position-relative">
//                 <Link
//                   to="/workercart"
//                   className={`nav-link d-flex align-items-center justify-content-center px-2 px-md-3 ${pathname === "/workercart" ? "active" : ""
//                     }`}
//                 >
//                   <i className="bi bi-cart4 fs-5"></i>

//                   {cartCount > 0 && (
//                     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                       {cartCount}
//                     </span>
//                   )}
//                 </Link>
//               </li>


//               {/* Profile */}
//               <li className="nav-item dropdown position-relative">
//                 <img
//                   src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
//                   width="40"
//                   height="40"
//                   alt="profile"
//                   className="rounded-circle cursor-pointer"
//                   onClick={() => setIsOpen(!isOpen)}
//                   style={{ cursor: "pointer" }}
//                 />

//                 {isOpen && (
//                   <div
//                     className="dropdown-menu dropdown-menu-end p-3 show"
//                     style={{ minWidth: 280 }}
//                   >
//                     <div className="text-center">
//                       <img
//                         src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
//                         width="100"
//                         height="100"
//                         className="rounded-circle mb-2"
//                         alt="user"
//                       />
//                       <p className="mb-1 fw-bold">
//                         {userData?.username || "Guest User"}
//                       </p>
//                       <p className="text-muted small">
//                         {userData?.email || "Not available"}
//                       </p>
//                       <button
//                         className="btn btn-outline-danger btn-sm w-100 mt-2"
//                         onClick={handleLogout}
//                       >
//                         Logout <i className="fa fa-sign-out ms-1" />
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// }

// export default Navbar;



import React, { useEffect, useRef, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile.css";

function Navbar() {
  const [userData, setUserData] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const loadingBarRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    axios
      .post("http://localhost:5000/getcart", { userId })
      .then((res) => {
        const user = res.data?.data || {};
        const cartItems = user.cart || [];
        setUserData(user);
        setCartCount(cartItems.length);
      })
      .catch((err) => console.error("Cart fetch error:", err));
  }, []);

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [pathname]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/About", label: "About Us" },
    { path: "/Service", label: "Our Services" },
    { path: "/worker", label: "Worker" },
    { path: "/hire", label: "Hire" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <LoadingBar color="#FDA12B" height={3} ref={loadingBarRef} />

      <div className="navbar-wrapper">
        {/* Top info bar (hidden on mobile) */}
        <div className="navbar-topbar d-none d-lg-block">
          <div className="container-fluid">
            <div className="row gx-0">
              {/* Left Side - Contact Info */}
              <div className="col-lg-7">
                <div className="topbar-left">
                  <div className="topbar-item">
                    <i className="fa fa-phone topbar-icon" />
                    <span className="topbar-text">+012 345 6789</span>
                  </div>
                  <div className="topbar-item">
                    <i className="far fa-envelope topbar-icon" />
                    <span className="topbar-text">info@example.com</span>
                  </div>
                  <div className="topbar-item">
                    <i className="far fa-clock topbar-icon" />
                    <span className="topbar-text">Mon - Fri : 09 AM - 09 PM</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Social Links */}
              <div className="col-lg-5">
                <div className="topbar-right">
                  <a
                    className="social-btn social-btn-facebook"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    title="Facebook"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="social-btn social-btn-twitter"
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    title="Twitter"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="social-btn social-btn-linkedin"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    title="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    className="social-btn social-btn-instagram"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    title="Instagram"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="navbar navbar-expand-lg navbar-main">
          <div className="container-fluid">
            {/* Brand Logo */}
            <Link to="/" className="navbar-brand navbar-brand-custom">
              <i className="fa fa-gear fa-spin navbar-icon" />
              <span className="navbar-brand-text">GO Services</span>
            </Link>

            {/* Mobile Toggle Button */}
            <button
              className="navbar-toggler navbar-toggler-custom"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            {/* Navbar Menu */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav navbar-nav-custom ms-auto">
                {/* Navigation Links */}
                {navItems.map((item) => (
                  <li className="nav-item" key={item.path}>
                    <Link
                      to={item.path}
                      className={`nav-link nav-link-custom ${
                        pathname === item.path ? "active" : ""
                      }`}
                      onClick={() => loadingBarRef.current?.complete()}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}

                {/* Cart Icon */}
                <li className="nav-item nav-item-cart">
                  <Link
                    to="/workercart"
                    className={`nav-link nav-link-cart ${
                      pathname === "/workercart" ? "active" : ""
                    }`}
                    onClick={() => loadingBarRef.current?.complete()}
                  >
                    <i className="bi bi-cart4" />
                    {cartCount > 0 && (
                      <span className="cart-badge">{cartCount}</span>
                    )}
                  </Link>
                </li>

                {/* Profile Dropdown */}
                <li className="nav-item nav-item-profile">
                  <div
                    className="profile-trigger"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setIsDropdownOpen(!isDropdownOpen);
                      }
                    }}
                  >
                    <img
                      src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                      alt="User Profile"
                      className="profile-avatar"
                    />
                  </div>

                  {/* Profile Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="profile-dropdown">
                      <div className="profile-header">
                        <img
                          src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                          alt="User"
                          className="profile-dropdown-avatar"
                        />
                      </div>
                      <div className="profile-body">
                        <p className="profile-username">
                          {userData?.username || "Guest User"}
                        </p>
                        <p className="profile-email">
                          {userData?.email || "Email not available"}
                        </p>
                      </div>
                      <div className="profile-footer">
                        <button
                          className="btn-logout"
                          onClick={handleLogout}
                        >
                          <i className="fa fa-sign-out" />
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
