import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CheckCircle, Mail, Shield, LogIn } from 'lucide-react'

const RegistrationSuccess = () => {
  const [currentProgress, setCurrentProgress] = useState(1) // Start at step 1 for animation
  const [isAnimating, setIsAnimating] = useState(true)
  const location = useLocation()

  // Animate progress bar on mount
  useEffect(() => {
    // Animate to step 3 on initial load
    const timer1 = setTimeout(() => setCurrentProgress(2), 300)
    const timer2 = setTimeout(() => setCurrentProgress(3), 800)
    const timer3 = setTimeout(() => setIsAnimating(false), 1300)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  // Check if user came from email verification
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const verified = params.get('verified')
    
    if (verified === 'true' && !isAnimating) {
      // Animate to Ready to Login after verification
      setTimeout(() => setCurrentProgress(4), 500)
    }
  }, [location, isAnimating])

  const progressSteps = [
    { 
      id: 1, 
      label: 'Sign Up', 
      icon: CheckCircle, 
      description: 'Account Created'
    },
    { 
      id: 2, 
      label: 'Email Sent', 
      icon: CheckCircle, 
      description: 'Verification Email Sent'
    },
    { 
      id: 3, 
      label: 'Email Verification', 
      icon: Mail, 
      description: 'Check Your Inbox'
    },
    { 
      id: 4, 
      label: 'Ready to Login', 
      icon: LogIn, 
      description: 'Almost There!'
    }
  ]

  const getStepStatus = (stepId) => {
    if (stepId < currentProgress) return 'completed'
    if (stepId === currentProgress) return 'current'
    return 'pending'
  }

  const getProgressPercentage = () => {
    return ((currentProgress - 1) / 3) * 100 // 3 gaps between 4 steps
  }

  return (
    <div className="registration-success-container">
      <div className="success-card">
        {/* Logo */}
        <div className="logo-container">
          <span className="logo-text">RL</span>
        </div>

        <h1 className="success-title">
          Registration Successful!
        </h1>

        <div className="email-badge">
          <Mail className="badge-icon" size={20} />
          <span>{currentProgress === 4 ? 'Account Verified!' : 'Check Your Email'}</span>
        </div>

        {/* Horizontal Progress Bar */}
        <div className="progress-bar-container">
          {/* Animated Connecting Line */}
          <div className="progress-line-bg">
            <div 
              className="progress-line-fill"
              style={{
                width: `${getProgressPercentage()}%`
              }}
            />
          </div>

          {progressSteps.map((step, index) => {
            const Icon = step.icon
            const status = getStepStatus(step.id)
            const isCompleted = status === 'completed'
            const isCurrent = status === 'current'
            
            return (
              <div 
                key={step.id}
                className="progress-step-item"
              >
                {/* Icon Circle */}
                <div 
                  className={`progress-circle ${status} ${isCurrent ? 'pulse-animation' : ''}`}
                >
                  <Icon 
                    className="progress-icon"
                    color="white"
                    strokeWidth={2.5}
                  />
                </div>

                {/* Label */}
                <div className="progress-labels">
                  <div className={`progress-label ${isCompleted || isCurrent ? 'active' : ''}`}>
                    {step.label}
                  </div>
                  <div className={`progress-description ${isCompleted || isCurrent ? 'active' : ''}`}>
                    {step.description}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Message */}
        <div className="message-box">
          <p className="message-text">
            {currentProgress === 4 
              ? 'Your email has been verified! You can now log in to your account.'
              : 'A verification email has been sent to your inbox. Please check your email and click the verification link to activate your account.'}
          </p>
        </div>

        {/* Action Button */}
        <Link 
          to="/login"
          className="login-button"
        >
          {currentProgress === 4 ? 'Go to Login' : 'Go to Login'}
        </Link>
      </div>

      <style jsx>{`
        .registration-success-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .success-card {
          max-width: 900px;
          width: 100%;
          background: rgba(255, 255, 255, 0.98);
          border-radius: 24px;
          padding: 60px 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          text-align: center;
        }

        .logo-container {
          width: 120px;
          height: 120px;
          margin: 0 auto 30px;
          background: linear-gradient(135deg, #9333ea 0%, #7c3aed 100%);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(147, 51, 234, 0.4);
        }

        .logo-text {
          font-size: 48px;
          color: white;
          font-weight: bold;
        }

        .success-title {
          font-size: 42px;
          font-weight: bold;
          color: #1a202c;
          margin-bottom: 10px;
          margin-top: 0;
        }

        .email-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #9333ea 0%, #7c3aed 100%);
          color: white;
          padding: 8px 20px;
          border-radius: 20px;
          fontSize: 16px;
          font-weight: 600;
          margin-bottom: 40px;
        }

        .badge-icon {
          width: 20px;
          height: 20px;
        }

        .progress-bar-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
          margin: 60px 0;
          padding: 0 20px;
        }

        .progress-line-bg {
          position: absolute;
          top: 30px;
          left: 15%;
          right: 15%;
          height: 4px;
          background: #e5e7eb;
          z-index: 0;
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-line-fill {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: linear-gradient(90deg, #9333ea 0%, #7c3aed 100%);
          transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 2px;
        }

        .progress-step-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 1;
          transition: all 0.5s ease;
        }

        .progress-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 4px solid white;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .progress-circle.completed,
        .progress-circle.current {
          background: linear-gradient(135deg, #9333ea 0%, #7c3aed 100%);
          box-shadow: 0 8px 20px rgba(147, 51, 234, 0.4);
        }

        .progress-circle.pending {
          background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .progress-circle.current {
          transform: scale(1.1);
        }

        .progress-icon {
          width: 28px;
          height: 28px;
          transition: all 0.3s ease;
        }

        .progress-labels {
          margin-top: 15px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .progress-label {
          font-size: 16px;
          font-weight: 700;
          color: #9ca3af;
          margin-bottom: 4px;
          transition: color 0.3s ease;
        }

        .progress-label.active {
          color: #1a202c;
        }

        .progress-description {
          font-size: 13px;
          color: #d1d5db;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .progress-description.active {
          color: #6b7280;
        }

        .message-box {
          background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
          border: 2px solid #9333ea;
          border-radius: 16px;
          padding: 24px;
          margin-top: 40px;
          margin-bottom: 30px;
          transition: all 0.3s ease;
        }

        .message-text {
          font-size: 16px;
          color: #581c87;
          line-height: 1.6;
          margin: 0;
        }

        .login-button {
          display: inline-block;
          background: linear-gradient(135deg, #9333ea 0%, #7c3aed 100%);
          color: white;
          padding: 16px 48px;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 8px 20px rgba(147, 51, 234, 0.4);
          transition: all 0.3s ease;
        }

        .login-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(147, 51, 234, 0.5);
        }

        .pulse-animation {
          animation: pulse-animation 2s ease-in-out infinite;
        }

        @keyframes pulse-animation {
          0%, 100% {
            transform: scale(1.1);
            box-shadow: 0 8px 20px rgba(147, 51, 234, 0.4);
          }
          50% {
            transform: scale(1.15);
            box-shadow: 0 12px 30px rgba(147, 51, 234, 0.6);
          }
        }

        @keyframes iconBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        /* Tablet Responsive */
        @media (max-width: 768px) {
          .success-card {
            padding: 40px 30px;
          }

          .logo-container {
            width: 100px;
            height: 100px;
            margin-bottom: 20px;
          }

          .logo-text {
            font-size: 40px;
          }

          .success-title {
            font-size: 32px;
          }

          .email-badge {
            font-size: 14px;
            padding: 6px 16px;
            margin-bottom: 30px;
          }

          .progress-bar-container {
            margin: 40px 0;
            padding: 0 10px;
          }

          .progress-circle {
            width: 50px;
            height: 50px;
            border: 3px solid white;
          }

          .progress-icon {
            width: 24px;
            height: 24px;
          }

          .progress-line-bg {
            top: 25px;
            left: 12%;
            right: 12%;
          }

          .progress-label {
            font-size: 14px;
          }

          .progress-description {
            font-size: 11px;
          }

          .message-box {
            padding: 20px;
            margin-top: 30px;
            margin-bottom: 25px;
          }

          .message-text {
            font-size: 14px;
          }

          .login-button {
            padding: 14px 40px;
            font-size: 16px;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 480px) {
          .registration-success-container {
            padding: 15px;
          }

          .success-card {
            padding: 30px 20px;
            border-radius: 20px;
          }

          .logo-container {
            width: 80px;
            height: 80px;
            border-radius: 20px;
            margin-bottom: 15px;
          }

          .logo-text {
            font-size: 32px;
          }

          .success-title {
            font-size: 24px;
            margin-bottom: 8px;
          }

          .email-badge {
            font-size: 13px;
            padding: 6px 14px;
            margin-bottom: 25px;
          }

          .badge-icon {
            width: 16px;
            height: 16px;
          }

          .progress-bar-container {
            margin: 30px 0;
            padding: 0 5px;
            flex-wrap: wrap;
            gap: 20px;
          }

          .progress-step-item {
            flex: 0 0 calc(50% - 10px);
            min-width: 120px;
          }

          .progress-line-bg {
            display: none;
          }

          .progress-circle {
            width: 45px;
            height: 45px;
          }

          .progress-icon {
            width: 20px;
            height: 20px;
          }

          .progress-labels {
            margin-top: 10px;
          }

          .progress-label {
            font-size: 12px;
            margin-bottom: 2px;
          }

          .progress-description {
            font-size: 10px;
          }

          .message-box {
            padding: 16px;
            margin-top: 20px;
            margin-bottom: 20px;
            border-radius: 12px;
          }

          .message-text {
            font-size: 13px;
            line-height: 1.5;
          }

          .login-button {
            padding: 12px 32px;
            font-size: 15px;
            width: 100%;
            max-width: 280px;
          }
        }

        /* Small Mobile */
        @media (max-width: 360px) {
          .success-card {
            padding: 25px 15px;
          }

          .success-title {
            font-size: 20px;
          }

          .progress-step-item {
            flex: 0 0 100%;
          }

          .progress-label {
            font-size: 11px;
          }

          .progress-description {
            font-size: 9px;
          }
        }
      `}</style>
    </div>
  )
}

export default RegistrationSuccess
