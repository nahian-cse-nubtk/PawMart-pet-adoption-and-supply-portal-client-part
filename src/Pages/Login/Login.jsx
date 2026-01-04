import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser, signInwithGoogle } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Demo user credentials
  const DEMO_USER = {
    email: "demo@user1.com",
    password: "123456aA",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          toast("Login successful");
          navigate(location.state || "/");
        }
      })
      .catch(() => {
        setError("Email and Password not valid");
        toast("Failed to sign in");
      });
  };

  // 🔹 Demo User Login
  const handleDemoLogin = () => {
    setError("");

    signInUser(DEMO_USER.email, DEMO_USER.password)
      .then((result) => {
        if (result.user) {
          toast("Demo login successful");
          navigate(location.state || "/");
        }
      })
      .catch(() => {
        toast("Demo login failed");
      });
  };

  const handleGoogleSignIn = () => {
    signInwithGoogle()
      .then((result) => {
        if (result.user) {
          toast("Sign in successful");
          navigate(location.state || "/");
        }
      })
      .catch(() => {
        toast("Failed to sign in");
      });
  };

  return (
    <>
      <h1 className="text-center font-bold text-4xl my-5">Login Now!</h1>

      <div className="mx-auto mb-10 card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
                required
              />

              {error && <p className="text-red-500">{error}</p>}

              <button className="btn bg-amber-100 dark:bg-gray-500 mt-4">
                Login
              </button>
            </fieldset>
          </form>

          {/* 🔹 Demo User Button */}
          <button
            onClick={handleDemoLogin}
            className="btn bg-amber-50 dark:bg-gray-400 hover:bg-amber-200 dark:hover:bg-gray-300 mt-3"
          >
            Login as Demo User
          </button>

          {/* Google Login */}
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black border-[#e5e5e5] mt-3"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              viewBox="0 0 512 512"
            >
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
              <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
            </svg>
            Login with Google
          </button>

          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 underline">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
