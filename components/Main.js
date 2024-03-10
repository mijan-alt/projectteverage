// components/HomeMainSection.js

import ModernBookingForm from './Bookingform';
import Link from 'next/link';

const HomeMainSection = () => {

    const keyFeatures = [
        {
          title: 'Book a Trip',
          description: 'Explore our destinations and book your next land travel adventure hassle-free.',
        },
        {
          title: 'Freight Services',
          description: 'Need to transport goods? Discover our reliable freight services for businesses.',
        },
        {
          title: 'Become a Partner',
          description: 'Join us in providing top-notch transportation and logistics services to our users.',
        },
      ];

  return (
    <section className="bg-gray-100 py-16">
        <div
        className="absolute inset-0 bg-cover bg-center z-0 bg-[url('/flatbed.jpg')]"
      
      ></div>
     <div className="container mx-auto relative z-10 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-4 text-center">
          Your Trusted Partner for Interstate Travels and Freight Services in Nigeria
        </h1>
        <p className="text-gray-700 text-lg mb-8 text-center">
          Book comfortable trips and reliable freight services with us.
        </p>

        {/* Booking Form for Passengers */}
        <div className="max-w-md w-full mx-auto mb-8 relative z-10">
          <ModernBookingForm />
        </div>

        {/* Key Features Section */}
        
        {/* Key Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded shadow-md text-center"
            >
              <h2 className="text-xl font-bold mb-4">{feature.title}</h2>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <Link href="/book-trip" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            
              Explore Destinations
            
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeMainSection;
