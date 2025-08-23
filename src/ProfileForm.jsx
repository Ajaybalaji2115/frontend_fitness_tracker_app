// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import api from "./api";
// import "./Profile.css";

// export default function ProfileForm() {
//   const [profile, setProfile] = useState({
//     age: "",
//     height: "",
//     weight: "",
//     fitnessLevel: "BEGINNER",
//     fitnessGoals: "",
//     healthConditions: "",
//     emergencyContact: "",
//     phoneNumber: "",
//   });

//   const navigate = useNavigate();
//   const location = useLocation();
//   const userId = localStorage.getItem("userId");
//   const token = localStorage.getItem("token");
//   const isEditing = location.pathname.includes("edit-profile");

//   useEffect(() => {
//     if (isEditing) {
//       api
//         .get(`/api/profiles/${userId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         .then((res) => setProfile(res.data))
//         .catch(() => console.error("Failed to load profile"));
//     }
//   }, [isEditing, userId, token]);

//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isEditing) {
//         await api.put(`/api/profiles/${userId}?password=12345678`, profile, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//          navigate("/home");
//       } else {
//         await api.post(`/api/profiles/${userId}?password=12345678`, profile, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }
//       navigate("/home");
//     } catch {
//       alert("Failed to save profile.");
//     }
//   };

//   return (
//     <div className="profile-form-container">
//       <h2>{isEditing ? "Edit Profile" : "Create Profile"}</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="number"
//           name="age"
//           placeholder="Age"
//           value={profile.age}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="number"
//           name="height"
//           placeholder="Height (cm)"
//           value={profile.height}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="number"
//           name="weight"
//           placeholder="Weight (kg)"
//           value={profile.weight}
//           onChange={handleChange}
//           required
//         />
//         <select
//           name="fitnessLevel"
//           value={profile.fitnessLevel}
//           onChange={handleChange}
//         >
//           <option value="BEGINNER">Beginner</option>
//           <option value="INTERMEDIATE">Intermediate</option>
//           <option value="ADVANCED">Advanced</option>
//         </select>
//         <input
//           type="text"
//           name="fitnessGoals"
//           placeholder="Fitness Goals"
//           value={profile.fitnessGoals}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="healthConditions"
//           placeholder="Health Conditions"
//           value={profile.healthConditions}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="emergencyContact"
//           placeholder="Emergency Contact"
//           value={profile.emergencyContact}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="phoneNumber"
//           placeholder="Phone Number"
//           value={profile.phoneNumber}
//           onChange={handleChange}
//         />
//         <button type="submit">{isEditing ? "Update" : "Create"}</button>
//       </form>
//     </div>
//   );
// }
// // import React, { useState, useEffect } from "react";
// // import UserProfileService from "./UserProfileService";

// // const ProfileForm = ({ userId, onClose, existingProfile }) => {
// //   const [form, setForm] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     password: "",
// //     age: "",
// //     gender: ""
// //   });

// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     if (existingProfile) {
// //       setForm(existingProfile);
// //     }
// //   }, [existingProfile]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setForm({ ...form, [name]: value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     try {
// //       if (existingProfile) {
// //         await UserProfileService.updateProfile(userId, form);
// //         alert("Profile updated successfully!");
// //       } else {
// //         await UserProfileService.createProfile(userId, form);
// //         alert("Profile created successfully!");
// //       }
// //       if (onClose) onClose();
// //     } catch (err) {
// //       console.error("Error saving profile:", err);
// //       alert("Error saving profile: " + (err.response?.data || err.message));
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="profile-form">
// //       <input
// //         name="firstName"
// //         value={form.firstName}
// //         onChange={handleChange}
// //         placeholder="First Name"
// //         required
// //       />
// //       <input
// //         name="lastName"
// //         value={form.lastName}
// //         onChange={handleChange}
// //         placeholder="Last Name"
// //         required
// //       />
// //       <input
// //         name="email"
// //         value={form.email}
// //         onChange={handleChange}
// //         placeholder="Email"
// //         type="email"
// //         required
// //       />
// //       <input
// //         name="password"
// //         value={form.password}
// //         onChange={handleChange}
// //         placeholder="Password"
// //         type="password"
// //         required={!existingProfile} // required only on create
// //       />
// //       <input
// //         name="age"
// //         value={form.age}
// //         onChange={handleChange}
// //         placeholder="Age"
// //         type="number"
// //       />
// //       <select name="gender" value={form.gender} onChange={handleChange}>
// //         <option value="">Select Gender</option>
// //         <option value="MALE">Male</option>
// //         <option value="FEMALE">Female</option>
// //         <option value="OTHER">Other</option>
// //       </select>

