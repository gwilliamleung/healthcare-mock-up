import React, { useState } from "react";
import AuthorizationActivities from "./AuthorizationActivites";
import ProviderDetails from "./AuthEntry/ProviderDetails";
import AuthBasicDetails from "./AuthEntry/AuthBasicDetails";
import DiagnosisServiceCodes from "./AuthEntry/DiagnosisServiceCodes";

const dropdowns = [
  { title: "Eligibility Verification", id: "EligibilityVerification" },
  { title: "Provider Details", id: "ProviderDetails" },
  { title: "Auth Basic Details", id: "AuthBasicDetails" },
  { title: "Diagnosis and Services Codes", id: "DiagnosisServiceCodes" },
  { title: "Financial Details", id: "FinancialDetails" },
  { title: "Additional Details", id: "AdditionalDetails" },
];

const AuthEntry = () => {
  const [openDropdowns, setOpenDropdowns] = useState(new Set());

  const toggleDropdown = (id) => {
    setOpenDropdowns((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  return (
    <div className="flex flex-col gap-2">
      {dropdowns.map((section) => (
        <div key={section.id} className="flex flex-col gap-1">
          <div
            id={`section-${section.id}`}
            onClick={() => toggleDropdown(section.id)}
            className="flex justify-between items-center px-4 py-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 cursor-pointer"
          >
            <span className="font-semibold flex items-center">
              <span className="mr-2">▾</span> {section.title}
            </span>
          </div>

          {/* Only render actual content for these tabs */}
          {openDropdowns.has(section.id) &&
            section.id === "ProviderDetails" && <ProviderDetails />}
          {openDropdowns.has(section.id) &&
            section.id === "AuthBasicDetails" && <AuthBasicDetails />}
          {openDropdowns.has(section.id) &&
            section.id === "DiagnosisServiceCodes" && <DiagnosisServiceCodes />}
          {openDropdowns.has(section.id) &&
            section.id === "AuthorizationActivities" && (
              <AuthorizationActivities />
            )}
        </div>
      ))}

      {/* Owner / Status / Status Reason */}
      <div className="mt-4 border border-gray-300 bg-white p-4 rounded">
        <div className="flex space-x-4 mb-4">
          <div className="flex flex-col w-1/10">
            <label className="text-sm font-medium mb-1">Owner</label>
            <select className="border px-2 py-1 rounded text-sm">
              <option id="owner-Christina">William Leung- HF02</option>
            </select>
          </div>
          <div className="flex flex-col w-1/10">
            <label className="text-sm font-medium mb-1">Status</label>
            <select
              className="border px-2 py-1 rounded text-sm"
              defaultValue="Open"
            >
              <option id="status-Select" value="Select">
                Select
              </option>
              <option id="status-Open" value="Open">
                Open
              </option>
              <option id="status-Closed" value="Closed">
                Closed
              </option>
            </select>
          </div>
          <div className="flex flex-col w-1/10">
            <label className="text-sm font-medium mb-1">Status Reason</label>
            <select
              className="border px-2 py-1 rounded text-sm"
              defaultValue="Select"
            >
              <option id="reason-Select" value="Select">
                Select
              </option>
              <option id="reason-Completed" value="Auth Completed">
                Auth Completed
              </option>
              <option id="reason-Cancelled" value="Cancelled">
                Cancelled
              </option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3">
          <button className="bg-gray-200 px-4 py-2 rounded text-sm">
            Save
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded text-sm">
            Save & Copy
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm">
            Save & Decide
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthEntry;
