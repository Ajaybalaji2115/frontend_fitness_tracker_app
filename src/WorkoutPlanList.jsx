// import React, { useEffect, useState } from "react";
// import WorkoutPlanService from "../services/WorkoutPlanService";
// import "./WorkoutPlan.css";

// const WorkoutPlanList = () => {
//   const [plans, setPlans] = useState([]);

//   const loadPlans = async () => {
//     try {
//       const res = await WorkoutPlanService.getAllPlans();
//       setPlans(res.data);
//     } catch (err) {
//       console.error("Error fetching plans:", err);
//     }
//   };

//   const deletePlan = async (id) => {
//     try {
//       await WorkoutPlanService.deactivatePlan(id);
//       loadPlans();
//     } catch (err) {
//       console.error("Error deleting plan:", err);
//     }
//   };

//   useEffect(() => {
//     loadPlans();
//   }, []);

//   return (
//     <div className="plan-list">
//       <h2>Workout Plans</h2>
//       {plans.map((plan) => (
//         <div key={plan.id} className="plan-card">
//           <h3>{plan.title}</h3>
//           <p>{plan.description}</p>
//           <p><strong>Difficulty:</strong> {plan.difficulty}</p>
//           <p><strong>Created By:</strong> {plan.createdBy?.username}</p>
//           <p><strong>Approved:</strong> {plan.approved ? "Yes" : "No"}</p>

//           <button onClick={() => deletePlan(plan.id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default WorkoutPlanList;
// import React, { useEffect, useState, forwardRef, useImperativeHandle } from "react";
// import WorkoutPlanService from "./WorkoutPlanService";
// import "./WorkoutPlan.css";

// const WorkoutPlanList = forwardRef(({ onEdit }, ref) => {
//   const [plans, setPlans] = useState([]);
//   const role = localStorage.getItem("role") || "GUEST";

//   const loadPlans = async () => {
//     try {
//       const res = await WorkoutPlanService.getAllPlans();
//       setPlans(res.data);
//     } catch (err) {
//       console.error("Error fetching plans:", err);
//       setPlans([]);
//     }
//   };

//   useImperativeHandle(ref, () => ({ loadPlans }));

//   useEffect(() => {
//     loadPlans();
//   }, []);

//   const deletePlan = async (id) => {
//     if (window.confirm("Are you sure?")) {
//       await WorkoutPlanService.deactivatePlan(id);
//       loadPlans();
//     }
//   };

//   const approvePlan = async (plan) => {
//     await WorkoutPlanService.updatePlan(plan.id, { ...plan, approved: true });
//     loadPlans();
//   };

//   if (!plans.length) return <p>No workout plans available.</p>;

//   return (
//     <div className="plan-list">
//       {plans.map((plan) => (
//         <div key={plan.id} className="plan-card">
//           <h4>{plan.title}</h4>
//           <p>{plan.description}</p>
//           <p><strong>Difficulty:</strong> {plan.difficulty}</p>
//           <p><strong>Approved:</strong> {plan.approved ? "Yes" : "No"}</p>

//           {role !== "GUEST" && (
//             <>
//               <button onClick={() => onEdit(plan)}>Edit</button>
//               <button onClick={() => deletePlan(plan.id)}>Delete</button>
//               {!plan.approved && <button onClick={() => approvePlan(plan)}>Approve</button>}
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// });

// export default WorkoutPlanList;
