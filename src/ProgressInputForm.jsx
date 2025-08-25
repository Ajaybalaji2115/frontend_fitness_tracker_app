import React, { useState } from "react";
import axios from "axios";
import "./ProgressInputForm.css";

const ProgressInputForm = ({ userId, onProgressAdded }) => {
  const [date, setDate] = useState("");
  const [completion, setCompletion] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://fiitness-tracker-app.onrender.com/api/progress/me", {
        userId,
        date,
        completionPercentage: parseFloat(completion),
        notes,
      })
      .then(() => {
        alert("Progress saved!");
        setDate("");
        setCompletion("");
        setNotes("");
        onProgressAdded(); // Notify parent to refresh chart
      })
      .catch((err) => {
        alert("Failed to save progress.");
        console.error(err);
      });
  };

  return (
    <form className="progress-input-form" onSubmit={handleSubmit}>
      <h3>Enter Workout Progress</h3>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <label>
        Completion Percentage:
        <input
          type="number"
          min="0"
          max="100"
          step="0.1"
          value={completion}
          onChange={(e) => setCompletion(e.target.value)}
          required
        />
      </label>
      <label>
        Notes:
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Optional notes"
        />
      </label>
      <button type="submit">Save Progress</button>
    </form>
  );
};

export default ProgressInputForm;
