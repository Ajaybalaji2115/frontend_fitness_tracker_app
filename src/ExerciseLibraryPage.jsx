// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./ExerciseLibraryPage.css";

// const API_URL = "http://localhost:8080/exercise-library";

// const ExerciseLibraryPage = () => {
//   const [exercises, setExercises] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     category: "",
//     muscleGroup: "",
//     equipment: "",
//     difficulty: "",
//     instructions: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentExerciseId, setCurrentExerciseId] = useState(null);

//   useEffect(() => {
//     fetchExercises();
//   }, []);

//   const fetchExercises = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       setExercises(response.data);
//     } catch (error) {
//       console.error("Error fetching exercises:", error);
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
//         await axios.put(`${API_URL}/${currentExerciseId}`, formData);
//       } else {
//         await axios.post(API_URL, formData);
//       }
//       resetForm();
//       fetchExercises();
//     } catch (error) {
//       console.error("Error saving exercise:", error);
//     }
//   };

//   const handleEdit = (exercise) => {
//     setFormData(exercise);
//     setCurrentExerciseId(exercise.exerciseId);
//     setIsEditing(true);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       fetchExercises();
//     } catch (error) {
//       console.error("Error deleting exercise:", error);
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       name: "",
//       category: "",
//       muscleGroup: "",
//       equipment: "",
//       difficulty: "",
//       instructions: "",
//     });
//     setIsEditing(false);
//     setCurrentExerciseId(null);
//   };

//   return (
//     <div className="exercise-library-page">
//       <h2>Exercise Library</h2>
//       <div className="content-container">
//         <div className="form-container">
//           <h3>{isEditing ? "Edit Library Entry" : "Add to Library"}</h3>
//           <form onSubmit={handleCreateOrUpdate}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="text"
//               name="category"
//               placeholder="Category"
//               value={formData.category}
//               onChange={handleInputChange}
//             />
//             <input
//               type="text"
//               name="muscleGroup"
//               placeholder="Muscle Group"
//               value={formData.muscleGroup}
//               onChange={handleInputChange}
//             />
//             <input
//               type="text"
//               name="equipment"
//               placeholder="Equipment"
//               value={formData.equipment}
//               onChange={handleInputChange}
//             />
//             <input
//               type="text"
//               name="difficulty"
//               placeholder="Difficulty"
//               value={formData.difficulty}
//               onChange={handleInputChange}
//             />
//             <textarea
//               name="instructions"
//               placeholder="Instructions"
//               value={formData.instructions}
//               onChange={handleInputChange}
//             />
//             <div className="form-actions">
//               <button type="submit">{isEditing ? "Update" : "Add"}</button>
//               {isEditing && (
//                 <button type="button" onClick={resetForm}>
//                   Cancel
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//         <div className="list-container">
//           <h3>Library Entries</h3>
//           <ul>
//             {exercises.map((exercise) => (
//               <li key={exercise.exerciseId}>
//                 <div>
//                   <h4>{exercise.name}</h4>
//                   <p>{exercise.instructions}</p>
//                   <small>
//                     Category: {exercise.category} | Muscle: {exercise.muscleGroup}
//                   </small>
//                 </div>
//                 <div className="item-actions">
//                   <button onClick={() => handleEdit(exercise)}>Edit</button>
//                   <button onClick={() => handleDelete(exercise.exerciseId)}>
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

// export default ExerciseLibraryPage;
// import React, { useState, useEffect } from "react";

// function ExerciseLibrary() {
//   const [exercises, setExercises] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     category: "",
//     muscleGroup: "",
//     equipment: "",
//     difficulty: "",
//     instructions: "",
//     imageUrl: "",
//     videoUrl: ""
//   });

//   useEffect(() => {
//     fetch("http://localhost:8080/exercises") // your backend endpoint
//       .then(res => res.json())
//       .then(data => setExercises(data));
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("http://localhost:8080/exercises", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData)
//     })
//       .then(res => res.json())
//       .then(newExercise => {
//         setExercises([...exercises, newExercise]);
//         setFormData({
//           name: "",
//           category: "",
//           muscleGroup: "",
//           equipment: "",
//           difficulty: "",
//           instructions: "",
//           imageUrl: "",
//           videoUrl: ""
//         });
//       });
//   };

