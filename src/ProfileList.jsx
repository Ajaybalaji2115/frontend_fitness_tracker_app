import React, { useEffect, useState } from "react";
import UserProfileService from "./UserProfileService";
import ProfileForm from "./ProfileForm";

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const loadProfiles = async () => {
    const res = await UserProfileService.getAllProfiles();
    setProfiles(res.data);
  };

  useEffect(() => {
    loadProfiles();
  }, []);

  const handleDelete = async (id) => {
    await UserProfileService.deleteProfile(id);
    loadProfiles();
  };

  return (
    <div>
      <ProfileForm selectedProfile={selectedProfile} onSave={loadProfiles} />

      <h2>Profiles</h2>
      <ul>
        {profiles.map((p) => (
          <li key={p.id}>
            {p.name} ({p.age}, {p.gender}, {p.email}){" "}
            <button onClick={() => setSelectedProfile(p)}>Edit</button>
            <button onClick={() => handleDelete(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;
