// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./WorkoutAssignmentPage.css";
// const WorkoutAssignmentPage = () => {
//   const [users, setUsers] = useState([]); // dropdown list of trainees
//   const [exercises, setExercises] = useState([]); // from library
//   const [assignments, setAssignments] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");

//   const [form, setForm] = useState({
//     exerciseId: "",
//     sets: "",
//     reps: "",
//     duration: "",
//     restTime: "",
//     scheduleDay: ""
//   });

//   // fetch users (mocked for demo)
//   useEffect(() => {
//     setUsers([
//       { id: 1, name: "John Doe" },
//       { id: 2, name: "Jane Smith" }
//     ]);
//   }, []);

//   // fetch exercises from backend
//   useEffect(() => {
//     axios.get("http://localhost:8080/api/exercises")
//       .then(res => setExercises(res.data));
//   }, []);

//   const fetchAssignments = (userId) => {
//     axios.get(`http://localhost:8080/api/workout-assignments/user/${userId}`)
//       .then(res => setAssignments(res.data));
//   };

//   const handleAssign = () => {
//     if (!selectedUser) return alert("Select user first");
//     axios.post("http://localhost:8080/api/workout-assignments", {
//       ...form,
//       userId: selectedUser
//     }).then(() => fetchAssignments(selectedUser));
//   };

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:8080/api/workout-assignments/${id}`)
//       .then(() => fetchAssignments(selectedUser));
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold">Assign Exercises to User</h2>

//       <label>User:</label>
//       <select onChange={(e) => { setSelectedUser(e.target.value); fetchAssignments(e.target.value); }}>
//         <option value="">-- Select User --</option>
//         {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
//       </select>

//       <h3 className="mt-4">Pick Exercise</h3>
//       <select onChange={(e) => setForm({ ...form, exerciseId: e.target.value })}>
//         <option value="">-- Select Exercise --</option>
//         {exercises.map(ex => <option key={ex.id} value={ex.id}>{ex.name}</option>)}
//       </select>

//       <input placeholder="Sets" onChange={(e) => setForm({ ...form, sets: e.target.value })} />
//       <input placeholder="Reps" onChange={(e) => setForm({ ...form, reps: e.target.value })} />
//       <input placeholder="Duration (sec)" onChange={(e) => setForm({ ...form, duration: e.target.value })} />
//       <input placeholder="Rest Time (sec)" onChange={(e) => setForm({ ...form, restTime: e.target.value })} />
//       <input placeholder="Schedule Day" onChange={(e) => setForm({ ...form, scheduleDay: e.target.value })} />

//       <button onClick={handleAssign}>Assign</button>

//       <h3 className="mt-6">Current Assignments</h3>
//       <ul>
//         {assignments.map(a => (
//           <li key={a.id}>
//             Exercise #{a.exerciseId} → {a.sets} sets x {a.reps} reps ({a.scheduleDay})
//             <button onClick={() => handleDelete(a.id)}>❌ Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default WorkoutAssignmentPage;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./WorkoutAssignmentPage.css";

// const WorkoutAssignmentPage = () => {
//   const [users, setUsers] = useState([]);
//   const [exercises, setExercises] = useState([]);
//   const [assignments, setAssignments] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");

//   const [form, setForm] = useState({
//     exerciseId: "",
//     sets: "",
//     reps: "",
//     duration: "",
//     restTime: "",
//     scheduleDay: ""
//   });

//   useEffect(() => {
//     setUsers([
//       { id: 1, name: "John Doe" },
//       { id: 2, name: "Jane Smith" }
//     ]);
//   }, []);

//   useEffect(() => {
//     axios.get("http://localhost:8080/api/exercises")
//       .then(res => setExercises(res.data));
//   }, []);

//   const fetchAssignments = (userId) => {
//     axios.get(`http://localhost:8080/api/workout-assignments/user/${userId}`)
//       .then(res => setAssignments(res.data));
//   };

//   const handleAssign = () => {
//     if (!selectedUser) return alert("Select user first");
//     axios.post("http://localhost:8080/api/workout-assignments", {
//       ...form,
//       userId: selectedUser
//     }).then(() => fetchAssignments(selectedUser));
//   };

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:8080/api/workout-assignments/${id}`)
//       .then(() => fetchAssignments(selectedUser));
//   };

//   return (
//     <div className="assignment-container">
//       <h2 className="assignment-title">Assign Exercises to User</h2>

//       <div className="assignment-form">
//         <label>User:</label>
//         <select onChange={(e) => { setSelectedUser(e.target.value); fetchAssignments(e.target.value); }}>
//           <option value="">-- Select User --</option>
//           {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
//         </select>

//         <label>Pick Exercise:</label>
//         <select onChange={(e) => setForm({ ...form, exerciseId: e.target.value })}>
//           <option value="">-- Select Exercise --</option>
//           {exercises.map(ex => <option key={ex.id} value={ex.id}>{ex.name}</option>)}
//         </select>

//         <input placeholder="Sets" onChange={(e) => setForm({ ...form, sets: e.target.value })} />
//         <input placeholder="Reps" onChange={(e) => setForm({ ...form, reps: e.target.value })} />
//         <input placeholder="Duration (sec)" onChange={(e) => setForm({ ...form, duration: e.target.value })} />
//         <input placeholder="Rest Time (sec)" onChange={(e) => setForm({ ...form, restTime: e.target.value })} />
//         <input placeholder="Schedule Day" onChange={(e) => setForm({ ...form, scheduleDay: e.target.value })} />

//         <button className="assignment-btn" onClick={handleAssign}>Assign</button>
//       </div>

//       <div className="assigned-exercises">
//         <h3>Current Assignments</h3>
//         {assignments.map(a => (
//           <div key={a.id} className="exercise-item">
//             <div className="exercise-details">
//               <span>Exercise #{a.exerciseId}</span>
//               <span>{a.sets} sets x {a.reps} reps ({a.scheduleDay})</span>
//             </div>
//             <div className="exercise-actions">
//               <button
//                 className="delete-btn"
//                 onClick={() => handleDelete(a.id)}
//               >
//                 ❌ Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkoutAssignmentPage;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./WorkoutAssignmentPage.css";

// const WorkoutAssignmentPage = () => {
//   const [users, setUsers] = useState([]);
//   const [exercises, setExercises] = useState([]);
//   const [assignments, setAssignments] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");

//   const [form, setForm] = useState({
//     exerciseId: "",
//     sets: "",
//     reps: "",
//     duration: "",
//     restTime: "",
//     scheduleDay: "",
//     timestamp: "" // NEW FIELD
//   });

//   // Simulated users (replace with API later if needed)
//   useEffect(() => {
//     setUsers([
//       { id: 1, name: "John Doe" },
//       { id: 2, name: "Jane Smith" }
//     ]);
//   }, []);

//   // Fetch exercises from backend
//   useEffect(() => {
//     axios.get("http://localhost:8080/api/exercises")
//       .then(res => setExercises(res.data));
//   }, []);

//   // Fetch assignments for selected user
//   const fetchAssignments = (userId) => {
//     axios.get(`http://localhost:8080/api/workout-assignments/user/${userId}`)
//       .then(res => setAssignments(res.data));
//   };

//   // Handle assignment creation
//   const handleAssign = () => {
//     if (!selectedUser) return alert("Select user first");

//     axios.post("http://localhost:8080/api/workout-assignments", {
//       ...form,
//       userId: selectedUser
//     }).then(() => fetchAssignments(selectedUser));
//   };

//   // Handle assignment deletion
//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:8080/api/workout-assignments/${id}`)
//       .then(() => fetchAssignments(selectedUser));
//   };

//   return (
//     <div className="assignment-container">
//       <h2 className="assignment-title">Assign Exercises to User</h2>

//       <div className="assignment-form">
//         <label>User:</label>
//         <select
//           onChange={(e) => {
//             setSelectedUser(e.target.value);
//             fetchAssignments(e.target.value);
//           }}
//         >
//           <option value="">-- Select User --</option>
//           {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
//         </select>

//         <label>Pick Exercise:</label>
//         <select
//           onChange={(e) => setForm({ ...form, exerciseId: e.target.value })}
//         >
//           <option value="">-- Select Exercise --</option>
//           {exercises.map(ex => <option key={ex.id} value={ex.id}>{ex.name}</option>)}
//         </select>

//         <input placeholder="Sets" type="number"
//           onChange={(e) => setForm({ ...form, sets: e.target.value })} />
//         <input placeholder="Reps" type="number"
//           onChange={(e) => setForm({ ...form, reps: e.target.value })} />
//         <input placeholder="Duration (sec)" type="number"
//           onChange={(e) => setForm({ ...form, duration: e.target.value })} />
//         <input placeholder="Rest Time (sec)" type="number"
//           onChange={(e) => setForm({ ...form, restTime: e.target.value })} />
//         <input placeholder="Schedule Day"
//           onChange={(e) => setForm({ ...form, scheduleDay: e.target.value })} />

//         {/* NEW FIELD: timestamp input */}
//         <label>Schedule Timestamp:</label>
//         <input
//           type="datetime-local"
//           onChange={(e) => setForm({ ...form, timestamp: e.target.value })}
//         />

//         <button className="assignment-btn" onClick={handleAssign}>
//           Assign
//         </button>
//       </div>

//       <div className="assigned-exercises">
//         <h3>Current Assignments</h3>
//         {assignments.length === 0 && <p>No assignments yet.</p>}
//         {assignments.map(a => (
//           <div key={a.id} className="exercise-item">
//             <div className="exercise-details">
//               <span>Exercise #{a.exerciseId}</span>
//               <span>{a.sets} sets × {a.reps} reps</span>
//               <span>Day: {a.scheduleDay}</span>
//               {/* SHOW TIMESTAMP */}
//               <span>
//                 Scheduled at: {new Date(a.timestamp).toLocaleString()}
//               </span>
//             </div>
//             <div className="exercise-actions">
//               <button
//                 className="delete-btn"
//                 onClick={() => handleDelete(a.id)}
//               >
//                 ❌ Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkoutAssignmentPage;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./WorkoutAssignmentPage.css";

// const WorkoutAssignmentPage = () => {
//   const [users, setUsers] = useState([]);
//   const [exercises, setExercises] = useState([]);
//   const [assignments, setAssignments] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");

//   const [form, setForm] = useState({
//     exerciseId: "",
//     sets: "",
//     reps: "",
//     duration: "",
//     restTime: "",
//     scheduleDay: "",
//     timestamp: ""
//   });

//   const role = localStorage.getItem("role"); // GUEST / TRAINER / ADMIN
//   const token = localStorage.getItem("token");

//   // Simulated users (replace with API)
//   useEffect(() => {
//     setUsers([
//       { id: 1, name: "John Doe" },
//       { id: 2, name: "Jane Smith" }
//     ]);
//   }, []);

//   // Fetch exercises from backend
//   useEffect(() => {
//     axios.get("http://localhost:8080/api/exercises")
//       .then(res => setExercises(res.data));
//   }, []);

//   // Fetch assignments for selected user
//   const fetchAssignments = (userId) => {
//     axios.get(`http://localhost:8080/api/workout-assignments/user/${userId}`)
//       .then(res => setAssignments(res.data));
//   };

//   // Handle assignment creation (TRAINER / ADMIN only)
//   const handleAssign = () => {
//     if (!selectedUser) return alert("Select a user first");
//     if (role === "GUEST") return alert("Guests cannot assign workouts");

