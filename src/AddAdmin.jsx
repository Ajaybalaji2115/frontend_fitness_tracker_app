// import React, { useState } from "react";
// import axios from "axios";

// function AddAdmin() {
//   const [email, setEmail] = useState("");         // new admin email
//   const [password, setPassword] = useState("");   // new admin password
//   const [message, setMessage] = useState("");     // response message

//   // Creator credentials (hardcoded)
//   const creatorEmail = "ajaybalaji123@gmail.com";
//   const creatorPassword = "1234567";

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         `http://localhost:8080/api/add-admin?creatorEmail=${creatorEmail}&creatorPassword=${creatorPassword}`,
//         {
//           name: "Admin User", // include name if required by backend
//           email,
//           password
//         },
//         {
//           headers: {
//             "Content-Type": "application/json"
//           }
//         }
//       );
//       setMessage(response.data); // success or unauthorized message
//       setEmail("");
//       setPassword("");
//     } catch (error) {
//       console.error(error);
//       setMessage(
//         error.response?.data || "Error creating admin. Please try again."
//       );
//     }
//   };

//   return (
//     <div style={{
//       maxWidth: "400px",
//       margin: "50px auto",
//       padding: "20px",
//       border: "1px solid #ccc",
//       borderRadius: "10px",
//       boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//       fontFamily: "Arial, sans-serif"
//     }}>
//       <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#ff6600" }}>Add Admin</h2>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: "15px" }}>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{
//               width: "100%",
//               padding: "8px",
//               marginTop: "5px",
//               borderRadius: "5px",
//               border: "1px solid #ccc"
//             }}
//             placeholder="Enter admin email"
//           />
//         </div>
//         <div style={{ marginBottom: "15px" }}>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{
//               width: "100%",
//               padding: "8px",
//               marginTop: "5px",
//               borderRadius: "5px",
//               border: "1px solid #ccc"
//             }}
//             placeholder="Enter admin password"
//           />
//         </div>
//         <button
//           type="submit"
//           style={{
//             width: "100%",
//             padding: "10px",
//             backgroundColor: "#ff6600",
//             color: "#fff",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//             fontWeight: "bold"
//           }}
//         >
//           Add Admin
//         </button>
//       </form>
//       {message && (
//         <p style={{
//           marginTop: "15px",
//           textAlign: "center",
//           color: message.includes("successfully") ? "green" : "red",
//           fontWeight: "bold"
//         }}>
//           {message}
//         </p>
//       )}
//     </div>
//   );
// }

// // export default AddAdmin;
// import React, { useState } from "react";
// import axios from "axios";
// import "./AddAdmin.css";

// function AddAdmin() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");
//   const [message, setMessage] = useState("");

//   // Hardcoded creator credentials
//   const creatorEmail = "ajaybalaji123@gmail.com";
//   const creatorPassword = "1234567";

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         `http://localhost:8080/api/add-user?creatorEmail=${creatorEmail}&creatorPassword=${creatorPassword}&role=${role}`,
//         { name, email, password },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       setMessage({ text: response.data, type: "success" });
//       setName("");
//       setEmail("");
//       setPassword("");
//       setRole("");
//     } catch (error) {
//       setMessage({
//         text: error.response?.data || "Error creating user. Please try again.",
//         type: "error",
//       });
//     }
//   };

//   return (
//     <div className="add-admin-container">
//       <h2 className="add-admin-title">Add User</h2>
//       <form className="add-admin-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label className="form-label">Name</label>
//           <input
//             type="text"
//             className="form-input"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter name"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label className="form-label">Email</label>
//           <input
//             type="email"
//             className="form-input"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter email"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label className="form-label">Password</label>
//           <input
//             type="password"
//             className="form-input"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter password"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label className="form-label">Role</label>
//           <select
//             className="form-input"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             required
//           >
//             <option value="">Select role</option>
//             <option value="ADMIN">Admin</option>
//             <option value="TRAINER">Trainer</option>
//           </select>
//         </div>
//         <button type="submit" className="submit-button">
//           Add User
//         </button>
//       </form>
//       {message && (
//         <p className={`message ${message.type === "success" ? "success" : "error"}`}>
//           {message.text}
//         </p>
//       )}
//     </div>
//   );
// }

// export default AddAdmin;
import React, { useState } from "react";
import axios from "axios";
import "./AddAdmin.css";

function AddAdmin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  // Hardcoded creator credentials
  const creatorEmail = "ajaybalaji123@gmail.com";
  const creatorPassword = "1234567";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post(
        `http://localhost:8080/api/add-user?creatorEmail=${creatorEmail}&creatorPassword=${creatorPassword}&role=${role}`,
        { name, email, password }, // password in plain text
        { headers: { "Content-Type": "application/json" } }
      );

      setMessage({ text: response.data, type: "success" });
      // Reset form
      setName("");
      setEmail("");
      setPassword("");
      setRole("");
    } catch (error) {
      setMessage({
        text: error.response?.data || "Error creating user. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <div className="add-admin-container">
      <h2 className="add-admin-title">Add User</h2>
      <form className="add-admin-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Role</label>
          <select
            className="form-input"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select role</option>
            <option value="ADMIN">Admin</option>
            <option value="TRAINER">Trainer</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Add User
        </button>
      </form>

      {message && (
        <p className={`message ${message.type === "success" ? "success" : "error"}`}>
          {message.text}
        </p>
      )}
    </div>
  );
}

export default AddAdmin;
