"use client"
import React from "react";
import { useState } from "react";
import axios from "axios";

function Page() {
  const [loading, setLoading] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isInvalid =
      formData.name === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.subject === "" ||
      formData.message === "";

    if (isInvalid) {
      console.log("Invalid field");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}enquire`,
        formData
      );
      console.log(response);
      if (response.status === 200) {
        console.log("form submitted successfully");
        setFormVisible(false);
        setLoading(false);
      } else {
        console.log("Submission failed");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="contact-section section-spacing">
      <div className="container w-container">
        <div className="w-layout-grid grid-contact">
          <div className="contact-form-wrap">
            <div className="quote-form-title">
              <h4>Get in touch!</h4>
            </div>
            <div className="contact-form w-form">
              {formVisible && (
                <form
                  id="wf-form-Contact-Form"
                  name="wf-form-Contact-Form"
                  data-name="Contact Form"
                  method="get"
                  data-wf-page-id="62204de1a6be6b755eb035e2"
                  data-wf-element-id="bc627fe7-f7c5-0665-4508-4cb43299c700"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div className="w-row">
                    <div className="input-group w-col w-col-6">
                      <label htmlFor="name">Name</label>
                      <input
                        className="form-input w-input"
                        maxLength="256"
                        name="name"
                        data-name="Name"
                        placeholder="Name"
                        type="text"
                        id="name"
                        onChange={(e) => handleChange("name", e.target.value)}
                      />
                    </div>
                    <div className="input-group w-col w-col-6">
                      <label htmlFor="Email-Address">Email Address</label>
                      <input
                        className="form-input w-input"
                        maxLength="256"
                        name="email"
                        data-name="Email Address"
                        placeholder="Email"
                        type="email"
                        id="Email-Address"
                        required=""
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-row">
                    <div className="input-group w-col w-col-6">
                      <label htmlFor="Phone-Number">Phone</label>
                      <input
                        className="form-input w-input"
                        maxLength="256"
                        name="phone"
                        data-name="Phone Number"
                        placeholder="Phone"
                        type="tel"
                        id="Phone-Number"
                        onChange={(e) => handleChange("phone", e.target.value)}
                      />
                    </div>
                    <div className="input-group w-col w-col-6">
                      <label htmlFor="Subject">Subject</label>
                      <input
                        className="form-input w-input"
                        maxLength="256"
                        name="subject"
                        data-name="Subject"
                        placeholder="Subject"
                        type="text"
                        id="Subject"
                        onChange={(e) =>
                          handleChange("subject", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <label htmlFor="Message">Message</label>
                    <textarea
                      id="Message"
                      name="message"
                      maxLength="5000"
                      data-name="field"
                      placeholder="Your message"
                      className="form-input form-textarea w-input"
                      onChange={(e) => handleChange("message", e.target.value)}
                    ></textarea>
                  </div>
                  {loading ? (
                    <input
                      type="submit"
                      className="button w-button"
                      value="Please wait..."
                    />
                  ) : (
                    <input
                      type="submit"
                      className="button w-button"
                      value="Submit"
                    />
                  )}
                </form>
              )}

              {!formVisible && (
                <div className="success-message w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
              )}

              <div className="error-message w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div
            id="w-node-_62a74a11-e2e3-f75a-13c3-3498c052e1c3-5eb035e2"
            className="contact-info"
          >
            <div className="contact-info-item">
              <h6>Opening hours</h6>
              <p>
                Monday to Friday
                <br />
                9am to 6pm
              </p>
              <p>
                Weekend
                <br />
                Close
              </p>
            </div>
            <div className="contact-info-item">
              <h6>Address</h6>
              <p>24 Aba Road Port Harcourt, Nigeria</p>
            </div>
            <div className="contact-info-item">
              <h6>Support</h6>
              <p>+ 234 7082642998</p>
              <p>mijanigoni@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="decoration blur-1"></div>
      <div className="decoration blur-3"></div>
    </div>
  );
}

export default Page;
