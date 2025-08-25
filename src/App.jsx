
// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./Layout";

// // Pages
// import Home from "./Home";
// import ProfilePage from "./ProfilePage";
// import ProfileForm from "./ProfileForm";
// import WorkoutPlansPage from "./WorkoutPlansPage";
// import ExercisesPage from "./ExercisesPage";
// import AddWorkoutPlanForm from "./AddWorkoutPlanForm";
// import UserProfilePage from "./UserProfilePage";
// import FitnessGoalsPage from "./FitnessGoalsPage";
// import ExerciseLibraryPage from "./ExerciseLibraryPage";
// import WorkoutAssignmentPage from "./WorkoutAssignmentPage";
// import ProgressChartPage from "./ProgressChartPage";
// import AdminAuditLogs from "./AdminAuditLogs"; 
// // Auth Pages
// import Login from "./Login";
// import Register from "./Register";
// import ForgotPassword from "./ForgotPassword";
// import ResetPassword from "./ResetPassword";
// import NotificationsPage from "./NotificationsPage";

// function App() {
//   const [userId, setUserId] = useState(null);

//   // ✅ Load from localStorage when app starts
//   useEffect(() => {
//     const storedId = localStorage.getItem("userId");
//     if (storedId) {
//       setUserId(storedId);
//     }
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password" element={<ResetPassword />} />

//         {/* Protected Routes */}
//         <Route element={<Layout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="/create-profile" element={<ProfileForm userId={userId} />} />
//           <Route path="/edit-profile" element={<ProfileForm />} />
//           <Route path="/workout-plans" element={<WorkoutPlansPage />} />
//           <Route path="/add-workout-plan" element={<AddWorkoutPlanForm />} />
//           <Route path="/user-profile" element={<UserProfilePage />} />
//           <Route path="/fitness-goals" element={<FitnessGoalsPage />} />
//           <Route path="/exercises" element={<ExercisesPage />} />
//           <Route path="/exercise-library" element={<ExerciseLibraryPage />} />
//           <Route path="/workout-assignment" element={<WorkoutAssignmentPage />} />
//           <Route path="/progress-chart" element={<ProgressChartPage />} />

//           {/* ✅ Notifications route */}
//           <Route
//             path="/notifications"
//             element={
//               userId ? (
//                 <NotificationsPage userId={userId} />
//               ) : (
//                 <p>Please log in</p>
//               )
//             }
//           />
//           <Route path="/audit-logs" element={<AdminAuditLogs />} />

//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// // export default App;
// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./Layout";

// // Pages
// import Home from "./Home";
// import ProfilePage from "./ProfilePage";
// import ProfileForm from "./ProfileForm";
// import WorkoutPlansPage from "./WorkoutPlansPage";
// import ExercisesPage from "./ExercisesPage";
// import AddWorkoutPlanForm from "./AddWorkoutPlanForm";
// import UserProfilePage from "./UserProfilePage";
// import FitnessGoalsPage from "./FitnessGoalsPage";
// import ExerciseLibraryPage from "./ExerciseLibraryPage";
// import WorkoutAssignmentPage from "./WorkoutAssignmentPage";
// import ProgressChartPage from "./ProgressChartPage";
// import AdminAuditLogs from "./AdminAuditLogs"; 

// // Auth Pages
// import Login from "./Login";
// import Register from "./Register";
// import ForgotPassword from "./ForgotPassword";
// import ResetPassword from "./ResetPassword";
// import NotificationsPage from "./NotificationsPage";

// function App() {
//   const [userId, setUserId] = useState(null);

//   // Load from localStorage when app starts
//   useEffect(() => {
//     const storedId = localStorage.getItem("userId");
//     if (storedId) setUserId(storedId);
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/login" element={<Login setUserId={setUserId} />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password" element={<ResetPassword />} />

//         {/* Protected Routes */}
//         <Route element={<Layout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="/create-profile" element={<ProfileForm userId={userId} />} />
//           <Route path="/edit-profile" element={<ProfileForm userId={userId} />} />
//           <Route path="/workout-plans" element={<WorkoutPlansPage />} />
//           <Route path="/add-workout-plan" element={<AddWorkoutPlanForm />} />
//           <Route path="/user-profile" element={<UserProfilePage />} />
//           <Route path="/fitness-goals" element={<FitnessGoalsPage />} />
//           <Route path="/exercises" element={<ExercisesPage />} />
//           <Route path="/exercise-library" element={<ExerciseLibraryPage />} />
//           <Route path="/workout-assignment" element={<WorkoutAssignmentPage />} />
//           <Route path="/progress-chart" element={<ProgressChartPage />} />
//           <Route path="/audit-logs" element={<AdminAuditLogs />} />

//           {/* Notifications */}
//           <Route
//             path="/notifications"
//             element={
//               userId ? (
//                 <NotificationsPage userId={userId} />
//               ) : (
//                 <p>Please log in to view notifications</p>
//               )
//             }
//           />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

// Pages
import Home from "./Home";
import ProfilePage from "./ProfilePage";
import ProfileForm from "./ProfileForm";
import WorkoutPlansPage from "./WorkoutPlansPage";
import ExercisesPage from "./ExercisesPage";
import AddWorkoutPlanForm from "./AddWorkoutPlanForm";
import UserProfilePage from "./UserProfilePage";
import FitnessGoalsPage from "./FitnessGoalsPage";
import ExerciseLibraryPage from "./ExerciseLibraryPage";
import WorkoutAssignmentPage from "./WorkoutAssignmentPage";
import ProgressChartPage from "./ProgressChartPage";
import AdminAuditLogs from "./AdminAuditLogs"; 
import AddAdmin from "./AddAdmin";  // new admin page

// Auth Pages
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import NotificationsPage from "./NotificationsPage";

function App() {
  const [userId, setUserId] = useState(null);
  const [role, setRole] = useState(null);

  // Load userId and role from localStorage when app starts
  useEffect(() => {
    const storedId = localStorage.getItem("userId");
    const storedRole = localStorage.getItem("role");
    if (storedId) setUserId(storedId);
    if (storedRole) setRole(storedRole);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login setUserId={setUserId} setRole={setRole} />} />
        <Route path="/login" element={<Login setUserId={setUserId} setRole={setRole} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Protected Routes */}
        <Route element={<Layout />}>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/create-profile" element={<ProfileForm userId={userId} />} />
          <Route path="/edit-profile" element={<ProfileForm userId={userId} />} />
          <Route path="/workout-plans" element={<WorkoutPlansPage />} />
          <Route path="/add-workout-plan" element={<AddWorkoutPlanForm />} />
          <Route path="/user-profile" element={<UserProfilePage />} />
          <Route path="/fitness-goals" element={<FitnessGoalsPage />} />
          <Route path="/exercises" element={<ExercisesPage />} />
          <Route path="/exercise-library" element={<ExerciseLibraryPage />} />
          <Route path="/workout-assignment" element={<WorkoutAssignmentPage />} />
          <Route path="/progress-chart" element={<ProgressChartPage />} />
          <Route path="/audit-logs" element={role === "ADMIN" ? <AdminAuditLogs /> : <Home />} />
          <Route path="/add-admin" element={role === "ADMIN" ? <AddAdmin /> : <Home />} />

          {/* Notifications */}
          <Route
            path="/notifications"
            element={
              userId ? (
                <NotificationsPage userId={userId} />
              ) : (
                <p>Please log in to view notifications</p>
              )
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
