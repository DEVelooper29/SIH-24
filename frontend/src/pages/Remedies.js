import React, { useState } from 'react';
import './Remedies.css';

const translations = {
  en: {
    title: "Leaf Spot Disease",
    aboutLeafSpot: "About Leaf Spot",
    aboutLeafSpotDesc: "Leaf spot is a common term used to describe a number of diseases affecting the foliage of plants. The characteristic symptom is the presence of brown, black, or tan spots on the leaves. The spots may have a yellow halo around them, and if left untreated, they can cause significant damage to the plant, including defoliation and reduced vigor.",
    symptoms: "Symptoms",
    symptomsList: [
      "Small, brown or black spots on leaves",
      "Yellow halos around the spots",
      "Leaves turning yellow and dropping prematurely",
      "Stunted growth in severe cases"
    ],
    remedies: "Remedies",
    remediesList: [
      "Remove and destroy affected leaves to prevent the spread of the disease.",
      "Improve air circulation around the plants by pruning and spacing them adequately.",
      "Avoid overhead watering; water at the base of the plants instead.",
      "Apply a fungicide specifically labeled for leaf spot diseases, following the manufacturer’s instructions.",
      "Maintain proper garden sanitation by cleaning up fallen leaves and debris."
    ]
  },
  hi: {
    title: "पत्ते के धब्बे की बीमारी",
    aboutLeafSpot: "पत्ते के धब्बे के बारे में",
    aboutLeafSpotDesc: "पत्ते के धब्बे एक सामान्य शब्द है जिसका उपयोग पौधों की पत्तियों को प्रभावित करने वाली कई बीमारियों का वर्णन करने के लिए किया जाता है। विशेष लक्षण पत्तियों पर भूरे, काले, या भूरे धब्बों की उपस्थिति है। धब्बों के चारों ओर एक पीला हल्ला हो सकता है, और यदि अनदेखा किया जाए, तो वे पौधे को महत्वपूर्ण नुकसान पहुंचा सकते हैं, जिसमें पत्तियों का गिरना और कम ताकत शामिल है।",
    symptoms: "लक्षण",
    symptomsList: [
      "पत्तियों पर छोटे, भूरे या काले धब्बे",
      "धब्बों के चारों ओर पीले हल्ले",
      "पत्तियाँ पीली होकर जल्दी गिर रही हैं",
      "गंभीर मामलों में विकास धीमा होना"
    ],
    remedies: "उपाय",
    remediesList: [
      "बीमारी के फैलाव को रोकने के लिए प्रभावित पत्तियों को हटा दें और नष्ट करें।",
      "पौधों के चारों ओर वायु परिसंचरण में सुधार के लिए छंटाई और उचित स्थान पर रखें।",
      "सिर से पानी देने से बचें; पौधों की जड़ों के पास पानी दें।",
      "पत्ते के धब्बे की बीमारियों के लिए विशेष रूप से लेबल किए गए कवकनाशी का उपयोग करें, निर्माता के निर्देशों का पालन करते हुए।",
      "पत्तियों और कचरे को साफ करके उचित बागवानी स्वच्छता बनाए रखें।"
    ]
  },
  mr: {
    title: "पानांवरील डाग रोग",
    aboutLeafSpot: "पानांवरील डाग याबद्दल",
    aboutLeafSpotDesc: "पानांवरील डाग हा एक सामान्य शब्द आहे जो वनस्पतींच्या पानांवर परिणाम करणाऱ्या अनेक रोगांचे वर्णन करण्यासाठी वापरला जातो. विशेष लक्षण म्हणजे पानांवर तपकिरी, काळे किंवा पिवळसर डाग असणे. डागांच्या भोवती पिवळसर हलबा असू शकतो, आणि जर दुर्लक्ष केले तर, हे रोग पानांची गळती आणि कमी ताकद यासह पौधेला मोठे नुकसान पोचवू शकतात.",
    symptoms: "लक्षणे",
    symptomsList: [
      "पानांवर छोटे, तपकिरी किंवा काळे डाग",
      "डागांच्या भोवती पिवळसर हलबा",
      "पानांची पिवळट होऊन लवकर गळणे",
      "गंभीर बाबतीत विकास मंदावणे"
    ],
    remedies: "उपाय",
    remediesList: [
      "रोगाचा प्रसार रोखण्यासाठी प्रभावित पानांचे काढा आणि नष्ट करा.",
      "पानांची छाटणी करून आणि योग्य अंतरावर ठेवून वनस्पतींच्या आसपास वायू परिसंचरण सुधारित करा.",
      "वरील पाण्याच्या पद्धतीचा अवलंब करण्यापासून टाळा; पाण्याचे टाकणे वनस्पतींच्या मूळांवर करा.",
      "पानांवरील डाग रोगांसाठी विशेषतः लेबल केलेल्या फंगिसाइडचा वापर करा, उत्पादकाच्या सूचनांचे पालन करत.",
      "पानांचे आणि कचऱ्याचे स्वच्छता राखून योग्य बागवानी स्वच्छता राखा."
    ]
  }
};

const Remedies = () => {
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
          src="https://extension.umn.edu/sites/extension.umn.edu/files/styles/crop_featured_image_crop/public/marssonia-leaf-spot-on-euonymus-grabowski.jpg?h=d7856bc0&itok=6Xt6_yG_" 
          alt={t.title}
        />
      </div>

      {/* Info Section */}
      <section className="info-section">
        <h3>{t.aboutLeafSpot}</h3>
        <p>{t.aboutLeafSpotDesc}</p>
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

export default Remedies;
