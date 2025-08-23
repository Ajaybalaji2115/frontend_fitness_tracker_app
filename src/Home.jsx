import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Fitness Tracker</h1>
        <div className="profile-icon" onClick={handleProfileClick}>
          👤
        </div>
      </header>
      <main>
        <p>This is your home page content.</p>
      </main>
    </div>
  );
}

//yes