import React from "react";

const DiagnosisServiceCodes = () => {
  return (
    <div className="border border-gray-300 rounded p-6 bg-white space-y-6">
      {/* First Row - ICD Version (locked selector) */}
      <div className="flex justify-start">
        <div className="w-1/20">
          <label className="text-sm font-medium block mb-1">ICD Version</label>
          <select
            id="icdVersion"
            className="w-full border px-2 py-1 rounded text-sm bg-gray-100 cursor-not-allowed"
            disabled
            value="ICD-10"
          >
            <option value="ICD-10">ICD-10</option>
          </select>
        </div>
      </div>

      {/* Second Row - Diagnosis Description + Diagnosis Code */}
      <div className="flex space-x-12">
        <div className="w-1/10">
          <label className="text-sm font-medium block mb-1">
            Diagnosis Description
          </label>
          <input
            id="diagnosisDescription"
            type="text"
            className="w-full border px-2 py-1 rounded text-sm"
            placeholder="Description"
          />
        </div>
        <div className="w-1/20">
          <label className="text-sm w-[200px] font-medium block mb-1">
            Diagnosis Code
          </label>
          <input
            id="diagnosisCode"
            type="text"
            className="w-full border px-2 py-1 rounded text-sm"
            placeholder="Code"
          />
        </div>
      </div>

      {/* Third Row - Fully expanded for custom width edits */}
      <div className="flex space-x-20 flex-wrap">
        <div className="w-1/10">
          <label className="text-sm font-medium block mb-1">
            Procedure Description
          </label>
          <input
            id="procedureDescription"
            type="text"
            className="w-full border px-2 py-1 rounded text-sm"
            placeholder="Description"
          />
        </div>
        <div className="w-1/20">
          <label className="text-sm w-[200px] font-medium block mb-1">
            Procedure Code
          </label>
          <input
            id="procedureCode"
            type="text"
            value="OOSA"
            className="w-full border px-2 py-1 rounded text-sm"
            placeholder="Code"
          />
        </div>

        <div className="w-1/8">
          <label className="text-sm font-medium block mb-1">Modifier</label>
          <input
            id="modifier"
            type="text"
            className="w-full border px-2 py-1 rounded text-sm"
            placeholder="Modifier"
          />
        </div>
        <div className="w-1/10">
          <label className="text-sm font-medium block mb-1">Unit Type</label>
          <input
            id="unitType"
            type="text"
            value="Units"
            className="w-full border px-2 py-1 rounded text-sm"
            placeholder="Unit"
          />
        </div>
        <div className="w-1/10">
          <label className="text-sm font-medium block mb-1">From Date</label>
          <input
            id="fromDate"
            type="text"
            className="w-full border px-2 py-1 rounded text-sm"
            placeholder="MM/DD/YYYY"
          />
        </div>
        <div className="w-1/10">
          <label className="text-sm font-medium block mb-1">To Date</label>
          <input
            id="toDate"
            type="text"
            className="w-full border px-2 py-1 rounded text-sm"
            placeholder="MM/DD/YYYY"
          />
        </div>
        <div className="w-1/20">
          <label className="text-sm font-medium block mb-1">Requested</label>
          <input
            id="requested"
            type="text"
            className="w-full border px-2 py-1 rounded text-sm"
            placeholder="Requested"
          />
        </div>
      </div>

      {/* Fourth Row - Requested, Approved, Service Plan */}
      <div className="flex space-x-12">
        <div className="w-1/20">
          <label className="text-sm font-medium block mb-1">Approved</label>
          <input
            id="approved"
            type="text"
            className="w-full border px-2 py-1 rounded text-sm"
            placeholder="Approved"
          />
        </div>
        <div className="flex items-center space-x-2 mt-6">
          <input id="servicePlan" type="checkbox" className="border rounded" />
          <label htmlFor="servicePlan" className="text-sm font-medium">
            Service Plan
          </label>
        </div>
      </div>

      {/* Save & Next Button */}
      <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-5 py-2 rounded text-sm mt-2">
          Save and Next
        </button>
      </div>
    </div>
  );
};

export default DiagnosisServiceCodes;
