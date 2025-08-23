// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "./api";
// import "./Profile.css";

// export default function ProfilePage() {
//   const [profile, setProfile] = useState(null);
//   const navigate = useNavigate();
//   const userId = localStorage.getItem("userId");
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await api.get(`/api/profiles/${userId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProfile(res.data);
//       } catch {
//         console.error("Failed to fetch profile");
//       }
//     };
//     fetchProfile();
//   }, [userId, token]);

//   if (!profile) return <p>Loading...</p>;

//   return (
//     <div className="profile-container">
//       <h2>Your Profile</h2>
//       <div className="profile-card">
//         <p><b>Age:</b> {profile.age}</p>
//         <p><b>Height:</b> {profile.height} cm</p>
//         <p><b>Weight:</b> {profile.weight} kg</p>
//         <p><b>Fitness Level:</b> {profile.fitnessLevel}</p>
//         <p><b>Goals:</b> {profile.fitnessGoals}</p>
//         <p><b>Health Conditions:</b> {profile.healthConditions}</p>
//         <p><b>Emergency Contact:</b> {profile.emergencyContact}</p>
//         <p><b>Phone:</b> {profile.phoneNumber}</p>
//       </div>
//       <button onClick={() => navigate("/edit-profile")}>Edit Profile</button>
//     </div>
//   );
// }
// import React, { useEffect, useState } from "react";
// import api from "./api"; // axios instance

// export default function ProfilePage() {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const userId = localStorage.getItem("userId");

//   useEffect(() => {
//     if (!userId) return;

//     api.get(`/user-profiles/${userId}`)
//       .then((res) => {
//         setProfile(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError("Could not fetch profile data.");
//         setLoading(false);
//         console.error(err);
//       });
//   }, [userId]);

//   if (loading) return <p>Loading profile...</p>;
//   if (error) return <p>{error}</p>;
//   if (!profile) return <p>No profile found. Please create one.</p>;

//   return (
//     <div className="profile-page">
//       <h2>My Profile</h2>
//       <p><strong>Name:</strong> {profile.name}</p>
//       <p><strong>Email:</strong> {profile.email}</p>
//       <p><strong>Age:</strong> {profile.age}</p>
//       <p><strong>Gender:</strong> {profile.gender}</p>
//       <p><strong>Fitness Level:</strong> {profile.fitnessLevel}</p>
//       <p><strong>Goals:</strong> {profile.goals}</p>
//       <p><strong>Health Conditions:</strong> {profile.healthConditions}</p>
//       <p><strong>Preferences:</strong> {profile.preferences}</p>
//       <p><strong>Height:</strong> {profile.height} cm</p>
//       <p><strong>Weight:</strong> {profile.weight} kg</p>
//       <p><strong>Emergency Contact:</strong> {profile.emergencyContact}</p>
//       <p><strong>Phone Number:</strong> {profile.phoneNumber}</p>
//       <p><strong>Fitness Goals:</strong> {profile.fitnessGoals}</p>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import api from "./api"; // axios instance
import './ProfilePage.css';
export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) return;

    // ✅ Updated API to fetch by userId
    api.get(`/user-profiles/by-user/${userId}`)
      .then((res) => {
        setProfile(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Could not fetch profile data.");
        setLoading(false);
        console.error(err);
      });
  }, [userId]);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>{error}</p>;
  if (!profile) return <p>No profile found. Please create one.</p>;

  return (
    <div className="profile-page">
      <h2>My Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Age:</strong> {profile.age}</p>
      <p><strong>Gender:</strong> {profile.gender}</p>
      <p><strong>Fitness Level:</strong> {profile.fitnessLevel}</p>
      <p><strong>Goals:</strong> {profile.goals}</p>
      <p><strong>Health Conditions:</strong> {profile.healthConditions}</p>
      <p><strong>Preferences:</strong> {profile.preferences}</p>
      <p><strong>Height:</strong> {profile.height} cm</p>
      <p><strong>Weight:</strong> {profile.weight} kg</p>
      <p><strong>Emergency Contact:</strong> {profile.emergencyContact}</p>
      <p><strong>Phone Number:</strong> {profile.phoneNumber}</p>
      <p><strong>Fitness Goals:</strong> {profile.fitnessGoals}</p>
    </div>
  );
}