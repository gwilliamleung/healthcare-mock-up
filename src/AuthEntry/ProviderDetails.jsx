import React from "react";
import { FaChevronDown } from "react-icons/fa";

const ProviderDetails = () => {
  return (
    <div className="border border-gray-300 rounded p-4 bg-white space-y-4">
      {/* Header */}

      {/* First Row */}
      <div className="flex space-x-4">
        {/* Left Side */}
        <div className="w-1/2 flex space-x-2">
          <div className="w-2/10">
            <label className="text-sm font-medium block mb-1">
              Search Provider By
            </label>
            <input
              type="text"
              placeholder="Provider Name"
              className="w-full border px-2 py-1 rounded text-sm"
            />
          </div>
          <div className="w-3/10">
            <label className="text-sm font-medium block mb-1">
              Referred By Provider Name
            </label>
            <input
              type="text"
              placeholder="Rikhil Kochhar"
              className="w-full border px-2 py-1 rounded text-sm"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex space-x-2">
          <div className="w-2/10">
            <label className="text-sm font-medium block mb-1">
              Search Provider By
            </label>
            <input
              type="text"
              placeholder="Provider Name"
              className="w-full border px-2 py-1 rounded text-sm"
            />
          </div>
          <div className="w-3/10">
            <label className="text-sm font-medium block mb-1">
              Servicing Provider Name
            </label>
            <input
              id="servicingProviderName"
              type="text"
              placeholder="Preferred Home Care of NY"
              className="w-full border px-2 py-1 rounded text-sm"
            />
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex space-x-4">
        <div className="w-1/2 flex space-x-2">
          <input
            className="w-1/3 border px-2 py-1 rounded text-sm"
            placeholder="Provider Phone"
          />
          <input
            className="w-1/3 border px-2 py-1 rounded text-sm"
            placeholder="Alt Phone"
          />
          <input
            className="w-1/3 border px-2 py-1 rounded text-sm"
            placeholder="Fax"
          />
        </div>
        <div className="w-1/2 flex space-x-2">
          <input
            className="w-1/3 border px-2 py-1 rounded text-sm"
            placeholder="Provider Phone"
          />
          <input
            className="w-1/3 border px-2 py-1 rounded text-sm"
            placeholder="Alt Phone"
          />
          <input
            className="w-1/3 border px-2 py-1 rounded text-sm"
            placeholder="Fax"
          />
        </div>
      </div>

      {/* Third Row - Caller Name */}
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="text-sm font-medium block mb-1">Caller Name</label>
          <input
            type="text"
            placeholder="Type in for referred by caller name"
            className="w-3/10 border px-2 py-1 rounded text-sm"
          />
        </div>
        <div className="w-1/2">
          <label className="text-sm font-medium block mb-1">Caller Name</label>
          <input
            type="text"
            placeholder="Type in for referred to caller name"
            className="w-3/10 border px-2 py-1 rounded text-sm"
          />
        </div>
      </div>

      {/* Fourth Row */}
      <div className="flex space-x-4">
        <div className="w-1/2 flex space-x-2">
          <input
            className="w-1/3 border px-2 py-1 rounded text-sm"
            placeholder="Caller Info"
          />
          <input
            className="w-1/3 border px-2 py-1 rounded text-sm"
            placeholder="Phone"
          />
          <input
            className="w-1/3 border px-2 py-1 rounded text-sm"
            placeholder="Email"
          />
        </div>
        <div className="w-1/2 flex space-x-2">
          <input
            className="w-1/3 border px-2 py-1 rounded text-sm"
            placeholder="Caller Info"
          />
          <input
            className="w-1/3 border px-2 py-1 rounded text-sm"
            placeholder="Phone"
          />
          <input
            className="w-1/3 border px-2 py-1 rounded text-sm"
            placeholder="Email"
          />
        </div>
      </div>

      {/* Fifth Row */}
      <div className="w-1/2 space-y-2">
        <label className="flex text-sm font-medium">Co-Surgeon Name</label>
        <input
          className="w-2/10 border px-2 py-1 rounded text-sm"
          placeholder="Co-Surgeon Name"
        />
      </div>

      {/* Sixth Row - Save & Next */}
      <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-5 py-2 rounded text-sm mt-2">
          Save and Next
        </button>
      </div>
    </div>
  );
};

export default ProviderDetails;
