import React from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (send data to backend, etc.)
  };

  const locations = [
    { value: 'location1', label: 'Location 1' },
    { value: 'location2', label: 'Location 2' },
    // Add more locations as needed
  ];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fromLocation">
            From Location
          </label>
          <Select
            options={locations}
            isSearchable
            placeholder="Select from location"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="toLocation">
            To Location
          </label>
          <Select
            options={locations}
            isSearchable
            placeholder="Select to location"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="departureDate">
            Date of Departure
          </label>
          <DatePicker
            selected={null} // You can set the initial date if needed
            onChange={(date) => console.log(date)} // Handle date changes
            dateFormat="yyyy-MM-dd"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
