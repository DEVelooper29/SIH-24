import React from 'react';
import './Remedies1.css';

const Remedies1 = () => {
  return (
    <div className="remedies-container">
      <h2>Powdery Mildew Disease</h2>
      
      {/* Image Section */}
      <div className="image-section">
        <img 
          src="https://grangettos.com/cdn/shop/articles/shutterstock_1806230311_1500x.jpg?v=1627419008" 
          alt="Powdery Mildew Disease on a plant leaf"
        />
      </div>

      {/* Info Section */}
      <section className="info-section">
        <h3>About Powdery Mildew</h3>
        <p>Powdery mildew is a fungal disease that affects a wide variety of plants. It is characterized by white or gray powdery spots, usually on the upper sides of leaves. These spots can eventually spread to cover entire leaves and stems, reducing photosynthesis and leading to reduced growth and yield.</p>
      </section>

      {/* Symptoms Section */}
      <section className="symptoms-section">
        <h3>Symptoms</h3>
        <ul>
          <li>White or gray powdery spots on leaves and stems</li>
          <li>Distorted, yellowing leaves</li>
          <li>Premature leaf drop</li>
          <li>Reduced growth and vigor of the plant</li>
        </ul>
      </section>

      {/* Remedies Section */}
      <section className="remedies-section">
        <h3>Remedies</h3>
        <ul>
          <li>Improve air circulation by spacing plants properly and pruning overcrowded areas.</li>
          <li>Water plants early in the day to allow leaves to dry quickly.</li>
          <li>Apply fungicides labeled for powdery mildew control, following the manufacturer’s instructions.</li>
          <li>Use resistant plant varieties where available.</li>
          <li>Remove and dispose of infected plant parts to prevent the spread of the fungus.</li>
        </ul>
      </section>
    </div>
  );
};

export default Remedies1;
