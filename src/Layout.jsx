
// import { Outlet } from "react-router-dom";
// import SideNav from "./SideNav";
// import "./Layout.css";

// function Layout() {
//   return (
//     <div className="layout flex">
//       <SideNav />
//       <div className="main-content flex-1 p-4">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default Layout;

//yes
// import React from "react";
// import SideNav from "./SideNav";
// import { Outlet } from "react-router-dom";

// function Layout() {
//   return (
//     <div style={{ display: "flex" }}>
//       <SideNav />
//       <div style={{ flex: 1, padding: "1rem" }}>
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default Layout;
import React from "react";
import SideNav from "./SideNav";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{ display: "flex" }}>
      <SideNav />
      <div style={{ flex: 1, padding: "1rem" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;