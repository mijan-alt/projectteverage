"use client"
import React from "react";
import { Syne } from "next/font/google";
import { usePathname } from "next/navigation";
import Hamburger from '../svgs/svg.js'
import { useState } from "react";

const syne = Syne({ subsets: ["latin"] });
const Navbar = () => {
  const [dropDown, setDropDown]= useState(false)

  const pathname = usePathname()
  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className={`navbar w-nav ${syne.className}`}
    >
      <div className={`container w-container ${syne.className}`}>
        <div className="flex flex-row items-center justify-between">
          <div className={`nav-wrap ${syne.className}`}>
            <a href="/" className="brand w-nav-brand" aria-label="home">
              <img
                src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/62c03670ac8e86abc6a59303_torcular.svg"
                loading="lazy"
                alt=""
                className="logo"
              />
            </a>
            <nav
              role="navigation"
              id="w-node-_18d67bce-8317-3e0f-45b9-4e9f058a2244-481379e9"
              className={`nav-menu w-nav-menu ${syne.className}`}
            >
              <a
                href="/"
                className={`nav-link w-nav-link ${
                  pathname == "/" && " w--current"
                } ${syne.className}`}
                style={{ maxWidth: "1320px" }}
              >
                Home
              </a>
              <a
                href="/about"
                aria-current="page"
                className={`nav-link w-nav-link  ${
                  pathname == "/about" && " w--current"
                } ${syne.className}`}
                style={{ maxWidth: "1320px" }}
              >
                About Us
              </a>
              <a
                href="/services"
                className={`nav-link w-nav-link ${
                  pathname == "/services" && " w--current"
                } ${syne.className}`}
                style={{ maxWidth: "1320px" }}
              >
                Services
              </a>
              <div
                className="nav-link w-dropdown"
                style={{ maxWidth: "1320px" }}
                onClick={() => setDropDown((prev) => !prev)}
              >
                <div className="dropdown-toggle w-dropdown-toggle">
                  <div className="dropdown-icon w-icon-dropdown-toggle "></div>
                  <div>Pages</div>
                </div>
                {dropDown && (
                  <nav className="dropdown-list w-dropdown-list">
                    <a
                      href="/"
                      className={`dropdown-link w-dropdown-link ${
                        pathname == "/" && " w--current"
                      } ${syne.className}`}
                      tabIndex="0"
                    >
                      Home
                    </a>
                    <a
                      href="/home-2"
                      className={`dropdown-link w-dropdown-link ${syne.className}`}
                      tabIndex="0"
                    >
                      Home 2
                    </a>
                    <a
                      href="/about"
                      aria-current="page"
                      className={`dropdown-link w-dropdown-link ${
                        pathname == "/about" && " w--current"
                      } ${syne.className}`}
                      tabIndex="0"
                    >
                      About Us
                    </a>
                    <a
                      href="/services"
                      className={`dropdown-link w-dropdown-link ${
                        pathname == "/services" && " w--current"
                      } ${syne.className}`}
                      tabIndex="0"
                    >
                      Services
                    </a>
                    <a
                      href="/service-single"
                      className={`dropdown-link w-dropdown-link ${syne.className}`}
                      tabIndex="0"
                    >
                      Service Single
                    </a>
                    <a
                      href="/team"
                      className={`dropdown-link w-dropdown-link ${
                        pathname == "/team" && " w--current"
                      } ${syne.className}`}
                      tabIndex="0"
                    >
                      Team
                    </a>
                    <a
                      href="/blog"
                      className={`dropdown-link w-dropdown-link ${
                        pathname == "/blog" && " w--current"
                      } ${syne.className}`}
                      tabIndex="0"
                    >
                      Blog
                    </a>
                    <a
                      href="/contactUs"
                      className={`dropdown-link w-dropdown-link ${
                        pathname == "/contactUs" && " w--current"
                      } ${syne.className}`}
                      tabIndex="0"
                    >
                      Contact Us
                    </a>
                  </nav>
                )}
              </div>
            </nav>
            <div className="navbar-button">
              <a
                href="/contactUs"
                className={`button w-button ${syne.className}`}
              >
                Get a Quote
              </a>
            </div>
          </div>
          <div
            className="lg:hidden cursor-pointer relative "
            onClick={() => setDropDown((prev) => !prev)}
          >
            <div className="bg-red-500 px-2 py-2">
              <Hamburger />
            </div>

            {dropDown && (
              <div className="lg:hidden absolute top-8 right-10">
                <nav className="bg-[#f8f4f3] py-3">
                  <a
                    href="/"
                    className={`dropdown-link w-dropdown-link ${
                      pathname == "/" && " w--current"
                    } ${syne.className}`}
                    tabIndex="0"
                  >
                    Home
                  </a>
                  {/* <a
                    href="/home-2"
                    className={`dropdown-link w-dropdown-link ${syne.className}`}
                    tabIndex="0"
                  >
                    Home 2
                  </a> */}
                  <a
                    href="/about"
                    aria-current="page"
                    className={`dropdown-link w-dropdown-link ${
                      pathname == "/about" && " w--current"
                    } ${syne.className}`}
                    tabIndex="0"
                  >
                    About Us
                  </a>
                  <a
                    href="/services"
                    className={`dropdown-link w-dropdown-link ${
                      pathname == "/services" && " w--current"
                    } ${syne.className}`}
                    tabIndex="0"
                  >
                    Services
                  </a>
                  {/* <a
                    href="/service-single"
                    className={`dropdown-link w-dropdown-link ${syne.className}`}
                    tabIndex="0"
                  >
                    Service Single
                  </a> */}
                  <a
                    href="/team"
                    className={`dropdown-link w-dropdown-link ${
                      pathname == "/team" && " w--current"
                    } ${syne.className}`}
                    tabIndex="0"
                  >
                    Team
                  </a>
                  <a
                    href="/blog"
                    className={`dropdown-link w-dropdown-link ${
                      pathname == "/blog" && " w--current"
                    } ${syne.className}`}
                    tabIndex="0"
                  >
                    Blog
                  </a>
                  <a
                    href="/contactUs"
                    className={`dropdown-link w-dropdown-link ${
                      pathname == "/contactUs" && " w--current"
                    } ${syne.className}`}
                    tabIndex="0"
                  >
                    Contact Us
                  </a>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <div
        className="w-nav-overlay"
        data-wf-ignore=""
        id="w-nav-overlay-0"
      ></div> */}
    </div>
  );
};

export default Navbar;
