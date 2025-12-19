import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLoginWithPhone, setAuthToken, setUserData } from '../services/api';

function Login() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("email");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [needsOtpVerification, setNeedsOtpVerification] = useState(false);
  const [userId, setUserId] = useState("");
  const [formData, setFormData] = useState({
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const loginData = {
        password: formData.password,
      };

      if (activeTab === "email") {
        loginData.email = formData.email;
      } else {
        loginData.mobile = formData.mobile;
      }

      const result = await userLoginWithPhone(loginData);

      if (result.success) {
        // Check if OTP verification is needed
        if (result.data.requiresOtp) {
          setUserId(result.data.userId);
          setNeedsOtpVerification(true);
          // You can navigate to OTP verification page or show OTP input
          // navigate('/verify-otp', { state: { userId: result.data.userId } });
        } else {
          // Store token and user data
          if (result.data.token) {
            setAuthToken(result.data.token);
          }
          if (result.data.user) {
            setUserData(result.data.user);
          }
          
          // Show success message
          alert('Login successful!');
          
          // Navigate to home or dashboard
          navigate('/');
        }
      } else {
        setError(result.error || 'Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Full Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/background_pic.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#3d4b7a]/60 via-[#2d3a5f]/50 to-[#3d4b7a]/60"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header with Logo and Back Button */}
        <div className="p-6 flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:bg-white/10 p-2 rounded-lg transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <img src="/logo.png" alt="EasyGo" className="h-10 ml-4" />
        </div>

        {/* Centered Form Container */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            {/* Form Card */}
            <div className="bg-[#3d4b7a]/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/10">
              {/* Title */}
              <h1 className="text-white text-2xl font-bold text-center mb-6">
                Login Using Number or email
              </h1>

              {/* Error Message */}
              {error && (
                <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-red-200 text-sm text-center">{error}</p>
                </div>
              )}

              {/* Tab Buttons */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => setActiveTab("mobile")}
                  className={`flex-1 py-3 rounded-lg font-medium transition ${
                    activeTab === "mobile"
                      ? "bg-[#2b3654] text-white"
                      : "bg-[#2b3654]/50 text-white/70 hover:bg-[#2b3654]/70"
                  }`}
                >
                  Mobile
                </button>
                <button
                  onClick={() => setActiveTab("email")}
                  className={`flex-1 py-3 rounded-lg font-medium transition ${
                    activeTab === "email"
                      ? "bg-[#1d9bf0] text-white"
                      : "bg-[#2b3654]/50 text-white/70 hover:bg-[#2b3654]/70"
                  }`}
                >
                  Email
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email/Mobile Input */}
                <div>
                  <label className="block text-white text-sm mb-2">
                    {activeTab === "email" ? "Email Address" : "Mobile Number"}
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-white/50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {activeTab === "email" ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        )}
                      </svg>
                    </div>
                    <input
                      type={activeTab === "email" ? "email" : "tel"}
                      name={activeTab}
                      value={formData[activeTab]}
                      onChange={handleChange}
                      className="w-full bg-[#2b3654]/80 border border-[#4a5a8f] text-white pl-12 pr-4 py-3 rounded-lg focus:border-[#1d9bf0] focus:outline-none transition placeholder-white/40"
                      placeholder={
                        activeTab === "email"
                          ? "example@gamil.com"
                          : "+1 234 567 8900"
                      }
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-white text-sm mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-white/50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full bg-[#2b3654]/80 border border-[#4a5a8f] text-white pl-12 pr-12 py-3 rounded-lg focus:border-[#1d9bf0] focus:outline-none transition placeholder-white/40"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition"
                    >
                      {showPassword ? (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white font-semibold py-3.5 rounded-lg transition mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'LOGGING IN...' : 'LOGIN'}
                </button>
              </form>

              {/* Divider */}
              <div className="my-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/20"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-transparent text-white/70">
                      Or
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-[#2b3654]/80 border border-[#4a5a8f] hover:bg-[#2b3654] text-white py-3 rounded-lg flex items-center justify-center gap-2 transition">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#fff"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#fff"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#fff"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#fff"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    Continue with Google
                  </span>
                </button>
                <button className="bg-[#2b3654]/80 border border-[#4a5a8f] hover:bg-[#2b3654] text-white py-3 rounded-lg flex items-center justify-center gap-2 transition">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#fff"
                      d="M17.525 9H14V7c0-1.032.084-1.682 1.563-1.682h1.868v-3.18A26.065 26.065 0 0014.693 2C11.98 2 10 3.657 10 6.699V9H7v4l3-.001V22h4v-9.003l3.066-.001L17.525 9z"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    Continue with Apple
                  </span>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-3">
                <button className="bg-[#2b3654]/80 border border-[#4a5a8f] hover:bg-[#2b3654] text-white py-3 rounded-lg flex items-center justify-center gap-2 transition">
                  <svg className="w-5 h-5" fill="#fff" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-sm font-medium">
                    Continue with Facebook
                  </span>
                </button>
                <button className="bg-[#2b3654]/80 border border-[#4a5a8f] hover:bg-[#2b3654] text-white py-3 rounded-lg flex items-center justify-center gap-2 transition">
                  <svg className="w-5 h-5" fill="#fff" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  <span className="text-sm font-medium">
                    Continue with Twitter
                  </span>
                </button>
              </div>

              {/* Terms */}
              <p className="mt-6 text-center text-xs text-white/70">
                By proceeding further you agree to our{" "}
                <a
                  href="#"
                  className="text-white font-semibold hover:underline"
                >
                  Terms & conditions
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-white font-semibold hover:underline"
                >
                  Privacy policy
                </a>
              </p>
            </div>

            {/* Sign Up Link */}
            <p className="mt-6 text-center text-white">
              Don't have an account?{" "}
              <Link to="/signup" className="font-semibold hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