//   return (
//     <div className="exercise-library">
//       <h2>Exercise Library</h2>

//       {/* Add Exercise Form */}
//       <form onSubmit={handleSubmit}>
//         <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
//         <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
//         <input name="muscleGroup" placeholder="Muscle Group" value={formData.muscleGroup} onChange={handleChange} />
//         <input name="equipment" placeholder="Equipment" value={formData.equipment} onChange={handleChange} />
//         <input name="difficulty" placeholder="Difficulty" value={formData.difficulty} onChange={handleChange} />
//         <textarea name="instructions" placeholder="Instructions" value={formData.instructions} onChange={handleChange} />
//         <input name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} />
//         <input name="videoUrl" placeholder="Video URL" value={formData.videoUrl} onChange={handleChange} />
//         <button type="submit">Add Exercise</button>
//       </form>

//       {/* Show Exercises */}
//       <div className="exercise-list">
//         {exercises.map((exercise, index) => (
//           <div key={index} className="exercise-card">
//             <h3>{exercise.name}</h3>
//             <p><b>Category:</b> {exercise.category}</p>
//             <p><b>Muscle Group:</b> {exercise.muscleGroup}</p>
//             <p><b>Equipment:</b> {exercise.equipment}</p>
//             <p><b>Difficulty:</b> {exercise.difficulty}</p>
//             <p>{exercise.instructions}</p>

//             {/* ✅ Show Image */}
//             {exercise.imageUrl && (
//               <img src={exercise.imageUrl} alt={exercise.name} width="200" />
//             )}

//             {/* ✅ Show Video */}
//             {exercise.videoUrl && (
//               <video width="300" controls>
//                 <source src={exercise.videoUrl} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ExerciseLibrary;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./ExerciseLibraryPage.css";

// export default function ExerciseLibrary() {
//   const [exercises, setExercises] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     category: "",
//     muscleGroup: "",
//     equipment: "",
//     difficulty: "",
//     instructions: "",
//     imageUrl: "",
//     videoUrl: "",
//   });

//   useEffect(() => {
//     fetchExercises();
//   }, []);

//   const fetchExercises = async () => {
//     try {
//       const res = await axios.get("http://localhost:8080/exercise-library");
//       setExercises(res.data);
//     } catch (error) {
//       console.error("Error fetching exercises:", error.response ? error.response.data : error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:8080/exercise-library", formData, {
//         headers: { "Content-Type": "application/json" },
//       });
//       fetchExercises();
//       setFormData({
//         name: "",
//         category: "",
//         muscleGroup: "",
//         equipment: "",
//         difficulty: "",
//         instructions: "",
//         imageUrl: "",
//         videoUrl: "",
//       });
//     } catch (error) {
//       console.error("Error adding exercise:", error.response ? error.response.data : error);
//     }
//   };

//   return (
//     <div className="exercise-library-page">
//       <h2>Exercise Library</h2>

//       <div className="content-container">
//         {/* Form Section */}
//         <div className="form-container">
//           <h3>Add Exercise</h3>
//           <form onSubmit={handleSubmit}>
//             <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//             <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
//             <input type="text" name="muscleGroup" placeholder="Muscle Group" value={formData.muscleGroup} onChange={handleChange} />
//             <input type="text" name="equipment" placeholder="Equipment" value={formData.equipment} onChange={handleChange} />
//             <input type="text" name="difficulty" placeholder="Difficulty" value={formData.difficulty} onChange={handleChange} />
//             <textarea name="instructions" placeholder="Instructions" value={formData.instructions} onChange={handleChange}></textarea>
//             <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} />
//             <input type="text" name="videoUrl" placeholder="Video URL" value={formData.videoUrl} onChange={handleChange} />

