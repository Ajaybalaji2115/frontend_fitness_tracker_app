// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./FitnessGoalsPage.css";

// const API_URL = "http://localhost:8080/fitness-goals";

// const FitnessGoalsPage = () => {
//   const [goals, setGoals] = useState([]);
//   const [formData, setFormData] = useState({
//     goalType: "",
//     targetValue: "",
//     targetDate: "",
//     currentProgress: "",
//     status: "",
//     userId: 1, // Hardcoded for simplicity
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentGoalId, setCurrentGoalId] = useState(null);

//   useEffect(() => {
//     fetchGoals();
//   }, []);

//   const fetchGoals = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       setGoals(response.data);
//     } catch (error) {
//       console.error("Error fetching goals:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCreateOrUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       if (isEditing) {
//         await axios.put(`${API_URL}/${currentGoalId}`, formData);
//       } else {
//         await axios.post(API_URL, formData);
//       }
//       resetForm();
//       fetchGoals();
//     } catch (error) {
//       console.error("Error saving goal:", error);
//     }
//   };

//   const handleEdit = (goal) => {
//     setFormData(goal);
//     setCurrentGoalId(goal.goalId);
//     setIsEditing(true);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       fetchGoals();
//     } catch (error) {
//       console.error("Error deleting goal:", error);
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       goalType: "",
//       targetValue: "",
//       targetDate: "",
//       currentProgress: "",
//       status: "",
//       userId: 1,
//     });
//     setIsEditing(false);
//     setCurrentGoalId(null);
//   };

//   return (
//     <div className="fitness-goals-page">
//       <h2>My Fitness Goals</h2>
//       <div className="content-container">
//         <div className="form-container">
//           <h3>{isEditing ? "Edit Goal" : "Set a New Goal"}</h3>
//           <form onSubmit={handleCreateOrUpdate}>
//             <input
//               type="text"
//               name="goalType"
//               placeholder="Goal Type (e.g., Weight Loss)"
//               value={formData.goalType}
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="number"
//               name="targetValue"
//               placeholder="Target Value"
//               value={formData.targetValue}
//               onChange={handleInputChange}
//             />
//             <input
//               type="date"
//               name="targetDate"
//               value={formData.targetDate}
//               onChange={handleInputChange}
//             />
//             <input
//               type="number"
//               name="currentProgress"
//               placeholder="Current Progress"
//               value={formData.currentProgress}
//               onChange={handleInputChange}
//             />
//             <select
//               name="status"
//               value={formData.status}
//               onChange={handleInputChange}
//             >
//               <option value="">Select Status</option>
//               <option value="PENDING">Pending</option>
//               <option value="IN_PROGRESS">In Progress</option>
//               <option value="COMPLETED">Completed</option>
//             </select>
//             <div className="form-actions">
//               <button type="submit">{isEditing ? "Update" : "Set Goal"}</button>
//               {isEditing && (
//                 <button type="button" onClick={resetForm}>
//                   Cancel
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//         <div className="list-container">
//           <h3>My Goals List</h3>
//           <ul>
//             {goals.map((goal) => (
//               <li key={goal.goalId}>
//                 <div>
//                   <h4>{goal.goalType}</h4>
//                   <p>Target: {goal.targetValue}</p>
//                   <p>Progress: {goal.currentProgress}</p>
//                   <small>Status: {goal.status}</small>
//                 </div>
//                 <div className="item-actions">
//                   <button onClick={() => handleEdit(goal)}>Edit</button>
//                   <button onClick={() => handleDelete(goal.goalId)}>
//                     Delete
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FitnessGoalsPage;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./FitnessGoalsPage.css";

// const API_URL = "http://localhost:8080/fitness-goals";

// const FitnessGoalsPage = () => {
//   const [goals, setGoals] = useState([]);
//   const [formData, setFormData] = useState({
//     goalType: "",
//     targetValue: "",
//     targetDate: "",
//     currentProgress: "",
//     status: "",
//     userId: localStorage.getItem("userId"), // Logged-in user
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentGoalId, setCurrentGoalId] = useState(null);