//     axios.post("http://localhost:8080/api/workout-assignments", 
//       { ...form, userId: selectedUser },
//       { headers: { Authorization: `Bearer ${token}` } }
//     ).then(() => fetchAssignments(selectedUser));
//   };

//   // Handle deletion (TRAINER / ADMIN only)
//   const handleDelete = (id) => {
//     if (role === "GUEST") return alert("Guests cannot delete assignments");

//     axios.delete(`http://localhost:8080/api/workout-assignments/${id}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     }).then(() => fetchAssignments(selectedUser));
//   };

//   return (
//     <div className="assignment-container">
//       <h2 className="assignment-title">Workout Assignments</h2>

//       {role !== "GUEST" && (
//         <div className="assignment-form">
//           <label>User:</label>
//           <select
//             value={selectedUser}
//             onChange={(e) => {
//               setSelectedUser(e.target.value);
//               fetchAssignments(e.target.value);
//             }}
//           >
//             <option value="">-- Select User --</option>
//             {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
//           </select>

//           <label>Pick Exercise:</label>
//           <select
//             value={form.exerciseId}
//             onChange={(e) => setForm({ ...form, exerciseId: e.target.value })}
//           >
//             <option value="">-- Select Exercise --</option>
//             {exercises.map(ex => <option key={ex.id} value={ex.id}>{ex.name}</option>)}
//           </select>

//           <input placeholder="Sets" type="number" value={form.sets}
//             onChange={(e) => setForm({ ...form, sets: e.target.value })} />
//           <input placeholder="Reps" type="number" value={form.reps}
//             onChange={(e) => setForm({ ...form, reps: e.target.value })} />
//           <input placeholder="Duration (sec)" type="number" value={form.duration}
//             onChange={(e) => setForm({ ...form, duration: e.target.value })} />
//           <input placeholder="Rest Time (sec)" type="number" value={form.restTime}
//             onChange={(e) => setForm({ ...form, restTime: e.target.value })} />
//           <input placeholder="Schedule Day" value={form.scheduleDay}
//             onChange={(e) => setForm({ ...form, scheduleDay: e.target.value })} />

//           <label>Schedule Timestamp:</label>
//           <input type="datetime-local" value={form.timestamp}
//             onChange={(e) => setForm({ ...form, timestamp: e.target.value })} />

//           <button className="assignment-btn" onClick={handleAssign}>Assign</button>
//         </div>
//       )}

//       <div className="assigned-exercises">
//         <h3>Current Assignments</h3>
//         {assignments.length === 0 && <p>No assignments yet.</p>}
//         {assignments.map(a => (
//           <div key={a.id} className="exercise-item">
//             <div className="exercise-details">
//               <span>Exercise ID: {a.exerciseId}</span>
//               <span>{a.sets} sets × {a.reps} reps</span>
//               <span>Day: {a.scheduleDay}</span>
//               <span>Scheduled at: {new Date(a.timestamp).toLocaleString()}</span>
//             </div>
//             {role !== "GUEST" && (
//               <div className="exercise-actions">
//                 <button className="delete-btn" onClick={() => handleDelete(a.id)}>❌ Remove</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkoutAssignmentPage;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./WorkoutAssignmentPage.css";

// const WorkoutAssignmentPage = () => {
//   const [users, setUsers] = useState([]);
//   const [assignments, setAssignments] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");
//   const [form, setForm] = useState({
//     exerciseId: "",
//     sets: "",
//     reps: "",
//     duration: "",
//     restTime: "",
//     scheduleDay: "",
//     timestamp: ""
//   });

//   const role = localStorage.getItem("role"); // GUEST / TRAINER / ADMIN
//   const token = localStorage.getItem("token");

//   // Fetch users with role GUEST
//   useEffect(() => {
//     axios.get("http://localhost:8080/api/users?role=GUEST", {
//       headers: { Authorization: `Bearer ${token}` }
//     }).then(res => setUsers(res.data))
//       .catch(err => console.error("Error fetching users:", err));
//   }, [token]);

//   // Manual list of 20 exercises
//   const exercises = [
//     { id: 1, name: "Push Ups" },
//     { id: 2, name: "Pull Ups" },
//     { id: 3, name: "Squats" },
//     { id: 4, name: "Lunges" },
//     { id: 5, name: "Plank" },
//     { id: 6, name: "Burpees" },
//     { id: 7, name: "Jumping Jacks" },
//     { id: 8, name: "Mountain Climbers" },
//     { id: 9, name: "Sit Ups" },
//     { id: 10, name: "Leg Raises" },
//     { id: 11, name: "Bicep Curls" },
//     { id: 12, name: "Tricep Dips" },
//     { id: 13, name: "Bench Press" },
//     { id: 14, name: "Deadlift" },
//     { id: 15, name: "Overhead Press" },
//     { id: 16, name: "Lat Pulldown" },
//     { id: 17, name: "Seated Row" },
//     { id: 18, name: "Leg Press" },
//     { id: 19, name: "Calf Raises" },
//     { id: 20, name: "Russian Twists" }
//   ];

//   // Fetch assignments for selected user
//   const fetchAssignments = (userId) => {
//     axios.get(`http://localhost:8080/api/workout-assignments/user/${userId}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     }).then(res => setAssignments(res.data));
//   };

//   // Handle assignment creation (TRAINER / ADMIN only)
//   const handleAssign = () => {
//     if (!selectedUser) return alert("Select a user first");
//     if (role === "GUEST") return alert("Guests cannot assign workouts");

//     axios.post("http://localhost:8080/api/workout-assignments",
//       { ...form, userId: selectedUser },
//       { headers: { Authorization: `Bearer ${token}` } }
//     ).then(() => fetchAssignments(selectedUser));
//   };

//   // Handle deletion (TRAINER / ADMIN only)
//   const handleDelete = (id) => {
//     if (role === "GUEST") return alert("Guests cannot delete assignments");

//     axios.delete(`http://localhost:8080/api/workout-assignments/${id}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     }).then(() => fetchAssignments(selectedUser));
//   };

//   return (
//     <div className="assignment-container">
//       <h2 className="assignment-title">Workout Assignments</h2>

//       {role !== "GUEST" && (
//         <div className="assignment-form">
//           <label>User:</label>
//           <select
//             value={selectedUser}
//             onChange={(e) => {
//               setSelectedUser(e.target.value);
//               fetchAssignments(e.target.value);
//             }}
//           >
//             <option value="">-- Select User --</option>
//             {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
//           </select>

//           <label>Pick Exercise:</label>
//           <select
//             value={form.exerciseId}
//             onChange={(e) => setForm({ ...form, exerciseId: e.target.value })}
//           >
//             <option value="">-- Select Exercise --</option>
//             {exercises.map(ex => <option key={ex.id} value={ex.id}>{ex.name}</option>)}
//           </select>

//           <input placeholder="Sets" type="number" value={form.sets}
//             onChange={(e) => setForm({ ...form, sets: e.target.value })} />
//           <input placeholder="Reps" type="number" value={form.reps}
//             onChange={(e) => setForm({ ...form, reps: e.target.value })} />
//           <input placeholder="Duration (sec)" type="number" value={form.duration}
//             onChange={(e) => setForm({ ...form, duration: e.target.value })} />
//           <input placeholder="Rest Time (sec)" type="number" value={form.restTime}
//             onChange={(e) => setForm({ ...form, restTime: e.target.value })} />
//           <input placeholder="Schedule Day" value={form.scheduleDay}
//             onChange={(e) => setForm({ ...form, scheduleDay: e.target.value })} />

//           <label>Schedule Timestamp:</label>
//           <input type="datetime-local" value={form.timestamp}
//             onChange={(e) => setForm({ ...form, timestamp: e.target.value })} />

//           <button className="assignment-btn" onClick={handleAssign}>Assign</button>
//         </div>
//       )}

//       <div className="assigned-exercises">
//         <h3>Current Assignments</h3>
//         {assignments.length === 0 && <p>No assignments yet.</p>}
//         {assignments.map(a => (
//           <div key={a.id} className="exercise-item">
//             <div className="exercise-details">
//               <span>Exercise ID: {a.exerciseId}</span>
//               <span>{a.sets} sets × {a.reps} reps</span>
//               <span>Day: {a.scheduleDay}</span>
//               <span>Scheduled at: {new Date(a.timestamp).toLocaleString()}</span>
//             </div>
//             {role !== "GUEST" && (
//               <div className="exercise-actions">
//                 <button className="delete-btn" onClick={() => handleDelete(a.id)}>❌ Remove</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkoutAssignmentPage;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./WorkoutAssignmentPage.css";

// const WorkoutAssignmentPage = () => {
//   const [users, setUsers] = useState([]);
//   const [assignments, setAssignments] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");
//   const [form, setForm] = useState({
//     exerciseId: "",
//     sets: "",
//     reps: "",
//     duration: "",
//     restTime: "",
//     scheduleDay: "",
//     timestamp: ""
//   });

//   const role = localStorage.getItem("role"); // GUEST / TRAINER / ADMIN
//   const token = localStorage.getItem("token");

//   // Fetch users with role GUEST
//   useEffect(() => {
//     axios.get("http://localhost:8080/users/role/GUEST?page=0&size=50", {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(res => setUsers(res.data.content)) // extract `content` from paginated response
//       .catch(err => console.error("Error fetching users:", err));
//   }, [token]);

//   // Manual list of 20 exercises
//   const exercises = [
//     { id: 1, name: "Push Ups" },
//     { id: 2, name: "Pull Ups" },
//     { id: 3, name: "Squats" },
//     { id: 4, name: "Lunges" },
//     { id: 5, name: "Plank" },
//     { id: 6, name: "Burpees" },
//     { id: 7, name: "Jumping Jacks" },
//     { id: 8, name: "Mountain Climbers" },
//     { id: 9, name: "Sit Ups" },
//     { id: 10, name: "Leg Raises" },
//     { id: 11, name: "Bicep Curls" },
//     { id: 12, name: "Tricep Dips" },
//     { id: 13, name: "Bench Press" },
//     { id: 14, name: "Deadlift" },
//     { id: 15, name: "Overhead Press" },
//     { id: 16, name: "Lat Pulldown" },
//     { id: 17, name: "Seated Row" },
//     { id: 18, name: "Leg Press" },
//     { id: 19, name: "Calf Raises" },
//     { id: 20, name: "Russian Twists" }
//   ];

//   // Fetch assignments for selected user
//   const fetchAssignments = (userId) => {
//     if (!userId) return;
//     axios.get(`http://localhost:8080/api/workout-assignments/user/${userId}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//     .then(res => setAssignments(res.data))
//     .catch(err => console.error("Error fetching assignments:", err));
//   };

//   // Handle assignment creation (TRAINER / ADMIN only)
//   const handleAssign = () => {
//     if (!selectedUser) return alert("Select a user first");
//     if (role === "GUEST") return alert("Guests cannot assign workouts");

//     const payload = {
//       ...form,
//       userId: selectedUser,
//       timestamp: form.timestamp ? new Date(form.timestamp).toISOString() : null
//     };

//     axios.post("http://localhost:8080/api/workout-assignments",
//       payload,
//       { headers: { Authorization: `Bearer ${token}` } }
//     )
//     .then(() => {
//       setForm({ exerciseId: "", sets: "", reps: "", duration: "", restTime: "", scheduleDay: "", timestamp: "" });
//       fetchAssignments(selectedUser);
//     })
//     .catch(err => console.error("Error assigning workout:", err));
//   };

