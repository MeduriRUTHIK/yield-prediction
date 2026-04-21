'use client';

import Link from 'next/link';
import { Cloud, Database, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/lib/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Cloud,
      title: t.home.nasaCard.title,
      description: t.home.nasaCard.description,
      color: 'bg-blue-50 text-blue-600',
      iconBg: 'bg-blue-600',
    },
    {
      icon: Database,
      title: t.home.soilgridsCard.title,
      description: t.home.soilgridsCard.description,
      color: 'bg-orange-50 text-orange-600',
      iconBg: 'bg-orange-600',
    },
    {
      icon: TrendingUp,
      title: t.home.faofatCard.title,
      description: t.home.faofatCard.description,
      color: 'bg-green-50 text-green-600',
      iconBg: 'bg-green-600',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-orange-50 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
            {t.home.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 text-balance">
            {t.home.subtitle}
          </p>
          <Link
            href="/predict"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition shadow-lg hover:shadow-xl"
          >
            {t.home.button}
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          {t.home.subtitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`${feature.color} rounded-xl p-8 border border-gray-200 hover:shadow-lg transition`}
              >
                <div className={`${feature.iconBg} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Enter Your Location & Crop</h3>
                <p className="text-gray-600">Provide coordinates, select your crop type, and choose the growing season.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">AI Analyzes Multiple Data Sources</h3>
                <p className="text-gray-600">Our model processes weather patterns, soil properties, and historical data in real-time.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Get Instant Predictions</h3>
                <p className="text-gray-600">Receive accurate yield forecasts with confidence scores and comprehensive analytics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16 md:py-20 px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Predict?</h2>
          <p className="text-lg mb-8 opacity-90">
            Start using AI-powered crop yield predictions today. No sign-up required.
          </p>
          <Link
            href="/predict"
            className="inline-block bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
