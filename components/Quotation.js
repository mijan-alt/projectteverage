"use client"
import React, { useState } from "react";
import axios from "axios";
import { MotionAnimate } from "react-motion-animate";

function QuoteSection() {
  const [loading, setLoading]= useState(false)
  const [formVisible, setFormVisible]= useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    freightType: "",
    departureCity: "",
    deliveryCity: "",
    weight: "",
    height: "",
    radio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
  };

  console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('form Data in submit functioin', formData)

    const isInvalid =
      formData.name == "" ||
      formData.email == "" ||
      formData.number == "" ||
      formData.freightType == "" ||
      formData.deliveryCity == "" ||
      formData.weight == "" ||
      formData.height == "" ||
      formData.radio == ""
    
    if (isInvalid) return
    
    try {
      setLoading(true)
      const response = await axios.post(
        `${process.env.SERVER_URL}/submit-quote`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      if (response.status == 200) {
        console.log("succeess")
        setLoading(false)
        setFormVisible(false)
      }
      // You can handle success or display a success message here
    } catch (error) {
      console.error("Error:", error);
      setLoading(false)
      // You can handle errors or display an error message here
    }
  };

  return (
    <div className="quote-section section-spacing-top">
      <div className="container w-container">
        <div className="w-layout-grid grid-contact">
       
            <div className="quote-form-wrap">
              <div className="quote-form-title">
                <h4>Request a Quote</h4>
              </div>
              <div className="quote-form w-form">
                {formVisible && (
                  <form
                    onSubmit={handleSubmit}
                    id="quoteForm"
                    name="quoteForm"
                    data-name="Quote Form"
                    method="post"
                    className="form"
                  >
                    <div id="w-node-_62dab54b-86bb-d3e5-3c43-e020dfe6c25e-b7dd0633">
                      <label className="w-radio">
                        <input
                          type="radio"
                          name="radio"
                          id="radio1"
                          data-name="Radio"
                          className="w-form-formradioinput w-radio-input"
                          value="Fragile"
                          checked={formData.radio === "Fragile"}
                          onChange={handleChange}
                        />
                        <span className="w-form-label" htmlFor="radio1">
                          Fragile
                        </span>
                      </label>
                    </div>
                    <div id="w-node-_5f5ade37-d96c-925d-5dd6-03b1cc3e8547-b7dd0633">
                      <label className="w-radio">
                        <input
                          type="radio"
                          name="radio"
                          id="radio2"
                          data-name="Radio"
                          className="w-form-formradioinput w-radio-input"
                          value="Express Delivery"
                          checked={formData.radio === "Express Delivery"}
                          onChange={(e) => handleChange(e)}
                        />
                        <span className="w-form-label" htmlFor="radio2">
                          Express Delivery
                        </span>
                      </label>
                    </div>
                    <div id="w-node-f8883e89-3f5a-30e7-1dc9-2e4f6295e014-b7dd0633">
                      <label className="w-radio">
                        <input
                          type="radio"
                          name="radio"
                          id="radio3"
                          data-name="Radio"
                          className="w-form-formradioinput w-radio-input"
                          value="Insurance"
                          checked={formData.radio === "Insurance"}
                          onChange={(e) => handleChange(e)}
                        />
                        <span className="w-form-label" htmlFor="radio3">
                          Insurance
                        </span>
                      </label>
                    </div>
                    <div id="w-node-da455458-7675-542b-95e5-4445f3a06c56-b7dd0633">
                      <label className="w-radio">
                        <input
                          type="radio"
                          name="radio"
                          id="radio4"
                          data-name="Radio"
                          className="w-form-formradioinput w-radio-input"
                          value="Packaging"
                          checked={formData.radio === "Packaging"}
                          onChange={(e) => handleChange(e)}
                        />
                        <span className="w-form-label" htmlFor="radio4">
                          Packaging
                        </span>
                      </label>
                    </div>
                    <div>
                      <label htmlFor="name">Enter Name</label>
                      <input
                        className="form-input w-input"
                        maxLength="256"
                        name="name"
                        data-name="Name"
                        placeholder=""
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div>
                      <label htmlFor="email">Enter Email</label>
                      <input
                        className="form-input w-input"
                        maxLength="256"
                        name="email"
                        data-name="Email"
                        placeholder=""
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div>
                      <label htmlFor="number">Enter phone</label>
                      <input
                        className="form-input w-input"
                        name="number"
                        placeholder=""
                        type="text"
                        required
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div>
                      <label htmlFor="freightType">Freight Type</label>
                      <select
                        id="freightType"
                        name="freightType"
                        data-name="Freight Type"
                        className="form-select w-select"
                        value={formData.freightType}
                        onChange={(e) => handleChange(e)}
                      >
                        <option value="">Select Freight Type</option>
                        <option value="Air Freight">Air Freight</option>
                        <option value="Ocean Freight">Ocean Freight</option>
                        <option value="Road Freight">Road Freight</option>
                        <option value="Warehousing">Warehousing</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="departureCity">Departure City</label>
                      <input
                        className="form-input w-input"
                        maxLength="256"
                        name="departureCity"
                        data-name="Departure City"
                        placeholder=""
                        type="text"
                        id="departureCity"
                        required
                        value={formData.departureCity}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div>
                      <label htmlFor="deliveryCity">Delivery City</label>
                      <input
                        className="form-input w-input"
                        maxLength="256"
                        name="deliveryCity"
                        data-name="Delivery City"
                        placeholder=""
                        type="text"
                        id="deliveryCity"
                        required
                        value={formData.deliveryCity}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div>
                      <label htmlFor="weight">Weight</label>
                      <input
                        className="form-input w-input"
                        maxLength="256"
                        name="weight"
                        data-name="Weight"
                        placeholder=""
                        type="text"
                        id="weight"
                        required
                        value={formData.weight}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div>
                      <label htmlFor="height">Height</label>
                      <input
                        className="form-input w-input"
                        maxLength="256"
                        name="height"
                        data-name="Height"
                        placeholder=""
                        type="text"
                        id="height"
                        required
                        value={formData.height}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div>
                      {loading ? (
                        <input
                          type="submit"
                          data-wait="Please wait..."
                          className="button-dark button-full w-button"
                          value="Please wait..."
                        />
                      ) : (
                        <input
                          type="submit"
                          data-wait="Please wait..."
                          className="button-dark button-full w-button"
                          value="Submit"
                        />
                      )}
                    </div>
                  </form>
                )}

                {!formVisible && (
                  <div className="success-message w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                )}

                <div className="error-message w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
      
        </div>
      </div>
    </div>
  );
}

export default QuoteSection;
