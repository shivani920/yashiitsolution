/* eslint-disable jsx-a11y/anchor-is-valid */
"use client"

import { useState, useEffect } from "react"
import "./Pages.css"
import logo from "../assets/logo.png"

import message from "../assets/message.png"
import Frame61 from "../assets/Frame 61.png"
import heroImage from "../assets/Refer-a-friend 2.png"
import megaphone from "../assets/Megaphone.png"
import dashboardImage from "../assets/Layer 2.png"
import Frame59 from "../assets/Frame 59.png"
import Frame60 from "../assets/Frame 60.png"
import Frame62 from "../assets/Frame 62.png"
import Vector1 from "../assets/Vector1.png"
import Vector from "../assets/Vector.png"
import webprograming from "../assets/web-programming 1.png"
import verified from "../assets/verified.png"
import linkselect from "../assets/Link-Select--Streamline-Atlas.png"
import checkmarkIcon from "../assets/Checkmark-Filled--Streamline-Carbon.png"
import wavePattern from "../assets/Rectangle 2.png"
import dotPattern from "../assets/Frame 202.png"
import dotPattern1 from "../assets/Frame 201.png"
import star from "../assets/Frame 139.png"
import analyticsImage from "../assets/Data-report 1.png"
import Vector3 from "../assets/Vector3.png"
import googleIcon from "../assets/Google.png"

