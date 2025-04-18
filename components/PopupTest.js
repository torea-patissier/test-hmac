"use client";

import { useState, useEffect } from 'react';

export default function PopupTest() {
  const [isOpen, setIsOpen] = useState(false);

  // Ouvre automatiquement la popup au chargement
  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Popup Content */}
            <h2 className="text-2xl font-bold mb-4">Before You Go...</h2>
            <p className="text-gray-600 mb-6">
              We&apos;d hate to see you leave. Would you consider one of these options instead?
            </p>

            {/* Options */}
            <div className="space-y-4">
              <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Get 20% Off Next Month
              </button>
              <button className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                Pause Subscription
              </button>
              <button className="w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Switch to Basic Plan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
