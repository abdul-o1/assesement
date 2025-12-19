// API Base URL - Update this with your actual backend URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://easygo-backend-project.vercel.app/api/v1';

// Helper function to handle API requests
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  // Add authorization token if available
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// User Signup API
export const userSignup = async (signupData) => {
  const { email, mobile, password, rePassword, region = '+91' } = signupData;
  
  const payload = {
    password,
    rePassword,
    region,
  };

  // Add either email or mobile number
  if (email) {
    payload.email = email;
  } else if (mobile) {
    payload.mobileNumber = mobile;
  }

  return await apiRequest('/user/signup', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
};

// User Login with Phone API
export const userLoginWithPhone = async (loginData) => {
  const { email, mobile, password, region = '+91' } = loginData;
  
  const payload = {
    password,
    region,
  };

  // Add either email or mobile number
  if (email) {
    payload.email = email;
  } else if (mobile) {
    payload.mobileNumber = mobile;
  }

  return await apiRequest('/user/loginWithPhone', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
};

// Verify OTP API
export const verifyOtp = async (userId, otp) => {
  return await apiRequest(`/user/${userId}`, {
    method: 'POST',
    body: JSON.stringify({ otp }),
  });
};

// Resend OTP API
export const resendOtp = async (userId) => {
  return await apiRequest(`/user/resendOtp/${userId}`, {
    method: 'POST',
  });
};

// Social Login API
export const socialLogin = async (socialData) => {
  const { firstName, lastName, phone, email } = socialData;
  
  return await apiRequest('/user/socialLogin/add', {
    method: 'POST',
    body: JSON.stringify({
      firstName,
      lastName,
      phone,
      email,
    }),
  });
};

// Forgot Password API
export const forgotPassword = async (mobileNumber) => {
  return await apiRequest('/user/forget/Password', {
    method: 'POST',
    body: JSON.stringify({ mobileNumber }),
  });
};

// Store authentication token
export const setAuthToken = (token) => {
  localStorage.setItem('authToken', token);
};

// Get authentication token
export const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

// Remove authentication token (logout)
export const clearAuthToken = () => {
  localStorage.removeItem('authToken');
};

// Store user data
export const setUserData = (userData) => {
  localStorage.setItem('userData', JSON.stringify(userData));
};

// Get user data
export const getUserData = () => {
  const userData = localStorage.getItem('userData');
  return userData ? JSON.parse(userData) : null;
};

// Clear user data
export const clearUserData = () => {
  localStorage.removeItem('userData');
};
