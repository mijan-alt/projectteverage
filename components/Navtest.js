"use client"
import React from "react";
import { Syne } from "next/font/google";
import { usePathname } from "next/navigation";


const syne = Syne({ subsets: ["latin"] });
const Navbar = () => {
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
              data-hover="true"
              data-delay="0"
              className="nav-link w-dropdown"
              style={{ maxWidth: "1320px" }}
            >
              <div
                className="dropdown-toggle w-dropdown-toggle"
                id="w-dropdown-toggle-0"
                aria-controls="w-dropdown-list-0"
                aria-haspopup="menu"
                aria-expanded="false"
                role="button"
                tabIndex="0"
              >
                <div
                  className="dropdown-icon w-icon-dropdown-toggle"
                  aria-hidden="true"
                ></div>
                <div>Pages</div>
              </div>
              <nav
                className="dropdown-list w-dropdown-list"
                id="w-dropdown-list-0"
                aria-labelledby="w-dropdown-toggle-0"
              >
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
                  c
                  className={`dropdown-link w-dropdown-link ${
                    pathname == "/contactUs" && " w--current"
                  } ${syne.className}`}
                  tabIndex="0"
                >
                  Contact Us
                </a>
              </nav>
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
          <div
            id="w-node-d9631e45-d5f9-e4dd-597a-ab5348137a17-481379e9"
            className="menu-button w-nav-button"
            style={{ WebkitUserSelect: "text" }}
            aria-label="menu"
            role="button"
            tabIndex="0"
            aria-controls="w-nav-overlay-0"
            aria-haspopup="menu"
            aria-expanded="false"
          >
            <div className="w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
      <div
        className="w-nav-overlay"
        data-wf-ignore=""
        id="w-nav-overlay-0"
      ></div>
    </div>
  );
};

export default Navbar;
