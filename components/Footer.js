"use client"
import React from "react";
import Link from "next/link";

function Footer({font}) {
  return (
    <footer id="footer" className={`footer ${font}`}>
      <div className="container w-container">
        <div className="grid-footer">
          <div className="footer-item">
            <a href="/" className="footer-logo-link">
              <img
                src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/62c036864bbb9cecd928c378_torcular-light.svg"
                alt=""
                className="footer-logo"
              />
            </a>
            <p className={`footer-about text-white ${font}`}>
              Morning that made is Was that his hath face light meat air female
              isn't over place replenish.
            </p>
            <div className="footer-address-wrap">
              <div className="address-icon">
                <img
                  src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/621ddbfebd85624034ce3e61_location-svgrepo-com.svg"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className="address-content ">
                <p className={`text-white ${font}`}>
                  2002 Horton Ford Rd, Eidson, TN, 37731
                </p>
              </div>
            </div>
          </div>
          <div className="footer-item">
            <h6 className="footer-title">Pages</h6>
            <ul role="list" className="w-list-unstyled">
              <li>
                <Link href="/">
                  <span className={`footer-link ${font}`}>Home</span>
                </Link>
                <Link href="/home-2">
                  <span className={`footer-link ${font}`}>Home 2</span>
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  <span className={`footer-link ${font}`}>About Us</span>
                </Link>
                <Link href="/team">
                  <span className={`footer-link ${font}`}>Team</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className={`footer-link ${font}`}>Services</span>
                </Link>
                <Link href="/service-single">
                  <span className={`footer-link ${font}`}>Service Single</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className={`footer-link ${font}`}>Blog</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h6 className={`footer-title ${font}`}>Pages</h6>
            <ul role="list" className="w-list-unstyled">
              <li>
                <Link href="/contact-us">
                  <span className={`footer-title ${font}`}>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/utility-pages/style-guide">
                  <span className={`footer-title ${font}`}>Style Guide</span>
                </Link>
              </li>
              <li>
                <Link href="/utility-pages/instructions">
                  <span className={`footer-title ${font}`}>Instructions</span>
                </Link>
              </li>
              <li>
                <Link href="/utility-pages/licenses">
                  <span className={`footer-title ${font}`}>Licenses</span>
                </Link>
              </li>
              <li>
                <Link href="/utility-pages/changelog">
                  <span className="footer-link">Changelog</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-item text-right">
            <h6 className={`footer-title ${font}`}>Quick Contact</h6>
            <p className={`text-white ${font}`}>
              Don’t hesitate to call or drop us a line.
            </p>
            <h3 className={`text-primary ${font}`}>+91 123 456 789</h3>
          </div>
        </div>
        <div className="w-layout-grid grid-copyright">
          <p className={`copyright-text ${font}`}>
            Copyright © Torcular | Designed by{" "}
            <a href="https://www.webestica.com" target="_blank">
              Webestica
            </a>{" "}
            - Powered by{" "}
            <a href="https://webflow.com" target="_blank">
              Webflow
            </a>
          </p>
          <div
            id="w-node-a3b2f73d-e162-5d7d-ef90-6495d9583e54-d9583e11"
            className="w-layout-grid footer-social"
          >
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="footer-social-link w-inline-block"
            >
              <img
                src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/621dc159a7ca993d5ab0dea3_facebook-dark.svg"
                loading="lazy"
                alt=""
                className="footer-social-icon"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="footer-social-link w-inline-block"
            >
              <img
                src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/621dc159a7ca992efcb0dea4_instagram-dark.svg"
                loading="lazy"
                alt=""
                className="footer-social-icon"
              />
            </a>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              className="footer-social-link w-inline-block"
            >
              <img
                src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/621dc159a7ca993cf1b0dea5_pinterest-dark.svg"
                loading="lazy"
                alt=""
                className="footer-social-icon"
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="footer-social-link w-inline-block"
            >
              <img
                src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/621dc159a7ca997f11b0dea6_twitter-dark.svg"
                loading="lazy"
                alt=""
                className="footer-social-icon"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="decoration shape-2"></div>
      <div className="decoration shape-5">
        <img
          src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/62aac535c6e70dee7b683882_shape-05.svg"
          loading="lazy"
          alt=""
          className="shape-image-5"
        />
      </div>
      <div className="decoration shape-6">
        <img
          src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/62aac9855a89c667409a3581_shape-06.svg"
          loading="lazy"
          alt=""
          className="shape-image-7"
        />
      </div>
    </footer>
  );
}

export default Footer;
