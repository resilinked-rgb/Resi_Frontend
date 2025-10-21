import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function Layout({ children }) {
  return (
    <div className="layout-container">
      {/* Modern Header with Navigation */}
      <header className="main-header">
        <div className="header-content">
          {/* Modern Logo Section */}
          <Link to="/" className="logo-section">
            <div className="logo-container">
              <img 
                src="/logo.png" 
                alt="ResiLinked" 
                className="logo-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="logo-text">
                <h1 className="brand-name">ResiLinked</h1>
                <span className="brand-tagline">Connecting Communities</span>
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <Navigation />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="content-wrapper">
          {children}
        </div>
      </main>

      {/* Floating Chatbot Button */}
      <Link to="/help" className="chatbot-float-button" title="Need help? Chat with our assistant">
        <div className="chatbot-avatar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="chatbot-icon">
            <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zM7.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.83 13 9 13s-1.5-.67-1.5-1.5zM16 17H8v-2h8v2zm-1-4c-.83 0-1.5-.67-1.5-1.5S14.17 10 15 10s1.5.67 1.5 1.5S15.83 13 15 13z"/>
          </svg>
        </div>
      </Link>

      {/* Modern Footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">ResiLinked</h3>
            <p className="footer-description">
              Connecting communities through meaningful employment opportunities.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/search-jobs">Find Jobs</Link></li>
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/register">Join Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact</h4>
            <p className="footer-contact">
              📧 ResiLinked@gmail.com<br />
              📞 +6390 06681 8015
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 ResiLinked. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        .layout-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: linear-gradient(135deg, var(--primary-50) 0%, var(--gray-50) 100%);
        }

        .main-header {
          background: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-800) 100%);
          color: white;
          padding: 0;
          box-shadow: 0 8px 32px rgba(147, 51, 234, 0.15);
          position: sticky;
          top: 0;
          z-index: 1000;
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 var(--spacing-8);
          min-height: var(--header-height);
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        .logo-section {
          text-decoration: none;
          color: inherit;
          transition: all var(--transition-fast);
        }

        .logo-section:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
        }

        .logo-image {
          height: 52px;
          width: 52px;
          border-radius: var(--radius-xl);
          box-shadow: 0 4px 16px rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.95);
          object-fit: contain;
          padding: var(--spacing-2);
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .brand-name {
          margin: 0;
          font-size: var(--font-size-2xl);
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .brand-tagline {
          font-size: var(--font-size-xs);
          opacity: 0.9;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.8);
        }

        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: transparent;
        }

        .content-wrapper {
          width: 100%;
          padding: 0;
          box-sizing: border-box;
          min-height: calc(100vh - var(--header-height) - 200px);
        }

        .main-footer {
          background: linear-gradient(135deg, var(--gray-900) 0%, var(--secondary-900) 100%);
          color: var(--gray-200);
          margin-top: auto;
          border-top: 1px solid var(--primary-300);
          box-shadow: 0 -8px 32px rgba(147, 51, 234, 0.1);
        }

        .footer-content {
          padding: var(--spacing-4) var(--spacing-6) var(--spacing-3);
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-4);
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2);
        }

        .footer-title {
          color: white;
          font-size: var(--font-size-lg);
          font-weight: 700;
          margin: 0;
          background: linear-gradient(135deg, var(--primary-300) 0%, var(--primary-100) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-subtitle {
          color: white;
          font-size: var(--font-size-base);
          font-weight: 600;
          margin: 0;
        }

        .footer-description,
        .footer-contact {
          color: var(--gray-300);
          line-height: 1.6;
          margin: 0;
          font-size: var(--font-size-sm);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-1);
        }

        .footer-links a {
          color: var(--gray-300);
          text-decoration: none;
          font-size: var(--font-size-sm);
          transition: all var(--transition-fast);
          padding: var(--spacing-1) 0;
          border-bottom: 1px solid transparent;
        }

        .footer-links a:hover {
          color: var(--primary-300);
          border-bottom-color: var(--primary-300);
          transform: translateX(4px);
        }

        .footer-bottom {
          border-top: 1px solid var(--gray-700);
          padding: var(--spacing-3);
          text-align: center;
          background: rgba(0, 0, 0, 0.2);
        }

        .footer-bottom p {
          margin: 0;
          color: var(--gray-400);
          font-size: var(--font-size-sm);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .main-header {
            padding: 0 var(--spacing-4);
          }

          .header-content {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--spacing-4);
            min-height: auto;
            padding: var(--spacing-4) var(--spacing-4);
          }

          .logo-image {
            height: 44px;
            width: 44px;
          }

          .brand-name {
            font-size: var(--font-size-xl);
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-3);
            padding: var(--spacing-3) var(--spacing-4) var(--spacing-2);
          }
        }

        @media (max-width: 480px) {
          .header-content {
            padding: var(--spacing-3) var(--spacing-2);
          }

          .footer-content {
            padding: var(--spacing-2) var(--spacing-2) var(--spacing-2);
          }
        }

        /* Floating Chatbot Button */
        .chatbot-float-button {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 999;
          text-decoration: none;
          animation: pulse 2s infinite;
        }

        .chatbot-float-button:hover {
          transform: scale(1.1) translateY(-4px);
          box-shadow: 0 12px 32px rgba(99, 102, 241, 0.5);
        }

        .chatbot-avatar {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chatbot-icon {
          width: 100%;
          height: 100%;
          color: white;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
          }
          50% {
            box-shadow: 0 8px 32px rgba(99, 102, 241, 0.6), 0 0 0 8px rgba(99, 102, 241, 0.1);
          }
        }

        @media (max-width: 768px) {
          .chatbot-float-button {
            bottom: 1.5rem;
            right: 1.5rem;
            width: 56px;
            height: 56px;
          }

          .chatbot-avatar {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </div>
  );
}

export default Layout;