//   useEffect(() => {
//     fetchGoals();
//   }, []);

//   const fetchGoals = async () => {
//     try {
//       const userId = localStorage.getItem("userId");
//       const response = await axios.get(`${API_URL}/user/${userId}`);
//       setGoals(response.data);
//     } catch (error) {
//       console.error("Error fetching goals:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCreateOrUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       if (isEditing) {
//         await axios.put(`${API_URL}/${currentGoalId}`, formData);
//       } else {
//         await axios.post(API_URL, formData);
//       }
//       resetForm();
//       fetchGoals();
//     } catch (error) {
//       console.error("Error saving goal:", error);
//     }
//   };

//   const handleEdit = (goal) => {
//     setFormData(goal);
//     setCurrentGoalId(goal.goalId);
//     setIsEditing(true);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       fetchGoals();
//     } catch (error) {
//       console.error("Error deleting goal:", error);
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       goalType: "",
//       targetValue: "",
//       targetDate: "",
//       currentProgress: "",
//       status: "",
//       userId: localStorage.getItem("userId"),
//     });
//     setIsEditing(false);
//     setCurrentGoalId(null);
//   };

//   return (
//     <div className="fitness-goals-page">
//       <h2>My Fitness Goals</h2>
//       <div className="content-container">
//         <div className="form-container">
//           <h3>{isEditing ? "Edit Goal" : "Set a New Goal"}</h3>
//           <form onSubmit={handleCreateOrUpdate}>
//             <input
//               type="text"
//               name="goalType"
//               placeholder="Goal Type (e.g., Weight Loss)"
//               value={formData.goalType}
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="number"
//               name="targetValue"
//               placeholder="Target Value"
//               value={formData.targetValue}
//               onChange={handleInputChange}
//             />
//             <input
//               type="date"
//               name="targetDate"
//               value={formData.targetDate}
//               onChange={handleInputChange}
//             />
//             <input
//               type="number"
//               name="currentProgress"
//               placeholder="Current Progress"
//               value={formData.currentProgress}
//               onChange={handleInputChange}
//             />
//             <select
//               name="status"
//               value={formData.status}
//               onChange={handleInputChange}
//             >
//               <option value="">Select Status</option>
//               <option value="PENDING">Pending</option>
//               <option value="IN_PROGRESS">In Progress</option>
//               <option value="COMPLETED">Completed</option>
//             </select>
//             <div className="form-actions">
//               <button type="submit">{isEditing ? "Update" : "Set Goal"}</button>
//               {isEditing && <button type="button" onClick={resetForm}>Cancel</button>}
//             </div>
//           </form>
//         </div>

//         <div className="list-container">
//           <h3>My Goals List</h3>
//           <ul>
//             {goals.map((goal) => (
//               <li key={goal.goalId}>
//                 <div>
//                   <h4>{goal.goalType}</h4>
//                   <p>Target: {goal.targetValue}</p>
//                   <p>Progress: {goal.currentProgress}</p>
//                   <small>Status: {goal.status}</small>
//                 </div>
//                 <div className="item-actions">
//                   <button onClick={() => handleEdit(goal)}>Edit</button>
//                   <button onClick={() => handleDelete(goal.goalId)}>Delete</button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FitnessGoalsPage;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./FitnessGoalsPage.css";

// const API_URL = "http://localhost:8080/fitness-goals";

// const FitnessGoalsPage = () => {
//   const [goals, setGoals] = useState([]);
//   const [formData, setFormData] = useState({
//     goalType: "",
//     targetValue: "",
//     targetDate: "",
//     currentProgress: "",
//     status: "",
//     userId: localStorage.getItem("userId"), // Logged-in user
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentGoalId, setCurrentGoalId] = useState(null);