// //       <button type="submit" disabled={loading}>
// //         {existingProfile ? "Update Profile" : "Create Profile"}
// //       </button>
// //     </form>
// //   );
// // };

// // export default ProfileForm;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "./api";

// export default function ProfileForm() {
//   const [form, setForm] = useState({
//     age: "",
//     fitnessLevel: "",
//     goals: "",
//     healthConditions: "",
//     preferences: "",
//   });

//   const navigate = useNavigate();
//   const userId = localStorage.getItem("userId");
//   const token = localStorage.getItem("token");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await api.post(
//         "/user-profiles",
//         { ...form, userId },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       navigate("/profile"); // after creation, go to profile page
//     } catch (err) {
//       console.error("Error creating profile:", err);
//       alert("Failed to create profile. Try again.");
//     }
//   };

//   return (
//     <div className="profile-form-container">
//       <h2>Create Your Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="number"
//           name="age"
//           placeholder="Age"
//           value={form.age}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="fitnessLevel"
//           placeholder="Fitness Level (Beginner, Intermediate, Advanced)"
//           value={form.fitnessLevel}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="goals"
//           placeholder="Goals (e.g., Weight Loss, Muscle Gain)"
//           value={form.goals}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="healthConditions"
//           placeholder="Health Conditions"
//           value={form.healthConditions}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="preferences"
//           placeholder="Preferences (Diet, Exercise type, etc.)"
//           value={form.preferences}
//           onChange={handleChange}
//         />
//         <button type="submit">Save Profile</button>
//       </form>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "./api"; // axios instance

// export default function ProfileForm({ userId }) {
//   const [form, setForm] = useState({
//     age: "",
//     fitnessLevel: "",
//     goals: "",
//     healthConditions: "",
//     preferences: "",
//     height: "",
//     weight: ""
//   });

//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       await api.post("/user-profiles", { 
//         ...form, 
//         userId: Number(userId) // ensure userId is a number
//       });
//       navigate("/home"); // after creating profile, go home
//     } catch (err) {
//       console.error("Error creating profile:", err);
//       setError(err.response?.data?.message || "Failed to create profile.");
//     }
//   };

//   return (
//     <div>
//       <h2>Create Your Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="age" placeholder="Age" value={form.age} onChange={handleChange} required />
//         <input name="fitnessLevel" placeholder="Fitness Level" value={form.fitnessLevel} onChange={handleChange} required />
//         <input name="goals" placeholder="Goals" value={form.goals} onChange={handleChange} required />
//         <input name="healthConditions" placeholder="Health Conditions" value={form.healthConditions} onChange={handleChange} />
//         <input name="preferences" placeholder="Preferences" value={form.preferences} onChange={handleChange} />
//         <input name="height" placeholder="Height (cm)" value={form.height} onChange={handleChange} required />
//         <input name="weight" placeholder="Weight (kg)" value={form.weight} onChange={handleChange} required />
//         <button type="submit">Save Profile</button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// }
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "./api"; // axios instance

// export default function ProfileForm({ userId }) {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     age: "",
//     gender: "",
//     fitnessLevel: "",
//     goals: "",
//     healthConditions: "",
//     preferences: "",
//     height: "",
//     weight: "",
//     emergencyContact: "",
//     phoneNumber: "",
//     fitnessGoals: "",
//   });

//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // ✅ If editing existing profile, fetch data
//   useEffect(() => {
//     if (!userId) return;

//     api.get(`/user-profiles/by-user/${userId}`)
//       .then((res) => {
//         if (res.data) setForm(res.data);
//       })
//       .catch((err) => console.error("Failed to fetch profile:", err));
//   }, [userId]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       if (form.profileId) {
//         // ✅ Update existing profile
//         await api.put(`/user-profiles/${form.profileId}`, { ...form });
//       } else {
//         // ✅ Create new profile
//         await api.post("/user-profiles", { ...form, userId: Number(userId) });
//       }
//       navigate("/home");
//     } catch (err) {
//       console.error("Error saving profile:", err);
//       setError(err.response?.data?.message || "Failed to save profile.");
//     }
//   };

