import "./AuthForm.css"

const RegisterForm = () => {
  return (
    <div className="auth-form">

      <div className="auth-form-header">
        <h1>Create your account</h1>
        <p>Set up your gym administrator account.</p>
      </div>


      <form>

        {/* Full Name */}

        <div className="form-group">

          <label htmlFor="register-name">
            Full name
          </label>

          <div className="input-wrapper">

            <span className="input-icon">
              ♙
            </span>

            <input
              id="register-name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              autoComplete="name"
            />

          </div>

        </div>


        {/* Email */}

        <div className="form-group">

          <label htmlFor="register-email">
            Email address
          </label>

          <div className="input-wrapper">

            <span className="input-icon">
              @
            </span>

            <input
              id="register-email"
              type="email"
              name="email"
              placeholder="admin@example.com"
              autoComplete="email"
            />

          </div>

        </div>


        {/* Password */}

        <div className="form-group">

          <label htmlFor="register-password">
            Password
          </label>

          <div className="input-wrapper">

            <span className="input-icon">
              ◆
            </span>

            <input
              id="register-password"
              type="password"
              name="password"
              placeholder="Create a password"
              autoComplete="new-password"
            />

            <button
              type="button"
              className="password-toggle"
            >
              Show
            </button>

          </div>

        </div>


        {/* Confirm Password */}

        <div className="form-group">

          <label htmlFor="register-confirm-password">
            Confirm password
          </label>

          <div className="input-wrapper">

            <span className="input-icon">
              ◆
            </span>

            <input
              id="register-confirm-password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              autoComplete="new-password"
            />

            <button
              type="button"
              className="password-toggle"
            >
              Show
            </button>

          </div>

        </div>


        {/* Terms */}

        <label className="terms">

          <input type="checkbox" />

          <span>
            I agree to the{" "}
            <a href="/terms">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy">
              Privacy Policy
            </a>.
          </span>

        </label>


        {/* Submit */}

        <button
          type="submit"
          className="auth-submit-button"
        >
          Create account

          <span>→</span>
        </button>

      </form>

    </div>
  );
};

export default RegisterForm;