


import React from "react";
import AllMatchesMain from "@/components/AllMatchesMain";
import DashboardSideBar from "../../components/DashboardSideBar";
import AllMatchesHeader from "@/components/AllMatchesHeader";

export const dynamic = "force-dynamic";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server component which means you can fetch data (like the user profile) before the page is rendered.
// See https://shipfa.st/docs/tutorials/private-page
export default async function AllMatches() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-sideBar">
        <DashboardSideBar />
      </div>
      <div className="dashboard-content">
        <div className="dashboard-header">
          <AllMatchesHeader />
        </div>
        <div className="dashboard-main">
          <AllMatchesMain />
        </div>
      </div>
    </div>
  );
}
