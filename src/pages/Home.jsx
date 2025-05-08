import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-primary">Welcome to TechTrends Ltd</h1>
            <p className="py-6 text-base-content">Your trusted partner for electronic gadgets in Kigali City.</p>
            <div className="flex justify-center gap-4">
              <Link to="/about" className="btn btn-primary">About Us</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 