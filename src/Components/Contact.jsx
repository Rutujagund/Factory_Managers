import React, { useState } from "react";
import "../App.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_s1nfer9",         
        "template_z8tx6us",        
        formData,                  
        "Usj8gO7XjQGAiwrcG"        
      )
      .then((result) => {
        console.log("Admin email sent:", result.text);

        emailjs
          .send(
            "service_s1nfer9",       
            "template_ls4kula",      
            {
              name: formData.name,
              email: formData.email
            },
            "Usj8gO7XjQGAiwrcG"
          )
          .then(() => {
            alert("Your message has been sent!");
            setFormData({ name: "", email: "", mobile: "", message: "" });
          })
          .catch((err) => {
            console.error("User email failed:", err.text);
            alert("Something went wrong while sending confirmation.");
          });
      })
      .catch((error) => {
        console.error("Admin email failed:", error.text);
        alert("Something went wrong!");
      });
  };

  const contactData = [
    {
      icon: "fa-solid fa-square-phone",
      heading: "Call Us Anytime",
      desc: "7768810025"
    },
    {
      icon: "fa-solid fa-envelope",
      heading: "Send E-Mail",
      desc: "factorymanagers28@gmail.com"
    }
  ];

  return (
    <>
      <section className="container pb-5" style={{ marginTop: "80px" }}>
        <div className="row mb-5">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <h1 className="fw-bold">
              Let’s <span style={{ color: "#7D0A0A" }}>Get in Touch!</span>
            </h1>
            <p className="lead fw-semibold">
              We’re excited to connect with you! Fill out the form below, and our team will get back to you as soon as possible. Whether you have questions about InToIn, need assistance, or want to schedule a demo, we’re here to help.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <img
              src="/Images/callus.gif"
              alt="Contact Illustration"
              style={{
                height: "500px",
                width: "90%",
                borderRadius: "0px 60px",
                marginLeft: "5%",
                boxShadow: "2px 2px 5px 3px rgba(0, 0, 0, 0.2)"
              }}
            />
          </div>
          <div className="col-md-6">
            <form
              onSubmit={handleSubmit}
              className="p-5 border rounded shadow bg-light me-3"
            >
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Mobile no.</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter your Mobile no."
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  placeholder="Enter your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn w-100" style={{backgroundColor:'#7D0A0A', color:'white'}}>
                Request for a call
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="container-fluid bg-light py-4 d-none d-flex-none">
        <div className="container">
          <div className="row">
            {contactData.map((val, index) => (
              <div className="col-md-6 d-flex justify-content-center" key={index}>
                <div className="contactbox w-75">
                  <div className="text-center">
                    <div className="row">
                      <div className="col-md-2">
                        <span>
                          <i
                            className={`${val.icon} fa-3x mt-3 ms-5`}
                            style={{ color: "#7D0A0A" }}
                          ></i>
                        </span>
                      </div>
                      <div className="col-md-10">
                        <h4 className="mt-2">{val.heading}</h4>
                        <h5>{val.desc}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="my-5">
          <iframe
            title="Google Maps"
            className="w-100 rounded shadow"
            height="300"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d121061.78840428361!2d73.69580926571757!3d18.520726152800332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bc2bf2d3babcbbb%3A0x35d2c819bc8cf918!2s5th%20Floor%2C%20Serene%20Tower%2C%20Pakharbaug%20Society%2C%20Ram%20Nagar%2C%20Bavdhan%2C%20Pune%2C%20Maharashtra%20411021!3m2!1d18.520744!2d73.778211!5e0!3m2!1sen!2sin!4v1743154378416!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
