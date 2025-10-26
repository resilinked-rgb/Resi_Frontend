import { useEffect } from 'react';
import './TermsOfServiceModal.css';

function TermsOfServiceModal({ isOpen, onClose }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="tos-modal-overlay" onClick={onClose}>
      <div className="tos-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="tos-modal-header">
          <h2>Terms of Service</h2>
        </div>
        
        <div className="tos-modal-body">
          <div className="tos-last-updated">
            <strong>Last Updated:</strong> October 23, 2025
          </div>

          <section className="tos-section">
            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing or using ResiLinked ("the Platform"), you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="tos-section">
            <h3>2. Description of Service</h3>
            <p>
              ResiLinked is a platform that connects workers and employers in local communities. We facilitate:
            </p>
            <ul>
              <li>Job posting and job searching</li>
              <li>Profile creation and management</li>
              <li>Communication between users</li>
              <li>Ratings and reviews</li>
              <li>Job application tracking</li>
            </ul>
          </section>

          <section className="tos-section">
            <h3>3. User Responsibilities</h3>
            <p>As a user of ResiLinked, you agree to:</p>
            <ul>
              <li>Provide accurate and truthful information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Use the platform lawfully and respectfully</li>
              <li>Not engage in fraudulent or deceptive practices</li>
              <li>Not harass, threaten, or harm other users</li>
              <li>Verify information independently before entering agreements</li>
            </ul>
          </section>

          <section className="tos-section">
            <h3>4. Platform Role and Limitations</h3>
            <p>
              <strong>Important:</strong> ResiLinked is a CONNECTION PLATFORM ONLY. We:
            </p>
            <ul>
              <li><strong>DO NOT</strong> employ workers or hire on behalf of employers</li>
              <li><strong>DO NOT</strong> guarantee the quality, safety, or legality of jobs or services</li>
              <li><strong>DO NOT</strong> conduct background checks or verify user credentials</li>
              <li><strong>DO NOT</strong> mediate disputes between users</li>
              <li><strong>DO NOT</strong> process payments between users</li>
            </ul>
          </section>

          <section className="tos-section tos-highlight">
            <h3>5. Limitation of Liability</h3>
            <p>
              <strong>By using ResiLinked, you acknowledge and agree that:</strong>
            </p>
            <ul>
              <li>
                <strong>ResiLinked and its operators WILL NOT BE HELD LIABLE</strong> for any damages, losses, 
                injuries, or disputes arising from:
                <ul>
                  <li>Interactions between users</li>
                  <li>Job agreements or employment relationships</li>
                  <li>Quality of work performed or not performed</li>
                  <li>Payment disputes between users</li>
                  <li>Fraudulent users or scammers</li>
                  <li>Personal injury or property damage</li>
                  <li>Theft, harassment, or criminal activity</li>
                  <li>Inaccurate information provided by users</li>
                </ul>
              </li>
              <li>
                You use the platform <strong>AT YOUR OWN RISK</strong> and are solely responsible for 
                verifying the identity, credentials, and trustworthiness of other users.
              </li>
              <li>
                ResiLinked is provided "AS IS" without warranties of any kind, express or implied.
              </li>
            </ul>
          </section>

          <section className="tos-section">
            <h3>6. User Conduct</h3>
            <p>You agree NOT to:</p>
            <ul>
              <li>Post false or misleading information</li>
              <li>Impersonate any person or entity</li>
              <li>Use the platform for illegal activities</li>
              <li>Spam or send unsolicited messages</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Attempt to hack, disrupt, or damage the platform</li>
            </ul>
          </section>

          <section className="tos-section">
            <h3>7. Account Termination</h3>
            <p>
              We reserve the right to suspend or terminate accounts that violate these terms or engage in 
              prohibited conduct, without prior notice.
            </p>
          </section>

          <section className="tos-section">
            <h3>8. Privacy and Data</h3>
            <p>
              Your use of ResiLinked is also governed by our Privacy Policy. We collect and process data 
              as described in that policy. You consent to our data practices by using the platform.
            </p>
          </section>

          <section className="tos-section">
            <h3>9. Content Ownership</h3>
            <p>
              You retain ownership of content you post on ResiLinked. However, by posting content, you grant 
              ResiLinked a license to use, display, and distribute that content on the platform.
            </p>
          </section>

          <section className="tos-section">
            <h3>10. Indemnification</h3>
            <p>
              You agree to indemnify and hold harmless ResiLinked, its operators, and affiliates from any 
              claims, damages, or expenses arising from your use of the platform or violation of these terms.
            </p>
          </section>

          <section className="tos-section">
            <h3>11. Safety Recommendations</h3>
            <p>
              While we are not liable for user interactions, we strongly recommend:
            </p>
            <ul>
              <li>Meeting in public places for initial meetings</li>
              <li>Verifying user profiles and reviews</li>
              <li>Using the in-app messaging system</li>
              <li>Reporting suspicious behavior immediately</li>
              <li>Trusting your instincts</li>
              <li>Not sharing sensitive personal information prematurely</li>
            </ul>
          </section>

          <section className="tos-section">
            <h3>12. Dispute Resolution</h3>
            <p>
              Any disputes arising from these terms or use of the platform shall be resolved through 
              binding arbitration in accordance with the laws of the Republic of the Philippines.
            </p>
          </section>

          <section className="tos-section">
            <h3>13. Changes to Terms</h3>
            <p>
              We reserve the right to modify these Terms of Service at any time. Continued use of the 
              platform after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="tos-section">
            <h3>14. Governing Law</h3>
            <p>
              These Terms of Service are governed by the laws of the Republic of the Philippines.
            </p>
          </section>

          <section className="tos-section">
            <h3>15. Contact Information</h3>
            <p>
              For questions about these Terms of Service, please contact us through the platform's 
              support system.
            </p>
          </section>

          <div className="tos-acknowledgment">
            <p>
              <strong>BY CLICKING "I ACCEPT" OR USING RESILINKED, YOU ACKNOWLEDGE THAT YOU HAVE READ, 
              UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.</strong>
            </p>
          </div>
        </div>

        <div className="tos-modal-footer">
          <button className="tos-close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default TermsOfServiceModal;
