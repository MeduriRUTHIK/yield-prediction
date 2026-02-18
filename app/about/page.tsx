import { Cloud, Database, TrendingUp, Zap, BookOpen } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About YieldPredict
          </h1>
          <p className="text-xl text-gray-600 text-balance">
            Empowering farmers and agricultural professionals with AI-powered crop yield predictions using open data and machine learning.
          </p>
        </div>

        {/* Data Sources Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Data Sources</h2>

          <div className="space-y-8">
            {/* NASA POWER */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">NASA POWER</h3>
                  <p className="text-sm text-gray-600">Prediction Of Worldwide Energy Resource</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                NASA POWER provides weather data from satellite imagery and meteorological stations worldwide. Our system uses this data to extract crucial agricultural metrics:
              </p>

              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Average Temperature:</strong> Daily and seasonal temperature patterns affect crop growth and yield</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Rainfall:</strong> Precipitation data is critical for water availability during growing seasons</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Humidity:</strong> Relative humidity influences crop health and disease risk</span>
                </li>
              </ul>

              <a
                href="https://power.larc.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 hover:underline font-semibold"
              >
                Learn more about NASA POWER →
              </a>
            </div>

            {/* SoilGrids */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">SoilGrids</h3>
                  <p className="text-sm text-gray-600">Global soil property database</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                SoilGrids is a global database of soil properties mapped at 250-meter resolution. It provides detailed information about soil composition and characteristics at any location on Earth:
              </p>

              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span><strong>Soil pH:</strong> Acidity/alkalinity affects nutrient availability for crops</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span><strong>Organic Matter:</strong> Soil organic carbon influences fertility and water retention</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span><strong>Texture:</strong> Clay, silt, and sand proportions affect water and nutrient holding capacity</span>
                </li>
              </ul>

              <a
                href="https://www.soilgrids.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 hover:underline font-semibold"
              >
                Learn more about SoilGrids →
              </a>
            </div>

            {/* FAOSTAT */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">FAOSTAT</h3>
                  <p className="text-sm text-gray-600">UN Food and Agriculture Organization</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                FAOSTAT is the UN's comprehensive agricultural statistics database covering crop production, land use, and yields for over 200 countries. We use this historical data to:
              </p>

              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Train our ML model:</strong> Historical crop yields provide ground truth for model training</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Compare predictions:</strong> See how predicted yields compare to regional averages</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Validate results:</strong> Assess prediction accuracy against known outcomes</span>
                </li>
              </ul>

              <a
                href="https://www.fao.org/faostat/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 hover:underline font-semibold"
              >
                Learn more about FAOSTAT →
              </a>
            </div>
          </div>
        </section>

        {/* ML Model Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our ML Model</h2>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Random Forest Algorithm</h3>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              We use a Random Forest machine learning model trained on historical agricultural data from FAOSTAT combined with weather patterns and soil properties. This ensemble method provides:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <h4 className="font-bold text-gray-900 mb-3">High Accuracy</h4>
                <p className="text-gray-700">
                  Combines multiple decision trees to reduce overfitting and improve generalization across different regions and crop types.
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <h4 className="font-bold text-gray-900 mb-3">Feature Importance</h4>
                <p className="text-gray-700">
                  Provides insights into which factors most influence yield predictions, helping farmers understand key drivers.
                </p>
              </div>
            </div>

            <h4 className="font-bold text-gray-900 mb-4">Key Model Features</h4>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">→</span>
                <span><strong>Weather Features:</strong> Temperature, rainfall, humidity, solar radiation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">→</span>
                <span><strong>Soil Features:</strong> pH, organic matter, texture, nutrients</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">→</span>
                <span><strong>Temporal Features:</strong> Year, season, month of planting</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">→</span>
                <span><strong>Historical Features:</strong> Previous yields, regional averages</span>
              </li>
            </ul>

            <h4 className="font-bold text-gray-900 mb-4">Understanding Confidence Scores</h4>
            <p className="text-gray-700 mb-3">
              The confidence score (0-100%) indicates how reliable our prediction is based on the model's training data:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">90%+</span>
                <span>High confidence - Strong prediction reliability</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">75-90%</span>
                <span>Good confidence - Reliable prediction</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-600 font-bold">60-75%</span>
                <span>Moderate confidence - Use with caution</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-600 font-bold">&lt;60%</span>
                <span>Low confidence - Limited data or unusual conditions</span>
              </li>
            </ul>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h2>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Process</h3>
            </div>

            <ol className="space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">You Enter Your Details</h4>
                  <p className="text-gray-700">
                    Provide your crop type, location (latitude/longitude), growing season, and year.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">We Gather Data</h4>
                  <p className="text-gray-700">
                    Our system retrieves weather data from NASA POWER, soil properties from SoilGrids, and relevant historical yields from FAOSTAT.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Model Predicts</h4>
                  <p className="text-gray-700">
                    Our trained Random Forest model processes this data and generates a yield prediction with a confidence score.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">You Get Insights</h4>
                  <p className="text-gray-700">
                    See your predicted yield, confidence level, expected range, weather conditions, soil properties, and feature importance analysis.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Important Note */}
        <section className="bg-blue-50 rounded-xl border-2 border-blue-200 p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Important Note</h3>
          <p className="text-gray-700 mb-3 leading-relaxed">
            YieldPredict provides predictions based on historical patterns and current conditions. While our model is trained on decades of agricultural data, actual yields can be affected by factors we cannot predict (pests, diseases, unexpected weather events, farmer practices, etc.).
          </p>
          <p className="text-gray-700 leading-relaxed">
            Use these predictions as a reference tool alongside expert agricultural advice, not as a replacement for professional consultation.
          </p>
        </section>
      </div>
    </div>
  );
}
