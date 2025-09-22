import React from "react";
import { BarChart3, FileText, List, Plus } from "lucide-react";
import SidebarItem from "../ui/SidebarItem";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: "overview", icon: BarChart3, label: "Overview" },
    { id: "summary", icon: FileText, label: "Overall Match Summary" },
    {
      id: "experience",
      icon: List,
      label: "SAP TM Functional Experience Match",
    },
    { id: "granular", icon: List, label: "Granular Section-Wise Details" },
    { id: "additional", icon: Plus, label: "Additional JD Requirements Match" },
  ];

  return (
    <div className="w-80 bg-white border-r min-h-screen p-6">
      <h2 className="text-purple-600 font-semibold mb-6">
        Experience Matching Checks
      </h2>

      <div className="space-y-2">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={activeSection === item.id}
            onClick={() => setActiveSection(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
