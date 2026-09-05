import "../index.css"

const LoginForm = () => {
  return (
    <div className="auth-form">

      <div className="auth-form-header">
        <h1>Welcome back</h1>
        <p>Sign in to manage your gym.</p>
      </div>


      <form>

        {/* Email */}

        <div className="form-group">

          <label htmlFor="login-email">
            Email address
          </label>

          <div className="input-wrapper">

            <span className="input-icon">
              @
            </span>

            <input
              id="login-email"
              type="email"
              name="email"
              placeholder="admin@example.com"
              autoComplete="email"
            />

          </div>

        </div>


        {/* Password */}

        <div className="form-group">

          <div className="password-label">

            <label htmlFor="login-password">
              Password
            </label>

            <a href="/forgot-password">
              Forgot password?
            </a>

          </div>

          <div className="input-wrapper">

            <span className="input-icon">
              ◆
            </span>

            <input
              id="login-password"
              type="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />

            <button
              type="button"
              className="password-toggle"
            >
              Show
            </button>

          </div>

        </div>


        {/* Remember */}

        <label className="remember-me">

          <input type="checkbox" />

          <span>Remember me</span>

        </label>


        {/* Submit */}

        <button
          type="submit"
          className="auth-submit-button"
        >
          Sign in

          <span>→</span>
        </button>

      </form>

    </div>
  );
};

export default LoginForm;