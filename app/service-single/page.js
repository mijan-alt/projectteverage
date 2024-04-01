"use client"

const page = () => {
  return (
    <div className="service-detail-section section-spacing">
      <div className="container w-container">
        <div className="hero-inner">
          <h1>Road Freight Shipping</h1>
        </div>
        <div className="w-layout-grid grid-service-detail">
          <div className="service-image">
            <img
              src="https://plus.unsplash.com/premium_photo-1682144324433-ae1ee89a0238?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              loading="lazy"
              sizes="(max-width: 767px) 92vw, (max-width: 1279px) 94vw, 999.9999389648438px"
              srcSet="
               https://plus.unsplash.com/premium_photo-1682144324433-ae1ee89a0238?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 500w,
               https://plus.unsplash.com/premium_photo-1682144324433-ae1ee89a0238?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 800w,
            https://plus.unsplash.com/premium_photo-1682144324433-ae1ee89a0238?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1000w"
              alt=""
            />
          </div>
          <div>
            <p>
              Road freight shipping offers a reliable and cost-effective
              solution for transporting goods. Whether you're shipping locally
              or across borders, here are some key points you need to know
            </p>
            <div className="list-item-dark-wrap">
              <div className="list-item-dark">
                <img
                  src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/621df59d898f4f8e628bb019_check-round-primary.svg"
                  loading="lazy"
                  alt=""
                  className="list-item-icon"
                />
                <h6 className="list-item-title-dark">
                  Keep your shipments moving consistently with regular departure
                  schedules tailored to your needs.
                </h6>
              </div>
              <div className="list-item-dark">
                <img
                  src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/621df59d898f4f8e628bb019_check-round-primary.svg"
                  loading="lazy"
                  alt=""
                  className="list-item-icon"
                />
                <h6 className="list-item-title-dark">
                  Secure the space and scheduling you require through our
                  extensive carrier network, ensuring timely deliveries.
                </h6>
              </div>
              <div className="list-item-dark">
                <img
                  src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/621df59d898f4f8e628bb019_check-round-primary.svg"
                  loading="lazy"
                  alt=""
                  className="list-item-icon"
                />
                <h6 className="list-item-title-dark">
                  Find efficient, cost effective transportation strategies by
                  working with our dedicated experts.Benefit from efficient and
                  cost-effective transportation strategies, designed by our
                  dedicated experts to optimize your shipping operations.
                </h6>
              </div>
            </div>
            <a href="/contactUs" className="button-dark w-button">
              Connect with us
            </a>
          </div>
        </div>
      </div>
      <div className="decoration blur-1"></div>
      <div className="decoration blur-3"></div>
    </div>
  );
};

export default page;
