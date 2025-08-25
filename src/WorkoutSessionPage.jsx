import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WorkoutSessionsPage.css";

const API_URL = "https://fiitness-tracker-app.onrender.com/workout-sessions";
const WORKOUT_PLANS_API = "https://fiitness-tracker-app.onrender.com/plans";

const WorkoutSessionsPage = () => {
  const [sessions, setSessions] = useState([]);
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [formData, setFormData] = useState({
    userId: "user-123", // Hardcoded for simplicity
    workoutPlan: "",
    sessionDate: "",
    duration: "",
    completedExercises: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentSessionId, setCurrentSessionId] = useState(null);

  useEffect(() => {
    fetchSessions();
    fetchWorkoutPlans();
  }, []);

  const fetchSessions = async () => {
    try {
      const response = await axios.get(API_URL);
      setSessions(response.data);
    } catch (error) {
      console.error("Error fetching sessions:", error);
    }
  };

  const fetchWorkoutPlans = async () => {
    try {
      const response = await axios.get(WORKOUT_PLANS_API);
      setWorkoutPlans(response.data);
    } catch (error) {
      console.error("Error fetching workout plans:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        workoutPlan: workoutPlans.find(p => p.planId === parseInt(formData.workoutPlan))
      };
      if (isEditing) {
        await axios.put(`${API_URL}/${currentSessionId}`, payload);
      } else {
        await axios.post(API_URL, payload);
      }
      resetForm();
      fetchSessions();
    } catch (error) {
      console.error("Error saving session:", error);
    }
  };

  const handleEdit = (session) => {
    setFormData({
      ...session,
      workoutPlan: session.workoutPlan ? session.workoutPlan.planId.toString() : ""
    });
    setCurrentSessionId(session.sessionId);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchSessions();
    } catch (error) {
      console.error("Error deleting session:", error);
    }
  };

  const resetForm = () => {
    setFormData({
      userId: "user-123",
      workoutPlan: "",
      sessionDate: "",
      duration: "",
      completedExercises: [],
    });
    setIsEditing(false);
    setCurrentSessionId(null);
  };

  return (
    <div className="workout-sessions-page">
      <h2>Workout Sessions</h2>
      <div className="content-container">
        <div className="form-container">
          <h3>{isEditing ? "Edit Session" : "Log a New Session"}</h3>
          <form onSubmit={handleCreateOrUpdate}>
            <select
              name="workoutPlan"
              value={formData.workoutPlan}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a Workout Plan</option>
              {workoutPlans.map(plan => (
                <option key={plan.planId} value={plan.planId}>
                  {plan.title}
                </option>
              ))}
            </select>
            <input
              type="datetime-local"
              name="sessionDate"
              value={formData.sessionDate}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="duration"
              placeholder="Duration (e.g., 60 min)"
              value={formData.duration}
              onChange={handleInputChange}
            />
            <div className="form-actions">
              <button type="submit">{isEditing ? "Update" : "Log Session"}</button>
              {isEditing && (
                <button type="button" onClick={resetForm}>
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="list-container">
          <h3>Session History</h3>
          <ul>
            {sessions.map((session) => (
              <li key={session.sessionId}>
                <div>
                  <h4>{session.workoutPlan ? session.workoutPlan.title : "N/A"}</h4>
                  <p>Date: {session.sessionDate}</p>
                  <p>Duration: {session.duration}</p>
                </div>
                <div className="item-actions">
                  <button onClick={() => handleEdit(session)}>Edit</button>
                  <button onClick={() => handleDelete(session.sessionId)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkoutSessionsPage;
