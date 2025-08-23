// import React, { useState } from "react";
// import api from "./api";
// import "./Login.css";   // ✅ Import CSS

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");

//     try {
//       const res = await api.post("/users/login", form);
//       setMessage("Login successful!");
//       localStorage.setItem("token", res.data.token); // Store JWT
//     } catch (err) {
//       setError(err.response?.data?.message || "Invalid credentials.");
//     }
//   };

//   return (
//     <div className="login-container">   {/* ✅ Fullscreen */}
//       <div className="login-card">      {/* ✅ Center card */}
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">Login</button>
//         </form>

//         {message && <p style={{ color: "green" }}>{message}</p>}
//         {error && <p style={{ color: "red" }}>{error}</p>}
//       </div>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // ✅ For redirecting
// import api from "./api";
// import "./Login.css";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate(); // hook for navigation

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await api.post("/users/login", form);

//       // ✅ store JWT
//       localStorage.setItem("token", res.data.token);

//       // ✅ redirect to home page
//       navigate("/home");  // you can create a Home.jsx component for this
//     } catch (err) {
//       setError(err.response?.data?.message || "Invalid credentials.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">Login</button>
//         </form>

//         {error && <p style={{ color: "red" }}>{error}</p>}
//       </div>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import api from "./api";
// import "./Login.css";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       const res = await api.post("/users/login", form);
//       localStorage.setItem("token", res.data.token);
//       navigate("/home"); // ✅ after login redirect
//     } catch (err) {
//       setError(err.response?.data?.message || "Invalid credentials.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">Login</button>
//         </form>

//         {error && <p style={{ color: "red" }}>{error}</p>}

//         {/* Links under login */}
//         <p>
//           New user? <Link to="/register">Register</Link>
//         </p>
//         <p>
//           <Link to="/forgot-password">Forgot Password?</Link>
//         </p>
//       </div>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import api from "./api";
// import "./Login.css";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       // Login request
//       const res = await api.post("/users/login", form);

//       // Save token + userId
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("userId", res.data.userId);

//       // Check if profile exists
//       try {
//         await api.get(`/api/profiles/${res.data.userId}`, {
//           headers: { Authorization: `Bearer ${res.data.token}` },
//         });

//         // ✅ Profile exists
//         navigate("/home");
//       } catch (err) {
//         if (err.response && err.response.status === 404) {
//           // ❌ No profile found
//           navigate("/create-profile");
//         } else {
//           setError("Something went wrong while checking profile.");
//         }
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Invalid credentials.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">Login</button>
//         </form>

//         {error && <p style={{ color: "red" }}>{error}</p>}

//         <p>
//           New user? <Link to="/register">Register</Link>
//         </p>
//         <p>
//           <Link to="/forgot-password">Forgot Password?</Link>
//         </p>
//       </div>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import api from "./api";
// import "./Login.css";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       // Login request
//       const res = await api.post("/users/login", form);

//       // ✅ Save userId + token in localStorage
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("userId", res.data.userId);

//       // ✅ redirect after login
//       try {
//         await api.get(`/api/profiles/${res.data.userId}`, {
//           headers: { Authorization: `Bearer ${res.data.token}` },
//         });

//         // Profile exists → home
//         navigate("/home");
//       } catch (err) {
//         if (err.response && err.response.status === 404) {
//           // No profile → create profile page
//           navigate("/create-profile");
//         } else {
//           setError("Something went wrong while checking profile.");
//         }
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Invalid credentials.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">Login</button>
//         </form>

//         {error && <p style={{ color: "red" }}>{error}</p>}

//         <p>
//           New user? <Link to="/register">Register</Link>
//         </p>
//         <p>
//           <Link to="/forgot-password">Forgot Password?</Link>
//         </p>
//       </div>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import api from "./api";
// import "./Login.css";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       // Login request
//       const res = await api.post("/users/login", form);

//       // Save token + userId
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("userId", res.data.userId);

//       // Check if profile exists
//       try {
//         const profileRes = await api.get(
//           `/user-profiles/by-user/${res.data.userId}`,
//           { headers: { Authorization: `Bearer ${res.data.token}` } }
//         );

