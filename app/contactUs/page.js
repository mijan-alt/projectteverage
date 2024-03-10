import React from "react";

function page() {
  return (
    <div className="contact-section section-spacing">
      <div className="container w-container">
        <div className="w-layout-grid grid-contact">
          <div className="contact-form-wrap">
            <div className="quote-form-title">
              <h4>Get in touch!</h4>
            </div>
            <div className="contact-form w-form">
              <form
                id="wf-form-Contact-Form"
                name="wf-form-Contact-Form"
                data-name="Contact Form"
                method="get"
                data-wf-page-id="62204de1a6be6b755eb035e2"
                data-wf-element-id="bc627fe7-f7c5-0665-4508-4cb43299c700"
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
                    />
                  </div>
                  <div className="input-group w-col w-col-6">
                    <label htmlFor="Email-Address">Email Address</label>
                    <input
                      className="form-input w-input"
                      maxLength="256"
                      name="Email-Address"
                      data-name="Email Address"
                      placeholder="Email"
                      type="email"
                      id="Email-Address"
                      required=""
                    />
                  </div>
                </div>
                <div className="w-row">
                  <div className="input-group w-col w-col-6">
                    <label htmlFor="Phone-Number">Phone</label>
                    <input
                      className="form-input w-input"
                      maxLength="256"
                      name="Phone-Number"
                      data-name="Phone Number"
                      placeholder="Phone"
                      type="tel"
                      id="Phone-Number"
                    />
                  </div>
                  <div className="input-group w-col w-col-6">
                    <label htmlFor="Subject">Subject</label>
                    <input
                      className="form-input w-input"
                      maxLength="256"
                      name="Subject"
                      data-name="Subject"
                      placeholder="Subject"
                      type="text"
                      id="Subject"
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="Message">Message</label>
                  <textarea
                    id="Message"
                    name="Message"
                    maxLength="5000"
                    data-name="field"
                    placeholder="Your message"
                    className="form-input form-textarea w-input"
                  ></textarea>
                </div>
                <input
                  type="submit"
                  data-wait="Please wait..."
                  className="button w-button"
                  value="Submit"
                />
              </form>
              <div className="success-message w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
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
              <p>Chicago HQ Estica Cop. Macomb, MI 48042</p>
            </div>
            <div className="contact-info-item">
              <h6>Support</h6>
              <p>+9 (245) 326-02-22</p>
              <p>hello@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="decoration blur-1"></div>
      <div className="decoration blur-3"></div>
    </div>
  );
}

export default page;
