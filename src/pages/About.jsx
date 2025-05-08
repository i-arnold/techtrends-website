import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix for default marker icons in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const About = () => {
  // Kigali coordinates
  const position = [-1.9536, 30.0605];
  
  // Random coordinates near Kigali for demonstration
  const randomPosition = [
    -1.9536 + (Math.random() * 0.02 - 0.01), 
    30.0605 + (Math.random() * 0.02 - 0.01)
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4">About TechTrends Ltd</h1>
      <p className="text-center mb-4">TechTrends Ltd is a leading business specializing in electronic gadgets, located in Kigali City.</p>
      
      {/* Leaflet Map Section */}
      <div className="my-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Our Location</h2>
        <div className="rounded-lg overflow-hidden shadow-lg h-96">
          <MapContainer 
            center={position} 
            zoom={13} 
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>TechTrends Ltd Main Office</Popup>
            </Marker>
            <Marker position={randomPosition}>
              <Popup>Our New Branch (Coming Soon!)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

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