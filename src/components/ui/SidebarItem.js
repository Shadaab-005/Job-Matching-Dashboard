import React from "react";

const SidebarItem = ({ icon: Icon, label, isActive, onClick }) => {
  return (
    <div
      className={`flex items-center space-x-3 px-4 py-2 rounded-lg cursor-pointer transition-colors ${
        isActive
          ? "bg-purple-600 text-white"
          : "text-gray-700 hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      <Icon size={16} />
      <span className="text-sm">{label}</span>
    </div>
  );
};

export default SidebarItem;