//   return (
//     <div>
//       <h2>{form.profileId ? "Edit Profile" : "Create Your Profile"}</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
//         <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
//         <input name="age" placeholder="Age" value={form.age} onChange={handleChange} required />
//         <input name="gender" placeholder="Gender" value={form.gender} onChange={handleChange} />
//         <input name="fitnessLevel" placeholder="Fitness Level" value={form.fitnessLevel} onChange={handleChange} required />
//         <input name="goals" placeholder="Goals" value={form.goals} onChange={handleChange} required />
//         <input name="healthConditions" placeholder="Health Conditions" value={form.healthConditions} onChange={handleChange} />
//         <input name="preferences" placeholder="Preferences" value={form.preferences} onChange={handleChange} />
//         <input name="height" placeholder="Height (cm)" value={form.height} onChange={handleChange} required />
//         <input name="weight" placeholder="Weight (kg)" value={form.weight} onChange={handleChange} required />
//         <input name="emergencyContact" placeholder="Emergency Contact" value={form.emergencyContact} onChange={handleChange} />
//         <input name="phoneNumber" placeholder="Phone Number" value={form.phoneNumber} onChange={handleChange} />
//         <input name="fitnessGoals" placeholder="Fitness Goals" value={form.fitnessGoals} onChange={handleChange} />
//         <button type="submit">{form.profileId ? "Update Profile" : "Save Profile"}</button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// }
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "./api";

// export default function ProfileForm() {
//   const userId = localStorage.getItem("userId");
//   const token = localStorage.getItem("token");

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     age: "",
//     gender: "",
//     fitnessLevel: "",
//     goals: "",
//     healthConditions: "",
//     preferences: "",
//     height: "",
//     weight: "",
//     emergencyContact: "",
//     phoneNumber: "",
//     fitnessGoals: "",
//   });

//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // Fetch existing profile
//   useEffect(() => {
//     if (!userId) return;

//     api.get(`/user-profiles/by-user/${userId}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then((res) => {
//         if (res.data) setForm(res.data);
//       })
//       .catch((err) => console.error("Failed to fetch profile:", err));
//   }, [userId, token]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       if (form.profileId) {
//         // Update existing profile
//         await api.put(`/user-profiles/${form.profileId}`, form, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//       } else {
//         // Create new profile
//         await api.post("/user-profiles", { ...form, userId: Number(userId) }, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//       }
//       navigate("/home");
//     } catch (err) {
//       console.error("Error saving profile:", err);
//       setError(err.response?.data?.message || "Failed to save profile.");
//     }
//   };

//   return (
//     <div>
//       <h2>{form.profileId ? "Edit Profile" : "Create Your Profile"}</h2>
//       <form onSubmit={handleSubmit}>
//         {Object.keys(form).map((key) => (
//           key !== "profileId" && (
//             <input
//               key={key}
//               name={key}
//               placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
//               value={form[key]}
//               onChange={handleChange}
//               required={["name","email","age","fitnessLevel","goals","height","weight"].includes(key)}
//             />
//           )
//         ))}
//         <button type="submit">{form.profileId ? "Update Profile" : "Save Profile"}</button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// }
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "./api";

// export default function ProfileForm() {
//   const userId = localStorage.getItem("userId");
//   const token = localStorage.getItem("token");

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     age: "",
//     gender: "",
//     fitnessLevel: "",
//     goals: "",
//     healthConditions: "",
//     preferences: "",
//     height: "",
//     weight: "",
//     emergencyContact: "",
//     phoneNumber: "",
//     fitnessGoals: "",
//   });

//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // Fetch existing profile if editing
//   useEffect(() => {
//     if (!userId) return;

//     api.get(`/user-profiles/by-user/${userId}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((res) => {
//         if (res.data) setForm(res.data);
//       })
//       .catch((err) => console.error("Failed to fetch profile:", err));
//   }, [userId, token]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       if (form.profileId) {
//         // Update existing profile
//         await api.put(`/user-profiles/${form.profileId}`, form, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       } else {
//         // Create new profile
//         await api.post("/user-profiles", { ...form, userId: Number(userId) }, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }
//       navigate("/profile"); // Go back to profile page
//     } catch (err) {
//       console.error("Error saving profile:", err);
//       setError(err.response?.data?.message || "Failed to save profile.");
//     }
//   };

