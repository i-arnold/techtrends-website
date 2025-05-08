import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4">About TechTrends Ltd</h1>
      <p className="text-center mb-4">TechTrends Ltd is a leading business specializing in electronic gadgets, located in Kigali City.</p>
      <h2 className="text-2xl font-semibold text-center mb-2">Our Mission</h2>
      <p className="text-center mb-4">To provide high-quality electronic gadgets and exceptional service to our clients.</p>
      <h2 className="text-2xl font-semibold text-center mb-2">Our Vision</h2>
      <p className="text-center mb-4">To be the go-to destination for electronic gadgets in Rwanda.</p>
      <nav className="flex justify-center">
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </nav>
    </div>
  );
};

export default About; 