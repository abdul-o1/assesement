# API Integration Documentation

## Setup

1. **Configure API URL**
   - Copy `.env.example` to `.env`
   - Update `REACT_APP_API_URL` with your backend API URL
   ```bash
   cp .env.example .env
   ```

2. **API Endpoints Used**

### User Authentication

#### Signup
- **Endpoint**: `POST /user/signup`
- **Request Body**:
  ```json
  {
    "mobileNumber": "1234567089",  // or "email": "test@gmail.com"
    "password": "user123@",
    "rePassword": "user123@",
    "region": "+91"
  }
  ```
- **Response**: Returns user data and potentially requires OTP verification

#### Login
- **Endpoint**: `POST /user/loginWithPhone`
- **Request Body**:
  ```json
  {
    "mobileNumber": "1234567089",  // or "email": "test@gmail.com"
    "password": "user123@",
    "region": "+91"
  }
  ```
- **Response**: Returns authentication token and user data

#### OTP Verification
- **Endpoint**: `POST /user/{userId}`
- **Request Body**:
  ```json
  {
    "otp": "7486"
  }
  ```

#### Resend OTP
- **Endpoint**: `POST /user/resendOtp/{userId}`

#### Social Login
- **Endpoint**: `POST /user/socialLogin/add`
- **Request Body**:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "phone": "7983271589",
    "email": "john@gmail.com"
  }
  ```

## Features Implemented

### Login Page
- ✅ Toggle between Email and Mobile number login
- ✅ API integration with `/user/loginWithPhone`
- ✅ Error handling and display
- ✅ Loading states during API calls
- ✅ Token storage in localStorage
- ✅ Password visibility toggle
- ✅ OTP verification support (ready for implementation)
- 🔄 Social login buttons (UI ready, awaiting implementation)

### Signup Page
- ✅ Toggle between Email and Mobile number signup
- ✅ API integration with `/user/signup`
- ✅ Password confirmation validation
- ✅ Password strength validation (min 6 characters)
- ✅ Error handling and display
- ✅ Loading states during API calls
- ✅ OTP verification support (ready for implementation)
- 🔄 Social login buttons (UI ready, awaiting implementation)

## Data Flow

1. **User submits form** → Form data is validated
2. **API request** → Data sent to backend via API service
3. **Response handling**:
   - Success → Store token, redirect to home/verify OTP
   - Error → Display error message to user
4. **Token storage** → JWT token stored in localStorage
5. **User data** → User profile stored in localStorage

## Local Storage

The app stores the following data:
- `authToken` - JWT authentication token
- `userData` - User profile information

## API Service Functions

Located in `src/services/api.js`:

- `userSignup(signupData)` - User registration
- `userLoginWithPhone(loginData)` - User login
- `verifyOtp(userId, otp)` - OTP verification
- `resendOtp(userId)` - Resend OTP
- `socialLogin(socialData)` - Social authentication
- `setAuthToken(token)` - Store auth token
- `getAuthToken()` - Retrieve auth token
- `clearAuthToken()` - Remove auth token
- `setUserData(userData)` - Store user data
- `getUserData()` - Retrieve user data
- `clearUserData()` - Remove user data

## Next Steps for Social Login Implementation

To implement social login (Google, Facebook, Apple, Twitter):

1. Install required OAuth libraries
2. Configure OAuth credentials in respective platforms
3. Update social login buttons to trigger OAuth flow
4. Call `socialLogin()` API function with OAuth response data

## Error Handling

All API calls include comprehensive error handling:
- Network errors
- Invalid credentials
- Server errors
- Validation errors

Errors are displayed to users in a user-friendly format.
