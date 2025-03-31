import React from "react";

const AuthBasicDetails = () => {
  return (
    <div className="border border-gray-300 rounded p-6 bg-white space-y-6">
      {/* First Row - 4 evenly spaced */}
      <div className="flex flex-wrap justify-between">
        <div className="w-2/10">
          <label className="text-sm font-medium block mb-1">
            Notification Date and Time
          </label>
          <input
            id="notificationDateTime"
            type="text"
            placeholder="MM/DD/YYYY HH:MM:SS AM/PM"
            className="w-full border px-2 py-1 rounded text-sm"
          />
        </div>
        <div className="w-2/10">
          <label className="text-sm font-medium block mb-1">
            Mbr Verbal Notification_Ext
          </label>
          <input
            id="mbrVerbalNotification"
            type="text"
            placeholder="MM/DD/YYYY HH:MM:SS AM/PM"
            className="w-full border px-2 py-1 rounded text-sm"
          />
        </div>
        <div className="w-2/10">
          <label className="text-sm font-medium block mb-1">Date Noted</label>
          <input
            id="dateNoted"
            type="text"
            placeholder="MM/DD/YYYY"
            className="w-full border px-2 py-1 rounded text-sm"
          />
        </div>
        <div className="w-2/10">
          <label className="text-sm font-medium block mb-1">
            Auth Priority
          </label>
          <select
            id="authPriority"
            className="w-full border px-2 py-1 rounded text-sm"
            defaultValue="Prior Auth Standard Medicaid"
          >
            <option
              id="authPriority-Medicaid"
              value="Prior Auth Standard Medicaid"
            >
              Prior Auth Standard Medicaid
            </option>
            <option
              id="authPriority-Medicare"
              value="Prior Auth Standard Medicare"
            >
              Prior Auth Standard Medicare
            </option>
            <option
              id="authPriority-Expedited"
              value="Prior Auth Expedited Medicaid"
            >
              Prior Auth Expedited Medicaid
            </option>
          </select>
        </div>
      </div>

      {/* Second Row - 3 evenly spaced */}
      <div className="flex flex-wrap justify-between">
        <div className="w-2/10">
          <label className="text-sm font-medium block mb-1">Request Sent</label>
          <select
            id="requestSent"
            className="w-full border px-2 py-1 rounded text-sm"
            defaultValue="Select"
          >
            <option id="requestSent-Select" value="Select">
              Select
            </option>
            <option id="requestSent-Mail" value="Mail">
              Mail
            </option>
            <option id="requestSent-Payor" value="Payor Request">
              Payor Request
            </option>
            <option id="requestSent-Phone" value="Phone">
              Phone
            </option>
            <option id="requestSent-HealthEx" value="HealthEx">
              HealthEx
            </option>
          </select>
        </div>
        <div className="w-2/10">
          <label className="text-sm font-medium block mb-1">
            Place of Service
          </label>
          <input
            id="placeOfService"
            type="text"
            placeholder="12 - 12 Home"
            className="w-full border px-2 py-1 rounded text-sm"
          />
        </div>
        <div className="w-2/10">
          <label className="text-sm font-medium block mb-1">
            Determination Type
          </label>
          <select
            id="determinationType"
            className="w-full border px-2 py-1 rounded text-sm"
            defaultValue="Select"
          >
            <option id="determinationType-Select" value="Select">
              Select
            </option>
            <option id="determinationType-Medicaid" value="Medicaid Guidelines">
              Medicaid Guidelines
            </option>
            <option id="determinationType-Medicare" value="Medicare Guidelines">
              Medicare Guidelines
            </option>
          </select>
        </div>
        <div className="w-2/10"></div>
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-5 py-2 rounded text-sm mt-2">
          Save and Next
        </button>
      </div>
    </div>
  );
};

export default AuthBasicDetails;
