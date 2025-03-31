import React, { useState } from "react";
import "./App.css";
import {
  FaHome,
  FaUser,
  FaCalendarAlt,
  FaBolt,
  FaSearch,
  FaBriefcaseMedical,
  FaStickyNote,
  FaBell,
  FaBook,
} from "react-icons/fa";

function Header({ openModal }) {
  const [isActionsVisible, setIsActionsVisible] = useState(false);

  const toggleActions = () => {
    setIsActionsVisible((prev) => !prev);
  };

  return (
    <div className="bg-gray-100 shadow-md p-3">
      {/* Top Banner */}
      <div className="flex justify-between items-center bg-white p-2 rounded-lg shadow-sm">
        <div className="text-gray-600 font-semibold" id="test223">
          You are in Care Coordination
        </div>
        <input
          type="text"
          placeholder="Enter text to search"
          className="border px-3 py-1 rounded-lg w-1/3"
        />
        <button className=" flex items-center space-x-2 bg-blue-500 text-white px-3 py-1 rounded-lg">
          <FaSearch /> <span>Advanced Search</span>
        </button>
      </div>

      {/* Second Banner */}
      <div className="flex justify-between items-center bg-gray-200 mt-3 p-2 rounded-lg shadow-sm">
        <div className="flex space-x-4 items-center">
          <div className="flex">
            <button className="flexitems-center p-1 bg-white rounded-lg shadow-sm">
              <div className="px-2 text-2xl">
                <FaHome />
              </div>
              <div className="text-xs">Home</div>
            </button>
          </div>
          <div className="flex">
            <div className="text-2xl">
              <FaUser />
            </div>
          </div>
          <span className="font-semibold">MEMBER ID:</span>
          <span
            className="bg-white px-3 py-4 rounded-lg shadow-sm"
            id="test224"
          >
            TEST USER
          </span>
        </div>
        <div className="flex space-x-2">
          <button className="flexitems-center p-1 bg-white rounded-lg shadow-sm">
            <div className="pl-3 text-2xl">
              <FaCalendarAlt />
            </div>
            <div className="text-xs">Calendar</div>
          </button>
          <button
            id="dropdownHTML"
            onClick={toggleActions}
            className="flexitems-center p-1 bg-white rounded-lg shadow-sm relative"
          >
            <div className="pl-4 text-2xl">
              <FaBolt />
            </div>
            <div className="text-xs">Actions ▼</div>
            {isActionsVisible && (
              <div className="absolute top-10 right-0 w-80 bg-white rounded-lg shadow-lg border border-black-200 z-50">
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-4 ml-4 flex">
                    Actions
                  </h3>
                  <div className="flex">
                    <div className="w-1/2 pr-2">
                      <ul className="space-y-2">
                        <li id="openModalHTML" onClick={openModal}>
                          Add Activity
                        </li>
                        <li>Run Script</li>
                        <li>Refer Member</li>
                        <li>Forms</li>
                        <li>Script Forms</li>
                      </ul>
                    </div>
                    <div className="w-1/2 pl-2">
                      <ul className="space-y-2">
                        <li>Letter</li>
                        <li>Add Appointment</li>
                        <li>New Message</li>
                        <li>Add Guidelines</li>
                        <li>Generate C-CDA</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </button>
          <button className="flexitems-center p-1 bg-white rounded-lg shadow-sm">
            <div className="px-2 text-2xl">
              <FaBriefcaseMedical />
            </div>
            <div className="text-xs">Plan</div>
          </button>
          <button className="flexitems-center p-1 bg-white rounded-lg shadow-sm">
            <div className="px-2 text-2xl">
              <FaStickyNote />
            </div>
            <div className="text-xs">Notes</div>
          </button>
          <button className="flexitems-center p-1 bg-white rounded-lg shadow-sm">
            <div className="px-2 text-2xl">
              <FaBell />
            </div>
            <div className="text-xs">Alerts</div>
          </button>
          <button className="flexitems-center p-1 bg-white rounded-lg shadow-sm">
            <div className="px-2 text-2xl">
              <FaBook />
            </div>
            <div className="text-xs">Know</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
