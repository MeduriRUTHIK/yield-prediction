'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">About YieldPredict</h3>
            <p className="text-sm text-gray-600">
              An AI-powered crop yield prediction system using NASA, SoilGrids, and FAOSTAT data.
            </p>
          </div>

          {/* Data Sources */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Data Sources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>NASA POWER - Weather data</li>
              <li>SoilGrids - Soil properties</li>
              <li>FAOSTAT - Crop yield records</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://power.larc.nasa.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  NASA POWER
                </a>
              </li>
              <li>
                <a
                  href="https://www.soilgrids.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  SoilGrids Database
                </a>
              </li>
              <li>
                <a
                  href="https://www.fao.org/faostat/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  FAOSTAT
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            © {currentYear} YieldPredict. All rights reserved. Powered by AI and open data.
          </p>
        </div>
      </div>
    </footer>
  );
}
