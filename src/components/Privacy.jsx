import { Link } from 'react-router-dom'
import styles from './Privacy.module.css'

function Privacy() {
  return (
    <div className={styles.privacyContainer}>
      <div className={styles.privacyContent}>
        {/* Header Section */}
        <section className={styles.header}>
          <h1>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: December 2024</p>
        </section>

        {/* Introduction */}
        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            Welcome to Resi ("we," "our," or "us"). We are committed to protecting your privacy and ensuring 
            the security of your personal information. This Privacy Policy explains how we collect, use, disclose, 
            and safeguard your information when you use our platform.
          </p>
          <p>
            By using Resi, you agree to the collection and use of information in accordance with this policy. 
            If you do not agree with our policies and practices, please do not use our services.
          </p>
        </section>

        {/* Information We Collect */}
        <section className={styles.section}>
          <h2>2. Information We Collect</h2>
          
          <h3>2.1 Personal Information</h3>
          <p>When you register and use our platform, we may collect:</p>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, phone number, password</li>
            <li><strong>Profile Information:</strong> Bio, skills, experience, education, location, profile photo</li>
            <li><strong>Verification Documents:</strong> ID verification documents for identity confirmation</li>
            <li><strong>Employment Information:</strong> Work history, job preferences, availability</li>
          </ul>

          <h3>2.2 Automatically Collected Information</h3>
          <ul>
            <li><strong>Usage Data:</strong> Pages visited, features used, time spent on platform</li>
            <li><strong>Device Information:</strong> IP address, browser type, operating system</li>
            <li><strong>Cookies and Tracking:</strong> Session cookies, analytics data</li>
          </ul>

          <h3>2.3 Information from Third Parties</h3>
          <ul>
            <li>Social media profile information (if you choose to link accounts)</li>
            <li>Background check information (with your consent)</li>
            <li>Payment processing information</li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className={styles.section}>
          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li><strong>Account Management:</strong> Create and maintain your account, authenticate users</li>
            <li><strong>Job Matching:</strong> Connect workers with suitable job opportunities</li>
            <li><strong>Communication:</strong> Send notifications, updates, and respond to inquiries</li>
            <li><strong>Platform Improvement:</strong> Analyze usage patterns and improve features</li>
            <li><strong>Safety and Security:</strong> Prevent fraud, protect users, enforce terms of service</li>
            <li><strong>Legal Compliance:</strong> Comply with legal obligations and regulations</li>
            <li><strong>Marketing:</strong> Send promotional materials (you can opt out at any time)</li>
          </ul>
        </section>

        {/* Information Sharing */}
        <section className={styles.section}>
          <h2>4. How We Share Your Information</h2>
          <p>We may share your information in the following circumstances:</p>
          
          <h3>4.1 With Other Users</h3>
          <p>
            Profile information, ratings, and reviews are visible to other users to facilitate connections 
            and build trust within the platform.
          </p>

          <h3>4.2 Service Providers</h3>
          <p>
            We share information with third-party service providers who perform services on our behalf, including:
          </p>
          <ul>
            <li>Cloud hosting services (e.g., AWS, MongoDB Atlas)</li>
            <li>Email service providers</li>
            <li>SMS notification services</li>
            <li>Analytics platforms</li>
            <li>Payment processors</li>
          </ul>

          <h3>4.3 Legal Requirements</h3>
          <p>
            We may disclose your information if required by law, court order, or government regulation, 
            or to protect our rights, safety, and property.
          </p>

          <h3>4.4 Business Transfers</h3>
          <p>
            In the event of a merger, acquisition, or sale of assets, your information may be transferred 
            to the acquiring entity.
          </p>
        </section>

        {/* Data Security */}
        <section className={styles.section}>
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information:
          </p>
          <ul>
            <li><strong>Encryption:</strong> Data is encrypted in transit using SSL/TLS protocols</li>
            <li><strong>Access Controls:</strong> Restricted access to personal information on a need-to-know basis</li>
            <li><strong>Secure Storage:</strong> Data stored on secure servers with regular backups</li>
            <li><strong>Regular Audits:</strong> Security practices reviewed and updated regularly</li>
            <li><strong>Password Protection:</strong> Passwords hashed and salted using industry standards</li>
          </ul>
          <p className={styles.warning}>
            ⚠️ While we strive to protect your information, no method of transmission over the internet 
            is 100% secure. Please use strong passwords and keep your login credentials confidential.
          </p>
        </section>

        {/* Your Privacy Rights */}
        <section className={styles.section}>
          <h2>6. Your Privacy Rights</h2>
          <p>You have the following rights regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
            <li><strong>Correction:</strong> Update or correct inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your account and personal data</li>
            <li><strong>Data Portability:</strong> Request your data in a portable format</li>
            <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
            <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
          </ul>
          <p>
            To exercise these rights, please contact us at <strong>privacy@resi.com</strong> or through 
            your account settings.
          </p>
        </section>

        {/* Cookies and Tracking */}
        <section className={styles.section}>
          <h2>7. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience:
          </p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for platform functionality (authentication, security)</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our platform</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
          </ul>
          <p>
            You can control cookies through your browser settings. Note that disabling certain cookies 
            may affect platform functionality.
          </p>
        </section>

        {/* Data Retention */}
        <section className={styles.section}>
          <h2>8. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to provide our services and 
            comply with legal obligations:
          </p>
          <ul>
            <li>Active account data is retained while your account is active</li>
            <li>Deleted account data is retained for 30 days before permanent deletion</li>
            <li>Some information may be retained longer for legal or business purposes</li>
            <li>Transaction records kept for 7 years for tax and accounting purposes</li>
          </ul>
        </section>

        {/* Children's Privacy */}
        <section className={styles.section}>
          <h2>9. Children's Privacy</h2>
          <p>
            Our platform is not intended for individuals under 18 years of age. We do not knowingly 
            collect personal information from children. If you believe we have collected information 
            from a child, please contact us immediately at <strong>privacy@resi.com</strong>.
          </p>
        </section>

        {/* International Users */}
        <section className={styles.section}>
          <h2>10. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your country 
            of residence. We ensure appropriate safeguards are in place to protect your information 
            in accordance with this Privacy Policy and applicable data protection laws.
          </p>
        </section>

        {/* Third-Party Links */}
        <section className={styles.section}>
          <h2>11. Third-Party Links</h2>
          <p>
            Our platform may contain links to third-party websites or services. We are not responsible 
            for the privacy practices of these external sites. We encourage you to review their privacy 
            policies before providing any personal information.
          </p>
        </section>

        {/* Changes to This Policy */}
        <section className={styles.section}>
          <h2>12. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant 
            changes by:
          </p>
          <ul>
            <li>Posting the new policy on this page</li>
            <li>Updating the "Last Updated" date</li>
            <li>Sending an email notification for material changes</li>
          </ul>
          <p>
            Your continued use of the platform after changes are posted constitutes acceptance of 
            the updated policy.
          </p>
        </section>

        {/* Contact Us */}
        <section className={styles.section}>
          <h2>13. Contact Us</h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or your 
            personal information, please contact us:
          </p>
          <div className={styles.contact}>
            <div className={styles.contactItem}>
              <strong>Email:</strong> privacy@resi.com
            </div>
            <div className={styles.contactItem}>
              <strong>Support Email:</strong> support@resi.com
            </div>
            <div className={styles.contactItem}>
              <strong>Phone:</strong> +1 (555) 123-4567
            </div>
            <div className={styles.contactItem}>
              <strong>Address:</strong> 123 Main Street, Suite 100, City, State 12345
            </div>
          </div>
          <div className={styles.ctaButtons}>
            <Link to="/help" className={styles.ctaButton}>Visit Help Center</Link>
            <Link to="/settings" className={styles.ctaButton}>Account Settings</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Privacy