//   const token = localStorage.getItem("token"); // JWT token

//   useEffect(() => {
//     fetchGoals();
//   }, []);

//   const fetchGoals = async () => {
//     try {
//       const userId = localStorage.getItem("userId");
//       const response = await axios.get(`${API_URL}/user/${userId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setGoals(response.data);
//     } catch (error) {
//       console.error("Error fetching goals:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCreateOrUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       if (isEditing) {
//         await axios.put(`${API_URL}/${currentGoalId}`, formData, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       } else {
//         await axios.post(API_URL, formData, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }
//       resetForm();
//       fetchGoals();
//     } catch (error) {
//       console.error("Error saving goal:", error);
//       alert("Error saving goal. Make sure you are logged in!");
//     }
//   };

//   const handleEdit = (goal) => {
//     setFormData(goal);
//     setCurrentGoalId(goal.goalId);
//     setIsEditing(true);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       fetchGoals();
//     } catch (error) {
//       console.error("Error deleting goal:", error);
//       alert("Error deleting goal.");
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       goalType: "",
//       targetValue: "",
//       targetDate: "",
//       currentProgress: "",
//       status: "",
//       userId: localStorage.getItem("userId"),
//     });
//     setIsEditing(false);
//     setCurrentGoalId(null);
//   };

//   return (
//     <div className="fitness-goals-page">
//       <h2>My Fitness Goals</h2>
//       <div className="content-container">
//         <div className="form-container">
//           <h3>{isEditing ? "Edit Goal" : "Set a New Goal"}</h3>
//           <form onSubmit={handleCreateOrUpdate}>
//             <input
//               type="text"
//               name="goalType"
//               placeholder="Goal Type (e.g., Weight Loss)"
//               value={formData.goalType}
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="number"
//               name="targetValue"
//               placeholder="Target Value"
//               value={formData.targetValue || ""}
//               onChange={handleInputChange}
//             />
//             <input
//               type="date"
//               name="targetDate"
//               value={formData.targetDate || ""}
//               onChange={handleInputChange}
//             />
//             <input
//               type="number"
//               name="currentProgress"
//               placeholder="Current Progress"
//               value={formData.currentProgress || ""}
//               onChange={handleInputChange}
//             />
//             <select
//               name="status"
//               value={formData.status || ""}
//               onChange={handleInputChange}
//             >
//               <option value="">Select Status</option>
//               <option value="PENDING">Pending</option>
//               <option value="IN_PROGRESS">In Progress</option>
//               <option value="COMPLETED">Completed</option>
//             </select>
//             <div className="form-actions">
//               <button type="submit">{isEditing ? "Update" : "Set Goal"}</button>
//               {isEditing && (
//                 <button type="button" onClick={resetForm}>
//                   Cancel
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>

//         <div className="list-container">
//           <h3>My Goals List</h3>
//           <ul>
//             {goals.map((goal) => (
//               <li
//                 key={goal.goalId}
//                 className={
//                   goal.status === "COMPLETED"
//                     ? "completed-goal"
//                     : goal.status === "IN_PROGRESS"
//                     ? "in-progress-goal"
//                     : ""
//                 }
//               >
//                 <div>
//                   <h4>{goal.goalType}</h4>
//                   <p>Target: {goal.targetValue}</p>
//                   <p>Progress: {goal.currentProgress}</p>
//                   <small>Status: {goal.status}</small>
//                 </div>
//                 <div className="item-actions">
//                   <button onClick={() => handleEdit(goal)}>Edit</button>
//                   <button onClick={() => handleDelete(goal.goalId)}>Delete</button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default FitnessGoalsPage;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./FitnessGoalsPage.css";

// const API_URL = "http://localhost:8080/fitness-goals";

// const FitnessGoalsPage = () => {
//   const [goals, setGoals] = useState([]);
//   const [formData, setFormData] = useState({
//     goalType: "",
//     targetValue: "",
//     targetDate: "",
//     currentProgress: "",
//     status: "",
//     userId: localStorage.getItem("userId"), // Logged-in user
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentGoalId, setCurrentGoalId] = useState(null);

