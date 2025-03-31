import React, { useState } from "react";
import { FaTrash, FaTimes } from "react-icons/fa";

const AuthorizationActivities = () => {
  const [activities, setActivities] = useState([]);
  const [isFakeModalOpen, setIsFakeModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    type: "Scheduled",
    workqueueActivity: false,
    activityType: "",
    script: "",
    priority: "",
    contactType: "ICP Online - Provider",
    scheduledHours: "",
    scheduledMinutes: "30",
    scheduledDate: new Date().toLocaleString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
    dueDate: "",
    comments: "",
    actualHours: "",
    actualMinutes: "",
    outcomeType: "",
    activityOutcome: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddActivity = () => {
    const today = new Date().toLocaleDateString("en-US");

    const newActivity = {
      activityType: formData.activityType || "N/A",
      assignTo: "William Leung",
      priority: formData.priority || "N/A",
      status: "Pending",
      dueDate: formData.scheduledDate || "2025-05-04",
      followUpDate: formData.scheduledDate || "N/A",
      completedDate: "N/A",
      createdBy: "William Leung",
      createdOn: today || "N/A",
      updatedBy: "William Leung",
      updatedOn: today,
      comments: formData.comments || "None",
      workQueue: formData.workqueueActivity ? "Yes" : "No",
    };

    setActivities((prev) => [...prev, newActivity]);
    setIsFakeModalOpen(false);
  };

  const handleDelete = (index) => {
    const updated = [...activities];
    updated.splice(index, 1);
    setActivities(updated);
  };

  return (
    <div className="border border-gray-300 rounded bg-white p-4">
      <div className="border border-gray-300 rounded bg-white">
        <div
          id="btnFakeModalToggle"
          onClick={() => setIsFakeModalOpen(true)}
          className="bg-blue-100 text-sm font-semibold text-gray-800 px-4 py-2 rounded-t cursor-pointer"
        >
          Authorization Activities
        </div>
      </div>

      {isFakeModalOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-50 flex justify-center items-center">
          <div className="bg-white w-3/5 p-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add Activity</h2>
              <button onClick={() => setIsFakeModalOpen(false)}>
                <FaTimes className="text-red-500" />
              </button>
            </div>

            {/* FORM CONTENT */}
            <div className="grid grid-cols-1 gap-6">
              <div className="flex space-x-4">
                <div className="w-1/3">
                  <label className="font-semibold">Type</label>
                  <select
                    id="input-type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                  >
                    <option value="Scheduled">Scheduled</option>
                    <option value="Completed">Completed</option>
                    <option value="Case Conference">Case Conference</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="input-workqueue"
                  type="checkbox"
                  name="workqueueActivity"
                  checked={formData.workqueueActivity}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <span className="font-semibold">Workqueue activity</span>
              </div>

              <div className="flex">
                <div className="w-1/3">
                  <label className="font-semibold">Member Name</label>
                  <div>John Smith</div>
                </div>
                <div className="w-1/3">
                  <label className="font-semibold">Care Staff</label>
                  <div className="p-2 border rounded-lg">
                    William Leung : CM MMC
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-1/3">
                  <label className="font-semibold">Activity Type</label>
                  <select
                    id="input-activityType"
                    name="activityType"
                    value={formData.activityType}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                  >
                    <option value="">Select</option>
                    <option value="Follow-up Activity">
                      Follow-up Activity
                    </option>
                  </select>
                </div>

                {formData.type !== "Completed" && (
                  <div className="w-1/3">
                    <label className="font-semibold">Script</label>
                    <select
                      id="input-script"
                      name="script"
                      value={formData.script}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-lg"
                    >
                      <option value="">Select</option>
                    </select>
                  </div>
                )}

                <div className="w-1/3">
                  <label className="font-semibold">Priority</label>
                  <select
                    id="input-priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                  >
                    <option value="">Select Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-1/3">
                  <label className="font-semibold">Contact Type</label>
                  <select
                    id="input-contactType"
                    name="contactType"
                    value={formData.contactType}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                  >
                    <option value="ICP Online - Provider">
                      ICP Online - Provider
                    </option>
                    <option value="Mobile">Mobile</option>
                  </select>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-1/3">
                  <label className="font-semibold">Scheduled Duration</label>
                  <div className="flex space-x-4">
                    <input
                      id="input-schedHrs"
                      type="number"
                      name="scheduledHours"
                      value={formData.scheduledHours}
                      onChange={handleInputChange}
                      className="w-16 p-2 border rounded-lg"
                      placeholder="00"
                    />
                    <div className="flex items-center">HRS</div>
                    <input
                      id="input-schedMins"
                      type="number"
                      name="scheduledMinutes"
                      value={formData.scheduledMinutes}
                      onChange={handleInputChange}
                      className="w-16 p-2 border rounded-lg"
                      placeholder="30"
                    />
                    <div className="flex items-center">Mins</div>
                  </div>
                </div>

                <div className="w-1/3">
                  <label className="font-semibold">Scheduled Date</label>
                  <input
                    id="input-scheduledDate"
                    type="text"
                    name="scheduledDate"
                    value={formData.scheduledDate}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
              </div>

              <div className="w-1/2">
                <label className="font-semibold">Due Date</label>
                <input
                  id="input-dueDate"
                  type="text"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div className="w-full">
                <label className="font-semibold">Enter Comments/Reason</label>
                <textarea
                  id="input-comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg h-32"
                />
              </div>
            </div>

            <div className="mt-6 text-right">
              <button
                id="btnFakeSaveActivity"
                onClick={handleAddActivity}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Save Activity
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ACTIVITY TABLE */}
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm text-left border border-gray-300">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              {[
                "Activity Type",
                "Assign To",
                "Priority",
                "Status",
                "Due Date",
                "Follow up Date",
                "Completed Date",
                "Created By",
                "Created On",
                "Updated By",
                "Updated On",
                "Comments",
                "Work Queue",
                "Actions",
              ].map((col) => (
                <th key={col} className="border px-2 py-1">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {activities.length === 0 ? (
              <tr>
                <td colSpan="14" className="text-center text-gray-500 py-4">
                  No activities added.
                </td>
              </tr>
            ) : (
              activities.map((activity, idx) => (
                <tr key={idx} className="border-t">
                  <td className="border px-2 py-1">{activity.activityType}</td>
                  <td className="border px-2 py-1">{activity.assignTo}</td>
                  <td className="border px-2 py-1">{activity.priority}</td>
                  <td className="border px-2 py-1">{activity.status}</td>
                  <td className="border px-2 py-1">{activity.dueDate}</td>
                  <td className="border px-2 py-1">{activity.followUpDate}</td>
                  <td className="border px-2 py-1">{activity.completedDate}</td>
                  <td className="border px-2 py-1">{activity.createdBy}</td>
                  <td className="border px-2 py-1">{activity.createdOn}</td>
                  <td className="border px-2 py-1">{activity.updatedBy}</td>
                  <td className="border px-2 py-1">{activity.updatedOn}</td>
                  <td className="border px-2 py-1">{activity.comments}</td>
                  <td className="border px-2 py-1">{activity.workQueue}</td>
                  <td className="border px-2 py-1 text-center">
                    <button
                      onClick={() => handleDelete(idx)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuthorizationActivities;
