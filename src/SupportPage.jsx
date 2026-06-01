import React from 'react';
import Navbar from './Navbar';
import './SupportPage.css';

const SupportPage = () => {
  return (
    <div className="support-page-container">
      <Navbar />

      <div className="support-wrapper">
        <h1 className="support-header">Support Center</h1>
        <p className="support-subtitle">How can we help you today?</p>

        <div className="support-grid">
          <div className="support-card">
            <div className="support-icon">💬</div>
            <h2 className="support-card-title">Live Chat</h2>
            <p className="support-card-desc">
              Chat with our support team in real-time. We're online 24/7 and ready to help you with any issues.
            </p>
            <button className="support-button">Start Chat</button>
          </div>

          <div className="support-card">
            <div className="support-icon">📧</div>
            <h2 className="support-card-title">Email Support</h2>
            <p className="support-card-desc">
              Send us an email and we'll get back to you within 24 hours. Perfect for detailed inquiries.
            </p>
            <button className="support-button">Send Email</button>
          </div>
        </div>

        <div className="faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          
          <div className="faq-item">
            <h3 className="faq-question">How do I track my order?</h3>
            <p className="faq-answer">
              You can track your order status in your Account dashboard under the "Orders" section. We also send tracking updates via email once your order ships.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">What is your return policy?</h3>
            <p className="faq-answer">
              We offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">Do you ship internationally?</h3>
            <p className="faq-answer">
              Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times vary by location and will be calculated at checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;