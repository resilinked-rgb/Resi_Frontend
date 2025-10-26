import { Link } from 'react-router-dom'
import styles from './About.module.css'

function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        {/* Header Section */}
        <section className={styles.header}>
          <h1>About Resi</h1>
          <p className={styles.tagline}>Connecting skilled workers with opportunities</p>
        </section>

        {/* Mission Section */}
        <section className={styles.section}>
          <h2>Our Mission</h2>
          <p>
            Resi is dedicated to bridging the gap between talented workers and employers seeking their skills. 
            We believe in creating meaningful employment connections that benefit both job seekers and businesses, 
            fostering a thriving community of professionals.
          </p>
        </section>

        {/* What We Do Section */}
        <section className={styles.section}>
          <h2>What We Do</h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.icon}>💼</div>
              <h3>Job Matching</h3>
              <p>Our advanced matching algorithm connects workers with jobs that fit their skills, experience, and preferences.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.icon}>🔍</div>
              <h3>Easy Search</h3>
              <p>Browse thousands of job listings and worker profiles with powerful search and filter capabilities.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.icon}>💬</div>
              <h3>Direct Communication</h3>
              <p>Message directly with employers or workers through our secure in-platform chat system.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.icon}>⭐</div>
              <h3>Ratings & Reviews</h3>
              <p>Build trust through our transparent rating system that showcases work quality and reliability.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.icon}>🎯</div>
              <h3>Goal Setting</h3>
              <p>Track your career goals and job search progress with our integrated goal management system.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.icon}>🔒</div>
              <h3>Secure Platform</h3>
              <p>Your data is protected with enterprise-level security measures and privacy controls.</p>
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className={styles.section}>
          <h2>Who We Serve</h2>
          <div className={styles.serve}>
            <div className={styles.serveCard}>
              <h3>👷 Workers</h3>
              <p>Whether you're a skilled tradesperson, freelancer, or professional seeking new opportunities, 
              Resi helps you find work that matches your expertise and schedule.</p>
            </div>
            <div className={styles.serveCard}>
              <h3>🏢 Employers</h3>
              <p>Post jobs, search for qualified workers, and build your team with confidence. 
              Our platform streamlines the hiring process from posting to placement.</p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.section}>
          <h2>Our Values</h2>
          <ul className={styles.values}>
            <li><strong>Transparency:</strong> Clear communication and honest interactions between all parties</li>
            <li><strong>Quality:</strong> Commitment to connecting the right people with the right opportunities</li>
            <li><strong>Trust:</strong> Building a reliable platform where users can engage with confidence</li>
            <li><strong>Innovation:</strong> Continuously improving our features to serve our community better</li>
            <li><strong>Support:</strong> Providing responsive assistance whenever our users need help</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className={styles.section}>
          <h2>Get In Touch</h2>
          <p>Have questions or need assistance? We're here to help!</p>
          <div className={styles.contact}>
            <div className={styles.contactItem}>
              <strong>Email:</strong> support@resi.com
            </div>
            <div className={styles.contactItem}>
              <strong>Phone:</strong> +1 (555) 123-4567
            </div>
            <div className={styles.contactItem}>
              <strong>Location:</strong> 123 Main Street, Suite 100, City, State 12345
            </div>
            <div className={styles.contactItem}>
              <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST
            </div>
          </div>
          <div className={styles.ctaButtons}>
            <Link to="/help" className={styles.ctaButton}>Visit Help Center</Link>
            <Link to="/register" className={styles.ctaButton}>Get Started</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