//   const token = localStorage.getItem("token"); // JWT token

//   useEffect(() => {
//     fetchGoals();
//   }, []);

//   const fetchGoals = async () => {
//     try {
//       const userId = localStorage.getItem("userId");
//       const response = await axios.get(`${API_URL}/user/${userId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setGoals(response.data);
//     } catch (error) {
//       console.error("Error fetching goals:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCreateOrUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       if (isEditing) {
//         await axios.put(`${API_URL}/${currentGoalId}`, formData, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       } else {
//         await axios.post(API_URL, formData, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }
//       resetForm();
//       fetchGoals();
//     } catch (error) {
//       console.error("Error saving goal:", error);
//       alert("Error saving goal. Make sure you are logged in!");
//     }
//   };

//   const handleEdit = (goal) => {
//     setFormData(goal);
//     setCurrentGoalId(goal.goalId);
//     setIsEditing(true);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       fetchGoals();
//     } catch (error) {
//       console.error("Error deleting goal:", error);
//       alert("Error deleting goal.");
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       goalType: "",
//       targetValue: "",
//       targetDate: "",
//       currentProgress: "",
//       status: "",
//       userId: localStorage.getItem("userId"),
//     });
//     setIsEditing(false);
//     setCurrentGoalId(null);
//   };

//   return (
//     <div className="fitness-goals-page">
//       <h2>My Fitness Goals</h2>
//       <div className="content-container">
//         <div className="form-container">
//           <h3>{isEditing ? "Edit Goal" : "Set a New Goal"}</h3>
//           <form onSubmit={handleCreateOrUpdate}>
//             <input
//               type="text"
//               name="goalType"
//               placeholder="Goal Type (e.g., Weight Loss)"
//               value={formData.goalType}
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="number"
//               name="targetValue"
//               placeholder="Target Value"
//               value={formData.targetValue || ""}
//               onChange={handleInputChange}
//             />
//             <input
//               type="date"
//               name="targetDate"
//               value={formData.targetDate || ""}
//               onChange={handleInputChange}
//             />
//             <input
//               type="number"
//               name="currentProgress"
//               placeholder="Current Progress"
//               value={formData.currentProgress || ""}
//               onChange={handleInputChange}
//             />
//             <select
//               name="status"
//               value={formData.status || ""}
//               onChange={handleInputChange}
//             >
//               <option value="">Select Status</option>
//               <option value="PENDING">Pending</option>
//               <option value="IN_PROGRESS">In Progress</option>
//               <option value="COMPLETED">Completed</option>
//             </select>
//             <div className="form-actions">
//               <button type="submit">{isEditing ? "Update" : "Set Goal"}</button>
//               {isEditing && (
//                 <button type="button" onClick={resetForm}>
//                   Cancel
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>

//         <div className="list-container">
//           <h3>My Goals List</h3>
//           <ul>
//             {goals.map((goal) => (
//               <li
//                 key={goal.goalId}
//                 className={
//                   goal.status === "COMPLETED"
//                     ? "completed-goal"
//                     : goal.status === "IN_PROGRESS"
//                     ? "in-progress-goal"
//                     : ""
//                 }
//               >
//                 <div>
//                   <h4>{goal.goalType}</h4>
//                   <p>Target: {goal.targetValue}</p>
//                   <p>Progress: {goal.currentProgress}</p>
//                   <small>Status: {goal.status}</small>
//                 </div>
//                 <div className="item-actions">
//                   <button onClick={() => handleEdit(goal)}>Edit</button>
//                   <button onClick={() => handleDelete(goal.goalId)}>Delete</button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FitnessGoalsPage;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./FitnessGoalsPage.css";

// const API_URL = "http://localhost:8080/fitness-goals";