//             <div className="form-actions">
//               <button type="submit">Add Exercise</button>
//               <button
//                 type="button"
//                 onClick={() =>
//                   setFormData({
//                     name: "",
//                     category: "",
//                     muscleGroup: "",
//                     equipment: "",
//                     difficulty: "",
//                     instructions: "",
//                     imageUrl: "",
//                     videoUrl: "",
//                   })
//                 }
//               >
//                 Reset
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Exercise List Section */}
//         <div className="list-container">
//           <h3>Exercises</h3>
//           <ul>
//             {exercises.map((ex) => (
//               <li key={ex.exerciseId}>
//                 <h4>{ex.name}</h4>
//                 <p><b>Category:</b> {ex.category}</p>
//                 <p><b>Muscle:</b> {ex.muscleGroup}</p>
//                 <p><b>Equipment:</b> {ex.equipment}</p>
//                 <p><b>Difficulty:</b> {ex.difficulty}</p>
//                 <p>{ex.instructions}</p>
//                 {ex.imageUrl && <img className="exercise-image" src={ex.imageUrl} alt={ex.name} />}
//                 {ex.videoUrl && (
//                   <div className="exercise-video">
//                     <video controls width="100%">
//                       <source src={ex.videoUrl} type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./ExerciseLibraryPage.css";

// export default function ExerciseLibrary() {
//   const [exercises, setExercises] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     category: "",
//     muscleGroup: "",
//     equipment: "",
//     difficulty: "",
//     instructions: "",
//     imageUrl: "",
//     videoUrl: "",
//   });

//   // Get user info from localStorage (set during login)
//   const userRole = localStorage.getItem("role"); // should be "TRAINER" or "GUEST"

//   useEffect(() => {
//     fetchExercises();
//   }, []);

