// import React, { useState, useEffect } from "react";
// import WorkoutPlanService from "./WorkoutPlanService";
// import "./WorkoutPlan.css";

// const WorkoutPlanForm = ({ existingPlan, onClose, refreshList }) => {
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     difficulty: "Easy",
//     createdBy: { id: 1 }, // guest fallback
//   });

//   useEffect(() => {
//     if (existingPlan) {
//       setForm(existingPlan);
//     }
//   }, [existingPlan]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const planToSave = {
//       ...form,
//       createdBy: form.createdBy || { id: 1 }, // ensure guest fallback
//     };

//     try {
//       if (planToSave.id) {
//         await WorkoutPlanService.updatePlan(planToSave.id, planToSave);
//       } else {
//         await WorkoutPlanService.createPlan(planToSave);
//       }
//       onClose();
//       refreshList(); // refresh parent list
//     } catch (err) {
//       console.error("Error saving plan:", err);
//       alert("Failed to save plan. Check console for details.");
//     }
//   };

//   return (
//     <form className="plan-form" onSubmit={handleSubmit}>
//       <input
//         name="title"
//         value={form.title}
//         onChange={handleChange}
//         placeholder="Title"
//         required
//       />
//       <textarea
//         name="description"
//         value={form.description}
//         onChange={handleChange}
//         placeholder="Description"
//         required
//       />
//       <select
//         name="difficulty"
//         value={form.difficulty}
//         onChange={handleChange}
//         required
//       >
//         <option value="Easy">Easy</option>
//         <option value="Medium">Medium</option>
//         <option value="Hard">Hard</option>
//       </select>
//       <button type="submit">{form.id ? "Update" : "Create"}</button>
//       <button type="button" onClick={onClose}>
//         Cancel
//       </button>
//     </form>
//   );
// };

// export default WorkoutPlanForm;
