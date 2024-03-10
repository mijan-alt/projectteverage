import React from 'react'

const Realfooter = () => {
  return (
    
<footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto flex flex-wrap justify-between">
    <div className="w-full md:w-1/3 mb-4 md:mb-0">
      <h4 className="text-lg font-bold mb-2">Contact Information</h4>
      <p>Teverage Limited</p>
      <p>[Your Physical Address]</p>
      <p>Email: info@teverage.com</p>
      <p>Phone: +123-456-7890</p>
    </div>

    <div className="w-full md:w-1/3 mb-4 md:mb-0">
      <h4 className="text-lg font-bold mb-2">Quick Links</h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/destinations">Destinations</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/partner">Partner Program</a></li>
        <li><a href="/blog">Blog/News</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </div>

    <div className="w-full md:w-1/3">
      <h4 className="text-lg font-bold mb-2">Follow Us</h4>
      <div className="flex space-x-4">
        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>

    <div className="w-full mt-8 text-center">
      <p>&copy; 2023 Teverage Limited. All rights reserved.</p>
    </div>
  </div>
</footer>

  )
}

export default Realfooter