//   const fetchExercises = async () => {
//     try {
//       const res = await axios.get("http://localhost:8080/exercise-library");
//       setExercises(res.data);
//     } catch (error) {
//       console.error("Error fetching exercises:", error.response ? error.response.data : error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:8080/exercise-library", formData, {
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${localStorage.getItem("token")}`, // send JWT
//         },
//       });
//       fetchExercises();
//       setFormData({
//         name: "",
//         category: "",
//         muscleGroup: "",
//         equipment: "",
//         difficulty: "",
//         instructions: "",
//         imageUrl: "",
//         videoUrl: "",
//       });
//     } catch (error) {
//       console.error("Error adding exercise:", error.response ? error.response.data : error);
//     }
//   };

//   return (
//     <div className="exercise-library-page">
//       <h2>Exercise Library</h2>
//       <div className="content-container">
//         {/* Render form only for TRAINER */}
//         {userRole === "TRAINER" && (
//           <div className="form-container">
//             <h3>Add Exercise</h3>
//             <form onSubmit={handleSubmit}>
//               <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//               <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
//               <input type="text" name="muscleGroup" placeholder="Muscle Group" value={formData.muscleGroup} onChange={handleChange} />
//               <input type="text" name="equipment" placeholder="Equipment" value={formData.equipment} onChange={handleChange} />
//               <input type="text" name="difficulty" placeholder="Difficulty" value={formData.difficulty} onChange={handleChange} />
//               <textarea name="instructions" placeholder="Instructions" value={formData.instructions} onChange={handleChange}></textarea>
//               <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} />
//               <input type="text" name="videoUrl" placeholder="Video URL (YouTube link or MP4)" value={formData.videoUrl} onChange={handleChange} />

//               <div className="form-actions">
//                 <button type="submit">Add Exercise</button>
//                 <button type="button" onClick={() => setFormData({
//                   name: "", category: "", muscleGroup: "", equipment: "",
//                   difficulty: "", instructions: "", imageUrl: "", videoUrl: ""
//                 })}>Reset</button>
//               </div>
//             </form>
//           </div>
//         )}

//         <div className="list-container">
//           <h3>Exercises</h3>
//           <ul>
//             {exercises.map((ex) => (
//               <li key={ex.id}>
//                 <h4>{ex.name}</h4>
//                 <p><b>Category:</b> {ex.category}</p>
//                 <p><b>Muscle:</b> {ex.muscleGroup}</p>
//                 <p><b>Equipment:</b> {ex.equipment}</p>
//                 <p><b>Difficulty:</b> {ex.difficulty}</p>
//                 <p>{ex.instructions}</p>

//                 {ex.imageUrl && <img className="exercise-image" src={ex.imageUrl} alt={ex.name} />}
//                 {ex.videoUrl && ex.videoUrl.includes("youtube") && (
//                   <iframe width="100%" height="315" src={ex.videoUrl.replace("watch?v=", "embed/")} title={ex.name} frameBorder="0" allowFullScreen></iframe>
//                 )}
//                 {ex.videoUrl && !ex.videoUrl.includes("youtube") && (
//                   <video controls width="100%"><source src={ex.videoUrl} type="video/mp4" /></video>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./ExerciseLibraryPage.css";

// export default function ExerciseLibrary() {
//   const [exercises, setExercises] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     category: "",
//     muscleGroup: "",
//     equipment: "",
//     difficulty: "",
//     instructions: "",
//     imageUrl: "",
//     videoUrl: "",
//   });

//   const userRole = localStorage.getItem("role"); // "TRAINER" or "GUEST"
//   const token = localStorage.getItem("token"); // JWT

//   useEffect(() => {
//     fetchExercises();
//   }, []);

//   const fetchExercises = async () => {
//     try {
//       const res = await axios.get("http://localhost:8080/exercise-library");
//       setExercises(res.data);
//     } catch (error) {
//       console.error("Error fetching exercises:", error.response?.data || error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:8080/exercise-library", formData, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       fetchExercises();
//       setFormData({
//         name: "",
//         category: "",
//         muscleGroup: "",
//         equipment: "",
//         difficulty: "",
//         instructions: "",
//         imageUrl: "",
//         videoUrl: "",
//       });
//     } catch (error) {
//       console.error("Error adding exercise:", error.response?.data || error);
//     }
//   };

//   return (
//     <div className="exercise-library-page">
//       <h2>Exercise Library</h2>
//       <div className="content-container">

//         {/* Render form only for TRAINER */}
//         {userRole === "TRAINER" && (
//           <div className="form-container">
//             <h3>Add Exercise</h3>
//             <form onSubmit={handleSubmit}>
//               <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//               <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
//               <input type="text" name="muscleGroup" placeholder="Muscle Group" value={formData.muscleGroup} onChange={handleChange} />
//               <input type="text" name="equipment" placeholder="Equipment" value={formData.equipment} onChange={handleChange} />
//               <input type="text" name="difficulty" placeholder="Difficulty" value={formData.difficulty} onChange={handleChange} />
//               <textarea name="instructions" placeholder="Instructions" value={formData.instructions} onChange={handleChange}></textarea>
//               <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} />
//               <input type="text" name="videoUrl" placeholder="Video URL (YouTube or MP4)" value={formData.videoUrl} onChange={handleChange} />

//               <div className="form-actions">
//                 <button type="submit">Add Exercise</button>
//                 <button type="button" onClick={() => setFormData({
//                   name: "", category: "", muscleGroup: "", equipment: "",
//                   difficulty: "", instructions: "", imageUrl: "", videoUrl: ""
//                 })}>Reset</button>
//               </div>
//             </form>
//           </div>
//         )}

//         <div className="list-container">
//           <h3>Exercises</h3>
//           <ul>
//             {exercises.map((ex) => (
//               <li key={ex.id}>
//                 <h4>{ex.name}</h4>
//                 <p><b>Category:</b> {ex.category}</p>
//                 <p><b>Muscle:</b> {ex.muscleGroup}</p>
//                 <p><b>Equipment:</b> {ex.equipment}</p>
//                 <p><b>Difficulty:</b> {ex.difficulty}</p>
//                 <p>{ex.instructions}</p>
//                 {ex.imageUrl && <img className="exercise-image" src={ex.imageUrl} alt={ex.name} />}
//                 {ex.videoUrl && ex.videoUrl.includes("youtube") && (
//                   <iframe width="100%" height="315" src={ex.videoUrl.replace("watch?v=", "embed/")} title={ex.name} frameBorder="0" allowFullScreen></iframe>
//                 )}
//                 {ex.videoUrl && !ex.videoUrl.includes("youtube") && (
//                   <video controls width="100%"><source src={ex.videoUrl} type="video/mp4" /></video>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ExerciseLibraryPage.css";

export default function ExerciseLibrary() {
  const [exercises, setExercises] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    muscleGroup: "",
    equipment: "",
    difficulty: "",
    instructions: "",
    imageUrl: "",
    videoUrl: ""
  });

  const userRole = localStorage.getItem("role")?.toUpperCase(); // "TRAINER" or "GUEST"
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    try {
      const res = await axios.get("https://fiitness-tracker-app.onrender.com/exercise-library");
      setExercises(res.data);
    } catch (error) {
      console.error("Error fetching exercises:", error.response?.data || error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://fiitness-tracker-app.onrender.com/exercise-library",
        formData,
        { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } }
      );
      fetchExercises();
      setFormData({ name: "", category: "", muscleGroup: "", equipment: "", difficulty: "", instructions: "", imageUrl: "", videoUrl: "" });
    } catch (error) {
      console.error("Error adding exercise:", error.response?.data || error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this exercise?")) return;
    try {
      await axios.delete(`https://fiitness-tracker-app.onrender.com/exercise-library/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchExercises();
    } catch (error) {
      console.error("Error deleting exercise:", error.response?.data || error);
    }
  };

  return (
    <div className="exercise-library-page">
      <h2>Exercise Library</h2>
      <div className="content-container">

        {/* Trainer form to add exercises */}
        {userRole === "TRAINER" && (
          <div className="form-container">
            <h3>Add Exercise</h3>
            <form onSubmit={handleSubmit}>
              <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
              <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
              <input name="muscleGroup" placeholder="Muscle Group" value={formData.muscleGroup} onChange={handleChange} />
              <input name="equipment" placeholder="Equipment" value={formData.equipment} onChange={handleChange} />
              <input name="difficulty" placeholder="Difficulty" value={formData.difficulty} onChange={handleChange} />
              <textarea name="instructions" placeholder="Instructions" value={formData.instructions} onChange={handleChange}></textarea>
              <input name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} />
              <input name="videoUrl" placeholder="Video URL" value={formData.videoUrl} onChange={handleChange} />
              <div className="form-actions">
                <button type="submit">Add Exercise</button>
                <button type="button" onClick={() => setFormData({ name:"", category:"", muscleGroup:"", equipment:"", difficulty:"", instructions:"", imageUrl:"", videoUrl:"" })}>Reset</button>
              </div>
            </form>
          </div>
        )}

        {/* List of exercises */}
        <div className="list-container">
          <h3>Exercises</h3>
          <ul>
            {exercises.map((ex) => (
              <li key={ex.id}>
                <h4>{ex.name}</h4>
                <p><b>Category:</b> {ex.category}</p>
                <p><b>Muscle:</b> {ex.muscleGroup}</p>
                <p><b>Equipment:</b> {ex.equipment}</p>
                <p><b>Difficulty:</b> {ex.difficulty}</p>
                <p>{ex.instructions}</p>

                {ex.imageUrl && <img className="exercise-image" src={ex.imageUrl} alt={ex.name} />}
                {ex.videoUrl && ex.videoUrl.includes("youtube") && (
                  <iframe width="100%" height="315" src={ex.videoUrl.replace("watch?v=", "embed/")} title={ex.name} frameBorder="0" allowFullScreen></iframe>
                )}
                {ex.videoUrl && !ex.videoUrl.includes("youtube") && (
                  <video controls width="100%"><source src={ex.videoUrl} type="video/mp4" /></video>
                )}

                {/* Delete button only for TRAINER */}
                {userRole === "TRAINER" && (
                  <button className="delete-btn" onClick={() => handleDelete(ex.id)}>Delete</button>
                )}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
