import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () => {
  const [dragging, setDragging] = useState(false);
  const [images, setImages] = useState([]); // State to store multiple images
  const navigate = useNavigate(); // Hook for navigation

  const MAX_IMAGES = 5; // Maximum number of images

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      // Limit to MAX_IMAGES
      const fileArray = Array.from(files).slice(0, MAX_IMAGES);
      const imageFiles = fileArray.map(file => URL.createObjectURL(file)); // Store the image URLs
      setImages(imageFiles);
      navigate('/results', { state: { images: imageFiles } }); // Navigate to /results
    }
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      // Limit to MAX_IMAGES
      const fileArray = Array.from(files).slice(0, MAX_IMAGES);
      const imageFiles = fileArray.map(file => URL.createObjectURL(file)); // Store the image URLs
      setImages(imageFiles);
      navigate('/results', { state: { images: imageFiles } }); // Navigate to /results
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        {/* Drag-and-Drop Area */}
        <h2>Crop Disease Detector</h2>
        <div 
          className={`drop-zone ${dragging ? 'dragging' : ''}`} 
          onDragOver={handleDragOver} 
          onDragLeave={handleDragLeave} 
          onDrop={handleDrop}
        >
          <p>Drag the crops image(s) here</p>
          <div className="file-upload">
            <input 
              type="file" 
              id="file-input" 
              multiple // Allow multiple files
              onChange={handleFileSelect} 
              style={{ display: 'none' }} 
            />
            <label htmlFor="file-input" className="plus-sign-label">
              <img 
                src="https://cdn1.iconfinder.com/data/icons/navigation-elements/512/add-create-plus-more-round-ui-function-512.png" 
                alt="Plus sign" 
                className="plus-sign" 
              />
            </label>
          </div>
        </div>
      </section>

      {/* Additional Content */}
      <article>
        <h2>Tips for Farmers to Improve Agricultural Productivity</h2>
        <h3>1. Soil Health Management</h3>
        <p>Maintaining soil health is crucial for crop production. Regularly test the soil to monitor its nutrient levels and pH balance. Use organic matter like compost to improve soil structure and fertility.</p>

        <h3>2. Efficient Water Management</h3>
        <p>Optimize your irrigation practices by adopting techniques like drip irrigation, which minimizes water waste. Collecting rainwater and using moisture sensors can also help in effective water management.</p>

        <h3>3. Crop Rotation and Diversification</h3>
        <p>Rotate crops annually to improve soil fertility and reduce the risk of pests and diseases. Diversifying crops can also lead to better resilience against market fluctuations and climatic conditions.</p>

        <h3>4. Integrated Pest Management (IPM)</h3>
        <p>Implement IPM techniques to reduce the reliance on chemical pesticides. This includes biological controls, crop rotation, and the use of resistant crop varieties to manage pests effectively.</p>

        <h3>5. Precision Agriculture</h3>
        <p>Leverage modern technology like GPS, drones, and sensors to monitor crop health and soil conditions. Precision agriculture can help optimize inputs like seeds, water, and fertilizers, leading to higher yields and reduced costs.</p>

      </article>
    </div>
  );
};

export default Home;
