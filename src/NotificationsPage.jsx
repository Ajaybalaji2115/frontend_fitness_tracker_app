// import { useEffect, useState } from "react";
// import "./NotificationsPage.css";

// export default function NotificationsPage({ userId }) {
//   const [notifications, setNotifications] = useState([]);

//   const fetchNotifications = async () => {
//     try {
//       const res = await fetch(`http://localhost:8080/api/notifications/${userId}`);
//       const data = await res.json();
//       setNotifications(data);
//     } catch (err) {
//       console.error("Error fetching notifications:", err);
//     }
//   };

//   const markAsRead = async (id) => {
//     try {
//       await fetch(`/api/notifications/${id}/read`, {
//         method: "PUT",
//       });
//       fetchNotifications();
//     } catch (err) {
//       console.error("Error marking as read:", err);
//     }
//   };

//   useEffect(() => {
//     fetchNotifications();
//   }, []);

//   return (
//     <div className="notifications-container">
//       <h1 className="notifications-title">🔔 Notifications</h1>

//       {notifications.length === 0 ? (
//         <p className="empty-text">No notifications yet.</p>
//       ) : (
//         <div className="notifications-list">
//           {notifications.map((n) => (
//             <div
//               key={n.id}
//               className={`notification-card ${n.read ? "read" : "unread"}`}
//             >
//               <div className="notification-content">
//                 <p className="message">{n.message}</p>
//                 <p className="timestamp">
//                   {new Date(n.createdDate).toLocaleString()}
//                 </p>
//               </div>
//               {!n.read && (
//                 <button
//                   className="mark-btn"
//                   onClick={() => markAsRead(n.id)}
//                 >
//                   Mark as read
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       )}

//       <div className="refresh-container">
//         <button className="refresh-btn" onClick={fetchNotifications}>
//           🔄 Refresh
//         </button>
//       </div>
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import "./NotificationsPage.css";

// export default function NotificationsPage({ userId }) {
//   const [notifications, setNotifications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const fetchNotifications = async () => {
//     if (!userId) {
//       console.error("❌ No userId provided");
//       setError("No user selected. Please log in first.");
//       setLoading(false);
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");

//       const res = await fetch(`http://localhost:8080/api/notifications/${userId}`);
//       if (!res.ok) {
//         throw new Error(`Failed to fetch, status: ${res.status}`);
//       }

//       const data = await res.json();
//       if (!Array.isArray(data)) {
//         throw new Error("Backend did not return an array");
//       }

//       setNotifications(data);
//     } catch (err) {
//       console.error("Error fetching notifications:", err);
//       setError("Could not load notifications. Please try again.");
//       setNotifications([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const markAsRead = async (id) => {
//     try {
//       await fetch(`http://localhost:8080/api/notifications/${id}/read`, {
//         method: "PUT",
//       });
//       fetchNotifications();
//     } catch (err) {
//       console.error("Error marking as read:", err);
//     }
//   };

//   useEffect(() => {
//     fetchNotifications();
//   }, [userId]);

//   return (
//     <div className="notifications-container">
//       <h1 className="notifications-title">🔔 Notifications</h1>

//       {loading && <p>Loading...</p>}
//       {error && <p className="error-text">{error}</p>}

//       {!loading && !error && notifications.length === 0 && (
//         <p className="empty-text">No notifications yet.</p>
//       )}

//       {!loading && notifications.length > 0 && (
//         <div className="notifications-list">
//           {notifications.map((n) => (
//             <div
//               key={n.id || Math.random()}
//               className={`notification-card ${n.read ? "read" : "unread"}`}
//             >
//               <div className="notification-content">
//                 <p className="message">{n.message || "No message"}</p>
//                 <p className="timestamp">
//                   {n.createdDate
//                     ? new Date(n.createdDate).toLocaleString()
//                     : "No date"}
//                 </p>
//               </div>
//               {!n.read && (
//                 <button
//                   className="mark-btn"
//                   onClick={() => markAsRead(n.id)}
//                 >
//                   Mark as read
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       )}

//       <div className="refresh-container">
//         <button className="refresh-btn" onClick={fetchNotifications}>
//           🔄 Refresh
//         </button>
//       </div>
//     </div>
//   );
// }
// import React, { useEffect, useState } from "react";

// const NotificationsPage = ({ userId }) => {
//   const [notifications, setNotifications] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       if (!userId) {
//         setError("❌ No userId provided");
//         return;
//       }

//       try {
//         const res = await fetch(`http://localhost:8080/api/notifications/${userId}`);
//         if (!res.ok) {
//           throw new Error(`Server error: ${res.status}`);
//         }
//         const data = await res.json();
//         setNotifications(data);
//       } catch (err) {
//         setError(`Error fetching notifications: ${err.message}`);
//       }
//     };

//     fetchNotifications();
//   }, [userId]);

//   return (
//     <div>
//       <h2>Notifications</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {notifications.length === 0 && !error ? (
//         <p>No notifications yet.</p>
//       ) : (
//         <ul>
//           {notifications.map((note, idx) => (
//             <li key={idx}>{note.message}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default NotificationsPage;
// import React, { useEffect, useState } from "react";

// const NotificationsPage = ({ userId }) => {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     if (!userId) {
//       console.error("❌ No userId provided");
//       return;
//     }

//     const fetchNotifications = async () => {
//       try {
//         const res = await fetch(`http://localhost:8080/api/notifications/${userId}`);
//         if (!res.ok) throw new Error("Failed to fetch notifications");
//         const data = await res.json();
//         setNotifications(data);
//       } catch (err) {
//         console.error("Error fetching notifications:", err);
//       }
//     };

//     fetchNotifications();
//   }, [userId]);

