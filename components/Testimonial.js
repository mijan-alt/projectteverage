import React from "react";

function TestimonialSection() {
  return (
    <div className="testimonial-section">
      <div className="container w-container">
        <div className="w-layout-grid grid-testimonial">
          <div id="w-node-_316392ae-b90e-68dd-9fc4-93c825b3b487-b7dd0633">
            <div className="section-title">
              <h2>What People Say</h2>
            </div>
          </div>
          <div
            data-delay="4000"
            data-animation="slide"
            className="testimonial-slider w-slider"
            data-autoplay="false"
            data-easing="ease"
            data-hide-arrows="true"
            data-disable-swipe="false"
            data-autoplay-limit="0"
            data-nav-spacing="3"
            data-duration="500"
            data-infinite="true"
          >
            <div className="testimonial-mask w-slider-mask">
              <div className="testimonial-slide w-slide">
                <p>
                  "Moonlight newspaper up its enjoyment agreeable depending.
                  Timed voice share led him to widen noisy young. At weddings
                  believed laughing "
                </p>
                <ul
                  role="list"
                  className="testimonial-author-rating w-list-unstyled"
                >
                  {[...Array(5)].map((_, index) => (
                    <li key={index}>
                      <img
                        src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/621de2acbbdbae2aafe71069_star-fill.svg"
                        loading="lazy"
                        alt=""
                      />
                    </li>
                  ))}
                </ul>
                <div className="testimonial-author">
                  <img
                    src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/621c6b3ca39925da9c92b076_01.jpg"
                    loading="lazy"
                    alt=""
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h6 className="testimonial-author-name">Lori Stevens</h6>
                    <p className="testimonial-author-job-title">CEO of Zoom</p>
                  </div>
                </div>
                <div className="testimonial-quote">
                  <img
                    src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/621de16a61a04a1fc3ef78d7_blogquote.svg"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
              {/* Repeat similar structure for other testimonial slides */}
            </div>
            <div className="left-arrow w-slider-arrow-left">
              <div className="arrow-icon w-icon-slider-left"></div>
            </div>
            <div className="right-arrow w-slider-arrow-right">
              <div className="arrow-icon w-icon-slider-right"></div>
            </div>
            <div className="slide-nav w-slider-nav w-round"></div>
          </div>
        </div>
        <div className="section-spacing-top">
          <div className="w-layout-grid grid-client">
            <div
              id="w-node-_7a1fb20d-2803-7b58-718e-b8212c6453e1-b7dd0633"
              className="client-logo-item"
            >
              <img
                src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/62c021ef9c2589026b3d3557_01.svg"
                loading="lazy"
                id="w-node-_01168075-af37-f72e-cbae-fa7dbec28cd5-b7dd0633"
                alt=""
                className="client-logo"
              />
            </div>
            {/* Add more client-logo-item divs for other client logos */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
