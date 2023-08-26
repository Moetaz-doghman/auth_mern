import React from 'react'

export default function navbar() {
  return (
    <div>
            <div className="navbar-area nav-bg-1">
        <div className="mobile-responsive-nav">
          <div className="container">
            <div className="mobile-responsive-menu">
              <div className="logo">
                <a href="index.html">
                  <img src="assets/images/logo.png" className="main-logo" alt="logo" />
                  <img src="assets/images/white-logo.png" className="white-logo" alt="logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="desktop-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="index.html">
                <img src="assets/images/white-logo.png" alt="logo" />
              </a>
              <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a href="home.com" className="nav-link dropdown-toggle">
                      Home
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="index.html" className="nav-link">Home One</a>
                      </li>
                      <li className="nav-item">
                        <a href="index-2.html" className="nav-link">Home Two</a>
                      </li>
                      <li className="nav-item">
                        <a href="index-3.html" className="nav-link">Home Three</a>
                      </li>
                      <li className="nav-item">
                        <a href="index-4.html" className="nav-link">Home Four</a>
                      </li>
                      <li className="nav-item">
                        <a href="index-5.html" className="nav-link">Home Five</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="home.com" className="nav-link dropdown-toggle active">
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="graduate-admission.html" className="nav-link">Graduate Admission</a>
                      </li>
                      <li className="nav-item">
                        <a href="campus-life.html" className="nav-link">Campus Life</a>
                      </li>
                      <li className="nav-item">
                        <a href="alumni.html" className="nav-link">Alumni</a>
                      </li>
                      <li className="nav-item">
                        <a href="home.com" className="nav-link dropdown-toggle">
                          Academics
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="academics.html" className="nav-link">Academics</a>
                          </li>
                          <li className="nav-item">
                            <a href="academics-details.html" className="nav-link">Academics Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="home.com" className="nav-link dropdown-toggle">
                          Latest News
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="latest-news.html" className="nav-link">Our Latest News</a>
                          </li>
                          <li className="nav-item">
                            <a href="news-details.html" className="nav-link">News Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="faq.html" className="nav-link">FAQ</a>
                      </li>
                      <li className="nav-item">
                        <a href="home.com" className="nav-link dropdown-toggle">
                          Users
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="login.html" className="nav-link">Login</a>
                          </li>
                          <li className="nav-item">
                            <a href="register.html" className="nav-link">Register</a>
                          </li>
                          <li className="nav-item">
                            <a href="recover-password.html" className="nav-link">Recover Password</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="privacy-policy.html" className="nav-link">Privacy Policy</a>
                      </li>
                      <li className="nav-item">
                        <a href="terms-conditions.html" className="nav-link">Terms And Conditions</a>
                      </li>
                      <li className="nav-item">
                        <a href="coming-soon.html" className="nav-link">Coming Soon</a>
                      </li>
                      <li className="nav-item">
                        <a href="404.html" className="nav-link active">404 Page</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="home.com" className="nav-link dropdown-toggle">
                      Courses
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="courses.html" className="nav-link">Courses</a>
                      </li>
                      <li className="nav-item">
                        <a href="courses-details.html" className="nav-link">Courses Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="home.com" className="nav-link dropdown-toggle">
                      Health Care
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="health-care.html" className="nav-link">Health Care</a>
                      </li>
                      <li className="nav-item">
                        <a href="health-care-details.html" className="nav-link">Health Care Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="home.com" className="nav-link dropdown-toggle">
                      Events
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="events.html" className="nav-link">Events</a>
                      </li>
                      <li className="nav-item">
                        <a href="events-details.html" className="nav-link">Events Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="contact-us.html" className="nav-link">Contact Us</a>
                  </li>
                </ul>
                <div className="others-options">
                  <div className="icon">
                    <i className="ri-menu-3-fill" data-bs-toggle="modal" data-bs-target="#sidebarModal"></i>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="others-option-for-responsive">
          <div className="container">
            <div className="dot-menu">
              <div className="inner">
                <div className="icon">
                  <i className="ri-menu-3-fill" data-bs-toggle="modal" data-bs-target="#sidebarModal"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebarModal modal right fade" id="sidebarModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button type="button" className="close" data-bs-dismiss="modal"><i className="ri-close-line"></i></button>
            <div className="modal-body">
              <a href="index.html">
                <img src="assets/images/logo.png" className="main-logo" alt="logo"/>
                <img src="assets/images/white-logo.png" className="white-logo" alt="logo"/>
              </a>
              <div className="sidebar-content">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="sidebar-btn">
                  <a href="contact.html" className="default-btn">Let’s Talk</a>
                </div>
              </div>
              <div className="sidebar-contact-info">
                <h3>Contact Information</h3>
                <ul className="info-list">
                  <li><i className="ri-phone-fill"></i> <a href="tel:9901234567">+990-123-4567</a></li>
                  <li><i className="ri-mail-line"></i><a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#4d25282121220d3e2c2338632e2220"><span className="__cf_email__" data-cfemail="0f676a6363604f7c6e617a216c6062">[email&#160;protected]</span></a></li>
                  <li><i className="ri-map-pin-line"></i> 413 North Las Vegas, NV 89032</li>
                </ul>
              </div>
              <ul className="sidebar-social-list">
                <li>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-facebook-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-twitter-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-instagram-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
