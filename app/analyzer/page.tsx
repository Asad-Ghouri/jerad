import React from "react";
import AnalyzerMain from "@/components/AnalyzerMain";
import DashboardSideBar from "../../components/DashboardSideBar";
import AnalyzerHeader from "@/components/AnalyzeHeader";

export const dynamic = "force-dynamic";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server component which means you can fetch data (like the user profile) before the page is rendered.
// See https://shipfa.st/docs/tutorials/private-page
export default async function Analyzer() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-sideBar">
        <DashboardSideBar />
      </div>
      <div className="dashboard-content">
        <div className="dashboard-header">
          <AnalyzerHeader />
        </div>
        <div className="dashboard-main">
          <AnalyzerMain />
        </div>
      </div>
    </div>
  );
}
