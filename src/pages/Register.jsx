import React from 'react'
// import RegisterForm from "../components/RegisterForm/RegisterForm";
import "./Register.css";

const Register = () => {
  return (
    <main className="register-page">
      <section className="register-container">

        {/* Left Branding Section */}
        <div className="register-brand">
          <div className="brand-logo">
            <span className="brand-icon">✚</span>
            <span>GYM PILOT</span>
          </div>

          <div className="brand-content">
            <p className="brand-label">GYM MANAGEMENT SYSTEM</p>

            <h1>
              Build a stronger
              <span> business.</span>
            </h1>

            <p className="brand-description">
              Manage your members, memberships, attendance, payments,
              trainers and gym operations from one powerful dashboard.
            </p>
          </div>

          <div className="brand-footer">
            <span></span>
            <p>STRONGER TOGETHER</p>
          </div>
        </div>

        {/* Register Form */}
        <div className="register-form-wrapper">
          {/* <RegisterForm /> */}
        </div>

      </section>
    </main>
  )
}

export default Register