//   // Handle deletion (TRAINER / ADMIN only)
//   const handleDelete = (id) => {
//     if (role === "GUEST") return alert("Guests cannot delete assignments");

//     axios.delete(`http://localhost:8080/api/workout-assignments/${id}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//     .then(() => fetchAssignments(selectedUser))
//     .catch(err => console.error("Error deleting assignment:", err));
//   };

//   return (
//     <div className="assignment-container">
//       <h2 className="assignment-title">Workout Assignments</h2>

//       {role !== "GUEST" && (
//         <div className="assignment-form">
//           <label>User:</label>
//           {/* <select
//             value={selectedUser}
//             onChange={(e) => {
//               setSelectedUser(e.target.value);
//               fetchAssignments(e.target.value);
//             }}
//           >
//             <option value="">-- Select User --</option>
//             {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
//           </select> */}
// <select
//   value={selectedUser}
//   onChange={(e) => {
//     setSelectedUser(e.target.value);
//     fetchAssignments(e.target.value);
//   }}
// >
//   <option value="">-- Select User --</option>
//   {users.map(u => (
//     <option key={u.id} value={u.id}>{u.email}</option>
//   ))}
// </select>

//           <label>Pick Exercise:</label>
//           <select
//             value={form.exerciseId}
//             onChange={(e) => setForm({ ...form, exerciseId: e.target.value })}
//           >
//             <option value="">-- Select Exercise --</option>
//             {exercises.map(ex => <option key={ex.id} value={ex.id}>{ex.name}</option>)}
//           </select>

//           <input placeholder="Sets" type="number" value={form.sets}
//             onChange={(e) => setForm({ ...form, sets: e.target.value })} />
//           <input placeholder="Reps" type="number" value={form.reps}
//             onChange={(e) => setForm({ ...form, reps: e.target.value })} />
//           <input placeholder="Duration (sec)" type="number" value={form.duration}
//             onChange={(e) => setForm({ ...form, duration: e.target.value })} />
//           <input placeholder="Rest Time (sec)" type="number" value={form.restTime}
//             onChange={(e) => setForm({ ...form, restTime: e.target.value })} />
//           <input placeholder="Schedule Day" value={form.scheduleDay}
//             onChange={(e) => setForm({ ...form, scheduleDay: e.target.value })} />

//           <label>Schedule Timestamp:</label>
//           <input type="datetime-local" value={form.timestamp}
//             onChange={(e) => setForm({ ...form, timestamp: e.target.value })} />

//           <button className="assignment-btn" onClick={handleAssign}>Assign</button>
//         </div>
//       )}

//       <div className="assigned-exercises">
//         <h3>Current Assignments</h3>
//         {assignments.length === 0 && <p>No assignments yet.</p>}
//         {assignments.map(a => (
//           <div key={a.id} className="exercise-item">
//             <div className="exercise-details">
//               <span>Exercise ID: {a.exerciseId}</span>
//               <span>{a.sets} sets × {a.reps} reps</span>
//               <span>Day: {a.scheduleDay}</span>
//               <span>Scheduled at: {a.timestamp ? new Date(a.timestamp).toLocaleString() : "N/A"}</span>
//             </div>
//             {role !== "GUEST" && (
//               <div className="exercise-actions">
//                 <button className="delete-btn" onClick={() => handleDelete(a.id)}>❌ Remove</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./WorkoutAssignmentPage.css";

// const WorkoutAssignmentPage = () => {
//   const [users, setUsers] = useState([]);
//   const [assignments, setAssignments] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");
//   const [form, setForm] = useState({
//     exerciseId: "",
//     sets: "",
//     reps: "",
//     duration: "",
//     restTime: "",
//     scheduleDay: "",
//     timestamp: ""
//   });

//   const role = localStorage.getItem("role"); // GUEST / TRAINER / ADMIN
//   const token = localStorage.getItem("token");

//   // Fetch users with role GUEST
//   useEffect(() => {
//     axios.get("http://localhost:8080/users/role/GUEST?page=0&size=50", {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(res => setUsers(res.data.content))
//       .catch(err => console.error("Error fetching users:", err));
//   }, [token]);

//   // Manual list of 20 exercises
//   const exercises = [
//     { id: 1, name: "Push Ups" },
//     { id: 2, name: "Pull Ups" },
//     { id: 3, name: "Squats" },
//     { id: 4, name: "Lunges" },
//     { id: 5, name: "Plank" },
//     { id: 6, name: "Burpees" },
//     { id: 7, name: "Jumping Jacks" },
//     { id: 8, name: "Mountain Climbers" },
//     { id: 9, name: "Sit Ups" },
//     { id: 10, name: "Leg Raises" },
//     { id: 11, name: "Bicep Curls" },
//     { id: 12, name: "Tricep Dips" },
//     { id: 13, name: "Bench Press" },
//     { id: 14, name: "Deadlift" },
//     { id: 15, name: "Overhead Press" },
//     { id: 16, name: "Lat Pulldown" },
//     { id: 17, name: "Seated Row" },
//     { id: 18, name: "Leg Press" },
//     { id: 19, name: "Calf Raises" },
//     { id: 20, name: "Russian Twists" }
//   ];

//   // Fetch assignments for selected user
//   const fetchAssignments = (userId) => {
//     if (!userId) return;
//     axios.get(`http://localhost:8080/api/workout-assignments/user/${userId}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(res => setAssignments(res.data))
//       .catch(err => console.error("Error fetching assignments:", err));
//   };

//   // Handle assignment creation
//   const handleAssign = () => {
//     if (!selectedUser) return alert("Select a user first");
//     if (role === "GUEST") return alert("Guests cannot assign workouts");

//     const payload = {
//       ...form,
//       userId: selectedUser,
//       timestamp: form.timestamp ? new Date(form.timestamp).toISOString() : null
//     };

//     axios.post("http://localhost:8080/api/workout-assignments", payload, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(() => {
//         setForm({ exerciseId: "", sets: "", reps: "", duration: "", restTime: "", scheduleDay: "", timestamp: "" });
//         fetchAssignments(selectedUser);
//       })
//       .catch(err => console.error("Error assigning workout:", err));
//   };

//   // Handle deletion
//   const handleDelete = (id) => {
//     if (role === "GUEST") return alert("Guests cannot delete assignments");

//     axios.delete(`http://localhost:8080/api/workout-assignments/${id}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(() => fetchAssignments(selectedUser))
//       .catch(err => console.error("Error deleting assignment:", err));
//   };

//   // Helper to get exercise name
//   const getExerciseName = (id) => {
//     const exercise = exercises.find(ex => ex.id === parseInt(id));
//     return exercise ? exercise.name : "Unknown Exercise";
//   };

//   // Helper to get user email
//   const getUserEmail = (userId) => {
//     const user = users.find(u => u.id === parseInt(userId));
//     return user ? user.email : "Unknown Email";
//   };

//   return (
//     <div className="assignment-container">
//       <h2 className="assignment-title">Workout Assignments</h2>

//       {role !== "GUEST" && (
//         <div className="assignment-form">
//           <label>User:</label>
//           <select
//             value={selectedUser}
//             onChange={(e) => {
//               setSelectedUser(e.target.value);
//               fetchAssignments(e.target.value);
//             }}
//           >
//             <option value="">-- Select User --</option>
//             {users.map(u => <option key={u.id} value={u.id}>{u.email}</option>)}
//           </select>

//           <label>Pick Exercise:</label>
//           <select
//             value={form.exerciseId}
//             onChange={(e) => setForm({ ...form, exerciseId: e.target.value })}
//           >
//             <option value="">-- Select Exercise --</option>
//             {exercises.map(ex => <option key={ex.id} value={ex.id}>{ex.name}</option>)}
//           </select>

//           <input placeholder="Sets" type="number" value={form.sets}
//             onChange={(e) => setForm({ ...form, sets: e.target.value })} />
//           <input placeholder="Reps" type="number" value={form.reps}
//             onChange={(e) => setForm({ ...form, reps: e.target.value })} />
//           <input placeholder="Duration (sec)" type="number" value={form.duration}
//             onChange={(e) => setForm({ ...form, duration: e.target.value })} />
//           <input placeholder="Rest Time (sec)" type="number" value={form.restTime}
//             onChange={(e) => setForm({ ...form, restTime: e.target.value })} />
//           <input placeholder="Schedule Day" value={form.scheduleDay}
//             onChange={(e) => setForm({ ...form, scheduleDay: e.target.value })} />
//           <label>Schedule Timestamp:</label>
//           <input type="datetime-local" value={form.timestamp}
//             onChange={(e) => setForm({ ...form, timestamp: e.target.value })} />

//           <button className="assignment-btn" onClick={handleAssign}>Assign</button>
//         </div>
//       )}

//       <div className="assigned-exercises">
//         <h3>Current Assignments</h3>
//         {assignments.length === 0 && <p>No assignments yet.</p>}
//         {assignments.map(a => (
//           <div key={a.id} className="exercise-item">
//             <div className="exercise-details">
//               <span><strong>User Email:</strong> {getUserEmail(a.userId)}</span>
//               <span><strong>Exercise:</strong> {getExerciseName(a.exerciseId)}</span>
//               <span><strong>Sets:</strong> {a.sets}</span>
//               <span><strong>Reps:</strong> {a.reps}</span>
//               <span><strong>Duration:</strong> {a.duration} sec</span>
//               <span><strong>Rest Time:</strong> {a.restTime} sec</span>
//               <span><strong>Schedule Day:</strong> {a.scheduleDay}</span>
//               <span><strong>Scheduled At:</strong> {a.timestamp ? new Date(a.timestamp).toLocaleString() : "N/A"}</span>
//             </div>
//             {role !== "GUEST" && (
//               <div className="exercise-actions">
//                 <button className="delete-btn" onClick={() => handleDelete(a.id)}>❌ Remove</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkoutAssignmentPage;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./WorkoutAssignmentPage.css";

// const WorkoutAssignmentPage = () => {
//   const [users, setUsers] = useState([]);
//   const [assignments, setAssignments] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");
//   const [form, setForm] = useState({
//     id: null, // used for edit
//     exerciseId: "",
//     sets: "",
//     reps: "",
//     duration: "",
//     restTime: "",
//     scheduleDay: "",
//     timestamp: ""
//   });

