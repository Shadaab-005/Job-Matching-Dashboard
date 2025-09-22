import React from "react";
import { ChevronLeft } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-white border-b px-6 py-4">
      <div className="flex items-center space-x-3">
        <ChevronLeft
          className="text-gray-500 cursor-pointer hover:text-gray-700"
          size={20}
        />
        <span className="text-gray-500">Back</span>
      </div>
    </div>
  );
};

export default Header;
