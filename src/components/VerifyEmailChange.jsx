import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiService from '../api';
import { useAlert } from '../context/AlertContext';

function VerifyEmailChange() {
  const { token } = useParams();
  const navigate = useNavigate();
  const { success, error: showError } = useAlert();
  const [verifying, setVerifying] = useState(true);
  const [verificationStatus, setVerificationStatus] = useState('');

  useEffect(() => {
    verifyEmail();
  }, [token]);

  const verifyEmail = async () => {
    try {
      setVerifying(true);
      const response = await apiService.verifyEmailChange(token);
      
      setVerificationStatus('success');
      success(response.alert || 'Your email has been successfully changed!');
      
      // Update local storage with new user data
      if (response.user) {
        const currentUserData = JSON.parse(localStorage.getItem('userData') || '{}');
        const updatedUserData = { ...currentUserData, email: response.user.email };
        localStorage.setItem('userData', JSON.stringify(updatedUserData));
      }
      
      setTimeout(() => {
        navigate('/employee-dashboard');
      }, 3000);
    } catch (error) {
      console.error('Email verification error:', error);
      setVerificationStatus('error');
      showError(error.message || 'Failed to verify email change');
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {verifying ? (
          <>
            <div style={styles.spinner}></div>
            <h2 style={styles.title}>Verifying Email Change...</h2>
            <p style={styles.text}>Please wait while we verify your email change request.</p>
          </>
        ) : verificationStatus === 'success' ? (
          <>
            <div style={styles.successIcon}>✓</div>
            <h2 style={styles.title}>Email Changed Successfully!</h2>
            <p style={styles.text}>Your email address has been updated.</p>
            <p style={styles.subtext}>Redirecting you to your dashboard...</p>
          </>
        ) : (
          <>
            <div style={styles.errorIcon}>✕</div>
            <h2 style={styles.title}>Verification Failed</h2>
            <p style={styles.text}>
              The verification link is invalid or has expired.
            </p>
            <button 
              style={styles.button}
              onClick={() => navigate('/employee-dashboard')}
            >
              Go to Dashboard
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)',
    padding: '2rem'
  },
  card: {
    background: 'white',
    borderRadius: '16px',
    padding: '3rem',
    maxWidth: '500px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
  },
  spinner: {
    width: '60px',
    height: '60px',
    border: '6px solid #f3f4f6',
    borderTop: '6px solid #9333ea',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: '0 auto 2rem'
  },
  successIcon: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: '#10b981',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    margin: '0 auto 2rem',
    fontWeight: 'bold'
  },
  errorIcon: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: '#ef4444',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    margin: '0 auto 2rem',
    fontWeight: 'bold'
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: '1rem'
  },
  text: {
    fontSize: '1.1rem',
    color: '#64748b',
    marginBottom: '0.5rem'
  },
  subtext: {
    fontSize: '0.95rem',
    color: '#94a3b8',
    marginTop: '1rem'
  },
  button: {
    marginTop: '2rem',
    padding: '0.875rem 2rem',
    background: '#9333ea',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s'
  }
};

// Add keyframe animation for spinner
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleSheet);

export default VerifyEmailChange;
