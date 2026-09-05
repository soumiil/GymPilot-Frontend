import "../index.css";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useState } from "react";

const Auth = () => {
  const [isShowRegister, setShowRegister] = useState(false);

  return (
    <main className="min-h-screen w-full bg-bg-primary text-text-primary">
      <div className="flex min-h-screen w-full">

        {/* ================= LEFT BRANDING ================= */}

        <section className="hidden w-1/2 flex-col justify-between border-r border-border bg-sidebar-bg p-12 lg:flex">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-lg font-bold text-bg-primary">
              G
            </div>

            <span className="text-lg font-bold tracking-wide text-text-primary">
              GYM<span className="text-primary"> PILOT</span>
            </span>
          </div>


          {/* Brand Content */}
          <div className="max-w-xl">

            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-primary">
              GYM MANAGEMENT SYSTEM
            </p>

            <h1 className="text-4xl font-bold leading-tight text-text-primary xl:text-5xl">
              Manage your gym.
              <br />
              <span className="text-primary">
                Grow your business.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-text-secondary">
              Everything you need to manage members, trainers,
              memberships, attendance and payments — all in one place.
            </p>

          </div>


          {/* Features */}
          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary">
                ✓
              </div>

              <span className="text-sm text-text-secondary">
                Member Management
              </span>
            </div>


            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary">
                ✓
              </div>

              <span className="text-sm text-text-secondary">
                Attendance Tracking
              </span>
            </div>


            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary">
                ✓
              </div>

              <span className="text-sm text-text-secondary">
                Revenue Analytics
              </span>
            </div>

          </div>


          {/* Footer */}
          <div className="flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-text-muted">
            <span className="h-px w-10 bg-border-light"></span>
            <span>STRONGER TOGETHER</span>
          </div>

        </section>


        {/* ================= RIGHT AUTH PANEL ================= */}

        <section className="flex min-h-screen w-full items-center justify-center bg-bg-primary p-6 lg:w-1/2 lg:p-12">

          <div className="w-full max-w-md">

            {/* Login / Register Switch */}
            <div className="relative mb-8 flex h-12 rounded-lg border border-border bg-bg-secondary p-1">

              {/* Slider */}
              <div
                className={`
                  absolute inset-y-1 left-1 w-[calc(50%-4px)]
                  rounded-md bg-primary
                  transition-transform duration-200 ease-in-out
                  ${isShowRegister ? "translate-x-full" : "translate-x-0"}
                `}
              ></div>


              {/* Login */}
              <button
                className={`
                  relative z-10 w-1/2 rounded-md text-sm font-semibold
                  transition-colors duration-200
                  ${
                    !isShowRegister
                      ? "text-bg-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }
                `}
                onClick={() => {
                  setShowRegister(false);
                }}
              >
                Login
              </button>


              {/* Register */}
              <button
                className={`
                  relative z-10 w-1/2 rounded-md text-sm font-semibold
                  transition-colors duration-200
                  ${
                    isShowRegister
                      ? "text-bg-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }
                `}
                onClick={() => {
                  setShowRegister(true);
                }}
              >
                Register
              </button>

            </div>


            {/* Form */}
            <div className="w-full">
              {isShowRegister ? <RegisterForm /> : <LoginForm />}
            </div>

          </div>

        </section>

      </div>
    </main>
  );
};

export default Auth;