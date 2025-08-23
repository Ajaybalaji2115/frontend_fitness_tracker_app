// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Bar, Pie, Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   PointElement,
//   LineElement,
// } from "chart.js";
// import "./ProgressChart.css";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   PointElement,
//   LineElement
// );

// const ProgressChart = ({ userId }) => {
//   const [progressData, setProgressData] = useState([]);
//   const [chartType, setChartType] = useState("bar");

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/api/progress/${userId}`)
//       .then((res) => setProgressData(res.data))
//       .catch((err) => console.error(err));
//   }, [userId]);

//   const labels = progressData.map((p) => p.date);
//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Completion %",
//         data: progressData.map((p) => p.completionPercentage),
//         backgroundColor: chartType === "pie"
//           ? [
//               "rgba(75, 192, 192, 0.6)",
//               "rgba(255, 99, 132, 0.6)",
//               "rgba(54, 162, 235, 0.6)",
//               "rgba(255, 206, 86, 0.6)",
//               "rgba(153, 102, 255, 0.6)",
//             ]
//           : "rgba(75, 192, 192, 0.6)",
//         borderColor: chartType === "pie"
//           ? [
//               "rgba(75, 192, 192, 1)",
//               "rgba(255, 99, 132, 1)",
//               "rgba(54, 162, 235, 1)",
//               "rgba(255, 206, 86, 1)",
//               "rgba(153, 102, 255, 1)",
//             ]
//           : "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//         tension: 0.4, // for line chart smoothness
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//         labels: { font: { size: 14 } },
//       },
//       tooltip: {
//         enabled: true,
//         mode: "index",
//         intersect: false,
//       },
//       title: {
//         display: true,
//         text: "Workout Progress",
//         font: { size: 18, weight: "600" },
//       },
//     },
//     scales: chartType !== "pie" ? {
//       y: {
//         beginAtZero: true,
//         max: 100,
//         title: { display: true, text: "Completion (%)" },
//       },
//       x: {
//         title: { display: true, text: "Date" },
//       },
//     } : {},
//   };

//   return (
//     <div className="progress-container">
//       <h2>Progress Chart</h2>
//       <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
//         <option value="bar">Bar Chart</option>
//         <option value="pie">Pie Chart</option>
//         <option value="line">Line Chart</option>
//       </select>
//       <div className="chart-wrapper">
//         {chartType === "bar" && <Bar data={data} options={options} />}
//         {chartType === "pie" && <Pie data={data} options={options} />}
//         {chartType === "line" && <Line data={data} options={options} />}
//       </div>
//     </div>
//   );
// };

// export default ProgressChart;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Bar, Pie, Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   PointElement,
//   LineElement,
// } from "chart.js";
// import "./ProgressChart.css";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   PointElement,
//   LineElement
// );

// const ProgressChart = ({ userId }) => {
//   const [progressData, setProgressData] = useState([]);
//   const [chartType, setChartType] = useState("bar");

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/api/progress/${userId}`)
//       .then((res) => setProgressData(res.data))
//       .catch((err) => console.error(err));
//   }, [userId]);

//   const labels = progressData.map((p) => p.date);
//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Completion %",
//         data: progressData.map((p) => p.completionPercentage),
//         backgroundColor: chartType === "pie"
//           ? [
//               "rgba(75, 192, 192, 0.6)",
//               "rgba(255, 99, 132, 0.6)",
//               "rgba(54, 162, 235, 0.6)",
//               "rgba(255, 206, 86, 0.6)",
//               "rgba(153, 102, 255, 0.6)",
//             ]
//           : "rgba(75, 192, 192, 0.6)",
//         borderColor: chartType === "pie"
//           ? [
//               "rgba(75, 192, 192, 1)",
//               "rgba(255, 99, 132, 1)",
//               "rgba(54, 162, 235, 1)",
//               "rgba(255, 206, 86, 1)",
//               "rgba(153, 102, 255, 1)",
//             ]
//           : "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: { position: "top" },
//       tooltip: { enabled: true },
//       title: { display: true, text: "Workout Progress" },
//     },
//     scales: chartType !== "pie" ? {
//       y: { beginAtZero: true, max: 100, title: { display: true, text: "Completion (%)" } },
//       x: { title: { display: true, text: "Date" } },
//     } : {},
//   };

