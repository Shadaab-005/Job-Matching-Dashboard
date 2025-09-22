import React, { useState } from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Overview from "./sections/Overview";
import OverallMatchSummary from "./sections/OverallMatchSummary";
import ExperienceMatch from "./sections/ExperienceMatch";
import GranularDetails from "./sections/GranularDetails";
import AdditionalRequirements from "./sections/AdditionalRequirements";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "overview":
        return <Overview />;
      case "summary":
        return <OverallMatchSummary />;
      case "experience":
        return <ExperienceMatch />;
      case "granular":
        return <GranularDetails />;
      case "additional":
        return <AdditionalRequirements />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <div className="flex-1 p-6">{renderActiveSection()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
