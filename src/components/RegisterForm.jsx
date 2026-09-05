const RegisterForm = () => {
  return (
    <div className="w-full">

      {/* Header */}
      <div className="mb-7">
        <h1 className="text-2xl font-bold tracking-tight text-text-primary">
          Create your account
        </h1>

        <p className="mt-2 text-sm text-text-secondary">
          Set up your gym administrator account.
        </p>
      </div>


      <form className="space-y-5">

        {/* Full Name */}
        <div className="space-y-2">

          <label
            htmlFor="register-name"
            className="block text-sm font-medium text-text-secondary"
          >
            Full name
          </label>

          <div className="relative">

            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-text-muted">
              ♙
            </span>

            <input
              id="register-name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              autoComplete="name"
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


        {/* Email */}
        <div className="space-y-2">

          <label
            htmlFor="register-email"
            className="block text-sm font-medium text-text-secondary"
          >
            Email address
          </label>

          <div className="relative">

            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-text-muted">
              @
            </span>

            <input
              id="register-email"
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

          <label
            htmlFor="register-password"
            className="block text-sm font-medium text-text-secondary"
          >
            Password
          </label>

          <div className="relative">

            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[10px] text-text-muted">
              ◆
            </span>

            <input
              id="register-password"
              type="password"
              name="password"
              placeholder="Create a password"
              autoComplete="new-password"
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


        {/* Confirm Password */}
        <div className="space-y-2">

          <label
            htmlFor="register-confirm-password"
            className="block text-sm font-medium text-text-secondary"
          >
            Confirm password
          </label>

          <div className="relative">

            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[10px] text-text-muted">
              ◆
            </span>

            <input
              id="register-confirm-password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              autoComplete="new-password"
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


        {/* Terms */}
        <label className="flex cursor-pointer items-start gap-2.5">

          <input
            type="checkbox"
            className="
              mt-0.5 h-4 w-4 shrink-0
              cursor-pointer
              rounded border-border
              bg-bg-tertiary
              accent-primary
            "
          />

          <span className="text-xs leading-5 text-text-secondary">

            I agree to the{" "}

            <a
              href="/terms"
              className="
                font-medium text-primary
                transition-colors
                hover:text-primary-light
              "
            >
              Terms of Service
            </a>{" "}

            and{" "}

            <a
              href="/privacy"
              className="
                font-medium text-primary
                transition-colors
                hover:text-primary-light
              "
            >
              Privacy Policy
            </a>.

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
          <span>Create account</span>
          <span className="text-base">→</span>
        </button>

      </form>

    </div>
  );
};

export default RegisterForm;