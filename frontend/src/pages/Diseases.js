import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Diseases.css'; // Make sure to create this CSS file for styling

const Diseases = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Example data for diseases
  const diseases = [
    { name: 'Powdery Mildew', route: '/remedies1' },
    { name: 'Leaf Spot', route: '/remedies' },
    { name: "Downy Mildew"},
    { name: "Blight"},
    { name: "Rust"},
    { name: "Anthracnose"},
    { name: "Botrytis (Gray Mold)"},
    { name: "Canker"},
    { name: "Verticillium Wilt"},
    { name: "Fusarium Wilt"},
    // Add more diseases if needed
  ];

  // Function to handle the navigation to the remedies page
  const handleReadMore = (route) => {
    navigate(route);
  };

  return (
    <div className="diseases-container">
      <h2>Diseases</h2>
      <div className="disease-cards">
        {diseases.map((disease, index) => (
          <div key={index} className="disease-card">
            <h3>{disease.name}</h3>
            <button
              className="read-more-button"
              onClick={() => handleReadMore(disease.route)}
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diseases;
