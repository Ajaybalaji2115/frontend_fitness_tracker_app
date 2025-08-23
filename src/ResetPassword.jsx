// import React, { useState } from "react";
// import api from "./api";

// export default function ResetPassword() {
//   const [email, setEmail] = useState("");
//   const [otpCode, setOtpCode] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setMessage("");

//     try {
//       const res = await api.post("/auth/reset-password", {
//         email,
//         otpCode,
//         newPassword,
//       });
//       setMessage(res.data.message || "Password reset successfully!");
//     } catch (err) {
//       setError(err.response?.data?.message || "Error resetting password.");
//     }
//   };

//   return (
//     <div>
//       <h2>Reset Password</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Enter OTP"
//           value={otpCode}
//           onChange={(e) => setOtpCode(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="New Password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Reset Password</button>
//       </form>

//       {message && <p style={{ color: "green" }}>{message}</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// }
// import React, { useState } from "react";
// import api from "./api";
// import "./ResetPassword.css";  // ✅ import css

// export default function ResetPassword() {
//   const [email, setEmail] = useState("");
//   const [otpCode, setOtpCode] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setMessage("");

//     try {
//       const res = await api.post("/api/auth/reset-password", {
//         email,
//         otpCode,
//         newPassword,
//       });
//       setMessage(res.data.message || "Password reset successfully!");
//     } catch (err) {
//       setError(err.response?.data?.message || "Error resetting password.");
//     }
//   };

//   return (
//     <div className="reset-container">
//       <div className="reset-card">
//         <h2>Reset Password</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otpCode}
//             onChange={(e) => setOtpCode(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="New Password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             required
//           />
//           <button type="submit">Reset Password</button>
//         </form>

//         {message && <p style={{ color: "green" }}>{message}</p>}
//         {error && <p style={{ color: "red" }}>{error}</p>}
//       </div>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import api from "./api";
// import "./ResetPassword.css";

// export default function ResetPassword() {
//   const location = useLocation();
//   const prefilledEmail = location.state?.email || ""; // ✅ get email from ForgotPassword
//   const [email, setEmail] = useState(prefilledEmail);
//   const [otpCode, setOtpCode] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setMessage("");

//     try {
//       const res = await api.post("/api/auth/reset-password", {
//         email,
//         otpCode,
//         newPassword,
//       });
//       setMessage(res.data.message || "Password reset successfully!");
//     } catch (err) {
//       setError(err.response?.data?.message || "Error resetting password.");
//     }
//   };

//   return (
//     <div className="reset-container">
//       <div className="reset-card">
//         <h2>Reset Password</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otpCode}
//             onChange={(e) => setOtpCode(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="New Password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             required
//           />
//           <button type="submit">Reset Password</button>
//         </form>

//         {message && <p style={{ color: "green" }}>{message}</p>}
//         {error && <p style={{ color: "red" }}>{error}</p>}
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "./api";
import "./ResetPassword.css";

export default function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();

  const prefilledEmail = location.state?.email || ""; // ✅ Email passed from ForgotPassword
  const [email, setEmail] = useState(prefilledEmail);
  const [otpCode, setOtpCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    // Simple frontend validation
    if (!email || !otpCode || !newPassword) {
      setError("All fields are required.");
      return;
    }

    try {
      const res = await api.post("/api/auth/reset-password", {
        email,
        otpCode,
        newPassword,
      });

      // ✅ Backend sends plain string (not JSON)
      if (
        res.status === 200 &&
        res.data.toLowerCase().includes("success")
      ) {
        setMessage(res.data || "Password reset successfully!");
        setTimeout(() => {
          navigate("/login"); // ✅ Go back to home/login page
        }, 1500);
      } else {
        setError(res.data || "Invalid OTP or error resetting password.");
      }
    } catch (err) {
      setError(err.response?.data || "Error resetting password.");
    }
  };

  return (
    <div className="reset-container">
      <div className="reset-card">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter OTP"
            value={otpCode}
            onChange={(e) => setOtpCode(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>

        {message && <p style={{ color: "green" }}>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}
