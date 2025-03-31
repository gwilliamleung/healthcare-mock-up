import React, { useState } from "react";
import {
  FaArrowRight,
  FaListAlt,
  FaClipboardList,
  FaTasks,
  FaPen,
  FaGavel,
  FaStickyNote,
  FaFileAlt,
  FaLifeRing,
  FaBell,
} from "react-icons/fa";
import AuthEntry from "./AuthEntry";
import Note from "./Note";
import Modal from "./Modal";
import AuthorizationActivities from "./AuthorizationActivites";

const sections = [
  { id: "btnArrow", icon: <FaArrowRight />, label: "Arrow" },
  {
    id: "btnAuthorizationList",
    icon: <FaListAlt />,
    label: "Authorization List",
  },
  {
    id: "btnDynamicAuthSurvey",
    icon: <FaClipboardList />,
    label: "Dynamic Auth Survey",
  },
  { id: "btnActivities", icon: <FaTasks />, label: "Activities" },
  { id: "btnAuthEntry", icon: <FaPen />, label: "Auth Entry" },
  { id: "btnDecision", icon: <FaGavel />, label: "Decision" },
  { id: "btnNotes", icon: <FaStickyNote />, label: "Notes" },
  { id: "btnDocuments", icon: <FaFileAlt />, label: "Documents" },
  { id: "btnSupportSummary", icon: <FaLifeRing />, label: "Support Summary" },
];

const Body = () => {
  const [activeSection, setActiveSection] = useState("btnAuthEntry");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activities, setActivities] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addActivity = (newActivity) => {
    setActivities((prev) => [...prev, activity]);
  };

  return (
    <div className="bg-white">
      {/* Top Notification Bar */}
      <div className="flex items-center space-x-3 bg-blue-100 text-sm font-semibold text-gray-800 px-6 py-3 m-3 rounded-md shadow-sm border border-gray-500 w-fit">
        <FaBell className="text-gray-600" />
        <span className="font-bold">
          JOHN SMITH - N12341234 DOB 1/1/1951 87 yr(s)
        </span>
      </div>

      {/* Blue Auth Bar */}
      <div className="flex items-center justify-start space-x-6 bg-blue-100 text-sm font-semibold text-gray-700 px-4 m-3 py-2 rounded-md shadow-sm w-fit border border-gray-500">
        <div>Auth ID: 0307F1R47</div>
        <div>Due Date: N/A</div>
        <div>Overall Status: Void</div>
      </div>

      {/* Main Layout */}
      <div className="flex h-[90vh]">
        {/* Sidebar */}
        <div className="w-[60px] border-r border-gray-300">
          {sections.map((btn, index) => (
            <button
              key={btn.id}
              id={btn.id}
              onClick={() => setActiveSection(btn.id)}
              className={`w-full h-[50px] flex justify-center items-center border-gray-300 border-b ${
                index === 0 ? "border-t" : ""
              } ${
                activeSection === btn.id ? "bg-blue-200" : "hover:bg-gray-100"
              }`}
            >
              {btn.icon}
            </button>
          ))}
        </div>

        {/* Right Content Section */}
        <div className="flex-1 flex flex-col">
          <div className="text-sm font-semibold bg-gray-100 px-4 py-2 mx-2 border border-gray-500 rounded-t-md w-[15%] text-center">
            (00000000) JOHN SMITH
          </div>

          {/* Dynamic Content Area */}
          <div className="flex-grow bg-gray-50 p-4 mx-2 border border-gray-300 rounded-b-md shadow-inner overflow-y-auto">
            {activeSection === "btnAuthEntry" && <AuthEntry />}
            {activeSection === "btnNotes" && <Note />}
            {activeSection === "btnActivities" && (
              <AuthorizationActivities
                activities={activities}
                openModal={openModal}
              />
            )}
            {/* Fallback */}
            {activeSection !== "btnAuthEntry" &&
              activeSection !== "btnNotes" &&
              activeSection !== "btnActivities" && (
                <div className="text-gray-500 italic">
                  Select a section to begin.
                </div>
              )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal closeModal={closeModal} addActivity={addActivity} />
      )}
    </div>
  );
};

export default Body;