// const FitnessGoalsPage = () => {
//   const [goals, setGoals] = useState([]);
//   const [formData, setFormData] = useState({
//     goalType: "",
//     targetValue: "",
//     targetDate: "",
//     currentProgress: "",
//     status: "",
//     userId: localStorage.getItem("userId"),
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentGoalId, setCurrentGoalId] = useState(null);

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetchGoals();
//   }, []);

//   const fetchGoals = async () => {
//     try {
//       const userId = localStorage.getItem("userId");
//       const response = await axios.get(`${API_URL}/user/${userId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setGoals(response.data);
//     } catch (error) {
//       console.error("Error fetching goals:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCreateOrUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       if (isEditing) {
//         await axios.put(`${API_URL}/${currentGoalId}`, formData, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       } else {
//         await axios.post(API_URL, formData, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }
//       resetForm();
//       fetchGoals();
//     } catch (error) {
//       console.error("Error saving goal:", error);
//       alert("Error saving goal. Make sure you are logged in!");
//     }
//   };

//   const handleEdit = (goal) => {
//     setFormData(goal);
//     setCurrentGoalId(goal.goalId);
//     setIsEditing(true);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       fetchGoals();
//     } catch (error) {
//       console.error("Error deleting goal:", error);
//       alert("Error deleting goal.");
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       goalType: "",
//       targetValue: "",
//       targetDate: "",
//       currentProgress: "",
//       status: "",
//       userId: localStorage.getItem("userId"),
//     });
//     setIsEditing(false);
//     setCurrentGoalId(null);
//   };

//   return (
//     <div className="fitness-goals-page">
//       <h2>My Fitness Goals</h2>
//       <div className="content-container">
//         <div className="form-container">
//           <h3>{isEditing ? "Edit Goal" : "Set a New Goal"}</h3>
//           <form onSubmit={handleCreateOrUpdate}>
//             <input
//               type="text"
//               name="goalType"
//               placeholder="Goal Type (e.g., Weight Loss)"
//               value={formData.goalType}
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="number"
//               name="targetValue"
//               placeholder="Target Value"
//               value={formData.targetValue || ""}
//               onChange={handleInputChange}
//             />
//             <input
//               type="date"
//               name="targetDate"
//               value={formData.targetDate || ""}
//               onChange={handleInputChange}
//             />
//             <input
//               type="number"
//               name="currentProgress"
//               placeholder="Current Progress"
//               value={formData.currentProgress || ""}
//               onChange={handleInputChange}
//             />
//             <select
//               name="status"
//               value={formData.status || ""}
//               onChange={handleInputChange}
//             >
//               <option value="">Select Status</option>
//               <option value="PENDING">Pending</option>
//               <option value="IN_PROGRESS">In Progress</option>
//               <option value="COMPLETED">Completed</option>
//             </select>
//             <div className="form-actions">
//               <button type="submit">{isEditing ? "Update" : "Set Goal"}</button>
//               {isEditing && (
//                 <button type="button" onClick={resetForm}>
//                   Cancel
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>

//         <div className="list-container">
//           <h3>My Goals List</h3>
//           <ul>
//             {goals.map((goal) => (
//               <li key={goal.goalId} className={`goal-item ${goal.status.toLowerCase()}`}>
//                 <div className="goal-info">
//                   <h4>{goal.goalType}</h4>
//                   <p>Target: <strong>{goal.targetValue}</strong></p>
//                   <p>Progress: <strong>{goal.currentProgress}</strong></p>
//                   <span className={`status-badge ${goal.status.toLowerCase()}`}>
//                     {goal.status.replace("_", " ")}
//                   </span>
//                 </div>
//                 <div className="item-actions">
//                   <button onClick={() => handleEdit(goal)}>Edit</button>
//                   <button onClick={() => handleDelete(goal.goalId)}>Delete</button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FitnessGoalsPage;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./FitnessGoalsPage.css";

