import React from 'react';
import './Remedies.css';

const Remedies = () => {
  return (
    <div className="remedies-container">
      <h2>Leaf Spot Disease</h2>
      
      {/* Image Section */}
      <div className="image-section">
        <img 
          src="https://extension.umn.edu/sites/extension.umn.edu/files/styles/crop_featured_image_crop/public/marssonia-leaf-spot-on-euonymus-grabowski.jpg?h=d7856bc0&itok=6Xt6_yG_" 
          alt="Leaf Spot Disease on a plant leaf"
        />
      </div>

      {/* Info Section */}
      <section className="info-section">
        <h3>About Leaf Spot</h3>
        <p>Leaf spot is a common term used to describe a number of diseases affecting the foliage of plants. The characteristic symptom is the presence of brown, black, or tan spots on the leaves. The spots may have a yellow halo around them, and if left untreated, they can cause significant damage to the plant, including defoliation and reduced vigor.</p>
      </section>

      {/* Symptoms Section */}
      <section className="symptoms-section">
        <h3>Symptoms</h3>
        <ul>
          <li>Small, brown or black spots on leaves</li>
          <li>Yellow halos around the spots</li>
          <li>Leaves turning yellow and dropping prematurely</li>
          <li>Stunted growth in severe cases</li>
        </ul>
      </section>

      {/* Remedies Section */}
      <section className="remedies-section">
        <h3>Remedies</h3>
        <ul>
          <li>Remove and destroy affected leaves to prevent the spread of the disease.</li>
          <li>Improve air circulation around the plants by pruning and spacing them adequately.</li>
          <li>Avoid overhead watering; water at the base of the plants instead.</li>
          <li>Apply a fungicide specifically labeled for leaf spot diseases, following the manufacturer’s instructions.</li>
          <li>Maintain proper garden sanitation by cleaning up fallen leaves and debris.</li>
        </ul>
      </section>
    </div>
  );
};

export default Remedies;
