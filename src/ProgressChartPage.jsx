// import React from "react";
// import ProgressChart from "./ProgressChart";

// function ProgressChartPage() {
//   const userId = 1; // Replace with dynamic user ID from auth context
//   return <ProgressChart userId={userId} />;
// }

// export default ProgressChartPage;
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProgressChart from "./ProgressChart";
import ProgressInputForm from "./ProgressInputForm";

function ProgressChartPage() {
  const userId = 1; // Replace with dynamic ID from auth context later
  const [progressData, setProgressData] = useState([]);
  const [chartType, setChartType] = useState("bar");
  const [daysRange, setDaysRange] = useState("all");

  const fetchProgress = () => {
    let url = `http://localhost:8080/api/progress/user/${userId}`;
    if (daysRange !== "all") {
      url += `?days=${daysRange}`;
    }
    axios
      .get(url)
      .then((res) => setProgressData(res.data))
      .catch((err) => console.error("Failed to fetch progress", err));
  };

  // Fetch data whenever daysRange changes
  useEffect(() => {
    fetchProgress();
  }, [daysRange]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Workout Progress Tracker</h1>

      {/* Form to add progress */}
      <ProgressInputForm userId={userId} onProgressAdded={fetchProgress} />

      {/* Chart to display progress */}
      <ProgressChart
        progressData={progressData}
        chartType={chartType}
        setChartType={setChartType}
        daysRange={daysRange}
        setDaysRange={setDaysRange}
      />
    </div>
  );
}

export default ProgressChartPage;