// const API_URL = "http://localhost:8080/fitness-goals";

// const FitnessGoalsPage = () => {
//   const [goals, setGoals] = useState([]);
//   const [formData, setFormData] = useState({
//     goalType: "",
//     targetValue: "",
//     targetDate: "",
//     currentProgress: "",
//     status: "",
//     userId: localStorage.getItem("userId"),
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentGoalId, setCurrentGoalId] = useState(null);

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetchGoals();
//   }, []);

//   const fetchGoals = async () => {
//     try {
//       const userId = localStorage.getItem("userId");
//       const response = await axios.get(`${API_URL}/user/${userId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setGoals(response.data);
//     } catch (error) {
//       console.error("Error fetching goals:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCreateOrUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       if (isEditing) {
//         await axios.put(`${API_URL}/${currentGoalId}`, formData, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       } else {
//         await axios.post(API_URL, formData, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }
//       resetForm();
//       fetchGoals();
//     } catch (error) {
//       console.error("Error saving goal:", error);
//       alert("Error saving goal. Make sure you are logged in!");
//     }
//   };

//   const handleEdit = (goal) => {
//     setFormData(goal);
//     setCurrentGoalId(goal.goalId);
//     setIsEditing(true);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       fetchGoals();
//     } catch (error) {
//       console.error("Error deleting goal:", error);
//       alert("Error deleting goal.");
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       goalType: "",
//       targetValue: "",
//       targetDate: "",
//       currentProgress: "",
//       status: "",
//       userId: localStorage.getItem("userId"),
//     });
//     setIsEditing(false);
//     setCurrentGoalId(null);
//   };

//   return (
//     <div className="fitness-goals-page">
//       <h2>My Fitness Goals</h2>
//       <div className="content-container">
//         <div className="form-container">
//           <h3>{isEditing ? "Edit Goal" : "Set a New Goal"}</h3>
//           <form onSubmit={handleCreateOrUpdate}>
//             <input
//               type="text"
//               name="goalType"
//               placeholder="Goal Type (e.g., Weight Loss)"
//               value={formData.goalType}
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="number"
//               name="targetValue"
//               placeholder="Target Value"
//               value={formData.targetValue || ""}
//               onChange={handleInputChange}
//             />
//             <input
//               type="date"
//               name="targetDate"
//               value={formData.targetDate || ""}
//               onChange={handleInputChange}
//             />
//             <input
//               type="number"
//               name="currentProgress"
//               placeholder="Current Progress"
//               value={formData.currentProgress || ""}
//               onChange={handleInputChange}
//             />
//             <select
//               name="status"
//               value={formData.status || ""}
//               onChange={handleInputChange}
//             >
//               <option value="">Select Status</option>
//               <option value="PENDING">Pending</option>
//               <option value="IN_PROGRESS">In Progress</option>
//               <option value="COMPLETED">Completed</option>
//             </select>
//             <div className="form-actions">
//               <button type="submit">{isEditing ? "Update" : "Set Goal"}</button>
//               {isEditing && (
//                 <button type="button" onClick={resetForm}>
//                   Cancel
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>

//         <div className="list-container">
//           <h3>My Goals List</h3>
//           <ul>
//             {goals.map((goal) => {
//               const progressPercentage = goal.targetValue
//                 ? Math.min((goal.currentProgress / goal.targetValue) * 100, 100)
//                 : 0;

//               return (
//                 <li
//                   key={goal.goalId}
//                   className={`goal-item ${
//                     goal.status === "COMPLETED"
//                       ? "completed"
//                       : goal.status === "IN_PROGRESS"
//                       ? "in_progress"
//                       : "pending"
//                   }`}
//                 >
//                   <div className="goal-info">
//                     <h4>{goal.goalType}</h4>
//                     <p>Target: {goal.targetValue}</p>
//                     <p>Progress: {goal.currentProgress}</p>
//                     <span className="status-badge">{goal.status.replace("_", " ")}</span>

