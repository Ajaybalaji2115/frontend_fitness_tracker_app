// import React, { useEffect, useState } from "react";
// import api from "./api";
// import "./audit-log.css";
// export default function AdminAuditLogs() {
//   const [logs, setLogs] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchLogs = async () => {
//       try {
//         const userId = localStorage.getItem("userId");
//         const res = await api.get("/audit-logs", { headers: { userId } });
//         setLogs(res.data);
//       } catch (err) {
//         setError(err.response?.data || "Failed to fetch logs.");
//       }
//     };
//     fetchLogs();
//   }, []);

//   return (
//     <div style={{ padding: "1rem" }}>
//       <h2>Audit Logs (Admin Only)</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <table border="1" cellPadding="5" style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Action</th>
//             <th>Performed By</th>
//             <th>Timestamp</th>
//           </tr>
//         </thead>
//         <tbody>
//           {logs.map((log) => (
//             <tr key={log.id}>
//               <td>{log.id}</td>
//               <td>{log.action}</td>
//               <td>{log.performedBy}</td>
//               <td>{new Date(log.timestamp).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// // }
// import React, { useEffect, useState } from "react";
// import api from "./api";
// import "./audit-log.css"; // Import the CSS file

// export default function AdminAuditLogs() {
//   const [logs, setLogs] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchLogs = async () => {
//       try {
//         const userId = localStorage.getItem("userId");
//         const res = await api.get("/audit-logs", { 
//           headers: { userId } 
//         });
//         setLogs(res.data);
//       } catch (err) {
//         setError(err.response?.data || "Failed to fetch logs.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLogs();
//   }, []);

//   const getActionClass = (action) => {
//     const actionLower = action.toLowerCase();
//     if (actionLower.includes('create')) return 'action-create';
//     if (actionLower.includes('update') || actionLower.includes('edit')) return 'action-update';
//     if (actionLower.includes('delete') || actionLower.includes('remove')) return 'action-delete';
//     if (actionLower.includes('login') || actionLower.includes('signin')) return 'action-login';
//     return 'action-default';
//   };

//   if (loading) {
//     return (
//       <div className="audit-logs-container">
//         <div className="loading-container">
//           <div className="loading-spinner"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="audit-logs-container">
//       <h2 className="audit-logs-title">Audit Logs</h2>
      
//       {error && (
//         <div className="error-message">
//           {error}
//         </div>
//       )}
      
//       {logs.length === 0 && !error ? (
//         <div className="empty-state">
//           <div className="empty-state-icon">📋</div>
//           <div className="empty-state-text">No audit logs found</div>
//         </div>
//       ) : (
//         <div className="audit-table-wrapper">
//           <table className="audit-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Action</th>
//                 <th>Performed By</th>
//                 <th>Timestamp</th>
//               </tr>
//             </thead>
//             <tbody>
//               {logs.map((log) => (
//                 <tr key={log.id}>
//                   <td>{log.id}</td>
//                   <td>
//                     <span className={`action-cell ${getActionClass(log.action)}`}>
//                       {log.action}
//                     </span>
//                   </td>
//                   <td className="performed-by-cell">{log.performedBy}</td>
//                   <td className="timestamp-cell">
//                     {new Date(log.timestamp).toLocaleString()}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import api from "./api";
import "./audit-log.css"; // Import your CSS

export default function AdminAuditLogs() {
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [sortBy, setSortBy] = useState("timestamp");
  const [sortDir, setSortDir] = useState("desc");
  const [filterAction, setFilterAction] = useState("");

  const fetchLogs = async () => {
    try {
      setLoading(true);
      const userId = localStorage.getItem("userId");
      const res = await api.get("/audit-logs", {
        headers: { userId },
        params: {
          page,
          size,
          sortBy,
          sortDir,
          actionFilter: filterAction
        }
      });
      setLogs(res.data.content);
      setTotalPages(res.data.totalPages);
      setError("");
    } catch (err) {
      setError(err.response?.data || "Failed to fetch logs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, [page, sortBy, sortDir]);

  const handleFilter = () => {
    setPage(0);
    fetchLogs();
  };

  const getActionClass = (action) => {
    const actionLower = action.toLowerCase();
    if (actionLower.includes('create')) return 'action-create';
    if (actionLower.includes('update') || actionLower.includes('edit')) return 'action-update';
    if (actionLower.includes('delete') || actionLower.includes('remove')) return 'action-delete';
    if (actionLower.includes('login') || actionLower.includes('signin')) return 'action-login';
    return 'action-default';
  };

  if (loading) {
    return (
      <div className="audit-logs-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="audit-logs-container">
      <h2 className="audit-logs-title">Audit Logs</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Filter by action"
          value={filterAction}
          onChange={(e) => setFilterAction(e.target.value)}
        />
        <button className="filter-button" onClick={handleFilter}>
          Apply Filter
        </button>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="timestamp">Timestamp</option>
          <option value="action">Action</option>
          <option value="performedBy">Performed By</option>
        </select>
        <button className="sort-button" onClick={() => setSortDir(sortDir === "asc" ? "desc" : "asc")}>
          {sortDir === "asc" ? "Asc" : "Desc"}
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {logs.length === 0 && !error ? (
        <div className="empty-state">
          <div className="empty-state-icon">📋</div>
          <div className="empty-state-text">No audit logs found</div>
        </div>
      ) : (
        <div className="audit-table-wrapper">
          <table className="audit-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Action</th>
                <th>Performed By</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id}>
                  <td>{log.id}</td>
                  <td>
                    <span className={`action-cell ${getActionClass(log.action)}`}>
                      {log.action}
                    </span>
                  </td>
                  <td className="performed-by-cell">{log.performedBy}</td>
                  <td className="timestamp-cell">
                    {new Date(log.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="pagination">
            <button
              disabled={page === 0}
              onClick={() => setPage(page - 1)}
            >
              Prev
            </button>
            <span>
              Page {page + 1} of {totalPages}
            </span>
            <button
              disabled={page + 1 >= totalPages}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
