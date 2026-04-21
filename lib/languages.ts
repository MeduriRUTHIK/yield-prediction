export type Language = 'en' | 'hi' | 'te';

export interface Translations {
  nav: {
    home: string;
    predict: string;
    history: string;
    about: string;
  };
  home: {
    title: string;
    subtitle: string;
    button: string;
    nasaCard: {
      title: string;
      description: string;
    };
    soilgridsCard: {
      title: string;
      description: string;
    };
    faofatCard: {
      title: string;
      description: string;
    };
  };
  predict: {
    title: string;
    form: {
      crop: string;
      season: string;
      latitude: string;
      longitude: string;
      year: string;
      country: string;
      submit: string;
      loading: string;
    };
    results: {
      prediction: string;
      predictedYield: string;
      confidence: string;
      yieldRange: string;
      vs: string;
      weather: string;
      temperature: string;
      rainfall: string;
      humidity: string;
      soil: string;
      ph: string;
      featureImportance: string;
    };
    error: string;
  };
  history: {
    title: string;
    stats: {
      totalPredictions: string;
      avgConfidence: string;
      uniqueCrops: string;
    };
    table: {
      timestamp: string;
      crop: string;
      season: string;
      year: string;
      location: string;
      yield: string;
      confidence: string;
    };
    empty: string;
  };
  about: {
    title: string;
    dataSources: string;
    nasa: {
      title: string;
      description: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
    };
    soilgrids: {
      title: string;
      description: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
    };
    faostat: {
      title: string;
      description: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
    };
    model: string;
    modelDescription: string;
    features: string;
    confidence: string;
    confidenceDescription: string;
  };
  common: {
    loading: string;
    error: string;
    success: string;
    noData: string;
    kgPerHa: string;
  };
  footer: {
    credits: string;
    poweredBy: string;
  };
}

const englishTranslations: Translations = {
  nav: {
    home: 'Home',
    predict: 'Predict',
    history: 'History',
    about: 'About',
  },
  home: {
    title: 'Predict Crop Yield with AI',
    subtitle: 'Using NASA POWER, SoilGrids & FAOSTAT',
    button: 'Start Predicting',
    nasaCard: {
      title: 'NASA POWER',
      description: 'Weather Intelligence - Get real-time temperature, rainfall, and solar radiation data',
    },
    soilgridsCard: {
      title: 'SoilGrids',
      description: 'Soil Analysis - Access global soil properties including pH and nutrient content',
    },
    faofatCard: {
      title: 'FAOSTAT',
      description: 'Historical Data - Compare with historical crop yield records worldwide',
    },
  },
  predict: {
    title: 'Crop Yield Prediction',
    form: {
      crop: 'Select Crop',
      season: 'Season',
      latitude: 'Latitude',
      longitude: 'Longitude',
      year: 'Year',
      country: 'Country',
      submit: 'Predict Yield',
      loading: 'Predicting...',
    },
    results: {
      prediction: 'Prediction Result',
      predictedYield: 'Predicted Yield',
      confidence: 'Confidence Score',
      yieldRange: 'Yield Range',
      vs: 'vs',
      weather: 'Weather Data',
      temperature: 'Avg Temperature',
      rainfall: 'Avg Rainfall',
      humidity: 'Avg Humidity',
      soil: 'Soil Properties',
      ph: 'Soil pH',
      featureImportance: 'Feature Importance',
    },
    error: 'Failed to fetch crop list. Please try again.',
  },
  history: {
    title: 'Prediction History',
    stats: {
      totalPredictions: 'Total Predictions',
      avgConfidence: 'Avg Confidence',
      uniqueCrops: 'Unique Crops',
    },
    table: {
      timestamp: 'Date & Time',
      crop: 'Crop',
      season: 'Season',
      year: 'Year',
      location: 'Location',
      yield: 'Yield (kg/ha)',
      confidence: 'Confidence',
    },
    empty: 'No predictions yet. Start predicting to see history.',
  },
  about: {
    title: 'About YieldPredict',
    dataSources: 'Data Sources',
    nasa: {
      title: 'NASA POWER API',
      description: 'The NASA POWER project provides global climate data for agriculture.',
      bullet1: 'Temperature data across regions',
      bullet2: 'Precipitation and rainfall patterns',
      bullet3: 'Solar radiation measurements',
    },
    soilgrids: {
      title: 'SoilGrids Database',
      description: 'Global soil property predictions at high resolution.',
      bullet1: 'Soil pH levels by location',
      bullet2: 'Clay, sand, and silt content',
      bullet3: 'Organic matter percentage',
    },
    faostat: {
      title: 'FAOSTAT Dataset',
      description: 'FAO's comprehensive agricultural statistics database.',
      bullet1: 'Historical crop yield records',
      bullet2: 'Production and area harvested data',
      bullet3: 'Agricultural trends over decades',
    },
    model: 'Machine Learning Model',
    modelDescription: 'Our system uses Random Forest, a powerful ensemble algorithm trained on FAOSTAT data combined with NASA POWER weather data and SoilGrids soil properties. The model learns patterns from historical data to make accurate predictions.',
    features: 'Key Features Used',
    confidence: 'Confidence Scores',
    confidenceDescription: 'Confidence scores range from 0-100%, indicating how certain our model is about the prediction. Higher scores mean more reliable predictions.',
  },
  common: {
    loading: 'Loading...',
    error: 'An error occurred. Please try again.',
    success: 'Success!',
    noData: 'No data available',
    kgPerHa: 'kg/ha',
  },
  footer: {
    credits: 'Powered by AI & Data Science',
    poweredBy: 'YieldPredict © 2026',
  },
};

