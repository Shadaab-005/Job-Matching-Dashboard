import React from "react";
import { FileText } from "lucide-react";
import Badge from "../ui/Badge";
import DataTable from "../ui/DataTable";
import { granularDetailsData } from "../../data/mockData";

const GranularDetails = () => {
  const headers = [
    "Category",
    "Object Name / Activity",
    "JD Required Level",
    "Resume Level",
  ];
  const tableData = granularDetailsData.skills.map((skill) => [
    skill.category,
    skill.object,
    <Badge variant={skill.requiredVariant}>{skill.required}</Badge>,
    <Badge variant={skill.resumeVariant}>{skill.resume}</Badge>,
  ]);

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-4">
        <FileText size={20} className="text-gray-600" />
        <span className="font-medium">Granular Section-Wise Details</span>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-6">
        <div className="text-center">
          <div className="bg-purple-100 text-purple-700 px-6 py-2 rounded-lg font-medium">
            WRICEF Dev Experience
          </div>
        </div>
        <div className="text-center">
          <div className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-medium">
            Project Phases Experience
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-6">
        <div className="text-center">
          <div className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-medium">
            Business Process Experience
          </div>
        </div>
        <div className="text-center">
          <div className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-medium">
            Integration Experience
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
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

export default GranularDetails;
