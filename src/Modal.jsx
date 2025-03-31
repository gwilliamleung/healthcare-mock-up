import React, { useState } from "react";
import { FaCheckSquare, FaTimes } from "react-icons/fa";

const Modal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    type: "",
    workqueueActivity: false,
    memberName: "",
    careStaff: "",
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
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-50 flex justify-center items-center">
      <div className="bg-white w-3/5 p-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add Activity</h2>
          <button onClick={closeModal}>
            <FaTimes className="text-red-500" />
          </button>
        </div>

        {/* Form Rows */}
        <div className="grid grid-cols-1 gap-6">
          <div className="flex space-x-4">
            <div className="w-1/3">
              <label>Type</label>
              <select
                id="selectScheduledType"
                name="type"
                value={formData.type}
                onChange={handleChange}
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
              type="checkbox"
              name="workqueueActivity"
              checked={formData.workqueueActivity}
              onChange={handleChange}
              className="mr-2"
            />
            <span>Workqueue activity</span>
          </div>

          <div className="flex">
            <div className="w-1/3">
              <label>Member Name</label>
              <div>John Smith</div>
            </div>
            <div className="w-1/3">
              <label>Care Staff</label>
              <div className="p-2 border rounded-lg">
                William Leung : CM MMC
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/3">
              <label>Activity Type</label>
              <select
                id="activitytype"
                name="activityType"
                value={formData.activityType}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              >
                <option value="Select">Select</option>
                <option value="followUp">Follow-up Activity</option>
              </select>
            </div>

            {formData.type !== "Completed" && (
              <div className="w-1/3">
                <label>Script</label>
                <select
                  id="selectScript"
                  name="script"
                  value={formData.script}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="">Select</option>
                  {/* <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option> */}
                </select>
              </div>
            )}

            <div className="w-1/3">
              <label>Priority</label>
              <select
                id="selectPriority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          {/* New Rows */}
          <div className="flex space-x-4">
            <div className="w-1/3">
              <label>Contact Type</label>
              <select
                id="selectContactType"
                type="text"
                name="contactType"
                value={formData.contactType}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">ICP Online - Provider</option>
                <option value="High">Mobile</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/3">
              <label>Scheduled Duration</label>
              <div className="flex space-x-4">
                <input
                  id="schedDurationlabel"
                  type="number"
                  name="scheduledHours"
                  value={formData.scheduledHours}
                  onChange={handleChange}
                  className="w-16 p-2 border rounded-lg"
                  placeholder="00"
                />
                <div className="flex items-center">HRS</div>
                <input
                  id="FollowupMins"
                  type="number"
                  name="scheduledMinutes"
                  value={formData.scheduledMinutes}
                  onChange={handleChange}
                  className="w-16 p-2 border rounded-lg"
                  placeholder="30"
                />
                <div className="flex items-center">Mins</div>
              </div>
            </div>
            <div className="w-1/3">
              <label>Scheduled Date MM/DD/YYYY HH:MM</label>
              <input
                id="FollowupDate"
                type="text"
                name="scheduledDate"
                value={formData.scheduledDate}
                onChange={handleChange}
                className="w-2/3 p-2 border rounded-lg"
                placeholder="MM/DD/YYYY HH:MM"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="">
              <label>Due Date MM/DD/YYYY HH:MM</label>
              <input
                id="DueDate"
                type="text"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="w-2/3 p-2 border rounded-lg"
                placeholder=""
              />
            </div>
          </div>

          <div className="w-full">
            <label>Enter Comments/Reason</label>
            <textarea
              id="Comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg h-32"
            />
          </div>

          {/* New rows that will only show when the type is 'Completed' */}
          {formData.type === "Completed" && (
            <>
              <div className="flex space-x-4 mt-6">
                <div className="w-1/3">
                  <label>Service Code</label>
                  <select
                    id="selectOutcomeType"
                    name="outcomeType"
                    value={formData.outcomeType}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg"
                  >
                    <option value="Successful">Successful</option>
                    <option value="Unsuccessful">Unsuccessful</option>
                  </select>
                </div>
                <div className="w-1/3">
                  <label>Activity Outcome</label>
                  <select
                    id="selectActivityOutcome"
                    name="activityOutcome"
                    value={formData.activityOutcome}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg"
                  >
                    <option value="">Select</option>
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
                <div className="flex space-x-4 ">
                  <div className="">
                    <label>Actual Duration</label>
                    <div className="flex space-x-4">
                      <input
                        id="actualDurationHours"
                        type="number"
                        name="actualHours"
                        value={formData.actualHours}
                        onChange={handleChange}
                        className="w-16 p-2 border rounded-lg"
                        placeholder="HH"
                      />
                      <div className="flex items-center">HRS</div>
                      <input
                        id="actualDurationMins"
                        type="number"
                        name="actualMinutes"
                        value={formData.actualMinutes}
                        onChange={handleChange}
                        className="w-16 p-2 border rounded-lg"
                        placeholder="MM"
                      />
                      <div className="flex items-center">Mins</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <div className="w-1/3">
                  <label>Outcome Type</label>
                  <select
                    id="selectOutcomeType"
                    name="outcomeType"
                    value={formData.outcomeType}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg"
                  >
                    <option value="Successful">Select</option>
                    <option value="Unsuccessful">Unsuccessful</option>
                  </select>
                </div>
                <div className="w-1/3">
                  <label>Place of Service</label>
                  <select
                    id="selectActivityOutcome"
                    name="activityOutcome"
                    value={formData.activityOutcome}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg"
                  >
                    <option value="">Select</option>
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
              <div className="w-full">
                <label>Outcome Notes</label>
                <textarea
                  id="OutcomeNotes"
                  name="OutcomeNotes"
                  value={formData.OutcomeNotes}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg h-32"
                />
              </div>
            </>
          )}
        </div>

        <div className="mt-6 text-right">
          <button
            id="btnCloseActivityForm"
            onClick={closeModal}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Save Activity
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
