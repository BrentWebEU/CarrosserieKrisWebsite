'use client'

import React, { useState, useEffect } from 'react';

const Preloader = ({
  onLoadingComplete,
  loadingDuration = 2000
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimatingOut(true);
      
      setTimeout(() => {
        setIsLoading(false);
        if (onLoadingComplete) {
          onLoadingComplete();
        }
      }, 1000);
    }, loadingDuration);

    return () => clearTimeout(timer);
  }, [loadingDuration, onLoadingComplete]);

  if (!isLoading && !isAnimatingOut) return null;

  return (
    <div className={`preloader ${isAnimatingOut ? 'wipe-out' : ''}`}>
      <div className="logo-container">
        <div className="logo-wrapper">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.0df464a7b8990571a585111c53f0c4b9-880kDh1wMZgK5auyD7MoPaWn9wbmna.svg"
            alt="Body Repair Logo"
            width={120}
            height={120}
            className="logo"
          />
        </div>
      </div>
      <style jsx>{`
        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f22a2a;
          z-index: 9999;
          clip-path: circle(150% at 50% 50%);
          transition: clip-path 1s cubic-bezier(0.77, 0, 0.175, 1);
        }

        .preloader.wipe-out {
          clip-path: circle(0% at 50% 50%);
        }

        .logo-container {
          width: 150px;
          height: 150px;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: pulse 2s infinite;
        }

        .logo-wrapper {
          width: 180px;
          height: 180px;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;

