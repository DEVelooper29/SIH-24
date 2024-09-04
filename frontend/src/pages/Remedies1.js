import React, { useState } from 'react';
import './Remedies1.css';

const translations = {
  en: {
    title: "Powdery Mildew Disease",
    aboutPowderyMildew: "About Powdery Mildew",
    aboutPowderyMildewDesc: "Powdery mildew is a fungal disease that affects a wide variety of plants. It is characterized by white or gray powdery spots, usually on the upper sides of leaves. These spots can eventually spread to cover entire leaves and stems, reducing photosynthesis and leading to reduced growth and yield.",
    symptoms: "Symptoms",
    symptomsList: [
      "White or gray powdery spots on leaves and stems",
      "Distorted, yellowing leaves",
      "Premature leaf drop",
      "Reduced growth and vigor of the plant"
    ],
    remedies: "Remedies",
    remediesList: [
      "Improve air circulation by spacing plants properly and pruning overcrowded areas.",
      "Water plants early in the day to allow leaves to dry quickly.",
      "Apply fungicides labeled for powdery mildew control, following the manufacturer’s instructions.",
      "Use resistant plant varieties where available.",
      "Remove and dispose of infected plant parts to prevent the spread of the fungus."
    ]
  },
  hi: {
    title: "पाउडरी मिल्ड्यू रोग",
    aboutPowderyMildew: "पाउडरी मिल्ड्यू के बारे में",
    aboutPowderyMildewDesc: "पाउडरी मिल्ड्यू एक फंगल रोग है जो विभिन्न प्रकार की पौधों को प्रभावित करता है। यह रोग पत्तियों के ऊपरी हिस्सों पर सफेद या ग्रे पाउडरी डागों से पहचाना जाता है। ये डाग अंततः पूरे पत्तों और तनों पर फैल सकते हैं, जिससे प्रकाश संश्लेषण कम होता है और पौधे की वृद्धि और उत्पादन में कमी आती है।",
    symptoms: "लक्षण",
    symptomsList: [
      "पत्तियों और तनों पर सफेद या ग्रे पाउडरी डाग",
      "विकृत, पीली पत्तियाँ",
      "पत्तियों का जल्दी गिरना",
      "पौधे की वृद्धि और ताकत में कमी"
    ],
    remedies: "उपाय",
    remediesList: [
      "पौधों को ठीक से अंतराल पर रखकर और भीड़भाड़ वाले क्षेत्रों की छंटाई करके वायु परिसंचरण में सुधार करें।",
      "पौधों को दिन में जल्दी पानी दें ताकि पत्तियाँ जल्दी सूख सकें।",
      "पाउडरी मिल्ड्यू नियंत्रण के लिए लेबल किए गए फंगिसाइड्स का उपयोग करें, निर्माता के निर्देशों का पालन करते हुए।",
      "जहां उपलब्ध हो, प्रतिरोधक पौधों की किस्मों का उपयोग करें।",
      "फंगस के फैलाव को रोकने के लिए संक्रमित पौधों के भागों को हटा दें और नष्ट करें।"
    ]
  },
  mr: {
    title: "पावडरी मिल्ड्यू रोग",
    aboutPowderyMildew: "पावडरी मिल्ड्यू बद्दल",
    aboutPowderyMildewDesc: "पावडरी मिल्ड्यू हा एक फंगल रोग आहे जो विविध प्रकारच्या वनस्पतींना प्रभावित करतो. हे पांढरट किंवा ग्रे पावडरी डागांनी ओळखले जाते, सामान्यतः पानांच्या वरच्या बाजूला. हे डाग संपूर्ण पानांवर आणि तांदळांवर पसरू शकतात, ज्यामुळे प्रकाश संश्लेषण कमी होते आणि वनस्पतीची वाढ आणि उत्पादन कमी होते.",
    symptoms: "लक्षणे",
    symptomsList: [
      "पानांवर आणि तांदळांवर पांढरे किंवा ग्रे पावडरी डाग",
      "विकृत, पिवळसर पानं",
      "पानांचं लवकर गळणं",
      "वनस्पतीची वाढ आणि ताकद कमी होणे"
    ],
    remedies: "उपाय",
    remediesList: [
      "वनस्पतींना योग्य अंतरावर ठेवून आणि गजबजलेले भाग छाटून वायू परिसंचरण सुधारित करा.",
      "पाण्याचे पिऊन वनस्पतींना दिवसाच्या सुरुवातीला पाणी द्या ज्यामुळे पानं लवकर कोरडी होईल.",
      "पावडरी मिल्ड्यू नियंत्रणासाठी लेबल केलेले फंगिसाइड्स वापरा, निर्माता यांच्या सूचनांचे पालन करत.",
      "उपलब्ध असलेल्या प्रतिकारक वनस्पतींच्या प्रकारांचा वापर करा.",
      "फंगसच्या प्रसारास प्रतिबंध करण्यासाठी संक्रमित वनस्पतींच्या भागांना काढा आणि नष्ट करा."
    ]
  }
};

const Remedies1 = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const t = translations[language];

  return (
    <div className="remedies-container">
      <header>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="mr">Marathi</option>
        </select>
      </header>
      <h2>{t.title}</h2>
      
      {/* Image Section */}
      <div className="image-section">
        <img 
          src="https://grangettos.com/cdn/shop/articles/shutterstock_1806230311_1500x.jpg?v=1627419008" 
          alt={t.title}
        />
      </div>

      {/* Info Section */}
      <section className="info-section">
        <h3>{t.aboutPowderyMildew}</h3>
        <p>{t.aboutPowderyMildewDesc}</p>
      </section>

      {/* Symptoms Section */}
      <section className="symptoms-section">
        <h3>{t.symptoms}</h3>
        <ul>
          {t.symptomsList.map((symptom, index) => (
            <li key={index}>{symptom}</li>
          ))}
        </ul>
      </section>

      {/* Remedies Section */}
      <section className="remedies-section">
        <h3>{t.remedies}</h3>
        <ul>
          {t.remediesList.map((remedy, index) => (
            <li key={index}>{remedy}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Remedies1;
