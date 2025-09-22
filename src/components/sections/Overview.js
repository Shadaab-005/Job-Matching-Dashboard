import React from "react";
import { BarChart3 } from "lucide-react";
import Badge from "../ui/Badge";
import { overviewData } from "../../data/mockData";

const Overview = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-4">
        <BarChart3 size={20} className="text-gray-600" />
        <span className="font-medium">Overview</span>
      </div>

      <h1 className="text-xl font-semibold mb-6">
        Job Title: SAP TM Functional Consultant
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          {overviewData.leftColumn.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-600">{item.label}</span>
              <Badge variant={item.variant}>{item.value}</Badge>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {overviewData.rightColumn.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-600">{item.label}</span>
              <Badge variant={item.variant}>{item.value}</Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
