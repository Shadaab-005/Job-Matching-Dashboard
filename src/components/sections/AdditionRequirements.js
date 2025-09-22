import React from "react";
import { Plus } from "lucide-react";
import Badge from "../ui/Badge";
import DataTable from "../ui/DataTable";
import { additionalRequirementsData } from "../../data/mockData";

const AdditionalRequirements = () => {
  const headers = ["JD Requirement", "Match Quality", "JD Requirement"];
  const tableData = additionalRequirementsData.requirements.map((req) => [
    req.requirement,
    <Badge variant={req.matchVariant}>{req.match}</Badge>,
    req.category,
  ]);

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Plus size={20} className="text-gray-600" />
        <span className="font-medium">Additional JD Requirements Match</span>
      </div>

      <div className="flex justify-between items-center mb-6">
        <span className="text-purple-600 cursor-pointer hover:underline">
          Summary Table
        </span>
        <span className="text-purple-600 cursor-pointer hover:underline">
          Conclusions
        </span>
      </div>

      <DataTable headers={headers} data={tableData} />
    </div>
  );
};

export default AdditionalRequirements;
