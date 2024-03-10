import React from 'react'

const Service = () => {
  return (
    <section>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
          <img
            alt="Party"
          src="./people.jpg"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
  
        <div class="lg:py-24">
          <h2 class="text-3xl font-bold sm:text-4xl text-[#24752B]">We Provide Service Across NIgeria</h2>
  
          <p class="mt-4 text-gray-600">
          Our aim is to make global corporate travel management more personalized and
          seamless. And we do this through a network of exceptional local agencies that are not
          only leaders in their own respective markets, but who also meet the high operating and
          service standards needed to become a Radius member.
          we specialize in vacation packages, escorted and independent tour packages, cruises,
         honeymoons, weddings at foreign locations, and corporate travel. Our staff is dedicated
          to connecting our customers with amazing travel experiences around the world, all at a
         price that suits their needs. We will happily work with you to plan your dream vacation
          or corporate trip that meets both your budget and experience goals, whatever they may
           be!
          </p>
  
          <a
            href="#"
            class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Service