//         if (profileRes.data) {
//           navigate("/home"); // Profile exists → home
//         } else {
//           navigate("/create-profile"); // No profile → create
//         }
//       } catch (err) {
//         navigate("/create-profile"); // fallback
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Invalid credentials.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">Login</button>
//         </form>

//         {error && <p style={{ color: "red" }}>{error}</p>}

//         <p>
//           New user? <Link to="/register">Register</Link>
//         </p>
//         <p>
//           <Link to="/forgot-password">Forgot Password?</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

//  import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import api from "./api";
// import "./Login.css";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       // Login request
//       const res = await api.post("/users/login", form);

//       // Save token + userId
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("userId", res.data.userId);

//       // Check if profile exists
//       try {
//         const profileRes = await api.get(
//           `/user-profiles/by-user/${res.data.userId}`,
//           { headers: { Authorization: `Bearer ${res.data.token}` } }
//         );

//         if (profileRes.data) {
//           navigate("/home"); // Profile exists → home
//         } else {
//           navigate("/create-profile"); // No profile → create
//         }
//       } catch (err) {
//         navigate("/create-profile"); // fallback
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Invalid credentials.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">Login</button>
//         </form>

//         {error && <p style={{ color: "red" }}>{error}</p>}

//         <p>
//           New user? <Link to="/register">Register</Link>
//         </p>
//         <p>
//           <Link to="/forgot-password">Forgot Password?</Link>
//         </p>
//       </div>
//     </div>
//   );
// // }
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import api from "./api";
// import "./Login.css";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       // Login request
//       const res = await api.post("/users/login", form);

//       const { token, userId, role } = res.data;

//       // Save token, userId, and role in localStorage
//       localStorage.setItem("token", token);
//       localStorage.setItem("userId", userId);
//       localStorage.setItem("role", role);

//       // Check if profile exists
//       try {
//         const profileRes = await api.get(
//           `/user-profiles/by-user/${userId}`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );

//         navigate(profileRes.data ? "/home" : "/create-profile");
//       } catch {
//         navigate("/create-profile");
//       }
//     } catch (err) {
//       setError(err.response?.data || "Invalid credentials.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">Login</button>
//         </form>

//         {error && <p style={{ color: "red" }}>{error}</p>}

//         <p>
//           New user? <Link to="/register">Register</Link>
//         </p>
//         <p>
//           <Link to="/forgot-password">Forgot Password?</Link>
//         </p>
//       </div>
//     </div>
//   );
// // }
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import api from "./api";
// import "./Login.css";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       // Call login API
//       const res = await api.post("/users/login", form);

//       const { token, userId, role } = res.data;

//       // Save token, userId, role to localStorage
//       localStorage.setItem("token", token);
//       localStorage.setItem("userId", userId);
//       localStorage.setItem("role", role);

//       // Optionally check if user profile exists
//       try {
//         const profileRes = await api.get(`/user-profiles/by-user/${userId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         navigate(profileRes.data ? "/home" : "/create-profile");
//       } catch {
//         navigate("/create-profile");
//       }
//     } catch (err) {
//       setError(err.response?.data || "Invalid credentials.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">Login</button>
//         </form>

//         {error && <p style={{ color: "red" }}>{error}</p>}

//         <p>
//           New user? <Link to="/register">Register</Link>
//         </p>
//         <p>
//           <Link to="/forgot-password">Forgot Password?</Link>
//         </p>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "./api";
import "./Login.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Clear any previous token/user info
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");

    try {
      const res = await api.post("/users/login", form);

      const { token, userId, role } = res.data;

      // Save new token/user info
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("role", role);

      // Check if user profile exists
      try {
        const profileRes = await api.get(`/user-profiles/by-user/${userId}`);
        navigate(profileRes.data ? "/home" : "/create-profile");
      } catch {
        navigate("/create-profile");
      }
    } catch (err) {
      setError(err.response?.data || "Invalid credentials.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <p>
          New user? <Link to="/register">Register</Link>
        </p>
        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
}
