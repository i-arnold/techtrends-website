import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-center mb-4">Get in touch with us for any inquiries or support.</p>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input type="text" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input type="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Message:</label>
          <textarea name="message" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-full">Submit</button>
      </form>
      <h2 className="text-2xl font-semibold text-center mt-8 mb-2">Contact Details</h2>
      <p className="text-center">Address: Kigali City, Rwanda</p>
      <p className="text-center">Phone: +250 123 456 789</p>
      <nav className="flex justify-center mt-4">
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </nav>
    </div>
  );
};

export default Contact; 