import { useLocation, useNavigate } from "react-router-dom";
import './Results.css';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook to programmatically navigate
  const { images } = location.state || {}; // Retrieve images from navigation state

  // Example data (hardcoded)
  const diseases = [
    { name: "Powdery Mildew", probability: "85%" },
    { name: "Leaf Spot", probability: "65%" },
    { name: "Downy Mildew", probability: "45%" },
    { name: "Blight", probability: "30%" },
    { name: "Rust", probability: "20%" },
    { name: "Anthracnose", probability: "50%" },
    { name: "Botrytis (Gray Mold)", probability: "40%" },
    { name: "Canker", probability: "25%" },
    { name: "Verticillium Wilt", probability: "35%" },
    { name: "Fusarium Wilt", probability: "55%" },
];


  // Function to calculate the stroke-dashoffset for the circular progress
  const getStrokeDashoffset = (probability) => {
    const radius = 45; // Radius of the circle
    const circumference = 2 * Math.PI * radius;
    return circumference - (parseInt(probability) / 100) * circumference;
  };

  // Function to handle navigation to the remedies page based on disease name
  const handleViewRemedies = (diseaseName) => {
    if (diseaseName === "Powdery Mildew") {
      navigate("/remedies1");
    } else if (diseaseName === "Leaf Spot") {
      navigate("/remedies");
    } else {
      // Add any other conditions or default behavior if needed
      console.log("No specific route for this disease.");
    }
  };

  return (
    <div className="results">
      <h2>Plant Disease Diagnosis Report</h2>
      
      {/* Display Images */}
      <div className="images-container">
        {images && images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt={`Diagnosed Plant ${index + 1}`} />
            </div>
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>

      {/* Report Summary */}
      <div className="report-summary">
        <h3>Diagnosis Summary</h3>
      </div>

      {/* Disease Cards */}
      <div className="disease-cards">
        {diseases.map((disease, index) => {
          const probability = parseInt(disease.probability);
          const strokeDashoffset = getStrokeDashoffset(disease.probability);

          return (
            <div key={index} className="disease-card">
              <h4>{disease.name}</h4>
              <div className="circular-progress">
                <svg width="100" height="100">
                  <circle
                    className="circle-bg"
                    cx="50"
                    cy="50"
                    r="45"
                  />
                  <circle
                    className="circle-fg"
                    cx="50"
                    cy="50"
                    r="45"
                    strokeDasharray="282.6" // Circumference (2 * π * radius)
                    strokeDashoffset={strokeDashoffset}
                  />
                </svg>
                <div className="percentage">{disease.probability}</div>
              </div>
              <p className="description">This disease is characterized by {disease.name.toLowerCase()} symptoms.</p>
              {/* View Remedies Button */}
              <button
                className="view-remedies-button"
                onClick={() => handleViewRemedies(disease.name)} // Pass the disease name to the handler
              >
                View Remedies
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
