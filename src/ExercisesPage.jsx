import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ExercisesPage.css";

const API_URL = "https://fiitness-tracker-app.onrender.com/exercises";

const ExercisesPage = () => {
  const [exercises, setExercises] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    sets: "",
    reps: "",
    workoutPlan: { planId: 1 }, // Hardcoded planId for simplicity
    targetMuscles: "",
    equipment: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentExerciseId, setCurrentExerciseId] = useState(null);

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    try {
      const response = await axios.get(API_URL);
      setExercises(response.data);
    } catch (error) {
      console.error("Error fetching exercises:", error);
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
        await axios.put(`${API_URL}/${currentExerciseId}`, formData);
      } else {
        await axios.post(API_URL, formData);
      }
      resetForm();
      fetchExercises();
    } catch (error) {
      console.error("Error saving exercise:", error);
    }
  };

  const handleEdit = (exercise) => {
    setFormData(exercise);
    setCurrentExerciseId(exercise.exerciseId);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchExercises();
    } catch (error) {
      console.error("Error deleting exercise:", error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      sets: "",
      reps: "",
      workoutPlan: { planId: 1 },
      targetMuscles: "",
      equipment: "",
    });
    setIsEditing(false);
    setCurrentExerciseId(null);
  };

  return (
    <div className="exercises-page">
      <h2>Workout Exercises</h2>
      <div className="content-container">
        <div className="form-container">
          <h3>{isEditing ? "Edit Exercise" : "Add New Exercise"}</h3>
          <form onSubmit={handleCreateOrUpdate}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="sets"
              placeholder="Sets"
              value={formData.sets}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="reps"
              placeholder="Reps"
              value={formData.reps}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="targetMuscles"
              placeholder="Target Muscles"
              value={formData.targetMuscles}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="equipment"
              placeholder="Equipment"
              value={formData.equipment}
              onChange={handleInputChange}
            />
            <div className="form-actions">
              <button type="submit">{isEditing ? "Update" : "Add"}</button>
              {isEditing && (
                <button type="button" onClick={resetForm}>
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="list-container">
          <h3>Exercise List</h3>
          <ul>
            {exercises.map((exercise) => (
              <li key={exercise.exerciseId}>
                <div>
                  <h4>{exercise.name}</h4>
                  <p>{exercise.description}</p>
                  <small>
                    Sets: {exercise.sets} | Reps: {exercise.reps}
                  </small>
                </div>
                <div className="item-actions">
                  <button onClick={() => handleEdit(exercise)}>Edit</button>
                  <button onClick={() => handleDelete(exercise.exerciseId)}>
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

export default ExercisesPage;
