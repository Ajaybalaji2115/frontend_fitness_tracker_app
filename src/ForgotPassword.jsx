// import React, { useState } from "react";
// import api from "./api";

// export default function ForgotPassword() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setMessage("");

//     try {
//       const res = await api.post("/auth/forgot-password", { email });
//       setMessage(res.data.message || "OTP sent to your email!");
//     } catch (err) {
//       setError(err.response?.data?.message || "Error sending OTP.");
//     }
//   };

//   return (
//     <div>
//       <h2>Forgot Password</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="submit">Send OTP</button>
//       </form>

//       {message && <p style={{ color: "green" }}>{message}</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// }
// import React, { useState } from "react";
// import api from "./api";
// import "./ForgotPassword.css";   // ✅ Import CSS

// export default function ForgotPassword() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setMessage("");

//     try {
//       const res = await api.post("/api/auth/forgot-password", { email });
//       setMessage(res.data.message || "OTP sent to your email!");
//     } catch (err) {
//       setError(err.response?.data?.message || "Error sending OTP.");
//     }
//   };

//   return (
//     <div className="forgot-container">  
//       <div className="forgot-card">     
//         <h2>Forgot Password</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <button type="submit">Send OTP</button>
//         </form>

//         {message && <p style={{ color: "green" }}>{message}</p>}
//         {error && <p style={{ color: "red" }}>{error}</p>}
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const res = await api.post("/api/auth/forgot-password", { email });

      // ✅ Backend sends plain string (not JSON)
      if (res.status === 200 && res.data.toLowerCase().includes("otp")) {
        setMessage(res.data); // "OTP sent to your email!"
        setTimeout(() => {
          navigate("/reset-password", { state: { email } });
        }, 1500);
      } else {
        setError(res.data || "This email is not registered.");
      }
    } catch (err) {
      setError(err.response?.data || "Error sending OTP.");
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send OTP</button>
        </form>

        {message && <p style={{ color: "green" }}>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}