//                     <div className="progress-bar-container">
//                       <div
//                         className="progress-bar"
//                         style={{ width: `${progressPercentage}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                   <div className="item-actions">
//                     <button onClick={() => handleEdit(goal)}>Edit</button>
//                     <button onClick={() => handleDelete(goal.goalId)}>Delete</button>
//                   </div>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FitnessGoalsPage;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FitnessGoalsPage.css";

const API_URL = "https://fiitness-tracker-app.onrender.com/fitness-goals";

const FitnessGoalsPage = () => {
  const [goals, setGoals] = useState([]);
  const [formData, setFormData] = useState({
    goalType: "",
    targetValue: "",
    targetDate: "",
    currentProgress: "",
    status: "",
    userId: localStorage.getItem("userId"),
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentGoalId, setCurrentGoalId] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.get(`${API_URL}/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setGoals(response.data);
    } catch (error) {
      console.error("Error fetching goals:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`${API_URL}/${currentGoalId}`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post(API_URL, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      resetForm();
      fetchGoals();
    } catch (error) {
      console.error("Error saving goal:", error);
      alert("Error saving goal. Make sure you are logged in!");
    }
  };

  const handleEdit = (goal) => {
    setFormData(goal);
    setCurrentGoalId(goal.goalId);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchGoals();
    } catch (error) {
      console.error("Error deleting goal:", error);
      alert("Error deleting goal.");
    }
  };

  const resetForm = () => {
    setFormData({
      goalType: "",
      targetValue: "",
      targetDate: "",
      currentProgress: "",
      status: "",
      userId: localStorage.getItem("userId"),
    });
    setIsEditing(false);
    setCurrentGoalId(null);
  };

  return (
    <div className="fitness-goals-page">
      <h2>My Fitness Goals</h2>
      <div className="content-container">
        <div className="form-container">
          <h3>{isEditing ? "Edit Goal" : "Set a New Goal"}</h3>
          <form onSubmit={handleCreateOrUpdate}>
            <input
              type="text"
              name="goalType"
              placeholder="Goal Type (e.g., Weight Loss)"
              value={formData.goalType}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="targetValue"
              placeholder="Target Value"
              value={formData.targetValue || ""}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="targetDate"
              value={formData.targetDate || ""}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="currentProgress"
              placeholder="Current Progress"
              value={formData.currentProgress || ""}
              onChange={handleInputChange}
            />
            <select
              name="status"
              value={formData.status || ""}
              onChange={handleInputChange}
            >
              <option value="">Select Status</option>
              <option value="PENDING">Pending</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="COMPLETED">Completed</option>
            </select>
            <div className="form-actions">
              <button type="submit">{isEditing ? "Update" : "Set Goal"}</button>
              {isEditing && (
                <button type="button" onClick={resetForm}>
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="list-container">
          <h3>My Goals List</h3>
          <ul>
            {goals.map((goal) => {
              const progressPercentage = goal.targetValue
                ? Math.min((goal.currentProgress / goal.targetValue) * 100, 100)
                : 0;

              return (
                <li
                  key={goal.goalId}
                  className={`goal-item ${
                    goal.status === "COMPLETED"
                      ? "completed"
                      : goal.status === "IN_PROGRESS"
                      ? "in_progress"
                      : "pending"
                  }`}
                >
                  <div className="goal-info">
                    <h4>{goal.goalType}</h4>
                    <p>Target: {goal.targetValue}</p>
                    <p>Progress: {goal.currentProgress}</p>
                    <span className="status-badge">
                      {goal.status.replace("_", " ")}
                    </span>

                    {/* Animated progress bar */}
                    <div className="progress-bar-container">
                      <div
                        className="progress-bar"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="item-actions">
                    <button onClick={() => handleEdit(goal)}>Edit</button>
                    <button onClick={() => handleDelete(goal.goalId)}>Delete</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FitnessGoalsPage;
