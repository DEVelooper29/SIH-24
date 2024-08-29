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
        <h2>Some additional content</h2>
        <p>The rest of the page content continues below the hero. You can use the hero at the top of your page, e.g., the home page. A hero is great to display a high-quality picture together with a catchy title.</p>
        <p>Ad donec tincidunt torquent ultricies convallis sodales faucibus magna, fringilla lorem blandit sollicitudin donec faucibus curae orci molestie, et proin curae aliquet venenatis ligula amet vivamus orci varius arcu.</p>
        <p>Laoreet fusce condimentum venenatis quisque imperdiet ornare cras faucibus convallis, pharetra habitasse elementum ut bibendum per sociosqu phasellus etiam, velit faucibus integer torquent leo elementum maecenas netus.</p>
      </article>
    </div>
  );
};

export default Home;
