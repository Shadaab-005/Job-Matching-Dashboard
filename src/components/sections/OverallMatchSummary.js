import React from "react";
import { FileText } from "lucide-react";
import Badge from "../ui/Badge";
import DataTable from "../ui/DataTable";
import { matchSummaryData } from "../../data/mockData";

const OverallMatchSummary = () => {
  const headers = [
    "Category",
    "JD Requirement",
    "Criticality (JD)",
    "Match Quality",
  ];

  const tableData = matchSummaryData.table.map((row) => [
    row.category,
    row.requirement,
    <Badge variant={row.criticalityVariant}>{row.criticality}</Badge>,
    <Badge variant={row.matchVariant}>{row.match}</Badge>,
  ]);

  return (
    <div className="space-y-6">
      {/* Match Summary Table */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <FileText size={20} className="text-gray-600" />
          <span className="font-medium">Overall Match Summary</span>
        </div>

        <div className="flex justify-between items-center mb-6">
          <span className="text-purple-600 cursor-pointer hover:underline">
            Conclusions
          </span>
          <span className="text-purple-600 cursor-pointer hover:underline">
            Summary Table
          </span>
        </div>

        <DataTable headers={headers} data={tableData} />
      </div>

      {/* Match Analysis */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <FileText size={20} className="text-gray-600" />
          <span className="font-medium">Overall Match Summary</span>
        </div>

        <div className="flex justify-between items-center mb-6">
          <span className="text-purple-600 cursor-pointer hover:underline">
            Conclusions
          </span>
          <span className="text-purple-600 cursor-pointer hover:underline">
            Summary Table
          </span>
        </div>

        <div className="mb-6">
          <span className="text-lg font-medium">
            Overall Match Score: 86% | Strong Match
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Strengths */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-medium text-green-800 mb-3">
              Strengths / Key Matches
            </h3>
            <ul className="text-sm text-green-700 space-y-2">
              {matchSummaryData.strengths.map((strength, index) => (
                <li key={index}>• {strength}</li>
              ))}
            </ul>
          </div>

          {/* Notable Gaps */}
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-medium text-yellow-800 mb-3">Notable Gaps</h3>
            <ul className="text-sm text-yellow-700 space-y-2">
              {matchSummaryData.gaps.map((gap, index) => (
                <li key={index}>• {gap}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Mismatches */}
        <div className="bg-red-50 p-4 rounded-lg mt-4">
          <h3 className="font-medium text-red-800 mb-3">Key Mismatches</h3>
          <ul className="text-sm text-red-700 space-y-2">
            {matchSummaryData.mismatches.map((mismatch, index) => (
              <li key={index}>• {mismatch}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OverallMatchSummary;
