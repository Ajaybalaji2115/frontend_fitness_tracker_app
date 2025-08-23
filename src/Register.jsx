// import React, { useState } from "react";
// import api from "./api";
// import "./Register.css";
// export default function Register() {
// const [form, setForm] = useState({ name: "", email: "", password: "" });

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
//       const res = await api.post("/users/register", form);
//       setMessage(res.data.message || "Registration successful!");
//     } catch (err) {
//       setError(err.response?.data?.message || "Error registering user.");
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//   type="text"
//   name="name"
//   placeholder="Name"
//   value={form.name}
//   onChange={handleChange}
//   required
// />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           required
//         />
//         {/* <select
//           name="role"
//           value={form.role}
//           onChange={handleChange}
//         >
//           <option value="USER">User</option>
//           <option value="ADMIN">Admin</option>
//         </select> */}
//         <button type="submit">Register</button>
//       </form>

//       {message && <p style={{ color: "green" }}>{message}</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// }
import React, { useState } from "react";
import api from "./api";
import "./Register.css";  // Import CSS

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await api.post("/users/register", form);
      setMessage(res.data.message || "Registration successful!");
    } catch (err) {
      setError(err.response?.data?.message || "Error registering user.");
    }
  };

  return (
    <div className="register-container"> 
      <div className="register-card">     
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
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
            placeholdeR="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>

        {message && <p style={{ color: "green" }}>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}
