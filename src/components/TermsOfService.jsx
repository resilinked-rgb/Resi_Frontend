import { Link } from 'react-router-dom'

function TermsOfService() {
  return (
    <div className="tos-page">
      <div className="tos-container">
        <div className="tos-header">
          <h1>Terms of Service</h1>
          <p className="effective-date">Effective Date: October 23, 2025</p>
        </div>

        <div className="tos-content">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using ResiLinked ("the Platform"), you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2>2. Platform Purpose</h2>
            <p>
              ResiLinked is a community-based platform designed to connect workers (employees) with employers 
              within local communities. The Platform serves as a facilitator and does not employ any users or 
              guarantee any employment relationships.
            </p>
          </section>

          <section>
            <h2>3. User Responsibilities</h2>
            <h3>3.1 Account Creation</h3>
            <p>Users must:</p>
            <ul>
              <li>Provide accurate and truthful information during registration</li>
              <li>Maintain the confidentiality of their account credentials</li>
              <li>Be at least 18 years of age or have parental/guardian consent</li>
              <li>Submit valid government-issued identification for verification</li>
            </ul>

            <h3>3.2 User Conduct</h3>
            <p>Users agree to:</p>
            <ul>
              <li>Conduct themselves professionally and respectfully</li>
              <li>Verify the identity and credentials of other users before engaging in any transaction</li>
              <li>Communicate honestly about job requirements, skills, and availability</li>
              <li>Report suspicious activity or fraudulent behavior immediately</li>
              <li>Not use the Platform for illegal activities or scams</li>
            </ul>
          </section>

          <section>
            <h2>4. Limitation of Liability</h2>
            <p className="important-notice">
              <strong>IMPORTANT: ResiLinked and its operators ARE NOT LIABLE for:</strong>
            </p>
            <ul>
              <li>Any disputes, disagreements, or conflicts between users</li>
              <li>Quality of work performed or services rendered</li>
              <li>Payment issues, non-payment, or financial disputes between users</li>
              <li>Physical injuries, property damage, or losses incurred during work arrangements</li>
              <li>Fraudulent activities, scams, or misrepresentation by users</li>
              <li>Identity theft or unauthorized access to user accounts</li>
              <li>Any direct, indirect, incidental, or consequential damages arising from platform use</li>
            </ul>
            <p>
              Users acknowledge that all transactions, agreements, and work arrangements are conducted 
              <strong> at their own risk</strong> and ResiLinked is merely a facilitator.
            </p>
          </section>

          <section>
            <h2>5. Safety and Security</h2>
            <h3>5.1 User Verification</h3>
            <p>
              While ResiLinked requires ID verification, we cannot guarantee the authenticity of all users. 
              Users are responsible for conducting their own due diligence before entering into any agreement.
            </p>

            <h3>5.2 Safety Recommendations</h3>
            <p>We strongly recommend users to:</p>
            <ul>
              <li>Meet in public places for initial consultations</li>
              <li>Review user ratings and reviews before hiring or accepting work</li>
              <li>Inform family or friends about work arrangements and locations</li>
              <li>Trust their instincts and decline any suspicious offers</li>
              <li>Use in-app messaging for documented communication</li>
            </ul>
          </section>

          <section>
            <h2>6. Payment and Transactions</h2>
            <p>
              ResiLinked <strong>does not process payments</strong> or act as an intermediary for financial 
              transactions. All payment arrangements are made directly between users. The Platform is not 
              responsible for:
            </p>
            <ul>
              <li>Non-payment or late payment issues</li>
              <li>Disputed charges or refunds</li>
              <li>Tax obligations arising from user transactions</li>
              <li>Financial losses of any kind</li>
            </ul>
            <p>
              Users are advised to establish clear payment terms in writing before commencing any work.
            </p>
          </section>

          <section>
            <h2>7. Content and Intellectual Property</h2>
            <p>
              Users retain ownership of content they post but grant ResiLinked a license to use, display, 
              and distribute such content on the Platform. Users must not post:
            </p>
            <ul>
              <li>Copyrighted material without permission</li>
              <li>Offensive, discriminatory, or inappropriate content</li>
              <li>False or misleading information</li>
              <li>Spam or unsolicited advertisements</li>
            </ul>
          </section>

          <section>
            <h2>8. Privacy and Data</h2>
            <p>
              Your use of ResiLinked is also governed by our Privacy Policy. We collect and use personal 
              information as described in that policy. Users consent to:
            </p>
            <ul>
              <li>Collection of profile information and ID verification data</li>
              <li>Use of data for platform functionality and improvements</li>
              <li>Sharing of public profile information with other users</li>
            </ul>
          </section>

          <section>
            <h2>9. Account Termination</h2>
            <p>
              ResiLinked reserves the right to suspend or terminate user accounts for:
            </p>
            <ul>
              <li>Violation of these Terms of Service</li>
              <li>Fraudulent or illegal activity</li>
              <li>Multiple user reports or complaints</li>
              <li>Misuse of the Platform</li>
            </ul>
            <p>Users may also request account deletion at any time through account settings.</p>
          </section>

          <section>
            <h2>10. Dispute Resolution</h2>
            <p>
              In the event of disputes between users, ResiLinked encourages direct communication and 
              resolution. The Platform may provide a reporting mechanism but is not obligated to mediate 
              or resolve disputes. Users agree to:
            </p>
            <ul>
              <li>Attempt good-faith resolution directly with the other party</li>
              <li>Not hold ResiLinked liable for user disputes</li>
              <li>Seek legal remedies independently if necessary</li>
            </ul>
          </section>

          <section>
            <h2>11. Indemnification</h2>
            <p>
              Users agree to indemnify and hold harmless ResiLinked, its operators, employees, and affiliates 
              from any claims, damages, losses, or expenses (including legal fees) arising from:
            </p>
            <ul>
              <li>User's violation of these Terms</li>
              <li>User's interactions with other users</li>
              <li>User's content or activities on the Platform</li>
              <li>Any third-party claims related to user's conduct</li>
            </ul>
          </section>

          <section>
            <h2>12. Modifications to Terms</h2>
            <p>
              ResiLinked reserves the right to modify these Terms of Service at any time. Users will be 
              notified of significant changes via email or platform notification. Continued use of the 
              Platform after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2>13. Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of the Philippines. Any disputes arising 
              from these terms shall be resolved in accordance with Philippine law.
            </p>
          </section>

          <section>
            <h2>14. Contact Information</h2>
            <p>
              For questions or concerns about these Terms of Service, please contact us at:
            </p>
            <p className="contact-info">
              <strong>Email:</strong> resilinked@gmail.com<br />
              <strong>Platform:</strong> Submit a support ticket through the Help section
            </p>
          </section>

          <section>
            <h2>15. Acknowledgment</h2>
            <p className="acknowledgment-text">
              By clicking "I Accept" or by registering on ResiLinked, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms of Service. You specifically acknowledge that 
              <strong> ResiLinked is not liable for any disputes, damages, or losses</strong> arising from 
              your use of the Platform or interactions with other users.
            </p>
          </section>
        </div>

        <div className="tos-footer">
          <Link to="/register" className="back-btn"> Back to Registration</Link>
        </div>
      </div>

      <style>{`
        .tos-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #9333ea 0%, #7c3aed 25%, #6b21a8 75%, #581c87 100%);
          padding: 2rem 1rem;
        }

        .tos-container {
          max-width: 900px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          box-shadow: 0 32px 64px rgba(147, 51, 234, 0.3);
          padding: 3rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .tos-header {
          text-align: center;
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 2px solid rgba(147, 51, 234, 0.2);
        }

        .tos-header h1 {
          font-size: 2.5rem;
          color: #7c3aed;
          margin-bottom: 0.5rem;
          font-weight: 800;
        }

        .effective-date {
          color: #64748b;
          font-size: 0.95rem;
          font-style: italic;
        }

        .tos-content {
          line-height: 1.8;
          color: #334155;
        }

        .tos-content section {
          margin-bottom: 2.5rem;
        }

        .tos-content h2 {
          font-size: 1.5rem;
          color: #7c3aed;
          margin-bottom: 1rem;
          font-weight: 700;
          border-left: 4px solid #9333ea;
          padding-left: 1rem;
        }

        .tos-content h3 {
          font-size: 1.2rem;
          color: #581c87;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .tos-content p {
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        .tos-content ul {
          margin: 1rem 0 1rem 2rem;
          list-style-type: disc;
        }

        .tos-content li {
          margin-bottom: 0.5rem;
          padding-left: 0.5rem;
        }

        .important-notice {
          background: rgba(220, 38, 38, 0.1);
          border: 2px solid rgba(220, 38, 38, 0.3);
          border-radius: 12px;
          padding: 1.5rem;
          margin: 1.5rem 0;
          font-weight: 600;
          color: #dc2626;
        }

        .important-notice strong {
          color: #991b1b;
          font-size: 1.1rem;
        }

        .contact-info {
          background: rgba(147, 51, 234, 0.05);
          border-left: 4px solid #9333ea;
          padding: 1.5rem;
          border-radius: 8px;
          margin-top: 1rem;
        }

        .acknowledgment-text {
          background: rgba(147, 51, 234, 0.08);
          border: 2px solid rgba(147, 51, 234, 0.3);
          border-radius: 12px;
          padding: 1.5rem;
          margin-top: 1.5rem;
          font-weight: 500;
        }

        .acknowledgment-text strong {
          color: #7c3aed;
        }

        .tos-footer {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 2px solid rgba(147, 51, 234, 0.2);
        }

        .back-btn,
        .home-btn {
          padding: 0.875rem 1.75rem;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .back-btn {
          background: linear-gradient(135deg, #9333ea, #7c3aed);
          color: white;
          box-shadow: 0 4px 12px rgba(147, 51, 234, 0.3);
        }

        .back-btn:hover {
          background: linear-gradient(135deg, #7c3aed, #6b21a8);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(147, 51, 234, 0.4);
        }

        .home-btn {
          background: white;
          color: #7c3aed;
          border: 2px solid #9333ea;
        }

        .home-btn:hover {
          background: rgba(147, 51, 234, 0.1);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .tos-container {
            padding: 2rem 1.5rem;
          }

          .tos-header h1 {
            font-size: 2rem;
          }

          .tos-content h2 {
            font-size: 1.3rem;
          }

          .tos-footer {
            flex-direction: column;
          }

          .back-btn,
          .home-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </div>
  )
}

export default TermsOfService
