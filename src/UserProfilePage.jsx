
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./UserProfilePage.css";

// const API_URL = "http://localhost:8080/user-profiles";

// const UserProfilePage = () => {
//   const [profile, setProfile] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     profileId: "",
//     userId: "",
//     age: "",
//     fitnessLevel: "",
//     goals: "",
//     healthConditions: "",
//     preferences: "",
//   });

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const fetchProfile = async () => {
//     try {
//       const response = await axios.get(${API_URL}/1); // Hardcoded ID for simplicity
//       setProfile(response.data);
//       setFormData(response.data);
//     } catch (error) {
//       console.error("Error fetching user profile:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = async (e) => {
//     e.preventDefault();
//     try {
//       if (profile) {
//         await axios.put(${API_URL}/${profile.profileId}, formData);
//       } else {
//         await axios.post(API_URL, formData);
//       }
//       setIsEditing(false);
//       fetchProfile();
//     } catch (error) {
//       console.error("Error saving profile:", error);
//     }
//   };

//   const renderProfileView = () => (
//     <div className="profile-view">
//       <h3>Your Profile</h3>
//       <p><strong>User ID:</strong> {profile.userId}</p>
//       <p><strong>Age:</strong> {profile.age}</p>
//       <p><strong>Fitness Level:</strong> {profile.fitnessLevel}</p>
//       <p><strong>Goals:</strong> {profile.goals}</p>
//       <p><strong>Health Conditions:</strong> {profile.healthConditions}</p>
//       <p><strong>Preferences:</strong> {profile.preferences}</p>
//       <button onClick={() => setIsEditing(true)}>Edit Profile</button>
//     </div>
//   );

//   const renderProfileForm = () => (
//     <form onSubmit={handleSave} className="profile-form">
//       <h3>{profile ? "Edit Profile" : "Create Profile"}</h3>
//       <input
//         type="text"
//         name="age"
//         placeholder="Age"
//         value={formData.age}
//         onChange={handleInputChange}
//       />
//       <input
//         type="text"
//         name="fitnessLevel"
//         placeholder="Fitness Level"
//         value={formData.fitnessLevel}
//         onChange={handleInputChange}
//       />
//       <textarea
//         name="goals"
//         placeholder="Goals"
//         value={formData.goals}
//         onChange={handleInputChange}
//       />
//       <textarea
//         name="healthConditions"
//         placeholder="Health Conditions"
//         value={formData.healthConditions}
//         onChange={handleInputChange}
//       />
//       <textarea
//         name="preferences"
//         placeholder="Preferences"
//         value={formData.preferences}
//         onChange={handleInputChange}
//       />
//       <div className="form-actions">
//         <button type="submit">Save</button>
//         <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
//       </div>
//     </form>
//   );

//   return (
//     <div className="user-profile-page">
//       <h2>User Profile</h2>
//       {isEditing || !profile ? renderProfileForm() : renderProfileView()}
//     </div>
//   );
// };

// export default UserProfilePage;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserProfilePage.css";

const API_URL = "http://localhost:8080/user-profiles";

const UserProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    profileId: "",
    userId: "",
    age: "",
    fitnessLevel: "",
    goals: "",
    healthConditions: "",
    preferences: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`${API_URL}/1`); // Fixed template literal
      setProfile(response.data);
      setFormData(response.data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (profile) {
        await axios.put(`${API_URL}/${profile.profileId}`, formData);
      } else {
        await axios.post(API_URL, formData);
      }
      setIsEditing(false);
      fetchProfile();
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  const renderProfileView = () => (
    <div className="profile-view">
      <h3>Your Profile</h3>
      <p><strong>User ID:</strong> {profile.userId}</p>
      <p><strong>Age:</strong> {profile.age}</p>
      <p><strong>Fitness Level:</strong> {profile.fitnessLevel}</p>
      <p><strong>Goals:</strong> {profile.goals}</p>
      <p><strong>Health Conditions:</strong> {profile.healthConditions}</p>
      <p><strong>Preferences:</strong> {profile.preferences}</p>
      <button onClick={() => setIsEditing(true)}>Edit Profile</button>
    </div>
  );

  const renderProfileForm = () => (
    <form onSubmit={handleSave} className="profile-form">
      <h3>{profile ? "Edit Profile" : "Create Profile"}</h3>
      <input
        type="text"
        name="age"
        placeholder="Age"
        value={formData.age || ""}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="fitnessLevel"
        placeholder="Fitness Level"
        value={formData.fitnessLevel || ""}
        onChange={handleInputChange}
      />
      <textarea
        name="goals"
        placeholder="Goals"
        value={formData.goals || ""}
        onChange={handleInputChange}
      />
      <textarea
        name="healthConditions"
        placeholder="Health Conditions"
        value={formData.healthConditions || ""}
        onChange={handleInputChange}
      />
      <textarea
        name="preferences"
        placeholder="Preferences"
        value={formData.preferences || ""}
        onChange={handleInputChange}
      />
      <div className="form-actions">
        <button type="submit">Save</button>
        <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    </form>
  );

  return (
    <div className="user-profile-page">
      <h2>User Profile</h2>
      {isEditing || !profile ? renderProfileForm() : renderProfileView()}
    </div>
  );
};

export default UserProfilePage;