const hindiTranslations: Translations = {
  nav: {
    home: 'होम',
    predict: 'भविष्यवाणी करें',
    history: 'इतिहास',
    about: 'परिचय',
  },
  home: {
    title: 'AI के साथ फसल की पैदावार का अनुमान लगाएं',
    subtitle: 'NASA POWER, SoilGrids और FAOSTAT का उपयोग करते हुए',
    button: 'भविष्यवाणी शुरू करें',
    nasaCard: {
      title: 'NASA POWER',
      description: 'मौसम की जानकारी - तापमान, वर्षा और सौर विकिरण डेटा प्राप्त करें',
    },
    soilgridsCard: {
      title: 'SoilGrids',
      description: 'मिट्टी विश्लेषण - pH और पोषक तत्वों की वैश्विक जानकारी प्राप्त करें',
    },
    faofatCard: {
      title: 'FAOSTAT',
      description: 'ऐतिहासिक डेटा - विश्वव्यापी ऐतिहासिक फसल पैदावार रिकॉर्ड से तुलना करें',
    },
  },
  predict: {
    title: 'फसल की पैदावार की भविष्यवाणी',
    form: {
      crop: 'फसल का चयन करें',
      season: 'मौसम',
      latitude: 'अक्षांश',
      longitude: 'देशांतर',
      year: 'वर्ष',
      country: 'देश',
      submit: 'पैदावार का अनुमान लगाएं',
      loading: 'अनुमान लगा रहे हैं...',
    },
    results: {
      prediction: 'भविष्यवाणी परिणाम',
      predictedYield: 'अनुमानित पैदावार',
      confidence: 'आत्मविश्वास स्कोर',
      yieldRange: 'पैदावार की सीमा',
      vs: 'बनाम',
      weather: 'मौसम डेटा',
      temperature: 'औसत तापमान',
      rainfall: 'औसत वर्षा',
      humidity: 'औसत आर्द्रता',
      soil: 'मिट्टी के गुण',
      ph: 'मिट्टी का pH',
      featureImportance: 'विशेषता महत्व',
    },
    error: 'फसल की सूची लाने में विफल। कृपया पुनः प्रयास करें।',
  },
  history: {
    title: 'भविष्यवाणी इतिहास',
    stats: {
      totalPredictions: 'कुल भविष्यवाणियां',
      avgConfidence: 'औसत आत्मविश्वास',
      uniqueCrops: 'अद्वितीय फसलें',
    },
    table: {
      timestamp: 'दिनांक और समय',
      crop: 'फसल',
      season: 'मौसम',
      year: 'वर्ष',
      location: 'स्थान',
      yield: 'पैदावार (किग्रा/हे)',
      confidence: 'आत्मविश्वास',
    },
    empty: 'अभी कोई भविष्यवाणी नहीं। भविष्यवाणी शुरू करने के लिए इतिहास देखें।',
  },
  about: {
    title: 'YieldPredict के बारे में',
    dataSources: 'डेटा स्रोत',
    nasa: {
      title: 'NASA POWER API',
      description: 'NASA POWER प्रोजेक्ट कृषि के लिए वैश्विक जलवायु डेटा प्रदान करता है।',
      bullet1: 'क्षेत्रों में तापमान डेटा',
      bullet2: 'वर्षा और वर्षा पैटर्न',
      bullet3: 'सौर विकिरण माप',
    },
    soilgrids: {
      title: 'SoilGrids डेटाबेस',
      description: 'उच्च रिजॉल्यूशन पर वैश्विक मिट्टी के गुणों की भविष्यवाणी।',
      bullet1: 'स्थान के अनुसार मिट्टी का pH स्तर',
      bullet2: 'मिट्टी, बालू और गाद की सामग्री',
      bullet3: 'जैविक पदार्थ का प्रतिशत',
    },
    faostat: {
      title: 'FAOSTAT डेटासेट',
      description: 'FAO का व्यापक कृषि सांख्यिकी डेटाबेस।',
      bullet1: 'ऐतिहासिक फसल की पैदावार रिकॉर्ड',
      bullet2: 'उत्पादन और कटाई क्षेत्र डेटा',
      bullet3: 'दशकों में कृषि प्रवृत्तियां',
    },
    model: 'मशीन लर्निंग मॉडल',
    modelDescription: 'हमारी प्रणाली Random Forest का उपयोग करती है, एक शक्तिशाली एनसेंबल एल्गोरिदम जिसे FAOSTAT डेटा के साथ NASA POWER मौसम डेटा और SoilGrids मिट्टी गुणों से प्रशिक्षित किया गया है।',
    features: 'मुख्य विशेषताएं',
    confidence: 'आत्मविश्वास स्कोर',
    confidenceDescription: 'आत्मविश्वास स्कोर 0-100% की सीमा में होते हैं, जो यह दर्शाते हैं कि हमारा मॉडल भविष्यवाणी के बारे में कितना निश्चित है।',
  },
  common: {
    loading: 'लोड हो रहा है...',
    error: 'एक त्रुटि हुई। कृपया पुनः प्रयास करें।',
    success: 'सफल!',
    noData: 'कोई डेटा उपलब्ध नहीं',
    kgPerHa: 'किग्रा/हे',
  },
  footer: {
    credits: 'AI और डेटा विज्ञान द्वारा संचालित',
    poweredBy: 'YieldPredict © 2026',
  },
};