//   return (
//     <div>
//       <h2>Notifications</h2>
//       {notifications.length === 0 ? (
//         <p>No notifications yet</p>
//       ) : (
//         <ul>
//           {notifications.map((n) => (
//             <li key={n.id}>{n.message}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default NotificationsPage;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function NotificationsPage({ userId }) {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     if (userId) {
//       fetchNotifications(userId);
//     }
//   }, [userId]);

//   const fetchNotifications = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/notifications/user/${id}`);
//       setNotifications(response.data);
//     } catch (error) {
//       console.error("Error fetching notifications:", error);
//     }
//   };

//   if (!userId) {
//     return <p>Please log in to see your notifications.</p>;
//   }

//   return (
//     <div>
//       <h2>Your Notifications</h2>
//       {notifications.length === 0 ? (
//         <p>No notifications yet.</p>
//       ) : (
//         <ul>
//           {notifications.map((n) => (
//             <li key={n.id}>{n.message}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default NotificationsPage;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./NotificationsPage.css";

// const NotificationsPage = ({ userId }) => {
//   const [notifications, setNotifications] = useState([]);

//   // ✅ Fetch notifications when userId changes
//   useEffect(() => {
//     if (!userId) return;

//     axios
//       .get(`http://localhost:8080/api/notifications/${userId}`)
//       .then((res) => {
//         console.log("Fetched notifications:", res.data);
//         setNotifications(res.data);
//       })
//       .catch((err) => console.error("Error fetching notifications:", err));
//   }, [userId]);

//   // ✅ Mark as read
//   const markAsRead = async (id) => {
//     try {
//       const res = await axios.put(
//         `http://localhost:8080/api/notifications/${id}/read`
//       );
//       setNotifications((prev) =>
//         prev.map((n) =>
//           n.notificationId === id ? { ...n, isRead: true } : n
//         )
//       );
//     } catch (err) {
//       console.error("Error marking notification as read:", err);
//     }
//   };

//   // ✅ Delete notification
//   const deleteNotification = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8080/api/notifications/${id}`);
//       setNotifications((prev) =>
//         prev.filter((n) => n.notificationId !== id)
//       );
//     } catch (err) {
//       console.error("Error deleting notification:", err);
//     }
//   };

//   return (
//     <div className="notifications-container">
//       <h2>Notifications</h2>
//       {notifications.length === 0 ? (
//         <p>No notifications yet.</p>
//       ) : (
//         <ul className="notifications-list">
//           {notifications.map((n) => (
//             <li
//               key={n.notificationId}
//               className={n.isRead ? "read" : "unread"}
//             >
//               <span>{n.message}</span>
//               <div className="actions">
//                 {!n.isRead && (
//                   <button onClick={() => markAsRead(n.notificationId)}>
//                     Mark as Read
//                   </button>
//                 )}
//                 <button onClick={() => deleteNotification(n.notificationId)}>
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// // export default NotificationsPage;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Notifications = () => {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     // Replace with actual logged-in userId
//     const userId = 1;

//     axios
//       .get(`http://localhost:8080/api/notifications/${userId}`)
//       .then((res) => {
//         console.log("Fetched notifications:", res.data);
//         setNotifications(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching notifications:", err);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Notifications</h2>
//       {notifications.length === 0 ? (
//         <p>No notifications</p>
//       ) : (
//         <ul>
//           {notifications.map((n) => (
//             <li key={n.notificationId}>
//               <strong>{n.type}:</strong> {n.message} <br />
//               <small>{n.createdDate}</small>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Notifications;import React, { useEffect, useState } from "react";
// import axios from "axios";
// import './NotificationsPage.css'; // make sure this file exists

// const NotificationsPage = () => {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     const userId = 1; // Replace with actual logged-in userId
//     axios
//       .get(`http://localhost:8080/api/notifications/${userId}`)
//       .then((res) => setNotifications(res.data))
//       .catch((err) => console.error("Error fetching notifications:", err));
//   }, []);

//   return (
//     <div className="notifications-container">
//       <h2 className="notifications-title" data-count={notifications.length}>
//         Notifications
//       </h2>

//       {notifications.length === 0 ? (
//         <div className="empty-text">No notifications</div>
//       ) : (
//         <div className="notifications-list">
//           {notifications.map((n) => (
//             <div
//               key={n.notificationId}
//               className={`notification-card ${n.isRead ? "read" : "unread"}`}
//               data-type={n.type.toLowerCase()}
//             >
//               <div className="notification-content">
//                 <p className="message">{n.message}</p>
//                 <span className="timestamp">
//                   {new Date(n.createdDate).toLocaleString()}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default NotificationsPage;
import React, { useEffect, useState } from "react";
import axios from "axios";
import './NotificationsPage.css';

const NotificationsPage = ({ userId }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (!userId) return;

    axios
      .get(`http://localhost:8080/api/notifications/${userId}`)
      .then((res) => setNotifications(res.data))
      .catch((err) => console.error("Error fetching notifications:", err));
  }, [userId]);

  if (!userId) return <p>Please log in to see notifications</p>;

  return (
    <div className="notifications-container">
      <h2 className="notifications-title" data-count={notifications.length}>
        Notifications
      </h2>

      {notifications.length === 0 ? (
        <div className="empty-text">No notifications</div>
      ) : (
        <div className="notifications-list">
          {notifications.map((n) => (
            <div
              key={n.notificationId}
              className={`notification-card ${n.isRead ? "read" : "unread"}`}
              data-type={n.type?.toLowerCase() || "info"}
            >
              <div className="notification-content">
                <p className="message">{n.message}</p>
                <span className="timestamp">
                  {new Date(n.createdDate).toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;
