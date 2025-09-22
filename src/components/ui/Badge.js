import React from "react";

const Badge = ({ variant = "default", children, className = "" }) => {
  const variants = {
    default: "bg-gray-500 text-white",
    strong: "bg-green-500 text-white",
    partial: "bg-yellow-500 text-white",
    "must-have": "bg-blue-500 text-white",
    "nice-to-have": "bg-blue-400 text-white",
    expert: "bg-blue-600 text-white",
    advanced: "bg-blue-500 text-white",
    missing: "bg-red-500 text-white",
  };

  return (
    <span
      className={`px-2 py-1 rounded text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