//   return (
//     <div className="progress-container">
//       <h2>Progress Chart</h2>
//       <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
//         <option value="bar">Bar Chart</option>
//         <option value="pie">Pie Chart</option>
//         <option value="line">Line Chart</option>
//       </select>
//       <div className="chart-wrapper">
//         {chartType === "bar" && <Bar data={data} options={options} />}
//         {chartType === "pie" && <Pie data={data} options={options} />}
//         {chartType === "line" && <Line data={data} options={options} />}
//       </div>
//     </div>
//   );
// };

// export default ProgressChart;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Bar, Pie, Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   PointElement,
//   LineElement,
// } from "chart.js";
// import "./ProgressChart.css";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   PointElement,
//   LineElement
// );

// const ProgressChart = ({ userId }) => {
//   const [progressData, setProgressData] = useState([]);
//   const [chartType, setChartType] = useState("bar");
//   const [daysRange, setDaysRange] = useState("all");

//   useEffect(() => {
//     fetchProgress(daysRange);
//   }, [userId, daysRange]);

//   const fetchProgress = (days) => {
//     let url = `http://localhost:8080/api/progress/${userId}`;
//     if (days !== "all") {
//       url += `?days=${days}`;
//     }
//     axios
//       .get(url)
//       .then((res) => setProgressData(res.data))
//       .catch((err) => console.error(err));
//   };

//   const labels = progressData.map((p) => p.date);
//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Completion %",
//         data: progressData.map((p) => p.completionPercentage),
//         backgroundColor:
//           chartType === "pie"
//             ? [
//                 "rgba(75, 192, 192, 0.6)",
//                 "rgba(255, 99, 132, 0.6)",
//                 "rgba(54, 162, 235, 0.6)",
//                 "rgba(255, 206, 86, 0.6)",
//                 "rgba(153, 102, 255, 0.6)",
//               ]
//             : "rgba(75, 192, 192, 0.6)",
//         borderColor:
//           chartType === "pie"
//             ? [
//                 "rgba(75, 192, 192, 1)",
//                 "rgba(255, 99, 132, 1)",
//                 "rgba(54, 162, 235, 1)",
//                 "rgba(255, 206, 86, 1)",
//                 "rgba(153, 102, 255, 1)",
//               ]
//             : "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: { position: "top" },
//       tooltip: { enabled: true },
//       title: { display: true, text: "Workout Progress" },
//     },
//     scales:
//       chartType !== "pie"
//         ? {
//             y: {
//               beginAtZero: true,
//               max: 100,
//               title: { display: true, text: "Completion (%)" },
//             },
//             x: { title: { display: true, text: "Date" } },
//           }
//         : {},
//   };

//   return (
//     <div className="progress-container">
//       <h2>Progress Chart</h2>

//       <label htmlFor="daysRange" style={{ marginRight: "10px" }}>
//         Select Days Range:
//       </label>
//       <select
//         id="daysRange"
//         value={daysRange}
//         onChange={(e) => setDaysRange(e.target.value)}
//         style={{ marginRight: "20px" }}
//       >
//         <option value="7">Last 7 Days</option>
//         <option value="30">Last 30 Days</option>
//         <option value="all">All Time</option>
//       </select>

//       <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
//         <option value="bar">Bar Chart</option>
//         <option value="pie">Pie Chart</option>
//         <option value="line">Line Chart</option>
//       </select>

//       <div className="chart-wrapper">
//         {chartType === "bar" && <Bar data={data} options={options} />}
//         {chartType === "pie" && <Pie data={data} options={options} />}
//         {chartType === "line" && <Line data={data} options={options} />}
//       </div>
//     </div>
//   );
// };

// export default ProgressChart;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Bar, Pie, Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   PointElement,
//   LineElement,
// } from "chart.js";
// import "./ProgressChart.css";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   PointElement,
//   LineElement
// );

// const ProgressChart = ({ userId, refreshFlag }) => {
//   const [progressData, setProgressData] = useState([]);
//   const [chartType, setChartType] = useState("bar");
//   const [daysRange, setDaysRange] = useState("all");

//   useEffect(() => {
//     fetchProgress(daysRange);
//   }, [userId, daysRange, refreshFlag]);

//   const fetchProgress = (days) => {
//     let url = `http://localhost:8080/api/progress/me`;
//     if (days !== "all") {
//       url += `?days=${days}`;
//     }
//     axios.get(url)
//     .then(res => {
//       console.log("Fetched progress data:", res.data);
//       setProgressData(res.data);
//     })
//    .catch(err => {
//   if (err.response) {
//     // Server responded with status code outside 2xx
//     console.error("Backend error:", err.response.status, err.response.data);
//   } else if (err.request) {
//     // Request was sent but no response received
//     console.error("No response received", err.request);
//   } else {
//     // Axios config or setup error
//     console.error("Request setup error:", err.message);
//   }
// });
//   };

