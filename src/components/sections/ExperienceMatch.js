import React from 'react';
import { FileText } from 'lucide-react';
import DataTable from '../ui/DataTable';
import { experienceMatchData } from '../../data/mockData';

const ExperienceMatch = () => {
  const headers = ['Project', 'Client', 'Duration (yrs)', 'Role'];
  const tableData = experienceMatchData.projects.map(project => [
    project.name,
    project.client,
    project.duration,
    project.role
  ]);

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-4">
        <FileText size={20} className="text-gray-600" />
        <span className="font-medium">SAP TM Functional Experience Match</span>
      </div>
      
      <div className="flex justify-center space-x-8 mb-6">
        <div className="text-center">
          <div className="bg-purple-100 text-purple-700 px-6 py-2 rounded-lg font-medium">
            SAP TM Functional
          </div>
        </div>
        <div className="text-center">
          <div className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-medium">
            S/4 HANA
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <span className="text-purple-600 cursor-pointer hover:underline">Summary Table</span>
        <span className="text-purple-600 cursor-pointer hover:underline">Conclusions</span>
      </div>

      <DataTable headers={headers} data={tableData} />
    </div>
  );
};

export default ExperienceMatch;