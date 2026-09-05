const LoginForm = () => {
  return (
    <div className="w-full">

      {/* Header */}
      <div className="mb-7">
        <h1 className="text-2xl font-bold tracking-tight text-text-primary">
          Welcome back
        </h1>

        <p className="mt-2 text-sm text-text-secondary">
          Sign in to manage your gym.
        </p>
      </div>


      <form className="space-y-5">

        {/* Email */}
        <div className="space-y-2">

          <label
            htmlFor="login-email"
            className="block text-sm font-medium text-text-secondary"
          >
            Email address
          </label>

          <div className="relative">

            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-text-muted">
              @
            </span>

            <input
              id="login-email"
              type="email"
              name="email"
              placeholder="admin@example.com"
              autoComplete="email"
              className="
                h-11 w-full rounded-lg
                border border-border
                bg-bg-tertiary
                px-10
                text-sm text-text-primary
                placeholder:text-text-muted
                outline-none
                transition-all duration-200
                hover:border-border-hover
                focus:border-primary
                focus:ring-2 focus:ring-primary-soft
              "
            />

          </div>

        </div>


        {/* Password */}
        <div className="space-y-2">

          <div className="flex items-center justify-between">

            <label
              htmlFor="login-password"
              className="text-sm font-medium text-text-secondary"
            >
              Password
            </label>

            <a
              href="/forgot-password"
              className="
                text-xs font-medium text-primary
                transition-colors
                hover:text-primary-light
              "
            >
              Forgot password?
            </a>

          </div>


          <div className="relative">

            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[10px] text-text-muted">
              ◆
            </span>

            <input
              id="login-password"
              type="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              className="
                h-11 w-full rounded-lg
                border border-border
                bg-bg-tertiary
                px-10 pr-16
                text-sm text-text-primary
                placeholder:text-text-muted
                outline-none
                transition-all duration-200
                hover:border-border-hover
                focus:border-primary
                focus:ring-2 focus:ring-primary-soft
              "
            />

            <button
              type="button"
              className="
                absolute right-3.5 top-1/2
                -translate-y-1/2
                text-xs font-medium
                text-text-muted
                transition-colors
                hover:text-primary
              "
            >
              Show
            </button>

          </div>

        </div>


        {/* Remember */}
        <label className="flex cursor-pointer items-center gap-2.5">

          <input
            type="checkbox"
            className="
              h-4 w-4 cursor-pointer
              rounded border-border
              bg-bg-tertiary
              accent-primary
            "
          />

          <span className="text-sm text-text-secondary">
            Remember me
          </span>

        </label>


        {/* Submit */}
        <button
          type="submit"
          className="
            flex h-11 w-full
            items-center justify-center gap-2
            rounded-lg
            bg-primary
            px-4
            text-sm font-semibold
            text-bg-primary
            shadow-sm shadow-primary-glow
            transition-all duration-200
            hover:bg-primary-hover
            hover:shadow-md hover:shadow-primary-glow
            focus:outline-none
            focus:ring-2 focus:ring-primary-soft
            active:scale-[0.99]
          "
        >
          <span>Sign in</span>
          <span className="text-base">→</span>
        </button>

      </form>

    </div>
  );
};

export default LoginForm;