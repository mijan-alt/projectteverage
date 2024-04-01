"use client"
import React from "react";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });
 

function HeroSection() {
   
  return (
    <div className="hero-section">
      <div className="container hero-container w-container">
        <div className="w-layout-grid grid-hero">
          <div
            id="w-node-e3182594-93ac-c367-7208-cee0e3465fa1-b7dd0633"
            className="hero-content"
          >
            <h1 className={`hero-title ${syne.className}`}>
              Full Sustainable <br />
              <span className="title-bg-shape">Cargo</span>
              Solution
            </h1>
            <p className="hero-description">
              Welcome to our trusted flatbed logistics services, where we
              specialize in delivering exceptional transportation solutions
              tailored to meet the unique needs of your business. Whether you're
              transporting construction materials, heavy machinery, or oversized
              cargo, we have the expertise and resources to ensure your goods
              reach their destination safely and on time
            </p>
            <a href="/services" className="button-dark w-button">
              Our Services
            </a>
            <div className="hero-rating-wrap">
              <div className="hero-rating">
                <div className="hero-rating-icon">
                  <h6 className="hero-rating-title">4.5</h6>
                </div>
                <div className="hero-rating-info">
                  <h6 className="hero-rating-info-title">Rating</h6>
                  <p>Trusted by 100+ Clients</p>
                </div>
              </div>
              <div
                id="w-node-_02c72e53-c8ab-dd75-0020-1f9538c8b16a-b7dd0633"
                className="rating-image-wrap"
              >
                <img
                  src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/62175d8403e9f991c893fe9e_01.jpg"
                  loading="lazy"
                  alt=""
                  className="rating-image"
                />
                <img
                  src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/6217623896c3477f10792397_02.jpg"
                  loading="lazy"
                  alt=""
                  className="rating-image"
                />
                <img
                  src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/62176249f7a2a5225d0fe414_03.jpg"
                  loading="lazy"
                  alt=""
                  className="rating-image"
                />
                <img
                  src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/621762538fdf683e1dd67756_04.jpg"
                  loading="lazy"
                  alt=""
                  className="rating-image"
                />
                <img
                  src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/6217625c5d4969a93622dd13_05.jpg"
                  loading="lazy"
                  alt=""
                  className="rating-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-wrap-image">
        <div className="hero-image-mask">
          <img
            src="https://images.unsplash.com/photo-1586191552066-d52dd1e3af86?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            loading="lazy"
            sizes="(max-width: 991px) 100vw, 46vw"
            srcSet="https://images.unsplash.com/photo-1586191552066-d52dd1e3af86?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 500w, https://images.unsplash.com/photo-1586191552066-d52dd1e3af86?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 800w, https://images.unsplash.com/photo-1586191552066-d52dd1e3af86?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1000w"
            alt=""
            className="hero-image"
          />
        </div>
      </div>
      <div className="decoration blur-1"></div>
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

export default HeroSection;
