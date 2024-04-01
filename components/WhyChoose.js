import React, { useState } from "react";

function WhyChooseSection() {
  const [activeTab, setActiveTab] = useState("goals");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = (activeTab) => {
    switch (activeTab) {
      case "goals":
        return (
          <div className="tab-content w-tab-content">
            <div
              data-w-tab="Tab 1"
              className="tab-pane w-tab-pane w--tab-active"
            >
              <p>
                Do he it part more last in. Merits ye if Mr narrow points.
                Melancholy particular Devonshire alteration it favorable
                appearance up. Of incommode supported provision.
              </p>
              <div className="w-layout-grid grid-lists">
                <div className="list-item-dark-wrap">
                  <div className="list-item-dark">
                    <img
                      src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/621df59d898f4f8e628bb019_check-round-primary.svg"
                      loading="lazy"
                      alt=""
                      className="list-item-icon"
                    />
                    <h6 className="list-item-title-dark">
                      Transportation assistance
                    </h6>
                  </div>
                  <div className="list-item-dark">
                    <img
                      src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/621df59d898f4f8e628bb019_check-round-primary.svg"
                      loading="lazy"
                      alt=""
                      className="list-item-icon"
                    />
                    <h6 className="list-item-title-dark">Ship everywhere</h6>
                  </div>
                  <div className="list-item-dark">
                    <img
                      src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/621df59d898f4f8e628bb019_check-round-primary.svg"
                      loading="lazy"
                      alt=""
                      className="list-item-icon"
                    />
                    <h6 className="list-item-title-dark">
                      Unlimited packages sizes
                    </h6>
                  </div>
                </div>
                <div className="list-item-dark-wrap">
                  <div className="list-item-dark">
                    <img
                      src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/621df59d898f4f8e628bb019_check-round-primary.svg"
                      loading="lazy"
                      alt=""
                      className="list-item-icon"
                    />
                    <h6 className="list-item-title-dark">In Time delivery</h6>
                  </div>
                  <div className="list-item-dark">
                    <img
                      src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/621df59d898f4f8e628bb019_check-round-primary.svg"
                      loading="lazy"
                      alt=""
                      className="list-item-icon"
                    />
                    <h6 className="list-item-title-dark">
                      Biggest sea cargo company
                    </h6>
                  </div>
                  <div className="list-item-dark">
                    <img
                      src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/621df59d898f4f8e628bb019_check-round-primary.svg"
                      loading="lazy"
                      alt=""
                      className="list-item-icon"
                    />
                    <h6 className="list-item-title-dark">Cargo insurance</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "history":
        return (
          <div className="tab-content w-tab-content">
            <div
              data-w-tab="Tab 1"
              className="tab-pane w-tab-pane w--tab-active"
            >
              <p>
                With a legacy steeped in reliability and dedication, our
                company's history is a testament to our commitment to excellence
                in logistics. Founded in 2014, we embarked on a journey to
                revolutionize the way shipments are carried, starting with just
                a small fleet of trucks and a handful of dedicated employees..
              </p>
              <p>
                Over the years, we've grown exponentially, expanding our fleet
                to over 100 trucks and establishing a network that spans across
                the 36 states in Nigera. Our milestones are marked by the
                successful delivery of over 100 shipments, each one a testament
                to our unwavering dedication to our clients' success.
              </p>
              <p>
                From humble beginnings to becoming a trusted name in the
                industry, our history is a story of growth, innovation, and
                unwavering reliability. As we continue to evolve, our core
                values remain unchanged — integrity, excellence, and a
                relentless pursuit of exceeding expectations. Our history is not
                just a reflection of our past; it's a promise of a future where
                we continue to lead the way in shipping solutions
              </p>
            </div>
          </div>
        );

      case "vision":
        return (
          <div className="tab-content w-tab-content">
            <div className="tab-pane w-tab-pane w--tab-active">
              <p>
                Empowering global trade through seamless logistics, our vision
                is to become the foremost provider of shipping solutions
                worldwide. We envision a future where businesses thrive with the
                assurance of timely and secure cargo transport, setting new
                standards of excellence in the industry. With innovation as our
                compass and reliability as our anchor, we aim to redefine the
                logistics landscape, delivering value and peace of mind to our
                customers, partners, and communities
              </p>
             
            </div>
          </div>
        );

     
    }
  };

  return (
    <div className="why-choose-section section-spacing-bottom">
      <div className="container w-container">
        <div className="section-title">
          <h2>Why Choose Leading Experts in Global Transport</h2>
        </div>
        <div className="w-layout-grid grid-why-choose">
          <div className="why-choose-left">
            <p>
              How promotion excellent curiosity yet attempted happiness Gay
              prosperous impression had conviction For every delay.
            </p>
            <div
              data-current="Tab 1"
              data-easing="ease"
              data-duration-in="300"
              data-duration-out="100"
              className="tabs w-tabs"
            >
              <div className="tab-menu w-tab-menu">
                <a
                  data-w-tab="Tab 1"
                  onClick={() => handleTabClick("goals")}
                  className={`tab-link w-inline-block w-tab-link ${
                    activeTab === "goals" ? "w--current" : ""
                  }`}
                >
                  <div>Our Goals</div>
                </a>
                <a
                  onClick={() => handleTabClick("history")}
                  data-w-tab="Tab 2"
                  className={`tab-link w-inline-block w-tab-link ${
                    activeTab === "history" ? "w--current" : ""
                  }`}
                >
                  <div>Our History</div>
                </a>
                <a
                  data-w-tab="Tab 3"
                  onClick={() => handleTabClick("vision")}
                  className={`tab-link w-inline-block w-tab-link ${
                    activeTab === "vision" ? "w--current" : ""
                  }`}
                >
                  <div>Our Vision</div>
                </a>
              </div>
              {renderTabContent(activeTab)}
            </div>
          </div>
          <div className="why-choose-right">
            <img
              src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/621f3e4a3586c17b612fbde6_about-02.jpg"
              loading="lazy"
              sizes="100vw"
              srcSet="https://assets-global.website-files.com/62172851fe5d176bbedd0632/621f3e4a3586c17b612fbde6_about-02-p-500.jpeg 500w, https://assets-global.website-files.com/62172851fe5d176bbedd0632/621f3e4a3586c17b612fbde6_about-02.jpg 800w"
              alt=""
            />
            <div className="star-badge">
              <h6 className="hero-rating-title text-white">4.5</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="decoration shape-1">
        <img
          src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/621768d9ce13078c8e3ceb39_shape-01.svg"
          loading="lazy"
          alt=""
        />
      </div>
    </div>
  );
}

export default WhyChooseSection;
