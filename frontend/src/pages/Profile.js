import React, { useState } from 'react';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import './Profile.css';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const Profile = () => {
  const [selectedPlant, setSelectedPlant] = useState(null);

  // Example plant data
  const plants = [
    { name: "Rose", dateCreated: "2023-05-12", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC6Wks50dTRWitUN2qGXC7qcrDyyE4Zd9iQ&s" },
    { name: "Tulip", dateCreated: "2024-01-20", photo: "https://ctvisit.com/sites/default/files/styles/tall_700x900/public/unnamed-3.jpg?itok=OZxERCW3" },
    { name: "Orchid", dateCreated: "2023-09-15", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3kzIizpd3QJaD-P0hgFM4ymgjpFFlcdHNA&s" }
  ];

  // Example disease data with varying values for each month
  const diseaseData = [
    { name: "Powdery Mildew", probabilities: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)) },
    { name: "Leaf Spot", probabilities: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)) },
    { name: "Downy Mildew", probabilities: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)) },
    { name: "Blight", probabilities: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)) },
    { name: "Rust", probabilities: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)) },
  ];

  // Mock monthly data for chart
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: diseaseData.map(disease => ({
      label: disease.name,
      data: disease.probabilities,
      borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`,
      backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.2)`,
      borderWidth: 2,
      fill: true,
    }))
  };

  const handlePlantClick = (plant) => {
    setSelectedPlant(plant);
  };

  return (
    <div className="profile-container">
      <div className="user-info">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg" alt="Profile" className="profile-picture" />
        <div className="user-details">
          <h2>User Profile</h2>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Age:</strong> 30</p>
          <p><strong>Location:</strong> New York</p>
        </div>
      </div>

      <div className="my-plants">
        <h3>My Plants</h3>
        <div className="plants-list">
          {plants.map((plant, index) => (
            <div key={index} className="plant-item" onClick={() => handlePlantClick(plant)}>
              <img src={plant.photo} alt={`${plant.name}`} className="plant-photo" />
              <p><strong>Plant Name:</strong> {plant.name}</p>
              <p><strong>Date Created:</strong> {plant.dateCreated}</p>
            </div>
          ))}
        </div>

        {/* Display chart only if a plant is selected */}
        {selectedPlant && (
          <div className="chart-container">
            <h4>Chart for {selectedPlant.name}</h4>
            <Chart 
              type="line"
              data={chartData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  tooltip: {
                    callbacks: {
                      label: (context) => `${context.label}: ${context.raw}%`
                    }
                  }
                }
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
