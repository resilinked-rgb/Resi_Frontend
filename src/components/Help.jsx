import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { AlertContext } from '../context/AlertContext'
import apiService from '../api'
import styles from './Help.module.css'

// Help Center with comprehensive FAQ and support options
function Help() {
  const { user, token } = useContext(AuthContext)
  const { success, error: showError } = useContext(AlertContext)
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [activeItems, setActiveItems] = useState(new Set())
  const [showSupportModal, setShowSupportModal] = useState(false)
  const [supportForm, setSupportForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)

  // Message templates based on subject
  const messageTemplates = {
    'Account Issues': 'I am experiencing issues with my account. Specifically:\n\n[Please describe your account issue here]\n\nMy account email: [Your email]\nIssue started: [Date/Time]',
    'Technical Support': 'I am encountering a technical problem:\n\n[Please describe the technical issue]\n\nBrowser: [e.g., Chrome, Firefox]\nDevice: [e.g., Desktop, Mobile]\nSteps to reproduce:\n1. \n2. \n3. ',
    'Job Posting': 'I need help with job posting:\n\n[Describe your question or issue]\n\nJob Title (if applicable): \nIssue type: [e.g., posting, editing, deleting]',
    'Profile Management': 'I have a question about my profile:\n\n[Describe what you need help with]\n\nProfile section: [e.g., work history, skills, verification]',
    'Billing & Payments': 'I have a question about billing or payments:\n\n[Describe your billing/payment question]\n\nTransaction ID (if applicable): \nDate of transaction: ',
    'Report a Problem': '⚠️ I would like to report a problem:\n\n[Detailed description of the problem]\n\nSeverity: [Low/Medium/High]\nAffected feature: \nFrequency: [Once/Multiple times/Always]',
    'Feature Request': '💡 I would like to suggest a new feature:\n\n[Describe the feature]\n\nBenefit: [How would this help users?]\nUse case: [When would you use this?]',
    'General Inquiry': 'I have a general question:\n\n[Your question here]',
    'Other': '[Please describe your inquiry]'
  }

  const faqData = [
    {
      id: 1,
      category: 'Getting Started',
      icon: 'fas fa-rocket',
      questions: [
        {
          id: 'reg',
          question: 'How do I create an account on ResiLinked?',
          answer: 'Click the "Register" button on the homepage and fill in your personal information including name, email, mobile number, and address. Upload a valid government-issued ID for verification. After registration, check your email for a confirmation link to activate your account.'
        },
        {
          id: 'verify',
          question: 'How long does account verification take?',
          answer: 'Account verification typically takes 1-3 business days. Our admin team reviews your submitted documents to ensure authenticity and compliance. You will receive an email notification once your account is verified. If verification takes longer than 3 days, please contact our support team.'
        },
        {
          id: 'login',
          question: 'I cannot log in to my account. What should I do?',
          answer: 'First, ensure you are using the correct email and password. If you forgot your password, click "Forgot Password" on the login page to reset it. Make sure your account is verified - check your email for a verification link. If problems persist, contact support for assistance.'
        }
      ]
    },
    {
      id: 2,
      category: 'Account Management',
      icon: 'fas fa-user-circle',
      questions: [
        {
          id: 'pass',
          question: 'How do I reset my password?',
          answer: 'On the login page, click "Forgot Password". Enter your registered email address and you will receive a password reset link. Click the link in your email and follow the instructions to create a new secure password. The reset link expires after 1 hour for security purposes.'
        },
        {
          id: 'update',
          question: 'How do I update my profile information?',
          answer: 'Log in to your account and go to your Profile page. Click "Edit Profile" to modify your personal information, work skills, bio, and profile picture. Make sure to click "Save Changes" when done. Updated information will be reflected immediately on your profile.'
        },
        {
          id: 'delete',
          question: 'Can I delete my account?',
          answer: 'Yes, you can request account deletion from your Settings page. Please note that deleting your account is permanent and cannot be undone. All your data, including job applications and messages, will be removed. Contact support if you need help with account deletion.'
        },
        {
          id: 'privacy',
          question: 'Who can see my profile information?',
          answer: 'Your basic profile (name, skills, and work experience) is visible only to verified employers when you apply to their jobs. Your contact information (email, phone) is only shared when you accept a job or the employer selects you. Your profile is never publicly visible on search engines.'
        }
      ]
    },
    {
      id: 3,
      category: 'Finding Work',
      icon: 'fas fa-briefcase',
      questions: [
        {
          id: 'search',
          question: 'How do I search for jobs on ResiLinked?',
          answer: 'Go to the "Find Jobs" page from your dashboard. Use the search bar to look for specific job titles or skills. You can filter jobs by location (barangay), job type, salary range, and date posted. Click on any job card to view full details including requirements, salary, and employer information.'
        },
        {
          id: 'apply',
          question: 'How do I apply for a job?',
          answer: 'On the job details page, click the "Apply Now" button. Your profile information will be sent to the employer automatically. The employer can then view your profile and contact you directly if interested. You can track your applications in your Dashboard under "My Applications".'
        },
        {
          id: 'track',
          question: 'How can I track my job applications?',
          answer: 'Go to your Dashboard and click on "My Applications" to see all jobs you have applied to. You can see the application status (pending, reviewed, accepted, or rejected). Employers can also send you direct messages regarding your application through our messaging system.'
        },
        {
          id: 'match',
          question: 'What is the job matching feature?',
          answer: 'ResiLinked uses smart matching to suggest jobs that fit your skills and location. Go to the "Matched Jobs" section in your dashboard to see jobs recommended specifically for you. Update your skills regularly to get better job matches.'
        }
      ]
    },
    {
      id: 4,
      category: 'For Employers',
      icon: 'fas fa-building',
      questions: [
        {
          id: 'employer',
          question: 'How do I post a job on ResiLinked?',
          answer: 'First, register as an "Employer" or "Both" user type. Once verified, go to your Dashboard and click "Post a Job". Fill in job details including title, description, requirements, salary, and location. Your job post will be visible to all qualified workers immediately after submission.'
        },
        {
          id: 'cost',
          question: 'Is there a fee to post jobs?',
          answer: 'No! Posting jobs on ResiLinked is completely free. You can post unlimited job openings without any charges. Our mission is to connect employers with local skilled workers efficiently and affordably.'
        },
        {
          id: 'manage',
          question: 'How do I manage job applicants?',
          answer: 'In your Employer Dashboard, go to "My Jobs" and click on any job post. You will see a list of all applicants with their profiles. You can view their skills, experience, and ratings. Contact applicants directly through our messaging system or using their provided contact information.'
        },
        {
          id: 'edit',
          question: 'Can I edit or delete my job posts?',
          answer: 'Yes! Go to "My Jobs" in your dashboard, find the job you want to modify, and click "Edit" to update job details or "Delete" to remove the posting. Editing preserves existing applications, while deleting removes the job permanently.'
        }
      ]
    },
    {
      id: 5,
      category: 'Ratings and Reviews',
      icon: 'fas fa-star',
      questions: [
        {
          id: 'rating',
          question: 'How does the rating system work?',
          answer: 'After completing a job, both the employer and worker can rate each other from 1 to 5 stars. Ratings help build trust in the community. Good ratings improve your profile visibility and increase your chances of getting hired or finding reliable workers.'
        },
        {
          id: 'review',
          question: 'Can I see ratings before hiring someone?',
          answer: 'Yes! Each user profile displays their average rating and total number of completed jobs. You can also read written reviews from previous employers or workers. This helps you make informed decisions when hiring or accepting work.'
        },
        {
          id: 'dispute',
          question: 'What if I receive an unfair rating?',
          answer: 'If you believe a rating is unfair or inappropriate, you can report it to our support team. We will review the situation and take appropriate action. Provide evidence such as screenshots or messages to support your claim.'
        }
      ]
    },
    {
      id: 6,
      category: 'Safety and Security',
      icon: 'fas fa-shield-alt',
      questions: [
        {
          id: 'safe',
          question: 'Is my personal information secure?',
          answer: 'Yes! We use industry-standard encryption and security measures to protect your data. Your password is encrypted, and sensitive information like your ID documents are stored securely. We never share your personal data with third parties without your explicit consent.'
        },
        {
          id: 'scam',
          question: 'How do I avoid scams on ResiLinked?',
          answer: 'Only accept jobs from verified employers. Never send money to anyone claiming to be from ResiLinked. Be cautious of jobs asking for upfront fees or personal bank details. Report suspicious accounts immediately. Use our in-app messaging for all communication to maintain a record.'
        },
        {
          id: 'report',
          question: 'How do I report suspicious activity or users?',
          answer: 'Click on the user profile and select "Report User". Choose a reason for reporting and provide details. You can also report job posts by clicking the report icon on the job card. Our team investigates all reports within 24 hours and takes appropriate action.'
        },
        {
          id: 'verify',
          question: 'How do I know if an employer is verified?',
          answer: 'Verified employers have a blue checkmark badge on their profile. This means they have submitted valid business documents and been approved by our admin team. We recommend working only with verified employers for your safety.'
        }
      ]
    },
    {
      id: 7,
      category: 'Payments and Goals',
      icon: 'fas fa-wallet',
      questions: [
        {
          id: 'payment',
          question: 'How do I receive payment for my work?',
          answer: 'Payment terms are agreed upon directly between you and the employer. ResiLinked does not process payments. Discuss payment methods, rates, and schedules before starting work. Get everything in writing for your protection.'
        },
        {
          id: 'goals',
          question: 'What is the Goals feature?',
          answer: 'The Goals feature helps you track your income and savings targets. Set a financial goal (e.g., "Save ₱10,000 for new equipment"), and update your progress as you earn money from completed jobs. This helps you stay motivated and financially organized.'
        },
        {
          id: 'priority',
          question: 'How do goal priorities work?',
          answer: 'You can set multiple goals and prioritize them. Your highest priority goal appears at the top of your dashboard. When you earn money, update your highest priority goal first. This system helps you focus on what matters most.'
        }
      ]
    },
    {
      id: 8,
      category: 'Technical Support',
      icon: 'fas fa-tools',
      questions: [
        {
          id: 'browser',
          question: 'Which browsers are supported?',
          answer: 'ResiLinked works best on the latest versions of Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge. For the best experience, keep your browser updated. The platform is also mobile-responsive and works on all smartphones and tablets.'
        },
        {
          id: 'slow',
          question: 'The website is loading slowly. What should I do?',
          answer: 'Try refreshing the page or clearing your browser cache. Check your internet connection. If the problem persists, the issue might be on our end - please wait a few minutes and try again. Contact support if issues continue.'
        },
        {
          id: 'mobile',
          question: 'Is there a mobile app for ResiLinked?',
          answer: 'Currently, ResiLinked is a web-based platform accessible through any mobile browser. We are working on developing native mobile apps for Android and iOS. In the meantime, you can use the website on your phone - it is fully mobile-responsive.'
        },
        {
          id: 'error',
          question: 'I am getting an error message. What should I do?',
          answer: 'Take a screenshot of the error message and note what you were doing when it occurred. Try logging out and logging back in. Clear your browser cache and cookies. If the error persists, contact our support team with the screenshot and error details.'
        }
      ]
    }
  ]

  const toggleFAQ = (categoryId, questionId) => {
    const itemKey = `${categoryId}-${questionId}`
    const newActiveItems = new Set(activeItems)
    
    if (newActiveItems.has(itemKey)) {
      newActiveItems.delete(itemKey)
    } else {
      newActiveItems.add(itemKey)
    }
    
    setActiveItems(newActiveItems)
  }

  const filterQuestions = (questions) => {
    if (!searchTerm) return questions
    
    return questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  const openSupportChat = async () => {
    try {
      // Get support contact (admin)
      const response = await apiService.getSupportContact()
      const supportContact = response.supportContact || response.data?.supportContact
      
      if (supportContact) {
        // Navigate to chat with support contact pre-selected
        navigate('/chat', { state: { supportContact } })
      } else {
        showError('Support contact not available')
      }
    } catch (error) {
      console.error('Error loading support contact:', error)
      showError('Failed to connect to support. Please try again.')
    }
  }

  const openSupportModal = () => {
    // Pre-populate form with user data if available
    if (user) {
      setSupportForm(prev => ({
        ...prev,
        name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
        email: user.email || ''
      }))
    }
    setShowSupportModal(true)
  }

  const handleSupportFormChange = (field, value) => {
    setSupportForm(prev => {
      const updated = { ...prev, [field]: value }
      
      // Auto-fill message template when subject changes
      if (field === 'subject' && value && messageTemplates[value]) {
        // Only auto-fill if message is empty
        if (!prev.message || prev.message === messageTemplates[prev.subject]) {
          updated.message = messageTemplates[value]
        }
      }
      
      return updated
    })
  }

  const submitSupportForm = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      await apiService.createSupportTicket({
        name: supportForm.name,
        email: supportForm.email,
        subject: supportForm.subject,
        message: supportForm.message,
        priority: 'medium'
      })

      success('Support request submitted successfully! We will get back to you soon.')
      setShowSupportModal(false)
      setSupportForm({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Error submitting support request:', error)
      showError('Failed to submit support request. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="help-container">
      <div className="content-wrapper">
        <div className="main-content">
          <div className="page-header">
            <h1><i className="fas fa-life-ring"></i> Help and Support</h1>
            <p>Frequently asked questions and support for ResiLinked</p>
          </div>

          <div className="search-container">
            <input
              type="text"
              className="search-box"
              placeholder="🔍 Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="faq-sections">
            {faqData.map(section => {
              const filteredQuestions = filterQuestions(section.questions)
              if (filteredQuestions.length === 0 && searchTerm) return null

              return (
                <div key={section.id} className="faq-section">
                  <h2>
                    <i className={section.icon}></i> {section.category}
                  </h2>
                  
                  {filteredQuestions.map(q => {
                    const itemKey = `${section.id}-${q.id}`
                    const isActive = activeItems.has(itemKey)
                    const answerId = `faq-${section.id}-${q.id}-answer`
                    const buttonId = `faq-${section.id}-${q.id}-button`

                    return (
                      <div 
                        key={q.id} 
                        className={`faq-item ${isActive ? 'active' : ''}`}
                      >
                        <button
                          id={buttonId}
                          aria-controls={answerId}
                          aria-expanded={isActive}
                          className="faq-question"
                          onClick={() => toggleFAQ(section.id, q.id)}
                        >
                          <span>{q.question}</span>
                          <i className={`fas fa-chevron-${isActive ? 'up' : 'down'}`}></i>
                        </button>
                        <div id={answerId} className="faq-answer" role="region" aria-labelledby={buttonId}>
                          <p>{q.answer}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>

          {searchTerm && faqData.every(section => filterQuestions(section.questions).length === 0) && (
            <div className="no-results">
              <i className="fas fa-search"></i>
              <p>No questions found for "{searchTerm}"</p>
              <p>Try different search terms or contact support.</p>
            </div>
          )}
        </div>

        <div className="sidebar">
          <div className="contact-card">
            <h3><i className="fas fa-headset"></i> Need Help?</h3>
            <button className="contact-btn" onClick={openSupportChat}>
              <i className="fas fa-comments"></i>
              Chat with Support
            </button>
            <button className="contact-btn secondary" onClick={openSupportModal} style={{ marginTop: '10px', background: '#6c757d' }}>
              <i className="fas fa-envelope"></i>
              Email Support
            </button>
            
            <div className="contact-info">
              <div className="contact-methods">
                <div className="contact-method">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <strong>Email:</strong>
                    <a href="mailto:support@resilinked.com">support@resilinked.com</a>
                  </div>
                </div>
                <div className="contact-method">
                  <i className="fas fa-phone"></i>
                  <div>
                    <strong>Phone:</strong>
                    <a href="tel:+639451234567">+63 945 123 4567</a>
                  </div>
                </div>
                <div className="contact-method">
                  <i className="fas fa-clock"></i>
                  <div>
                    <strong>Hours:</strong>
                    <span>Mon-Sat: 8AM-6PM</span>
                  </div>
                </div>
                <div className="contact-method">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <strong>Location:</strong>
                    <span>San Fernando, Pampanga</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="quick-links">
            <h3>Quick Links</h3>
            <Link to="/dashboard" className="quick-link">
              <i className="fas fa-home"></i> Back to Dashboard
            </Link>
            <Link to="/profile" className="quick-link">
              <i className="fas fa-user"></i> My Profile
            </Link>
            <Link to="/user-settings" className="quick-link">
              <i className="fas fa-cog"></i> Settings
            </Link>
            <Link to="/jobs" className="quick-link">
              <i className="fas fa-search"></i> Find Jobs
            </Link>
            <Link to="/about" className="quick-link">
              <i className="fas fa-info-circle"></i> About Us
            </Link>
            <Link to="/privacy" className="quick-link">
              <i className="fas fa-shield-alt"></i> Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Support Modal */}
      {showSupportModal && (
        <div className="modal-overlay" onClick={() => setShowSupportModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2><i className="fas fa-headset"></i> Contact Support</h2>
              <button className="modal-close" onClick={() => setShowSupportModal(false)}>×</button>
            </div>
            
            <div className="modal-body">
              <form onSubmit={submitSupportForm}>
                <div className="form-group">
                  <label htmlFor="supportName">Name:</label>
                  <input
                    type="text"
                    id="supportName"
                    value={supportForm.name}
                    onChange={(e) => handleSupportFormChange('name', e.target.value)}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="supportEmail">Email:</label>
                  <input
                    type="email"
                    id="supportEmail"
                    value={supportForm.email}
                    onChange={(e) => handleSupportFormChange('email', e.target.value)}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="supportSubject">Subject:</label>
                  <select
                    id="supportSubject"
                    value={supportForm.subject}
                    onChange={(e) => handleSupportFormChange('subject', e.target.value)}
                    required
                  >
                    <option value="">Select a topic...</option>
                    <option value="Account Issues">Account Issues</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Job Posting">Job Posting</option>
                    <option value="Profile Management">Profile Management</option>
                    <option value="Billing & Payments">Billing & Payments</option>
                    <option value="Report a Problem">Report a Problem</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                  {supportForm.subject && (
                    <small style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.5rem', display: 'block' }}>
                      💡 A message template has been added below. Please customize it with your details.
                    </small>
                  )}
                </div>
                
                <div className="form-group">
                  <label htmlFor="supportMessage">Message:</label>
                  <textarea
                    id="supportMessage"
                    value={supportForm.message}
                    onChange={(e) => handleSupportFormChange('message', e.target.value)}
                    rows="5"
                    placeholder="Describe your concern or question..."
                    required
                  />
                </div>
                
                <div className="form-actions">
                  <button 
                    type="button" 
                    className="btn secondary" 
                    onClick={() => setShowSupportModal(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="btn primary" 
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <div className="spinner small"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Help styles moved to Help.module.css */}
    </div>
  )
}

export default Help