//   return (
//     <div className="profile-form">
//       <h2>{form.profileId ? "Edit Profile" : "Create Your Profile"}</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Name and Email fields */}
//         <input
//           name="name"
//           placeholder="Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />

//         {/* Other fields */}
//         <input name="age" placeholder="Age" value={form.age} onChange={handleChange} required />
//         <input name="gender" placeholder="Gender" value={form.gender} onChange={handleChange} />
//         <input name="fitnessLevel" placeholder="Fitness Level" value={form.fitnessLevel} onChange={handleChange} required />
//         <input name="goals" placeholder="Goals" value={form.goals} onChange={handleChange} required />
//         <input name="healthConditions" placeholder="Health Conditions" value={form.healthConditions} onChange={handleChange} />
//         <input name="preferences" placeholder="Preferences" value={form.preferences} onChange={handleChange} />
//         <input name="height" placeholder="Height (cm)" value={form.height} onChange={handleChange} required />
//         <input name="weight" placeholder="Weight (kg)" value={form.weight} onChange={handleChange} required />
//         <input name="emergencyContact" placeholder="Emergency Contact" value={form.emergencyContact} onChange={handleChange} />
//         <input name="phoneNumber" placeholder="Phone Number" value={form.phoneNumber} onChange={handleChange} />
//         <input name="fitnessGoals" placeholder="Fitness Goals" value={form.fitnessGoals} onChange={handleChange} />

//         <button type="submit">{form.profileId ? "Update Profile" : "Save Profile"}</button>
//       </form>

//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";
import "./ProfileForm.css"; // Assuming you have a CSS file for styling
export default function ProfileForm() {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const [form, setForm] = useState({
    profileId: null,   // ✅ make sure profileId is tracked
    name: "",
    email: "",
    age: "",
    gender: "",
    fitnessLevel: "",
    goals: "",
    healthConditions: "",
    preferences: "",
    height: "",
    weight: "",
    emergencyContact: "",
    phoneNumber: "",
    fitnessGoals: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch existing profile
  useEffect(() => {
    if (!userId) return;

    api.get(`/user-profiles/by-user/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (res.data) {
          setForm({ ...res.data }); // ✅ include profileId
        }
      })
      .catch((err) => console.error("Failed to fetch profile:", err));
  }, [userId, token]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (form.profileId) {
        // ✅ Update existing profile using profileId
        await api.put(`/user-profiles/${form.profileId}`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        // ✅ Create new profile
        await api.post("/user-profiles", { ...form, userId: Number(userId) }, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      navigate("/profile"); // redirect to profile page
    } catch (err) {
      console.error("Error saving profile:", err);
      setError(err.response?.data?.message || "Failed to save profile.");
    }
  };

  return (
    <div className="profile-form">
      <h2>{form.profileId ? "Edit Profile" : "Create Your Profile"}</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="age" placeholder="Age" value={form.age} onChange={handleChange} required />
        <input name="gender" placeholder="Gender" value={form.gender} onChange={handleChange} />
        <input name="fitnessLevel" placeholder="Fitness Level" value={form.fitnessLevel} onChange={handleChange} required />
        <input name="goals" placeholder="Goals" value={form.goals} onChange={handleChange} required />
        <input name="healthConditions" placeholder="Health Conditions" value={form.healthConditions} onChange={handleChange} />
        <input name="preferences" placeholder="Preferences" value={form.preferences} onChange={handleChange} />
        <input name="height" placeholder="Height (cm)" value={form.height} onChange={handleChange} required />
        <input name="weight" placeholder="Weight (kg)" value={form.weight} onChange={handleChange} required />
        <input name="emergencyContact" placeholder="Emergency Contact" value={form.emergencyContact} onChange={handleChange} />
        <input name="phoneNumber" placeholder="Phone Number" value={form.phoneNumber} onChange={handleChange} />
        <input name="fitnessGoals" placeholder="Fitness Goals" value={form.fitnessGoals} onChange={handleChange} />
        <button type="submit">{form.profileId ? "Update Profile" : "Save Profile"}</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