//   if (!progressData || progressData.length === 0) {
//     return (
//       <div className="progress-container">
//         <h2>Progress Chart</h2>
//         <select
//           value={daysRange}
//           onChange={(e) => setDaysRange(e.target.value)}
//           style={{ marginRight: "20px" }}
//         >
//           <option value="7">Last 7 Days</option>
//           <option value="30">Last 30 Days</option>
//           <option value="all">All Time</option>
//         </select>
//         <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
//           <option value="bar">Bar Chart</option>
//           <option value="pie">Pie Chart</option>
//           <option value="line">Line Chart</option>
//         </select>
//         <p style={{ marginTop: "2rem" }}>No progress data available to display the chart.</p>
//       </div>
//     );
//   }

//   const labels = progressData.map((p) => new Date(p.date).toLocaleDateString());
//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Completion %",
//         data: progressData.map((p) => p.completionPercentage),
//         backgroundColor:
//           chartType === "pie"
//             ? [
//                 "rgba(75, 192, 192, 0.6)",
//                 "rgba(255, 99, 132, 0.6)",
//                 "rgba(54, 162, 235, 0.6)",
//                 "rgba(255, 206, 86, 0.6)",
//                 "rgba(153, 102, 255, 0.6)",
//               ]
//             : "rgba(75, 192, 192, 0.6)",
//         borderColor:
//           chartType === "pie"
//             ? [
//                 "rgba(75, 192, 192, 1)",
//                 "rgba(255, 99, 132, 1)",
//                 "rgba(54, 162, 235, 1)",
//                 "rgba(255, 206, 86, 1)",
//                 "rgba(153, 102, 255, 1)",
//               ]
//             : "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: { position: "top" },
//       tooltip: { enabled: true },
//       title: { display: true, text: "Workout Progress" },
//     },
//     scales:
//       chartType !== "pie"
//         ? {
//             y: {
//               beginAtZero: true,
//               max: 100,
//               title: { display: true, text: "Completion (%)" },
//             },
//             x: { title: { display: true, text: "Date" } },
//           }
//         : {},
//   };

//   return (
//     <div className="progress-container">
//       <h2>Progress Chart</h2>
//       <label htmlFor="daysRange" style={{ marginRight: "10px" }}>
//         Select Days Range:
//       </label>
//       <select
//         id="daysRange"
//         value={daysRange}
//         onChange={(e) => setDaysRange(e.target.value)}
//         style={{ marginRight: "20px" }}
//       >
//         <option value="7">Last 7 Days</option>
//         <option value="30">Last 30 Days</option>
//         <option value="all">All Time</option>
//       </select>

//       <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
//         <option value="bar">Bar Chart</option>
//         <option value="pie">Pie Chart</option>
//         <option value="line">Line Chart</option>
//       </select>
//       <div className="chart-wrapper">
//         {chartType === "bar" && <Bar data={data} options={options} redraw />}
//         {chartType === "pie" && <Pie data={data} options={options} redraw />}
//         {chartType === "line" && <Line data={data} options={options} redraw />}
//       </div>
//     </div>
//   );
// };

// export default ProgressChart;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Bar, Pie, Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   PointElement,
//   LineElement,
// } from "chart.js";
// import "./ProgressChart.css";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   PointElement,
//   LineElement
// );

// const ProgressChart = ({ userId }) => {
//   const [progressData, setProgressData] = useState([]);
//   const [chartType, setChartType] = useState("bar");
//   const [daysRange, setDaysRange] = useState("all");
//   const [refreshFlag, setRefreshFlag] = useState(false); // used to trigger refresh
//   const [formData, setFormData] = useState({
//     date: "",
//     completionPercentage: "",
//     notes: ""
//   });

//   // Fetch progress data on userId, daysRange, refreshFlag changes
//   useEffect(() => {
//     if (!userId) return;
//     fetchProgress(daysRange);
//   }, [userId, daysRange, refreshFlag]);

//   const fetchProgress = (days) => {
//     let url = `http://localhost:8080/api/progress/me`;
//     if (days !== "all") {
//       url += `?days=${days}`;
//     }
//     axios.get(url)
//       .then(res => setProgressData(res.data))
//       .catch(err => {
//         console.error("Error fetching progress data:", err);
//       });
//   };

