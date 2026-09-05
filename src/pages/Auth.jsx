import "../index.css";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useState } from "react";

const Auth = () => {
  const [isShowRegister, setShowRegister] = useState(false);

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* ================= LEFT BRANDING ================= */}

        <section className="relative hidden overflow-hidden border-r border-border bg-sidebar-bg lg:flex">

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary-glow blur-3xl" />

          <div className="relative flex w-full flex-col px-12 py-10 xl:px-16">

            {/* Logo */}
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-bold text-bg-primary shadow-lg shadow-primary-glow">
                G
              </div>

              <span className="text-lg font-bold tracking-wide text-text-primary">
                GYM<span className="text-primary"> PILOT</span>
              </span>

            </div>


            {/* Main Content */}
            <div className="my-auto max-w-xl">

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-8 bg-primary" />

                <p className="text-xs font-semibold tracking-[0.22em] text-primary">
                  GYM MANAGEMENT SYSTEM
                </p>

              </div>


              <h1 className="text-5xl font-bold leading-[1.08] tracking-tight xl:text-6xl">
                Manage your gym.
                <br />
                <span className="text-primary">
                  Grow your business.
                </span>
              </h1>


              <p className="mt-7 max-w-lg text-base leading-7 text-text-secondary">
                Everything you need to manage members, trainers,
                memberships, attendance and payments — all in one place.
              </p>


              {/* Features */}
              <div className="mt-10 space-y-4">

                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary">
                    ✓
                  </div>

                  <span className="text-sm font-medium text-text-secondary">
                    Member Management
                  </span>
                </div>


                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary">
                    ✓
                  </div>

                  <span className="text-sm font-medium text-text-secondary">
                    Attendance Tracking
                  </span>
                </div>


                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary">
                    ✓
                  </div>

                  <span className="text-sm font-medium text-text-secondary">
                    Revenue Analytics
                  </span>
                </div>

              </div>

            </div>


            {/* Footer */}
            <div className="flex items-center gap-3">

              <span className="h-px w-9 bg-border-light" />

              <span className="text-[10px] font-medium tracking-[0.25em] text-text-muted">
                STRONGER TOGETHER
              </span>

            </div>

          </div>

        </section>


        {/* ================= RIGHT AUTH PANEL ================= */}

        <section className="flex min-h-screen items-center justify-center px-6 py-10 sm:px-10 lg:px-12 xl:px-20">

          <div className="w-full max-w-[420px]">

            {/* Login / Register Switch */}
            <div className="relative mb-10 flex h-12 rounded-xl border border-border bg-bg-secondary p-1">

              {/* Slider */}
              <div
                className={`
                  absolute inset-y-1 left-1
                  w-[calc(50%-4px)]
                  rounded-lg bg-primary
                  shadow-sm shadow-primary-glow
                  transition-transform duration-300 ease-out
                  ${isShowRegister ? "translate-x-full" : "translate-x-0"}
                `}
              />

              <button
                type="button"
                onClick={() => setShowRegister(false)}
                className={`
                  relative z-10 w-1/2 rounded-lg
                  text-sm font-semibold
                  transition-colors duration-200
                  ${
                    !isShowRegister
                      ? "text-bg-primary"
                      : "text-text-muted hover:text-text-primary"
                  }
                `}
              >
                Login
              </button>


              <button
                type="button"
                onClick={() => setShowRegister(true)}
                className={`
                  relative z-10 w-1/2 rounded-lg
                  text-sm font-semibold
                  transition-colors duration-200
                  ${
                    isShowRegister
                      ? "text-bg-primary"
                      : "text-text-muted hover:text-text-primary"
                  }
                `}
              >
                Register
              </button>

            </div>


            {/* Form */}
            <div className="rounded-2xl border border-border bg-card-bg p-6 shadow-xl shadow-black/10 sm:p-8">

              {isShowRegister ? <RegisterForm /> : <LoginForm />}

            </div>


            {/* Bottom text */}
            <p className="mt-6 text-center text-xs text-text-muted">
              Secure gym management made simple.
            </p>

          </div>

        </section>

      </div>
    </main>
  );
};

export default Auth;