const Pages = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".nav-container") && !event.target.closest(".menu-icon")) {
        setMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuOpen])

  // Close menu when ESC key is pressed
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscKey)
    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [menuOpen])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="container-fluid">
     {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src={logo || "/placeholder.svg"} alt="Logo" className="logo-image" />
        </div>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <button type="button">
            <a href="/">Home</a>
          </button>
          <button type="button">
            <a href="/about">About Us</a>
          </button>
          <button type="button">
            <a href="/services">Our Services</a>
          </button>
          <button type="button">
            <a href="/faq">FAQ</a>
          </button>
          <button type="button">
            <a href="/why-choose-us">Why Choose Us</a>
          </button>
          <button type="button">
            <a href="/contact">Contact Us</a>
          </button>
        </nav>
        <div className="menu-icon" onClick={toggleMenu} aria-expanded={menuOpen} aria-label="Toggle navigation menu">
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="row">
          <div className="col-md-6">
            <h1>
              SEO for Roofing Contractors Get <span>Found</span>. Get <span>Leads</span> Get <span>Growing</span>
            </h1>
            <p>
              Don't let your competitors steal the spotlight. With our proven SEO for roofers, your business can rank
              higher, attract more leads, and dominate the local roofing market
            </p>
            <div className="cta-buttons">
              <button type="button" className="btn primary-btn">
                Free Site Audit For Roofers{" "}
                <img src={message || "/placeholder.svg"} alt="arrow" className="arrow-icon" />
              </button>
              <button type="button" className="btn secondary-btn">
                <img src={Frame61 || "/placeholder.svg"} alt="Frame61" className="Frame61-icon" /> Contact us
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="hero-image-container">
              <img src={heroImage || "/placeholder.svg"} alt="Roofing SEO" className="hero-image" />
            </div>
            <div className="megaphone-icon">
              <img src={megaphone || "/placeholder.svg"} alt="Megaphone" />
            </div>
          </div>
        </div>
      </section>
      <img src={wavePattern || "/placeholder.svg"} alt="" className="wave-pattern" />
      {/* Understanding Section */}
      <section className="understanding-section">
        <div className="row">
          <div className="col-md-5">
            <div className="dashboard-image">
              <img src={dashboardImage || "/placeholder.svg"} alt="Dashboard" />
            </div>
          </div>
          <div className="col-md-1">
            <img src={Vector1 || "/placeholder.svg"} alt="Icon" />
          </div>
          <div className="col-md-6">
            <div className="section-tag">We Understand You</div>
            <h2>
              Struggling to Get <span>Leads Online?</span>
              You're Not Alone.
            </h2>
            <p>
              You're a roofer, not a digital marketer. You're out there climbing roofs, managing crews, and quoting
              jobs. But when it comes to getting found online? That's where things get frustrating.
            </p>
            <ul className="pain-points">
              <li>
                <img src={Frame59 || "/placeholder.svg"} alt="Icon" />
                <p>You've invested in a website, but it's not bringing in calls.</p>
              </li>
              <li>
                <img src={Frame60 || "/placeholder.svg"} alt="Icon" />
                <p>Your competitors show up in Google even the ones you know don't do quality work.</p>
              </li>
              <li>
                <img src={Frame61 || "/placeholder.svg"} alt="Icon" />
                <p>You're relying on word-of-mouth, but it's just not enough anymore.</p>
              </li>
              <li>
                <img src={Frame62 || "/placeholder.svg"} alt="Icon" />
                <p>You've tried SEO before, but it felt like burning money without results.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <img src={star || "/placeholder.svg"} alt="" className="star-pattern" />
        </div>
        <img src={dotPattern || "/placeholder.svg"} alt="" className="dot-pattern" />
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="text-end">
          <img
            style={{ marginTop: "-100px" }}
            src={dotPattern1 || "/placeholder.svg"}
            alt=""
            className="dot-pattern1"
          />
        </div>

        <div className="section-header text-center mb-5">
          <div className="section-tag light">Our Services</div>
          <h2>Roofing SEO that Actually Grows Your Business</h2>
          <p>With SEO Roofer's proven methods, your roofing business won't just rank—it'll dominate:</p>
        </div>

        <div className="row">
          {/* Card 1 */}
          <div className="col-md-6 mb-4">
            <div className="service-card d-flex">
              <div className="card-icon">
                <img src={Vector || "/placeholder.svg"} alt="Local SEO" />
              </div>
              <div className="card-content ps-3">
                <h3>Local SEO for Roofers</h3>
                <p>Ensure you appear prominently in local searches like "roof repair near me."</p>
                <a href="#" className="read-more">
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 mb-4">
            <div className="service-card d-flex">
              <div className="card-icon">
                <img src={webprograming || "/placeholder.svg"} alt="On-Page SEO" />
              </div>
              <div className="card-content ps-3">
                <h3>On-Page SEO for Roofing</h3>
                <p>Optimize your website to rank for valuable roofing keywords.</p>
                <a href="#" className="read-more">
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-6 mb-4">
            <div className="service-card d-flex">
              <div className="card-icon">
                <img src={verified || "/placeholder.svg"} alt="Google Profile" />
              </div>
              <div className="card-content ps-3">
                <h3>Google Business Profile Optimization</h3>
                <p>Stand out with reviews and maps to attract more roofing leads.</p>
                <a href="#" className="read-more">
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-6 mb-4">
            <div className="service-card d-flex">
              <div className="card-icon">
                <img src={linkselect || "/placeholder.svg"} alt="Link Building" />
              </div>
              <div className="card-content ps-3">
                <h3>Roofing SEO Link Building</h3>
                <p>Gain credibility and visibility by building authority backlinks.</p>
                <a href="#" className="read-more">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="row">
          <div className="col-md-6">
            <div className="section-tag">Why Choose Us</div>
            <h2>Finally, an SEO Company Built Only for Roofers</h2>
            <p>
              Forget generic SEO firms. SEORoofer understands exactly what roofers need because SEO for roofing is all
              we do. You deserve an SEO partner who truly understands roofing. That's SEO Roofer.
            </p>
            <ul className="benefits-list">
              <li>
                <img src={checkmarkIcon || "/placeholder.svg"} alt="Checkmark" />
                <p>Expertise: Our team lives and breathes SEO roofing strategies daily.</p>
              </li>
              <li>
                <img src={checkmarkIcon || "/placeholder.svg"} alt="Checkmark" />
                <p>Local Dominance: We master Google's map listings, so when homeowners search, they find you first.</p>
              </li>
              <li>
                <img src={checkmarkIcon || "/placeholder.svg"} alt="Checkmark" />
                <p>No Contracts: Real results keep our clients, not binding contracts.</p>
              </li>
              <li>
                <img src={checkmarkIcon || "/placeholder.svg"} alt="Checkmark" />
                <p>Monthly Reporting: Clear, understandable insights into how your roofing SEO campaign performs.</p>
              </li>
            </ul>
          </div>
          <div className="col-md-1">
            <img src={Vector3 || "/placeholder.svg"} alt="Analytics Dashboard" />
          </div>
          <div className="col-md-5">
            <div className="analytics-image">
              <img src={analyticsImage || "/placeholder.svg"} alt="Analytics Dashboard" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-tag light">Testimonial</div>
        <h2>Roofing Contractors Trust SEO Roofer</h2>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="quote-mark">"</div>
            <p>
              We've worked with other marketing companies before, but no one understands SEO for roofing contractors
              like SEORoofer. They knew exactly how to position our business to show up on Google—and fast. We're
              getting more qualified leads every week, and we've finally stopped wasting money on ads that don't work.
            </p>
            <div className="testimonial-footer">
              <p className="author">— Sarah M., Storm Shield Roofing</p>
              <div className="rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <img src={googleIcon || "/placeholder.svg"} alt="Google" className="google-icon" />
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote-mark">"</div>
            <p>
              I was skeptical about SEO at first, but SEORoofer proved me wrong. Within three months, we jumped from
              page 4 to page 1 in our city. Calls increased, website traffic went up, and our sales grew steadily. Their
              deep knowledge of SEO for roofers made a huge difference.
            </p>
            <div className="testimonial-footer">
              <p className="author">— Tony D., D'Angelo Roofing Company</p>
              <div className="rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <img src={googleIcon || "/placeholder.svg"} alt="Google" className="google-icon" />
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote-mark">"</div>
            <p>
              Before SEORoofer, we barely showed up in search results. Now, we're ranking #1 for key terms in our area.
              Their team really understands the ins and outs of roofing SEO and they don't use cookie-cutter tactics.
              Everything was tailored to our market and goals.
            </p>
            <div className="testimonial-footer">
              <p className="author">— Rebecca F., Apex Roofing Solutions</p>
              <div className="rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <img src={googleIcon || "/placeholder.svg"} alt="Google" className="google-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>
          Ready to Grow Your <span>Roofing Business?</span>
        </h2>
        <p>
          Let's get started with a Free Roofing SEO Audit, no strings attached. We'll show you exactly where your site
          stands and how to boost your leads.
        </p>
        <div className="cta-buttons">
          <button type="button" className="btn primary-btn">
            Claim My Free SEO Audit Now →
          </button>
          <button type="button" className="btn secondary-btn">
            Contact us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <img src={logo || "/placeholder.svg"} alt="Logo" className="footer-logo" />
            <p className="company-tagline">
              Real Teams. Real Results.
              <br />
              Zero Freelancer Headaches.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a href="#" className="social-icon">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/why-choose-us">Why Seoroofer</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact US</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Services for Roofers</h3>
            <ul className="footer-links">
              <li>
                <a href="/services/seo">Search Engine Optimization (SEO)</a>
              </li>
              <li>
                <a href="/services/ppc">Pay-Per-Click (PPC)</a>
              </li>
              <li>
                <a href="/services/social-media">Social Media Management</a>
              </li>
              <li>
                <a href="/services/web-design">Website Design & Development</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Trust & Legal</h3>
            <ul className="footer-links">
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
              <li>
                <a href="/disclaimer">Disclaimer</a>
              </li>
              <li>
                <a href="/dmca">DMCA</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>© 2025 Seoroofer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Pages