//   // Handle input change in form fields
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   // Handle form submit to add new progress entry
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.date || !formData.completionPercentage) {
//       alert("Please fill date and completion percentage");
//       return;
//     }

//     // UPDATED: POST URL includes "/me" to match backend mapping
//     axios.post("http://localhost:8080/api/progress/me", {
//       date: formData.date,
//       completionPercentage: Number(formData.completionPercentage),
//       notes: formData.notes
//     })
//     .then(() => {
//       // Clear form
//       setFormData({ date: "", completionPercentage: "", notes: "" });
//       // Trigger refresh of progress chart
//       setRefreshFlag(prev => !prev);
//     })
//     .catch(err => {
//       console.error("Error adding progress:", err);
//     });
//   };

//   // Prepare chart data
//   const labels = progressData.map(p => new Date(p.date).toLocaleDateString());
//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Completion %",
//         data: progressData.map(p => p.completionPercentage),
//         backgroundColor:
//           chartType === "pie"
//             ? [
//                 "rgba(75, 192, 192, 0.6)",
//                 "rgba(255, 99, 132, 0.6)",
//                 "rgba(54, 162, 235, 0.6)",
//                 "rgba(255, 206, 86, 0.6)",
//                 "rgba(153, 102, 255, 0.6)",
//               ]
//             : "rgba(75, 192, 192, 0.6)",
//         borderColor:
//           chartType === "pie"
//             ? [
//                 "rgba(75, 192, 192, 1)",
//                 "rgba(255, 99, 132, 1)",
//                 "rgba(54, 162, 235, 1)",
//                 "rgba(255, 206, 86, 1)",
//                 "rgba(153, 102, 255, 1)",
//               ]
//             : "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: { position: "top" },
//       tooltip: { enabled: true },
//       title: { display: true, text: "Workout Progress" },
//     },
//     scales:
//       chartType !== "pie"
//         ? {
//             y: {
//               beginAtZero: true,
//               max: 100,
//               title: { display: true, text: "Completion (%)" },
//             },
//             x: { title: { display: true, text: "Date" } },
//           }
//         : {},
//   };

//   return (
//     <div className="progress-container">
//       <h2>Add Progress</h2>
//       <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
//         <label>
//           Date:{" "}
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleInputChange}
//             required
//           />
//         </label>{" "}
//         <label>
//           Completion %:{" "}
//           <input
//             type="number"
//             name="completionPercentage"
//             value={formData.completionPercentage}
//             onChange={handleInputChange}
//             min="0"
//             max="100"
//             required
//           />
//         </label>{" "}
//         <label>
//           Notes:{" "}
//           <input
//             type="text"
//             name="notes"
//             value={formData.notes}
//             onChange={handleInputChange}
//           />
//         </label>{" "}
//         <button type="submit">Add Progress</button>
//       </form>

//       <h2>Progress Chart</h2>
//       <label htmlFor="daysRange" style={{ marginRight: "10px" }}>
//         Select Days Range:
//       </label>
//       <select
//         id="daysRange"
//         value={daysRange}
//         onChange={(e) => setDaysRange(e.target.value)}
//         style={{ marginRight: "20px" }}
//       >
//         <option value="7">Last 7 Days</option>
//         <option value="30">Last 30 Days</option>
//         <option value="all">All Time</option>
//       </select>

//       <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
//         <option value="bar">Bar Chart</option>
//         <option value="pie">Pie Chart</option>
//         <option value="line">Line Chart</option>
//       </select>

//       {progressData.length === 0 ? (
//         <p style={{ marginTop: "2rem" }}>No progress data available to display the chart.</p>
//       ) : (
//         <div className="chart-wrapper">
//           {chartType === "bar" && <Bar data={data} options={options} redraw />}
//           {chartType === "pie" && <Pie data={data} options={options} redraw />}
//           {chartType === "line" && <Line data={data} options={options} redraw />}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProgressChart;
// import React from "react";
// import { Bar, Pie, Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   PointElement,
//   LineElement,
// } from "chart.js";
// import "./ProgressChart.css";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   PointElement,
//   LineElement
// );

