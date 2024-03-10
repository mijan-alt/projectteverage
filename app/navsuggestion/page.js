"use client"
import React from 'react';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-green-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Branding */}
        <Link href="/" className="text-xl font-bold">
          Brand
        </Link>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <div className="group inline-block">
            <span>Book a Trip</span>
            <div className="hidden group-hover:block absolute bg-white p-4 space-y-2">
              <Link href="/destinations">Destinations</Link>
              <Link href="/reviews">Reviews</Link>
            </div>
          </div>
          <Link href="/freight-booking">Freight Booking</Link>
          <Link href="/partner-program">Partner Program</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/blog">Blog/News</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>

        {/* User Account Section */}
        <div className="flex items-center space-x-4">
          <Link href="/user-account" className="font-semibold">
             Account
          </Link>
          <Link href="/cart">
            <div className="flex items-center">
              <span className="mr-2">🛒</span> Cart
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
