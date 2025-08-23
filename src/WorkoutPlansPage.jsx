// function WorkoutPlans() {
//   return (
//     <div>
//       <h1>Workout Plans</h1>
//       <p>Here you can create, view, and manage workout plans.</p>
//     </div>
//   );
// }

// export default WorkoutPlans;
// src/components/WorkoutPlansPage.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WorkoutPlansPage.css";

const API_URL = "http://localhost:8080/plans";

const WorkoutPlansPage = () => {
  const [plans, setPlans] = useState([]);
  const [currentPlan, setCurrentPlan] = useState({
    title: "",
    description: "",
    difficulty: "",
    createdBy: "",
    isActive: true,
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await axios.get(API_URL);
      setPlans(response.data);
    } catch (error) {
      console.error("Error fetching plans:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentPlan({ ...currentPlan, [name]: value });
  };

  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        // Update operation
        await axios.put(`${API_URL}/${currentPlan.planId}`, currentPlan);
      } else {
        // Create operation
        await axios.post(API_URL, {
          ...currentPlan,
          creationDate: new Date().toISOString(),
        });
      }
      // Reset form and refresh data
      setCurrentPlan({
        title: "",
        description: "",
        difficulty: "",
        createdBy: "",
        isActive: true,
      });
      setIsEditing(false);
      fetchPlans();
    } catch (error) {
      console.error("Error saving plan:", error);
    }
  };

  const handleEdit = (plan) => {
    setCurrentPlan(plan);
    setIsEditing(true);
  };

  const handleDelete = async (planId) => {
    try {
      await axios.delete(`${API_URL}/${planId}`);
      fetchPlans();
    } catch (error) {
      console.error("Error deleting plan:", error);
    }
  };

  const renderForm = () => (
    <div className="plan-form">
      <h3>{isEditing ? "Edit Workout Plan" : "Create New Workout Plan"}</h3>
      <form onSubmit={handleCreateOrUpdate}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={currentPlan.title}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={currentPlan.description}
          onChange={handleInputChange}
          required
        />
        <select
          name="difficulty"
          value={currentPlan.difficulty}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Difficulty</option>
          <option value="BEGINNER">Beginner</option>
          <option value="INTERMEDIATE">Intermediate</option>
          <option value="ADVANCED">Advanced</option>
        </select>
        <input
          type="text"
          name="createdBy"
          placeholder="Created By"
          value={currentPlan.createdBy}
          onChange={handleInputChange}
          required
        />
        <div className="form-actions">
          <button type="submit">{isEditing ? "Update" : "Create"}</button>
          {isEditing && (
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setCurrentPlan({
                  title: "",
                  description: "",
                  difficulty: "",
                  createdBy: "",
                  isActive: true,
                });
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );

  const renderPlansList = () => (
    <div className="plan-list">
      <h3>Workout Plans List</h3>
      {plans.length > 0 ? (
        <ul>
          {plans.map((plan) => (
            <li key={plan.planId}>
              <div>
                <h4>{plan.title}</h4>
                <p>{plan.description}</p>
                <small>
                  Difficulty: {plan.difficulty} | Created By: {plan.createdBy}
                </small>
              </div>
              <div className="plan-actions">
                <button onClick={() => handleEdit(plan)}>Edit</button>
                <button onClick={() => handleDelete(plan.planId)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No workout plans found.</p>
      )}
    </div>
  );

  return (
    <div className="workout-plans-page">
      <h2>Workout Plans Management</h2>
      <div className="content-container">
        {renderForm()}
        {renderPlansList()}
      </div>
    </div>
  );
};

export default WorkoutPlansPage;