// const ProgressChart = ({
//   progressData,
//   chartType,
//   setChartType,
//   daysRange,
//   setDaysRange,
// }) => {
//   const labels = progressData.map((p) =>
//     new Date(p.date).toLocaleDateString()
//   );

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Completion %",
//         data: progressData.map((p) => p.completionPercentage),
//         backgroundColor:
//           chartType === "pie"
//             ? [
//                 "rgba(75, 192, 192, 0.6)",
//                 "rgba(255, 99, 132, 0.6)",
//                 "rgba(54, 162, 235, 0.6)",
//                 "rgba(255, 206, 86, 0.6)",
//                 "rgba(153, 102, 255, 0.6)",
//               ]
//             : "rgba(75, 192, 192, 0.6)",
//         borderColor:
//           chartType === "pie"
//             ? [
//                 "rgba(75, 192, 192, 1)",
//                 "rgba(255, 99, 132, 1)",
//                 "rgba(54, 162, 235, 1)",
//                 "rgba(255, 206, 86, 1)",
//                 "rgba(153, 102, 255, 1)",
//               ]
//             : "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: { position: "top" },
//       tooltip: { enabled: true },
//       title: { display: true, text: "Workout Progress" },
//     },
//     scales:
//       chartType !== "pie"
//         ? {
//             y: {
//               beginAtZero: true,
//               max: 100,
//               title: { display: true, text: "Completion (%)" },
//             },
//             x: { title: { display: true, text: "Date" } },
//           }
//         : {},
//   };

//   return (
//     <div className="progress-container">
//       <h2>Progress Chart</h2>
//       <label htmlFor="daysRange" style={{ marginRight: 10 }}>
//         Select Days Range:
//       </label>
//       <select
//         id="daysRange"
//         value={daysRange}
//         onChange={(e) => setDaysRange(e.target.value)}
//         style={{ marginRight: 20 }}
//       >
//         <option value="7">Last 7 Days</option>
//         <option value="30">Last 30 Days</option>
//         <option value="all">All Time</option>
//       </select>

//       <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
//         <option value="bar">Bar Chart</option>
//         <option value="pie">Pie Chart</option>
//         <option value="line">Line Chart</option>
//       </select>

//       {progressData.length === 0 ? (
//         <p style={{ marginTop: "2rem" }}>
//           No progress data available to display the chart.
//         </p>
//       ) : (
//         <div className="chart-wrapper">
//           {chartType === "bar" && <Bar data={data} options={options} redraw />}
//           {chartType === "pie" && <Pie data={data} options={options} redraw />}
//           {chartType === "line" && <Line data={data} options={options} redraw />}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProgressChart;
import React from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import "./ProgressChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const ProgressChart = ({
  progressData,
  chartType,
  setChartType,
  daysRange,
  setDaysRange,
}) => {
  const labels = progressData.map((p) =>
    new Date(p.date).toLocaleDateString()
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Completion %",
        data: progressData.map((p) => p.completionPercentage),
        backgroundColor:
          chartType === "pie"
            ? [
                "rgba(75, 192, 192, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(153, 102, 255, 0.6)",
              ]
            : "rgba(75, 192, 192, 0.6)",
        borderColor:
          chartType === "pie"
            ? [
                "rgba(75, 192, 192, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(153, 102, 255, 1)",
              ]
            : "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: { enabled: true },
      title: { display: true, text: "Workout Progress" },
    },
    scales:
      chartType !== "pie"
        ? {
            y: {
              beginAtZero: true,
              max: 100,
              title: { display: true, text: "Completion (%)" },
            },
            x: { title: { display: true, text: "Date" } },
          }
        : {},
  };

  return (
    <div className="progress-container">
      <h2>Progress Chart</h2>

      {/* Filters */}
      <label htmlFor="daysRange" style={{ marginRight: 10 }}>
        Select Days Range:
      </label>
      <select
        id="daysRange"
        value={daysRange}
        onChange={(e) => setDaysRange(e.target.value)}
        style={{ marginRight: 20 }}
      >
        <option value="7">Last 7 Days</option>
        <option value="30">Last 30 Days</option>
        <option value="all">All Time</option>
      </select>

      <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
        <option value="bar">Bar Chart</option>
        <option value="pie">Pie Chart</option>
        <option value="line">Line Chart</option>
      </select>

      {/* Chart */}
      {progressData.length === 0 ? (
        <p style={{ marginTop: "2rem" }}>
          No progress data available to display the chart.
        </p>
      ) : (
        <div className="chart-wrapper">
          {chartType === "bar" && <Bar data={data} options={options} redraw />}
          {chartType === "pie" && <Pie data={data} options={options} redraw />}
          {chartType === "line" && <Line data={data} options={options} redraw />}
        </div>
      )}
    </div>
  );
};

export default ProgressChart;
