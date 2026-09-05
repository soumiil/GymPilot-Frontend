import "../index.css";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useState } from "react";

const Auth = () => {

  const [isShowRegister, setShowRegister] = useState(false);

  return (
    <main className="auth-page">
      <div className="auth-container">

        {/* ================= LEFT BRANDING ================= */}

        <section className="auth-brand">

          <div className="brand-logo">
            <div className="brand-logo-icon">
              G
            </div>

            <span>GYM<span> PILOT</span></span>
          </div>


          <div className="brand-content">

            <p className="brand-eyebrow">
              GYM MANAGEMENT SYSTEM
            </p>

            <h1>
              Manage your gym.
              <br />
              <span>Grow your business.</span>
            </h1>

            <p className="brand-description">
              Everything you need to manage members, trainers,
              memberships, attendance and payments — all in one place.
            </p>

          </div>


          <div className="brand-features">

            <div className="brand-feature">
              <div className="feature-icon">✓</div>
              <span>Member Management</span>
            </div>

            <div className="brand-feature">
              <div className="feature-icon">✓</div>
              <span>Attendance Tracking</span>
            </div>

            <div className="brand-feature">
              <div className="feature-icon">✓</div>
              <span>Revenue Analytics</span>
            </div>

          </div>


          <div className="brand-footer">
            <span className="brand-footer-line"></span>
            <span>STRONGER TOGETHER</span>
          </div>

        </section>


        {/* ================= RIGHT AUTH PANEL ================= */}

        <section className="auth-panel">

          <div className="auth-panel-inner">
            <div className="auth-switch">

              <div className={`auth-switch-slider ${isShowRegister ? "register" : ""} `} ></div>

              <button className={`auth-switch-button ${!isShowRegister ? "active" : ""}`}
              onClick={()=> {setShowRegister(false)}}>
                Login
              </button>

              <button className={`auth-switch-button ${isShowRegister ? "active" : ""}`}
              onClick={()=> { setShowRegister(true)}} >
                Register
              </button>

            </div>

            {/* LOGIN / REGISTER SWITCH */}



            {/* FORM */}

            <div className="auth-form-container">

               {isShowRegister? <RegisterForm /> : <LoginForm/>}

            </div>

          </div>

        </section>

      </div>
    </main>
  );
};

export default Auth;