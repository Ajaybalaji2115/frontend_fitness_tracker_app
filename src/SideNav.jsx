
// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import "./SideNav.css";

// function SideNav() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userId");
//     localStorage.removeItem("role");
//     navigate("/login");
//   };

//   return (
//     <div className="sidenav">
//       <h2 className="logo">🏋️ FitTrack</h2>
//       <nav>
//         <NavLink to="/home" className="nav-link">Home</NavLink>
//         <NavLink to="/profile" className="nav-link">Profile</NavLink>
//         <NavLink to="/fitness-goals" className="nav-link">Fitness Goals</NavLink>

//         <h4 className="section-title">Workouts</h4>
//         <NavLink to="/exercise-library" className="nav-link">Exercise Library</NavLink>
//         <NavLink to="/workout-assignment" className="nav-link">Workout Assignment</NavLink>

//         <h4 className="section-title">Progress</h4>
//         <NavLink to="/progress-chart" className="nav-link">Progress Chart</NavLink>
//         <NavLink to="/progress-input" className="nav-link">Add Progress</NavLink>

//         <NavLink to="/notifications" className="nav-link">🔔 Notifications</NavLink>
//       </nav>

//       <div className="footer">
//         <button className="logout-btn" onClick={handleLogout}>Logout</button>
//       </div>
//     </div>
//   );
// }

// export default SideNav;
// //yes
// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import "./SideNav.css";

// function SideNav() {
//   const navigate = useNavigate();
//   const role = localStorage.getItem("role"); // Get role from localStorage

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userId");
//     localStorage.removeItem("role");
//     navigate("/login");
//   };

//   return (
//     <div className="sidenav">
//       <h2 className="logo">🏋️ FitTrack</h2>
//       <nav>
//         <NavLink to="/home" className="nav-link">Home</NavLink>
//         <NavLink to="/profile" className="nav-link">Profile</NavLink>
//         <NavLink to="/fitness-goals" className="nav-link">Fitness Goals</NavLink>

//         <h4 className="section-title">Workouts</h4>
//         <NavLink to="/exercise-library" className="nav-link">Exercise Library</NavLink>
//         <NavLink to="/workout-assignment" className="nav-link">Workout Assignment</NavLink>

//         <h4 className="section-title">Progress</h4>
//         <NavLink to="/progress-chart" className="nav-link">Progress Chart</NavLink>
//         <NavLink to="/progress-input" className="nav-link">Add Progress</NavLink>

//         <NavLink to="/notifications" className="nav-link">🔔 Notifications</NavLink>

//         {/* Admin-only link */}
//         {role === "ADMIN" && (
//           <>
//             <h4 className="section-title">Admin</h4>
//             <NavLink to="/audit-logs" className="nav-link">Audit Logs</NavLink>
//           </>
//         )}
//       </nav>

//       <div className="footer">
//         <button className="logout-btn" onClick={handleLogout}>Logout</button>
//       </div>
//     </div>
//   );
// }

// // export default SideNav;
// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import "./SideNav.css";

// function SideNav() {
//   const navigate = useNavigate();
//   const role = localStorage.getItem("role"); // Get role from localStorage

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userId");
//     localStorage.removeItem("role");
//     navigate("/login");
//   };

//   return (
//     <div className="sidenav">
//       <h2 className="logo">🏋️ FitTrack</h2>
//       <nav>
//         <NavLink to="/home" className="nav-link">Home</NavLink>
//         <NavLink to="/profile" className="nav-link">Profile</NavLink>
//         <NavLink to="/fitness-goals" className="nav-link">Fitness Goals</NavLink>

//         <h4 className="section-title">Workouts</h4>
//         <NavLink to="/exercise-library" className="nav-link">Exercise Library</NavLink>
//         <NavLink to="/workout-assignment" className="nav-link">Workout Assignment</NavLink>

//         <h4 className="section-title">Progress</h4>
//         <NavLink to="/progress-chart" className="nav-link">Progress Chart</NavLink>
//         {/* <NavLink to="/progress-input" className="nav-link">Add Progress</NavLink> */}

//         <NavLink to="/notifications" className="nav-link">🔔 Notifications</NavLink>

//         {role === "ADMIN" && (
//           <>
//             <h4 className="section-title">Admin</h4>
//             <NavLink to="/audit-logs" className="nav-link">Audit Logs</NavLink>
//           </>
//         )}
//       </nav>

//       <div className="footer">
//         <button className="logout-btn" onClick={handleLogout}>Logout</button>
//       </div>
//     </div>
//   );
// }

// export default SideNav;
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SideNav.css";

function SideNav() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role"); // Get role from localStorage

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="sidenav">
      <h2 className="logo">🏋️ FitTrack</h2>
      <nav>
        <NavLink to="/home" className="nav-link">Home</NavLink>
        <NavLink to="/profile" className="nav-link">Profile</NavLink>
        <NavLink to="/fitness-goals" className="nav-link">Fitness Goals</NavLink>

        <h4 className="section-title">Workouts</h4>
        <NavLink to="/exercise-library" className="nav-link">Exercise Library</NavLink>
        <NavLink to="/workout-assignment" className="nav-link">Workout Assignment</NavLink>

        <h4 className="section-title">Progress</h4>
        <NavLink to="/progress-chart" className="nav-link">Progress Chart</NavLink>

        <NavLink to="/notifications" className="nav-link">🔔 Notifications</NavLink>

        {/* Admin Section - visible only to admins */}
        {role === "ADMIN" && (
          <>
            <h4 className="section-title">Admin</h4>
            <NavLink to="/audit-logs" className="nav-link">Audit Logs</NavLink>
            <NavLink to="/add-admin" className="nav-link">Add Admin</NavLink>
          </>
        )}
      </nav>

      <div className="footer">
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default SideNav;
