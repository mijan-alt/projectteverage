"use client"

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';

const ModernBookingForm = () => {
  const [formData, setFormData] = useState({
    fromLocation: null,
    toLocation: null,
    departureDate: new Date(),
    numberOfPassengers: 1,
    additionalDetails: '',
  });

  const locationOptions = [
    { value: 'location1', label: 'Location 1' },
    { value: 'location2', label: 'Location 2' },
    // Add more locations as needed
  ];

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      departureDate: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to backend)
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-green-100 text-green-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="fromLocation">
          From Location
        </label>
        <Select
          options={locationOptions}
          isSearchable
          placeholder="Select from location"
          value={formData.fromLocation}
          onChange={(selectedOption) => handleChange('fromLocation', selectedOption)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="toLocation">
          To Location
        </label>
        <Select
          options={locationOptions}
          isSearchable
          placeholder="Select to location"
          value={formData.toLocation}
          onChange={(selectedOption) => handleChange('toLocation', selectedOption)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="departureDate">
          Date of Departure
        </label>
        <DatePicker
          selected={formData.departureDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-green-800 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="numberOfPassengers">
          Number of Passengers
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-green-800 leading-tight focus:outline-none focus:shadow-outline"
          id="numberOfPassengers"
          name="numberOfPassengers"
          type="number"
          min="1"
          value={formData.numberOfPassengers}
          onChange={(e) => handleChange('numberOfPassengers', e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="additionalDetails">
          Additional Details (Optional)
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-green-800 leading-tight focus:outline-none focus:shadow-outline"
          id="additionalDetails"
          name="additionalDetails"
          placeholder="Any specific requirements or additional information?"
          rows="4"
          value={formData.additionalDetails}
          onChange={(e) => handleChange('additionalDetails', e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Book Now
        </button>
      </div>
    </form>
  );
};

export default ModernBookingForm;