const teluguTranslations: Translations = {
  nav: {
    home: 'హోమ్',
    predict: 'ట్రాకు చేయండి',
    history: 'చరిత్ర',
    about: 'గురించి',
  },
  home: {
    title: 'AI ఉపయోగించి పంట దిగుబడిని అంచనా వేయండి',
    subtitle: 'NASA POWER, SoilGrids మరియు FAOSTAT ఉపయోగిస్తూ',
    button: 'ట్రాకు చేయడం ప్రారంభించండి',
    nasaCard: {
      title: 'NASA POWER',
      description: 'వాతావరణ డేటా - ఉష్ణోగ్రత, వర్షపాతం మరియు సౌర వికిరణ డేటా పొందండి',
    },
    soilgridsCard: {
      title: 'SoilGrids',
      description: 'నేల విశ్లేషణ - pH మరియు పోషక నిలువు వరుసల ప్రపంచ సమాచారం పొందండి',
    },
    faofatCard: {
      title: 'FAOSTAT',
      description: 'చారిత్రక డేటా - ప్రపంచ జిడిపీ చారిత్రక పంట దిగుబడి రికార్డుల తో సరిపోల్చండి',
    },
  },
  predict: {
    title: 'పంట దిగుబడి ట్రాకు',
    form: {
      crop: 'పంటను ఎంచుకోండి',
      season: 'సీజన్',
      latitude: 'అక్షాంశం',
      longitude: 'రేఖాంశం',
      year: 'సంవత్సరం',
      country: 'దేశం',
      submit: 'దిగుబడిని ట్రాకు చేయండి',
      loading: 'ట్రాకు చేస్తున్నాం...',
    },
    results: {
      prediction: 'ట్రాకు ఫలితం',
      predictedYield: 'అంచనా దిగుబడి',
      confidence: 'విశ్వాస స్కోర్',
      yieldRange: 'దిగుబడి పరిధి',
      vs: 'vs',
      weather: 'వాతావరణ డేటా',
      temperature: 'సగటు ఉష్ణోగ్రత',
      rainfall: 'సగటు వర్షపాతం',
      humidity: 'సగటు ఆర్ద్రత',
      soil: 'నేల లక్షణాలు',
      ph: 'నేల pH',
      featureImportance: 'విశేషత ప్రాముఖ్యత',
    },
    error: 'పంటల జాబితాను పొందడంలో విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.',
  },
  history: {
    title: 'ట్రాకు చరిత్ర',
    stats: {
      totalPredictions: 'మొత్తం ట్రాకులు',
      avgConfidence: 'సగటు విశ్వాస',
      uniqueCrops: 'ప్రత్యేక పంటలు',
    },
    table: {
      timestamp: 'తేదీ మరియు సమయం',
      crop: 'పంట',
      season: 'సీజన్',
      year: 'సంవత్సరం',
      location: 'స్థానం',
      yield: 'దిగుబడి (కిలో/హెక్టారు)',
      confidence: 'విశ్వాస',
    },
    empty: 'ఇంకా ట్రాకులు లేవు. చరిత్రను చూడటానికి ట్రాకు చేయడం ప్రారంభించండి.',
  },
  about: {
    title: 'YieldPredict గురించి',
    dataSources: 'డేటా జనాలు',
    nasa: {
      title: 'NASA POWER API',
      description: 'NASA POWER ప్రాజెక్ట్ వ్యవసాయ కోసం ప్రపంచ వాతావరణ డేటా ఇస్తుంది.',
      bullet1: 'ప్రాంతాలలో ఉష్ణోగ్రత డేటా',
      bullet2: 'వర్షపాతం మరియు వర్షపాతం నమూనాలు',
      bullet3: 'సౌర వికిరణ కొలతలు',
    },
    soilgrids: {
      title: 'SoilGrids డేటాబేస్',
      description: 'ఎక్కువ రిజల్యూషన్‌లో ప్రపంచ నేల లక్షణాల అంచనాలు.',
      bullet1: 'స్థానం ద్వారా నేల pH స్థాయిలు',
      bullet2: 'నేల, ఇసుక మరియు సిల్ట్ కంటెంట్',
      bullet3: 'సేంద్రీయ పదార్థ శాతం',
    },
    faostat: {
      title: 'FAOSTAT డేటాసెట్',
      description: 'FAO యొక్క సమగ్ర వ్యవసాయ గణాంకాల డేటాబేస్.',
      bullet1: 'చారిత్రక పంట దిగుబడి రికార్డులు',
      bullet2: 'ఉత్పత్తి మరియు కూడిన ప్రాంత డేటా',
      bullet3: 'దశాబ్దాలలో వ్యవసాయ ధోరణులు',
    },
    model: 'యంత్ర శిక్ష నమూనా',
    modelDescription: 'మా వ్యవస్థ Random Forest ను ఉపయోగిస్తుంది, NASA POWER వాతావరణ డేటా మరియు SoilGrids నేల లక్షణాలతో FAOSTAT డేటా సంయోగంలో శిక్షణ పొందిన శక్తిశాలీ సమిష్టి అల్గారిథమ్.',
    features: 'ముఖ్య విశేషతలు',
    confidence: 'విశ్వాస స్కోర్',
    confidenceDescription: 'విశ్వాస స్కోర్‌లు 0-100% పరిధిలో ఉంటాయి, ఇది ట్రాకు గురించి మా నమూనా ఎంత నిశ్చితమైనదో సూచిస్తుంది.',
  },
  common: {
    loading: 'లోడ్ అవుతుంది...',
    error: 'ఒక లోపం జరిగింది. దయచేసి మళ్లీ ప్రయత్నించండి.',
    success: 'విజయం!',
    noData: 'డేటా లేదు',
    kgPerHa: 'కిలో/హెక్టారు',
  },
  footer: {
    credits: 'AI మరియు డేటా సైన్స్ ద్వారా సంચాలితం',
    poweredBy: 'YieldPredict © 2026',
  },
};

export const translations: Record<Language, Translations> = {
  en: englishTranslations,
  hi: hindiTranslations,
  te: teluguTranslations,
};
