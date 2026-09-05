import "./Auth.css";
import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";

const Auth = () => {
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

            {/* LOGIN / REGISTER SWITCH */}

            <div className="auth-switch">

              <div className="auth-switch-slider"></div>

              <button className="auth-switch-button active">
                Login
              </button>

              <button className="auth-switch-button">
                Register
              </button>

            </div>


            {/* FORM */}

            <div className="auth-form-container">

               {/* {/* 
                // Your React logic will render either: */}

                <LoginForm />

                {/* // OR */}

                <RegisterForm />
               {/* */} */

            </div>

          </div>

        </section>

      </div>
    </main>
  );
};

export default Auth;