//   const role = localStorage.getItem("role"); // GUEST / TRAINER / ADMIN
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     axios.get("http://localhost:8080/users/role/GUEST?page=0&size=50", {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(res => setUsers(res.data.content))
//       .catch(err => console.error("Error fetching users:", err));
//   }, [token]);

//   const exercises = [
//     { id: 1, name: "Push Ups" },
//     { id: 2, name: "Pull Ups" },
//     { id: 3, name: "Squats" },
//     { id: 4, name: "Lunges" },
//     { id: 5, name: "Plank" },
//     { id: 6, name: "Burpees" },
//     { id: 7, name: "Jumping Jacks" },
//     { id: 8, name: "Mountain Climbers" },
//     { id: 9, name: "Sit Ups" },
//     { id: 10, name: "Leg Raises" },
//     { id: 11, name: "Bicep Curls" },
//     { id: 12, name: "Tricep Dips" },
//     { id: 13, name: "Bench Press" },
//     { id: 14, name: "Deadlift" },
//     { id: 15, name: "Overhead Press" },
//     { id: 16, name: "Lat Pulldown" },
//     { id: 17, name: "Seated Row" },
//     { id: 18, name: "Leg Press" },
//     { id: 19, name: "Calf Raises" },
//     { id: 20, name: "Russian Twists" }
//   ];

//   const fetchAssignments = (userId) => {
//     if (!userId) return;
//     axios.get(`http://localhost:8080/api/workout-assignments/user/${userId}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(res => setAssignments(res.data))
//       .catch(err => console.error("Error fetching assignments:", err));
//   };

//   const handleAssign = () => {
//     if (!selectedUser) return alert("Select a user first");
//     if (role === "GUEST") return alert("Guests cannot assign workouts");

//     const payload = {
//       exerciseId: form.exerciseId,
//       sets: form.sets,
//       reps: form.reps,
//       duration: form.duration,
//       restTime: form.restTime,
//       scheduleDay: form.scheduleDay,
//       timestamp: form.timestamp ? new Date(form.timestamp).toISOString() : null,
//       userId: selectedUser
//     };

//     if (form.id) {
//       // Update existing assignment
//       axios.put(`http://localhost:8080/api/workout-assignments/${form.id}`, payload, {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//         .then(() => {
//           setForm({ id: null, exerciseId: "", sets: "", reps: "", duration: "", restTime: "", scheduleDay: "", timestamp: "" });
//           fetchAssignments(selectedUser);
//         })
//         .catch(err => console.error("Error updating assignment:", err));
//     } else {
//       // Create new assignment
//       axios.post("http://localhost:8080/api/workout-assignments", payload, {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//         .then(() => {
//           setForm({ id: null, exerciseId: "", sets: "", reps: "", duration: "", restTime: "", scheduleDay: "", timestamp: "" });
//           fetchAssignments(selectedUser);
//         })
//         .catch(err => console.error("Error assigning workout:", err));
//     }
//   };

//   const handleDelete = (id) => {
//     if (role === "GUEST") return alert("Guests cannot delete assignments");

//     axios.delete(`http://localhost:8080/api/workout-assignments/${id}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(() => fetchAssignments(selectedUser))
//       .catch(err => console.error("Error deleting assignment:", err));
//   };

//   const handleEdit = (assignment) => {
//     setForm({
//       id: assignment.id,
//       exerciseId: assignment.exerciseId,
//       sets: assignment.sets,
//       reps: assignment.reps,
//       duration: assignment.duration,
//       restTime: assignment.restTime,
//       scheduleDay: assignment.scheduleDay,
//       timestamp: assignment.timestamp ? new Date(assignment.timestamp).toISOString().slice(0,16) : ""
//     });
//   };

//   const getExerciseName = (id) => {
//     const exercise = exercises.find(ex => ex.id === parseInt(id));
//     return exercise ? exercise.name : "Unknown Exercise";
//   };

//   const getUserEmail = (userId) => {
//     const user = users.find(u => u.id === parseInt(userId));
//     return user ? user.email : "Unknown Email";
//   };

//   return (
//     <div className="assignment-container">
//       <h2 className="assignment-title">Workout Assignments</h2>

//       {role !== "GUEST" && (
//         <div className="assignment-form">
//           <label>User:</label>
//           <select
//             value={selectedUser}
//             onChange={(e) => {
//               setSelectedUser(e.target.value);
//               fetchAssignments(e.target.value);
//             }}
//           >
//             <option value="">-- Select User --</option>
//             {users.map(u => <option key={u.id} value={u.id}>{u.email}</option>)}
//           </select>

//           <label>Pick Exercise:</label>
//           <select
//             value={form.exerciseId}
//             onChange={(e) => setForm({ ...form, exerciseId: e.target.value })}
//           >
//             <option value="">-- Select Exercise --</option>
//             {exercises.map(ex => <option key={ex.id} value={ex.id}>{ex.name}</option>)}
//           </select>

//           <input placeholder="Sets" type="number" value={form.sets}
//             onChange={(e) => setForm({ ...form, sets: e.target.value })} />
//           <input placeholder="Reps" type="number" value={form.reps}
//             onChange={(e) => setForm({ ...form, reps: e.target.value })} />
//           <input placeholder="Duration (sec)" type="number" value={form.duration}
//             onChange={(e) => setForm({ ...form, duration: e.target.value })} />
//           <input placeholder="Rest Time (sec)" type="number" value={form.restTime}
//             onChange={(e) => setForm({ ...form, restTime: e.target.value })} />
//           <input placeholder="Schedule Day" value={form.scheduleDay}
//             onChange={(e) => setForm({ ...form, scheduleDay: e.target.value })} />
//           <label>Schedule Timestamp:</label>
//           <input type="datetime-local" value={form.timestamp}
//             onChange={(e) => setForm({ ...form, timestamp: e.target.value })} />

//           <button className="assignment-btn" onClick={handleAssign}>
//             {form.id ? "Update Assignment" : "Assign"}
//           </button>
//         </div>
//       )}

//       <div className="assigned-exercises">
//         <h3>Current Assignments</h3>
//         {assignments.length === 0 && <p>No assignments yet.</p>}
//         {assignments.map(a => (
//           <div key={a.id} className="exercise-item">
//             <div className="exercise-details">
//               <span><strong>User Email:</strong> {getUserEmail(a.userId)}</span>
//               <span><strong>Exercise:</strong> {getExerciseName(a.exerciseId)}</span>
//               <span><strong>Sets:</strong> {a.sets}</span>
//               <span><strong>Reps:</strong> {a.reps}</span>
//               <span><strong>Duration:</strong> {a.duration} sec</span>
//               <span><strong>Rest Time:</strong> {a.restTime} sec</span>
//               <span><strong>Schedule Day:</strong> {a.scheduleDay}</span>
//               <span><strong>Scheduled At:</strong> {a.timestamp ? new Date(a.timestamp).toLocaleString() : "N/A"}</span>
//             </div>
//             {role !== "GUEST" && (
//               <div className="exercise-actions">
//                 <button className="delete-btn" onClick={() => handleDelete(a.id)}>❌ Remove</button>
//                 <button className="edit-btn" onClick={() => handleEdit(a)}>✏️ Edit</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkoutAssignmentPage;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./WorkoutAssignmentPage.css";

// const WorkoutAssignmentPage = () => {
//   const [users, setUsers] = useState([]);
//   const [assignments, setAssignments] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");
//   const [form, setForm] = useState({
//     exerciseId: "",
//     sets: "",
//     reps: "",
//     duration: "",
//     restTime: "",
//     scheduleDay: "",
//     timestamp: ""
//   });
//   const [editingId, setEditingId] = useState(null);

//   const role = localStorage.getItem("role"); // GUEST / TRAINER / ADMIN
//   const token = localStorage.getItem("token");

//   // Fetch users with role GUEST
//   useEffect(() => {
//     axios.get("http://localhost:8080/users/role/GUEST?page=0&size=50", {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(res => setUsers(res.data.content)) // extract `content` from paginated response
//       .catch(err => console.error("Error fetching users:", err));
//   }, [token]);

//   // Manual list of 20 exercises
//   const exercises = [
//     { id: 1, name: "Push Ups" },
//     { id: 2, name: "Pull Ups" },
//     { id: 3, name: "Squats" },
//     { id: 4, name: "Lunges" },
//     { id: 5, name: "Plank" },
//     { id: 6, name: "Burpees" },
//     { id: 7, name: "Jumping Jacks" },
//     { id: 8, name: "Mountain Climbers" },
//     { id: 9, name: "Sit Ups" },
//     { id: 10, name: "Leg Raises" },
//     { id: 11, name: "Bicep Curls" },
//     { id: 12, name: "Tricep Dips" },
//     { id: 13, name: "Bench Press" },
//     { id: 14, name: "Deadlift" },
//     { id: 15, name: "Overhead Press" },
//     { id: 16, name: "Lat Pulldown" },
//     { id: 17, name: "Seated Row" },
//     { id: 18, name: "Leg Press" },
//     { id: 19, name: "Calf Raises" },
//     { id: 20, name: "Russian Twists" }
//   ];

//   // Fetch assignments for selected user
//   const fetchAssignments = (userId) => {
//     if (!userId) return;
//     axios.get(`http://localhost:8080/api/workout-assignments/user/${userId}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//     .then(res => setAssignments(res.data))
//     .catch(err => console.error("Error fetching assignments:", err));
//   };

//   // Validate all fields
//   const validateForm = () => {
//     if (!selectedUser) return "Select a user";
//     const requiredFields = ["exerciseId", "sets", "reps", "duration", "restTime", "scheduleDay", "timestamp"];
//     for (let field of requiredFields) {
//       if (!form[field]) return `Please enter ${field}`;
//     }
//     return null;
//   };

//   // Handle assignment creation or update
//   const handleAssign = () => {
//     if (role === "GUEST") return alert("Guests cannot assign workouts");
//     const validationError = validateForm();
//     if (validationError) return alert(validationError);

//     const payload = {
//       ...form,
//       userId: selectedUser,
//       timestamp: new Date(form.timestamp).toISOString()
//     };

//     if (editingId) {
//       // Update assignment
//       axios.put(`http://localhost:8080/api/workout-assignments/${editingId}`, payload, {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then(() => {
//         setForm({ exerciseId: "", sets: "", reps: "", duration: "", restTime: "", scheduleDay: "", timestamp: "" });
//         setEditingId(null);
//         fetchAssignments(selectedUser);
//       })
//       .catch(err => console.error("Error updating workout:", err));
//     } else {
//       // Create new assignment
//       axios.post("http://localhost:8080/api/workout-assignments", payload, {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then(() => {
//         setForm({ exerciseId: "", sets: "", reps: "", duration: "", restTime: "", scheduleDay: "", timestamp: "" });
//         fetchAssignments(selectedUser);
//       })
//       .catch(err => console.error("Error assigning workout:", err));
//     }
//   };

//   // Handle deletion
//   const handleDelete = (id) => {
//     if (role === "GUEST") return alert("Guests cannot delete assignments");

//     axios.delete(`http://localhost:8080/api/workout-assignments/${id}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//     .then(() => fetchAssignments(selectedUser))
//     .catch(err => console.error("Error deleting assignment:", err));
//   };

//   // Handle editing
//   const handleEdit = (assignment) => {
//     setEditingId(assignment.id);
//     setForm({
//       exerciseId: assignment.exerciseId,
//       sets: assignment.sets,
//       reps: assignment.reps,
//       duration: assignment.duration,
//       restTime: assignment.restTime,
//       scheduleDay: assignment.scheduleDay,
//       timestamp: assignment.timestamp ? new Date(assignment.timestamp).toISOString().slice(0,16) : ""
//     });
//   };

//   return (
//     <div className="assignment-container">
//       <h2 className="assignment-title">Workout Assignments</h2>

//       {role !== "GUEST" && (
//         <div className="assignment-form">
//           <label>User:</label>
//           <select
//             value={selectedUser}
//             onChange={(e) => {
//               setSelectedUser(e.target.value);
//               fetchAssignments(e.target.value);
//             }}
//           >
//             <option value="">-- Select User --</option>
//             {users.map(u => <option key={u.id} value={u.id}>{u.email}</option>)}
//           </select>

//           <label>Pick Exercise:</label>
//           <select
//             value={form.exerciseId}
//             onChange={(e) => setForm({ ...form, exerciseId: e.target.value })}
//           >
//             <option value="">-- Select Exercise --</option>
//             {exercises.map(ex => <option key={ex.id} value={ex.id}>{ex.name}</option>)}
//           </select>

//           <input placeholder="Sets" type="number" value={form.sets}
//             onChange={(e) => setForm({ ...form, sets: e.target.value })} />
//           <input placeholder="Reps" type="number" value={form.reps}
//             onChange={(e) => setForm({ ...form, reps: e.target.value })} />
//           <input placeholder="Duration (sec)" type="number" value={form.duration}
//             onChange={(e) => setForm({ ...form, duration: e.target.value })} />
//           <input placeholder="Rest Time (sec)" type="number" value={form.restTime}
//             onChange={(e) => setForm({ ...form, restTime: e.target.value })} />
//           <input placeholder="Schedule Day" value={form.scheduleDay}
//             onChange={(e) => setForm({ ...form, scheduleDay: e.target.value })} />

//           <label>Schedule Timestamp:</label>
//           <input type="datetime-local" value={form.timestamp}
//             onChange={(e) => setForm({ ...form, timestamp: e.target.value })} />

//           <button className="assignment-btn" onClick={handleAssign}>
//             {editingId ? "Update Assignment" : "Assign"}
//           </button>
//         </div>
//       )}

//       <div className="assigned-exercises">
//         <h3>Current Assignments</h3>
//         {assignments.length === 0 && <p>No assignments yet.</p>}
//         {assignments.map(a => (
//           <div key={a.id} className="exercise-item">
//             <div className="exercise-details">
//               <span><strong>Email:</strong> {users.find(u => u.id === a.userId)?.email || "N/A"}</span>
//               <span><strong>Exercise ID:</strong> {a.exerciseId}</span>
//               <span><strong>Sets × Reps:</strong> {a.sets} × {a.reps}</span>
//               <span><strong>Duration:</strong> {a.duration} sec</span>
//               <span><strong>Rest Time:</strong> {a.restTime} sec</span>
//               <span><strong>Day:</strong> {a.scheduleDay}</span>
//               <span><strong>Scheduled at:</strong> {a.timestamp ? new Date(a.timestamp).toLocaleString() : "N/A"}</span>
//             </div>
//             {role !== "GUEST" && (
//               <div className="exercise-actions">
//                 <button className="delete-btn" onClick={() => handleDelete(a.id)}>❌ Remove</button>
//                 <button className="edit-btn" onClick={() => handleEdit(a)}>✏️ Edit</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkoutAssignmentPage;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./WorkoutAssignmentPage.css";

// const WorkoutAssignmentPage = () => {
//   const [users, setUsers] = useState([]);
//   const [assignments, setAssignments] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");
//   const [form, setForm] = useState({
//     exerciseId: "",
//     sets: "",
//     reps: "",
//     duration: "",
//     restTime: "",
//     scheduleDay: "",
//     timestamp: ""
//   });
//   const [editingId, setEditingId] = useState(null);

//   const role = localStorage.getItem("role"); // GUEST / TRAINER / ADMIN
//   const token = localStorage.getItem("token");

//   // Fetch users with role GUEST
//   useEffect(() => {
//     axios.get("http://localhost:8080/users/role/GUEST?page=0&size=50", {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(res => setUsers(res.data.content))
//       .catch(err => console.error("Error fetching users:", err));
//   }, [token]);

//   // Manual list of exercises
//   const exercises = [
//     { id: 1, name: "Push Ups" }, { id: 2, name: "Pull Ups" },
//     { id: 3, name: "Squats" }, { id: 4, name: "Lunges" },
//     { id: 5, name: "Plank" }, { id: 6, name: "Burpees" },
//     { id: 7, name: "Jumping Jacks" }, { id: 8, name: "Mountain Climbers" },
//     { id: 9, name: "Sit Ups" }, { id: 10, name: "Leg Raises" },
//     { id: 11, name: "Bicep Curls" }, { id: 12, name: "Tricep Dips" },
//     { id: 13, name: "Bench Press" }, { id: 14, name: "Deadlift" },
//     { id: 15, name: "Overhead Press" }, { id: 16, name: "Lat Pulldown" },
//     { id: 17, name: "Seated Row" }, { id: 18, name: "Leg Press" },
//     { id: 19, name: "Calf Raises" }, { id: 20, name: "Russian Twists" }
//   ];

//   // Fetch assignments for selected user
//   const fetchAssignments = (userId) => {
//     if (!userId) return;
//     axios.get(`http://localhost:8080/api/workout-assignments/user/${userId}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(res => {
//         // Map backend scheduledDate to timestamp
//         const mapped = res.data.map(a => ({
//           ...a,
//           timestamp: a.scheduledDate
//         }));
//         setAssignments(mapped);
//       })
//       .catch(err => console.error("Error fetching assignments:", err));
//   };

//   // Validate all fields
//   const validateForm = () => {
//     if (!selectedUser) return "Select a user";
//     const requiredFields = ["exerciseId", "sets", "reps", "duration", "restTime", "scheduleDay", "timestamp"];
//     for (let field of requiredFields) {
//       if (!form[field]) return `Please enter ${field}`;
//     }
//     return null;
//   };

//   // Handle assignment creation or update
//   const handleAssign = () => {
//     if (role === "GUEST") return alert("Guests cannot assign workouts");
//     const validationError = validateForm();
//     if (validationError) return alert(validationError);

//     const payload = {
//       exerciseId: form.exerciseId,
//       sets: form.sets,
//       reps: form.reps,
//       duration: form.duration,
//       restTime: form.restTime,
//       scheduleDay: form.scheduleDay,
//       scheduledDate: new Date(form.timestamp).toISOString(),
//       userId: selectedUser
//     };

//     if (editingId) {
//       axios.put(`http://localhost:8080/api/workout-assignments/${editingId}`, payload, {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then(() => {
//         setForm({ exerciseId: "", sets: "", reps: "", duration: "", restTime: "", scheduleDay: "", timestamp: "" });
//         setEditingId(null);
//         fetchAssignments(selectedUser);
//       })
//       .catch(err => console.error("Error updating assignment:", err));
//     } else {
//       axios.post("http://localhost:8080/api/workout-assignments", payload, {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then(() => {
//         setForm({ exerciseId: "", sets: "", reps: "", duration: "", restTime: "", scheduleDay: "", timestamp: "" });
//         fetchAssignments(selectedUser);
//       })
//       .catch(err => console.error("Error assigning workout:", err));
//     }
//   };

//   const handleDelete = (id) => {
//     if (role === "GUEST") return alert("Guests cannot delete assignments");
//     axios.delete(`http://localhost:8080/api/workout-assignments/${id}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(() => fetchAssignments(selectedUser))
//       .catch(err => console.error("Error deleting assignment:", err));
//   };

//   const handleEdit = (assignment) => {
//     setEditingId(assignment.id);
//     setForm({
//       exerciseId: assignment.exerciseId,
//       sets: assignment.sets,
//       reps: assignment.reps,
//       duration: assignment.duration,
//       restTime: assignment.restTime,
//       scheduleDay: assignment.scheduleDay,
//       timestamp: assignment.timestamp ? new Date(assignment.timestamp).toISOString().slice(0,16) : ""
//     });
//   };

//   return (
//     <div className="assignment-container">
//       <h2 className="assignment-title">Workout Assignments</h2>

//       {role !== "GUEST" && (
//         <div className="assignment-form">
//           <label>User:</label>
//           <select
//             value={selectedUser}
//             onChange={(e) => {
//               setSelectedUser(e.target.value);
//               fetchAssignments(e.target.value);
//             }}
//           >
//             <option value="">-- Select User --</option>
//             {users.map(u => <option key={u.id} value={u.id}>{u.email}</option>)}
//           </select>

//           <label>Pick Exercise:</label>
//           <select
//             value={form.exerciseId}
//             onChange={(e) => setForm({ ...form, exerciseId: e.target.value })}
//           >
//             <option value="">-- Select Exercise --</option>
//             {exercises.map(ex => <option key={ex.id} value={ex.id}>{ex.name}</option>)}
//           </select>

//           <input placeholder="Sets" type="number" value={form.sets}
//             onChange={(e) => setForm({ ...form, sets: e.target.value })} />
//           <input placeholder="Reps" type="number" value={form.reps}
//             onChange={(e) => setForm({ ...form, reps: e.target.value })} />
//           <input placeholder="Duration (sec)" type="number" value={form.duration}
//             onChange={(e) => setForm({ ...form, duration: e.target.value })} />
//           <input placeholder="Rest Time (sec)" type="number" value={form.restTime}
//             onChange={(e) => setForm({ ...form, restTime: e.target.value })} />
//           <input placeholder="Schedule Day" value={form.scheduleDay}
//             onChange={(e) => setForm({ ...form, scheduleDay: e.target.value })} />

//           <label>Schedule Timestamp:</label>
//           <input type="datetime-local" value={form.timestamp}
//             onChange={(e) => setForm({ ...form, timestamp: e.target.value })} />

//           <button className="assignment-btn" onClick={handleAssign}>
//             {editingId ? "Update Assignment" : "Assign"}
//           </button>
//         </div>
//       )}

//       <div className="assigned-exercises">
//         <h3>Current Assignments</h3>
//         {assignments.length === 0 && <p>No assignments yet.</p>}
//         {assignments.map(a => (
//           <div key={a.id} className="exercise-item">
//             <div className="exercise-details">
//               <span><strong>Email:</strong> {users.find(u => u.id === a.userId)?.email || "N/A"}</span>
//               <span><strong>Exercise ID:</strong> {a.exerciseId}</span>
//               <span><strong>Sets × Reps:</strong> {a.sets} × {a.reps}</span>
//               <span><strong>Duration:</strong> {a.duration} sec</span>
//               <span><strong>Rest Time:</strong> {a.restTime} sec</span>
//               <span><strong>Day:</strong> {a.scheduleDay}</span>
//               <span><strong>Scheduled at:</strong> {a.timestamp ? new Date(a.timestamp).toLocaleString() : "N/A"}</span>
//             </div>
//             {role !== "GUEST" && (
//               <div className="exercise-actions">
//                 <button className="delete-btn" onClick={() => handleDelete(a.id)}>❌ Remove</button>
//                 <button className="edit-btn" onClick={() => handleEdit(a)}>✏️ Edit</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkoutAssignmentPage;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./WorkoutAssignmentPage.css";

// const WorkoutAssignmentPage = () => {
//   const [users, setUsers] = useState([]);
//   const [assignments, setAssignments] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");
//   const [form, setForm] = useState({
//     exerciseId: "",
//     sets: "",
//     reps: "",
//     duration: "",
//     restTime: "",
//     scheduleDay: "",
//     timestamp: ""
//   });
//   const [editingId, setEditingId] = useState(null);

//   const role = localStorage.getItem("role"); // GUEST / TRAINER / ADMIN
//   const token = localStorage.getItem("token");

//   // Fetch users with role GUEST
//   useEffect(() => {
//     axios.get("http://localhost:8080/users/role/GUEST?page=0&size=50", {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(res => setUsers(res.data.content))
//       .catch(err => console.error("Error fetching users:", err));
//   }, [token]);

//   // Manual list of exercises
//   const exercises = [
//     { id: 1, name: "Push Ups" }, { id: 2, name: "Pull Ups" }, { id: 3, name: "Squats" },
//     { id: 4, name: "Lunges" }, { id: 5, name: "Plank" }, { id: 6, name: "Burpees" },
//     { id: 7, name: "Jumping Jacks" }, { id: 8, name: "Mountain Climbers" },
//     { id: 9, name: "Sit Ups" }, { id: 10, name: "Leg Raises" },
//     { id: 11, name: "Bicep Curls" }, { id: 12, name: "Tricep Dips" },
//     { id: 13, name: "Bench Press" }, { id: 14, name: "Deadlift" },
//     { id: 15, name: "Overhead Press" }, { id: 16, name: "Lat Pulldown" },
//     { id: 17, name: "Seated Row" }, { id: 18, name: "Leg Press" },
//     { id: 19, name: "Calf Raises" }, { id: 20, name: "Russian Twists" }
//   ];

//   // Fetch assignments for selected user
//   const fetchAssignments = (userId) => {
//     if (!userId) return;
//     axios.get(`http://localhost:8080/api/workout-assignments/user/${userId}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//     .then(res => setAssignments(res.data))
//     .catch(err => console.error("Error fetching assignments:", err));
//   };

//   // Validate form fields
//   const validateForm = () => {
//     if (!selectedUser) return "Select a user";
//     const requiredFields = ["exerciseId", "sets", "reps", "duration", "restTime", "scheduleDay", "timestamp"];
//     for (let field of requiredFields) {
//       if (!form[field]) return `Please enter ${field}`;
//     }
//     return null;
//   };

//   // Assign or update workout
//   const handleAssign = () => {
//     if (role === "GUEST") return alert("Guests cannot assign workouts");
//     const validationError = validateForm();
//     if (validationError) return alert(validationError);

//     const payload = {
//       ...form,
//       userId: selectedUser,
//       timestamp: new Date(form.timestamp).toISOString()
//     };

//     if (editingId) {
//       axios.put(`http://localhost:8080/api/workout-assignments/${editingId}`, payload, {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then(() => {
//         setForm({ exerciseId: "", sets: "", reps: "", duration: "", restTime: "", scheduleDay: "", timestamp: "" });
//         setEditingId(null);
//         fetchAssignments(selectedUser);
//       })
//       .catch(err => console.error("Error updating assignment:", err));
//     } else {
//       axios.post("http://localhost:8080/api/workout-assignments", payload, {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then(() => {
//         setForm({ exerciseId: "", sets: "", reps: "", duration: "", restTime: "", scheduleDay: "", timestamp: "" });
//         fetchAssignments(selectedUser);
//       })
//       .catch(err => console.error("Error assigning workout:", err));
//     }
//   };

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:8080/api/workout-assignments/${id}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//     .then(() => fetchAssignments(selectedUser))
//     .catch(err => console.error("Error deleting assignment:", err));
//   };

//   const handleEdit = (assignment) => {
//     setEditingId(assignment.id);
//     setForm({
//       exerciseId: assignment.exerciseId,
//       sets: assignment.sets,
//       reps: assignment.reps,
//       duration: assignment.duration,
//       restTime: assignment.restTime,
//       scheduleDay: assignment.scheduleDay,
//       timestamp: assignment.timestamp ? new Date(assignment.timestamp).toISOString().slice(0,16) : ""
//     });
//   };

//   return (
//     <div className="assignment-container">
//       <h2 className="assignment-title">Workout Assignments</h2>

//       {role !== "GUEST" && (
//         <div className="assignment-form">
//           <label>User:</label>
//           <select
//             value={selectedUser}
//             onChange={(e) => {
//               setSelectedUser(e.target.value);
//               fetchAssignments(e.target.value);
//             }}
//           >
//             <option value="">-- Select User --</option>
//             {users.map(u => <option key={u.id} value={u.id}>{u.email}</option>)}
//           </select>

//           <label>Pick Exercise:</label>
//           <select
//             value={form.exerciseId}
//             onChange={(e) => setForm({ ...form, exerciseId: e.target.value })}
//           >
//             <option value="">-- Select Exercise --</option>
//             {exercises.map(ex => <option key={ex.id} value={ex.id}>{ex.name}</option>)}
//           </select>

//           <input placeholder="Sets" type="number" value={form.sets}
//             onChange={(e) => setForm({ ...form, sets: e.target.value })} />
//           <input placeholder="Reps" type="number" value={form.reps}
//             onChange={(e) => setForm({ ...form, reps: e.target.value })} />
//           <input placeholder="Duration (sec)" type="number" value={form.duration}
//             onChange={(e) => setForm({ ...form, duration: e.target.value })} />
//           <input placeholder="Rest Time (sec)" type="number" value={form.restTime}
//             onChange={(e) => setForm({ ...form, restTime: e.target.value })} />
//           <input placeholder="Schedule Day" value={form.scheduleDay}
//             onChange={(e) => setForm({ ...form, scheduleDay: e.target.value })} />
//           <label>Schedule Timestamp:</label>
//           <input type="datetime-local" value={form.timestamp}
//             onChange={(e) => setForm({ ...form, timestamp: e.target.value })} />

//           <button className="assignment-btn" onClick={handleAssign}>
//             {editingId ? "Update Assignment" : "Assign"}
//           </button>
//         </div>
//       )}

//       <div className="assigned-exercises">
//         <h3>Current Assignments</h3>
//         {assignments.length === 0 && <p>No assignments yet.</p>}
//         {assignments.map(a => (
//           <div key={a.id} className="exercise-item">
//             <div className="exercise-details">
//               <span><strong>Email:</strong> {users.find(u => u.id === a.userId)?.email || "N/A"}</span>
//               <span><strong>Exercise ID:</strong> {a.exerciseId}</span>
//               <span><strong>Sets × Reps:</strong> {a.sets} × {a.reps}</span>
//               <span><strong>Duration:</strong> {a.duration} sec</span>
//               <span><strong>Rest Time:</strong> {a.restTime} sec</span>
//               <span><strong>Day:</strong> {a.scheduleDay}</span>
//               {/* <span><strong>Scheduled at:</strong> {a.timestamp ? new Date(a.timestamp).toLocaleString() : "N/A"}</span> */}
//             </div>
//             {(role === "TRAINER" || role === "ADMIN") && (
//               <div className="exercise-actions">
//                 <button className="delete-btn" onClick={() => handleDelete(a.id)}>❌ Remove</button>
//                 <button className="edit-btn" onClick={() => handleEdit(a)}>✏️ Edit</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkoutAssignmentPage;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./WorkoutAssignmentPage.css";

// const WorkoutAssignmentPage = () => {
//   const [users, setUsers] = useState([]);
//   const [assignments, setAssignments] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");
//   const [form, setForm] = useState({
//     exerciseId: "",
//     sets: "",
//     reps: "",
//     duration: "",
//     restTime: "",
//     scheduleDay: "",
//     scheduledDate: "" // changed from timestamp
//   });
//   const [editingId, setEditingId] = useState(null);

//   const role = localStorage.getItem("role"); // GUEST / TRAINER / ADMIN
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     axios.get("http://localhost:8080/users/role/GUEST?page=0&size=50", {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(res => setUsers(res.data.content))
//       .catch(err => console.error("Error fetching users:", err));
//   }, [token]);

//   const exercises = [
//     { id: 1, name: "Push Ups" }, { id: 2, name: "Pull Ups" }, { id: 3, name: "Squats" },
//     { id: 4, name: "Lunges" }, { id: 5, name: "Plank" }, { id: 6, name: "Burpees" },
//     { id: 7, name: "Jumping Jacks" }, { id: 8, name: "Mountain Climbers" },
//     { id: 9, name: "Sit Ups" }, { id: 10, name: "Leg Raises" }
//   ];

//   const fetchAssignments = (userId) => {
//     if (!userId) return;
//     axios.get(`http://localhost:8080/api/workout-assignments/user/${userId}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(res => setAssignments(res.data))
//       .catch(err => console.error("Error fetching assignments:", err));
//   };

//   const validateForm = () => {
//     if (!selectedUser) return "Select a user";
//     const requiredFields = ["exerciseId", "sets", "reps", "duration", "restTime", "scheduleDay", "scheduledDate"];
//     for (let field of requiredFields) {
//       if (!form[field]) return `Please enter ${field}`;
//     }
//     return null;
//   };

//   const handleAssign = () => {
//     if (role === "GUEST") return alert("Guests cannot assign workouts");
//     const validationError = validateForm();
//     if (validationError) return alert(validationError);

//     const payload = {
//       ...form,
//       userId: selectedUser,
//       scheduledDate: new Date(form.scheduledDate).toISOString()
//     };

//     if (editingId) {
//       axios.put(`http://localhost:8080/api/workout-assignments/${editingId}`, payload, {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then(() => {
//         setForm({ exerciseId: "", sets: "", reps: "", duration: "", restTime: "", scheduleDay: "", scheduledDate: "" });
//         setEditingId(null);
//         fetchAssignments(selectedUser);
//       })
//       .catch(err => console.error("Error updating assignment:", err));
//     } else {
//       axios.post("http://localhost:8080/api/workout-assignments", payload, {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then(() => {
//         setForm({ exerciseId: "", sets: "", reps: "", duration: "", restTime: "", scheduleDay: "", scheduledDate: "" });
//         fetchAssignments(selectedUser);
//       })
//       .catch(err => console.error("Error assigning workout:", err));
//     }
//   };

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:8080/api/workout-assignments/${id}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(() => fetchAssignments(selectedUser))
//       .catch(err => console.error("Error deleting assignment:", err));
//   };

//   const handleEdit = (assignment) => {
//     setEditingId(assignment.id);
//     setForm({
//       exerciseId: assignment.exerciseId,
//       sets: assignment.sets,
//       reps: assignment.reps,
//       duration: assignment.duration,
//       restTime: assignment.restTime,
//       scheduleDay: assignment.scheduleDay,
//       scheduledDate: assignment.scheduledDate ? new Date(assignment.scheduledDate).toISOString().slice(0,16) : ""
//     });
//   };

//   return (
//     <div className="assignment-container">
//       <h2 className="assignment-title">Workout Assignments</h2>

//       {role !== "GUEST" && (
//         <div className="assignment-form">
//           <label>User:</label>
//           <select value={selectedUser} onChange={e => { setSelectedUser(e.target.value); fetchAssignments(e.target.value); }}>
//             <option value="">-- Select User --</option>
//             {users.map(u => <option key={u.id} value={u.id}>{u.email}</option>)}
//           </select>

//           <label>Pick Exercise:</label>
//           <select value={form.exerciseId} onChange={e => setForm({ ...form, exerciseId: e.target.value })}>
//             <option value="">-- Select Exercise --</option>
//             {exercises.map(ex => <option key={ex.id} value={ex.id}>{ex.name}</option>)}
//           </select>

//           <input placeholder="Sets" type="number" value={form.sets} onChange={e => setForm({ ...form, sets: e.target.value })} />
//           <input placeholder="Reps" type="number" value={form.reps} onChange={e => setForm({ ...form, reps: e.target.value })} />
//           <input placeholder="Duration (sec)" type="number" value={form.duration} onChange={e => setForm({ ...form, duration: e.target.value })} />
//           <input placeholder="Rest Time (sec)" type="number" value={form.restTime} onChange={e => setForm({ ...form, restTime: e.target.value })} />
//           <input placeholder="Schedule Day" value={form.scheduleDay} onChange={e => setForm({ ...form, scheduleDay: e.target.value })} />
//           <label>Schedule Timestamp:</label>
//           <input type="datetime-local" value={form.scheduledDate} onChange={e => setForm({ ...form, scheduledDate: e.target.value })} />

//           <button className="assignment-btn" onClick={handleAssign}>{editingId ? "Update Assignment" : "Assign"}</button>
//         </div>
//       )}

//       <div className="assigned-exercises">
//         <h3>Current Assignments</h3>
//         {assignments.length === 0 && <p>No assignments yet.</p>}
//         {assignments.map(a => (
//           <div key={a.id} className="exercise-item">
//             <div className="exercise-details">
//               <span><strong>Email:</strong> {users.find(u => u.id === a.userId)?.email || "N/A"}</span>
//               <span><strong>Exercise ID:</strong> {a.exerciseId}</span>
//               <span><strong>Sets × Reps:</strong> {a.sets} × {a.reps}</span>
//               <span><strong>Duration:</strong> {a.duration} sec</span>
//               <span><strong>Rest Time:</strong> {a.restTime} sec</span>
//               <span><strong>Day:</strong> {a.scheduleDay}</span>
//               {/* <span><strong>Scheduled at:</strong> {a.scheduledDate ? new Date(a.scheduledDate).toLocaleString() : "N/A"}</span> */}
//             </div>
//             {(role === "TRAINER" || role === "ADMIN") && (
//               <div className="exercise-actions">
//                 <button className="delete-btn" onClick={() => handleDelete(a.id)}>❌ Remove</button>
//                 <button className="edit-btn" onClick={() => handleEdit(a)}>✏️ Edit</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkoutAssignmentPage;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./WorkoutAssignmentPage.css";

// const WorkoutAssignmentPage = () => {
//   const [users, setUsers] = useState([]);
//   const [assignments, setAssignments] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");
//   const [form, setForm] = useState({
//     exerciseId: "",
//     sets: "",
//     reps: "",
//     duration: "",
//     restTime: "",
//     scheduleDay: "",
//     scheduledDate: ""
//   });
//   const [editingId, setEditingId] = useState(null);

//   const role = localStorage.getItem("role"); // GUEST / TRAINER / ADMIN
//   const token = localStorage.getItem("token");
//   const email = localStorage.getItem("email"); // for fetching user assignments

//   const exercises = [
//     { id: 1, name: "Push Ups" }, { id: 2, name: "Pull Ups" }, { id: 3, name: "Squats" },
//     { id: 4, name: "Lunges" }, { id: 5, name: "Plank" }, { id: 6, name: "Burpees" },
//     { id: 7, name: "Jumping Jacks" }, { id: 8, name: "Mountain Climbers" },
//     { id: 9, name: "Sit Ups" }, { id: 10, name: "Leg Raises" }
//   ];

//   // Fetch all trainees for trainer/admin
//   useEffect(() => {
//     if (role === "TRAINER" || role === "ADMIN") {
//       axios.get("http://localhost:8080/users/role/GUEST?page=0&size=50", {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//         .then(res => setUsers(res.data.content))
//         .catch(err => console.error("Error fetching users:", err));
//     }
//   }, [role, token]);

//   // Fetch assignments for current user
//   useEffect(() => {
//     if (role === "GUEST" && email) {
//       axios.get(`http://localhost:8080/api/workout-assignments/user/${localStorage.getItem("userId")}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//         .then(res => setAssignments(res.data))
//         .catch(err => console.error("Error fetching user assignments:", err));
//     }
//   }, [role, token, email]);

//   // Fetch assignments for selected trainee (trainer/admin)
//   const fetchAssignments = (userId) => {
//     if (!userId) return;
//     axios.get(`http://localhost:8080/api/workout-assignments/user/${userId}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(res => setAssignments(res.data))
//       .catch(err => console.error("Error fetching assignments:", err));
//   };

//   const validateForm = () => {
//     if ((role === "TRAINER" || role === "ADMIN") && !selectedUser) return "Select a user";
//     const requiredFields = ["exerciseId", "sets", "reps", "duration", "restTime", "scheduleDay", "scheduledDate"];
//     for (let field of requiredFields) {
//       if (!form[field]) return `Please enter ${field}`;
//     }
//     return null;
//   };

//   const handleAssign = () => {
//     if (role === "GUEST") return alert("Guests cannot assign workouts");
//     const validationError = validateForm();
//     if (validationError) return alert(validationError);

//     const payload = {
//       ...form,
//       userId: selectedUser,
//       scheduledDate: new Date(form.scheduledDate).toISOString()
//     };

//     if (editingId) {
//       axios.put(`http://localhost:8080/api/workout-assignments/${editingId}`, payload, {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then(() => {
//         setForm({ exerciseId: "", sets: "", reps: "", duration: "", restTime: "", scheduleDay: "", scheduledDate: "" });
//         setEditingId(null);
//         fetchAssignments(selectedUser);
//       })
//       .catch(err => console.error("Error updating assignment:", err));
//     } else {
//       axios.post("http://localhost:8080/api/workout-assignments", payload, {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then(() => {
//         setForm({ exerciseId: "", sets: "", reps: "", duration: "", restTime: "", scheduleDay: "", scheduledDate: "" });
//         fetchAssignments(selectedUser);
//       })
//       .catch(err => console.error("Error assigning workout:", err));
//     }
//   };

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:8080/api/workout-assignments/${id}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(() => fetchAssignments(selectedUser))
//       .catch(err => console.error("Error deleting assignment:", err));
//   };

//   const handleEdit = (assignment) => {
//     setEditingId(assignment.id);
//     setForm({
//       exerciseId: assignment.exerciseId,
//       sets: assignment.sets,
//       reps: assignment.reps,
//       duration: assignment.duration,
//       restTime: assignment.restTime,
//       scheduleDay: assignment.scheduleDay,
//       scheduledDate: assignment.scheduledDate ? new Date(assignment.scheduledDate).toISOString().slice(0,16) : ""
//     });
//   };

//   return (
//     <div className="assignment-container">
//       <h2 className="assignment-title">Workout Assignments</h2>

//       {(role === "TRAINER" || role === "ADMIN") && (
//         <div className="assignment-form">
//           <label>User:</label>
//           <select value={selectedUser} onChange={e => { setSelectedUser(e.target.value); fetchAssignments(e.target.value); }}>
//             <option value="">-- Select User --</option>
//             {users.map(u => <option key={u.id} value={u.id}>{u.email}</option>)}
//           </select>

//           <label>Pick Exercise:</label>
//           <select value={form.exerciseId} onChange={e => setForm({ ...form, exerciseId: e.target.value })}>
//             <option value="">-- Select Exercise --</option>
//             {exercises.map(ex => <option key={ex.id} value={ex.id}>{ex.name}</option>)}
//           </select>

//           <input placeholder="Sets" type="number" value={form.sets} onChange={e => setForm({ ...form, sets: e.target.value })} />
//           <input placeholder="Reps" type="number" value={form.reps} onChange={e => setForm({ ...form, reps: e.target.value })} />
//           <input placeholder="Duration (sec)" type="number" value={form.duration} onChange={e => setForm({ ...form, duration: e.target.value })} />
//           <input placeholder="Rest Time (sec)" type="number" value={form.restTime} onChange={e => setForm({ ...form, restTime: e.target.value })} />
//           <input placeholder="Schedule Day" value={form.scheduleDay} onChange={e => setForm({ ...form, scheduleDay: e.target.value })} />
//           <label>Schedule Timestamp:</label>
//           <input type="datetime-local" value={form.scheduledDate} onChange={e => setForm({ ...form, scheduledDate: e.target.value })} />

//           <button className="assignment-btn" onClick={handleAssign}>{editingId ? "Update Assignment" : "Assign"}</button>
//         </div>
//       )}

//       <div className="assigned-exercises">
//         <h3>Current Assignments</h3>
//         {assignments.length === 0 && <p>No assignments yet.</p>}
//         {assignments.map(a => (
//           <div key={a.id} className="exercise-item">
//             <div className="exercise-details">
//               <span><strong>Email:</strong> {users.find(u => u.id === a.userId)?.email || "N/A"}</span>
//               <span><strong>Exercise ID:</strong> {a.exerciseId}</span>
//               <span><strong>Sets × Reps:</strong> {a.sets} × {a.reps}</span>
//               <span><strong>Duration:</strong> {a.duration} sec</span>
//               <span><strong>Rest Time:</strong> {a.restTime} sec</span>
//               <span><strong>Day:</strong> {a.scheduleDay}</span>
//               <span><strong>Scheduled at:</strong> {a.scheduledDate ? new Date(a.scheduledDate).toLocaleString() : "N/A"}</span>
//             </div>
//             {(role === "TRAINER" || role === "ADMIN") && (
//               <div className="exercise-actions">
//                 <button className="delete-btn" onClick={() => handleDelete(a.id)}>❌ Remove</button>
//                 <button className="edit-btn" onClick={() => handleEdit(a)}>✏️ Edit</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkoutAssignmentPage;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./WorkoutAssignmentPage.css";

// const WorkoutAssignmentPage = () => {
//   const [users, setUsers] = useState([]);
//   const [assignments, setAssignments] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");
//   const [form, setForm] = useState({
//     exerciseId: "",
//     sets: "",
//     reps: "",
//     duration: "",
//     restTime: "",
//     scheduleDay: "",
//     scheduledDate: ""
//   });
//   const [editingId, setEditingId] = useState(null);

//   const role = localStorage.getItem("role"); // GUEST / TRAINER / ADMIN
//   const token = localStorage.getItem("token");
//   const email = localStorage.getItem("email"); // for fetching user assignments

//   const exercises = [
//     { id: 1, name: "Push Ups" }, { id: 2, name: "Pull Ups" }, { id: 3, name: "Squats" },
//     { id: 4, name: "Lunges" }, { id: 5, name: "Plank" }, { id: 6, name: "Burpees" },
//     { id: 7, name: "Jumping Jacks" }, { id: 8, name: "Mountain Climbers" },
//     { id: 9, name: "Sit Ups" }, { id: 10, name: "Leg Raises" }
//   ];

//   // Fetch all trainees for trainer/admin
//   useEffect(() => {
//     if (role === "TRAINER" || role === "ADMIN") {
//       axios.get("http://localhost:8080/users/role/GUEST?page=0&size=50", {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//         .then(res => setUsers(res.data.content))
//         .catch(err => console.error("Error fetching users:", err));
//     }
//   }, [role, token]);

//   // Fetch assignments for current user
//   useEffect(() => {
//     if (role === "GUEST" && email) {
//       axios.get(`http://localhost:8080/api/workout-assignments/user/${localStorage.getItem("userId")}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//         .then(res => setAssignments(res.data))
//         .catch(err => console.error("Error fetching user assignments:", err));
//     }
//   }, [role, token, email]);

//   // Fetch assignments for selected trainee (trainer/admin)
//   const fetchAssignments = (userId) => {
//     if (!userId) return;
//     axios.get(`http://localhost:8080/api/workout-assignments/user/${userId}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(res => setAssignments(res.data))
//       .catch(err => console.error("Error fetching assignments:", err));
//   };

//   const validateForm = () => {
//     if ((role === "TRAINER" || role === "ADMIN") && !selectedUser) return "Select a user";
//     const requiredFields = ["exerciseId", "sets", "reps", "duration", "restTime", "scheduleDay", "scheduledDate"];
//     for (let field of requiredFields) {
//       if (!form[field]) return `Please enter ${field}`;
//     }
//     return null;
//   };

//   const handleAssign = () => {
//     if (role === "GUEST") return alert("Guests cannot assign workouts");
//     const validationError = validateForm();
//     if (validationError) return alert(validationError);

//     const payload = {
//       ...form,
//       userId: selectedUser,
//       scheduledDate: new Date(form.scheduledDate).toISOString()
//     };

//     if (editingId) {
//       axios.put(`http://localhost:8080/api/workout-assignments/${editingId}`, payload, {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then(() => {
//         setForm({ exerciseId: "", sets: "", reps: "", duration: "", restTime: "", scheduleDay: "", scheduledDate: "" });
//         setEditingId(null);
//         fetchAssignments(selectedUser);
//       })
//       .catch(err => console.error("Error updating assignment:", err));
//     } else {
//       axios.post("http://localhost:8080/api/workout-assignments", payload, {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then(() => {
//         setForm({ exerciseId: "", sets: "", reps: "", duration: "", restTime: "", scheduleDay: "", scheduledDate: "" });
//         fetchAssignments(selectedUser);
//       })
//       .catch(err => console.error("Error assigning workout:", err));
//     }
//   };

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:8080/api/workout-assignments/${id}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//       .then(() => fetchAssignments(selectedUser))
//       .catch(err => console.error("Error deleting assignment:", err));
//   };

//   const handleEdit = (assignment) => {
//     setEditingId(assignment.id);
//     setForm({
//       exerciseId: assignment.exerciseId,
//       sets: assignment.sets,
//       reps: assignment.reps,
//       duration: assignment.duration,
//       restTime: assignment.restTime,
//       scheduleDay: assignment.scheduleDay,
//       scheduledDate: assignment.scheduledDate ? new Date(assignment.scheduledDate).toISOString().slice(0,16) : ""
//     });
//   };

//   return (
//     <div className="assignment-container">
//       <h2 className="assignment-title">Workout Assignments</h2>

//       {(role === "TRAINER" || role === "ADMIN") && (
//         <div className="assignment-form">
//           <label>User:</label>
//           <select value={selectedUser} onChange={e => { setSelectedUser(e.target.value); fetchAssignments(e.target.value); }}>
//             <option value="">-- Select User --</option>
//             {users.map(u => <option key={u.id} value={u.id}>{u.email}</option>)}
//           </select>

//           <label>Pick Exercise:</label>
//           <select value={form.exerciseId} onChange={e => setForm({ ...form, exerciseId: e.target.value })}>
//             <option value="">-- Select Exercise --</option>
//             {exercises.map(ex => <option key={ex.id} value={ex.id}>{ex.name}</option>)}
//           </select>

//           <input placeholder="Sets" type="number" value={form.sets} onChange={e => setForm({ ...form, sets: e.target.value })} />
//           <input placeholder="Reps" type="number" value={form.reps} onChange={e => setForm({ ...form, reps: e.target.value })} />
//           <input placeholder="Duration (sec)" type="number" value={form.duration} onChange={e => setForm({ ...form, duration: e.target.value })} />
//           <input placeholder="Rest Time (sec)" type="number" value={form.restTime} onChange={e => setForm({ ...form, restTime: e.target.value })} />
//           <input placeholder="Schedule Day" value={form.scheduleDay} onChange={e => setForm({ ...form, scheduleDay: e.target.value })} />
//           <label>Schedule Timestamp:</label>
//           <input type="datetime-local" value={form.scheduledDate} onChange={e => setForm({ ...form, scheduledDate: e.target.value })} />

//           <button className="assignment-btn" onClick={handleAssign}>{editingId ? "Update Assignment" : "Assign"}</button>
//         </div>
//       )}

//       <div className="assigned-exercises">
//         <h3>Current Assignments</h3>
//         {assignments.length === 0 && <p>No assignments yet.</p>}
//         {assignments.map(a => (
//           <div key={a.id} className="exercise-item">
//             <div className="exercise-details">
//               <span><strong>Email:</strong> {users.find(u => u.id === a.userId)?.email || "N/A"}</span>
//               <span><strong>Exercise ID:</strong> {a.exerciseId}</span>
//               <span><strong>Sets × Reps:</strong> {a.sets} × {a.reps}</span>
//               <span><strong>Duration:</strong> {a.duration} sec</span>
//               <span><strong>Rest Time:</strong> {a.restTime} sec</span>
//               <span><strong>Day:</strong> {a.scheduleDay}</span>
//               <span><strong>Scheduled at:</strong> {a.scheduledDate ? new Date(a.scheduledDate).toLocaleString() : "N/A"}</span>
//             </div>
//             {(role === "TRAINER" || role === "ADMIN") && (
//               <div className="exercise-actions">
//                 <button className="delete-btn" onClick={() => handleDelete(a.id)}>❌ Remove</button>
//                 <button className="edit-btn" onClick={() => handleEdit(a)}>✏️ Edit</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkoutAssignmentPage;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WorkoutAssignmentPage.css";

const WorkoutAssignmentPage = () => {
  const [users, setUsers] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [form, setForm] = useState({
    exerciseId: "",
    sets: "",
    reps: "",
    duration: "",
    restTime: "",
    scheduleDay: "",
    scheduledDate: ""
  });
  const [editingId, setEditingId] = useState(null);

  const role = localStorage.getItem("role"); // USER / TRAINER / ADMIN
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId"); // logged-in user ID

  // Set default Authorization header
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const exercises = [
    { id: 1, name: "Push Ups" }, { id: 2, name: "Pull Ups" }, { id: 3, name: "Squats" },
    { id: 4, name: "Lunges" }, { id: 5, name: "Plank" }, { id: 6, name: "Burpees" },
    { id: 7, name: "Jumping Jacks" }, { id: 8, name: "Mountain Climbers" },
    { id: 9, name: "Sit Ups" }, { id: 10, name: "Leg Raises" }
  ];

  useEffect(() => {
    // Fetch all users for trainers/admins
    if (role === "TRAINER" || role === "ADMIN") {
      axios.get(`https://fiitness-tracker-app.onrender.com/users/role/GUEST?page=0&size=50`)
        .then(res => setUsers(res.data.content))
        .catch(err => console.error("Error fetching users:", err));
    }

    // Fetch assignments
    fetchAssignments();
  }, []);

  const fetchAssignments = () => {
    // For users, fetch their own assignments
    let url = role === "USER"
      ? `https://fiitness-tracker-app.onrender.com/api/workout-assignments/my-assignments?userId=${userId}`
      : `https://fiitness-tracker-app.onrender.com/api/workout-assignments/all`; // trainers/admins see all assignments

    axios.get(url)
      .then(res => setAssignments(res.data))
      .catch(err => console.error("Error fetching assignments:", err));
  };

  const validateForm = () => {
    if ((role === "TRAINER" || role === "ADMIN") && !selectedUser) return "Select a user";
    const requiredFields = ["exerciseId", "sets", "reps", "duration", "restTime", "scheduleDay", "scheduledDate"];
    for (let field of requiredFields) {
      if (!form[field]) return `Please enter ${field}`;
    }
    return null;
  };

  const handleAssign = () => {
    if (role === "USER") return alert("Users cannot assign workouts");
    const validationError = validateForm();
    if (validationError) return alert(validationError);

    const payload = {
      ...form,
      userId: selectedUser,
      trainerId: userId,
      scheduledDate: new Date(form.scheduledDate).toISOString()
    };

    if (editingId) {
      axios.put(`https://fiitness-tracker-app.onrender.com/api/workout-assignments/${editingId}`, payload)
        .then(() => { resetForm(); fetchAssignments(); })
        .catch(err => console.error("Error updating assignment:", err));
    } else {
      axios.post("https://fiitness-tracker-app.onrender.com/api/workout-assignments", payload)
        .then(() => { resetForm(); fetchAssignments(); })
        .catch(err => console.error("Error assigning workout:", err));
    }
  };

  const resetForm = () => {
    setForm({ exerciseId: "", sets: "", reps: "", duration: "", restTime: "", scheduleDay: "", scheduledDate: "" });
    setEditingId(null);
  };

  const handleDelete = (id) => {
    axios.delete(`https://fiitness-tracker-app.onrender.com/api/workout-assignments/${id}`)
      .then(() => fetchAssignments())
      .catch(err => console.error("Error deleting assignment:", err));
  };

  const handleEdit = (assignment) => {
    setEditingId(assignment.id);
    setForm({
      exerciseId: assignment.exerciseId,
      sets: assignment.sets,
      reps: assignment.reps,
      duration: assignment.duration,
      restTime: assignment.restTime,
      scheduleDay: assignment.scheduleDay,
      scheduledDate: assignment.scheduledDate ? new Date(assignment.scheduledDate).toISOString().slice(0,16) : ""
    });
    if (role === "TRAINER" || role === "ADMIN") setSelectedUser(assignment.userId);
  };

  return (
    <div className="assignment-container">
      <h2 className="assignment-title">Workout Assignments</h2>

      {(role === "TRAINER" || role === "ADMIN") && (
        <div className="assignment-form">
          <label>User:</label>
          <select value={selectedUser} onChange={e => setSelectedUser(e.target.value)}>
            <option value="">-- Select User --</option>
            {users.map(u => <option key={u.id} value={u.id}>{u.email}</option>)}
          </select>

          <label>Pick Exercise:</label>
          <select value={form.exerciseId} onChange={e => setForm({ ...form, exerciseId: e.target.value })}>
            <option value="">-- Select Exercise --</option>
            {exercises.map(ex => <option key={ex.id} value={ex.id}>{ex.name}</option>)}
          </select>

          <input placeholder="Sets" type="number" value={form.sets} onChange={e => setForm({ ...form, sets: e.target.value })} />
          <input placeholder="Reps" type="number" value={form.reps} onChange={e => setForm({ ...form, reps: e.target.value })} />
          <input placeholder="Duration (sec)" type="number" value={form.duration} onChange={e => setForm({ ...form, duration: e.target.value })} />
          <input placeholder="Rest Time (sec)" type="number" value={form.restTime} onChange={e => setForm({ ...form, restTime: e.target.value })} />
          <input placeholder="Schedule Day" value={form.scheduleDay} onChange={e => setForm({ ...form, scheduleDay: e.target.value })} />
          <label>Schedule Timestamp:</label>
          <input type="datetime-local" value={form.scheduledDate} onChange={e => setForm({ ...form, scheduledDate: e.target.value })} />

          <button className="assignment-btn" onClick={handleAssign}>
            {editingId ? "Update Assignment" : "Assign"}
          </button>
        </div>
      )}

      <div className="assigned-exercises">
        <h3>Current Assignments</h3>
        {assignments.length === 0 && <p>No assignments yet.</p>}
        {assignments.map(a => (
          <div key={a.id} className="exercise-item">
            <div className="exercise-details">
              {role !== "USER" && <span><strong>Email:</strong> {users.find(u => u.id === a.userId)?.email || "N/A"}</span>}
              <span><strong>Exercise ID:</strong> {a.exerciseId}</span>
              <span><strong>Sets × Reps:</strong> {a.sets} × {a.reps}</span>
              <span><strong>Duration:</strong> {a.duration} sec</span>
              <span><strong>Rest Time:</strong> {a.restTime} sec</span>
              <span><strong>Day:</strong> {a.scheduleDay}</span>
            </div>
            {(role === "TRAINER" || role === "ADMIN") && (
              <div className="exercise-actions">
                <button className="delete-btn" onClick={() => handleDelete(a.id)}>❌ Remove</button>
                <button className="edit-btn" onClick={() => handleEdit(a)}>✏️ Edit</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutAssignmentPage;
