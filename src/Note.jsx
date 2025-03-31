import React, { useState } from "react";
import { FaStickyNote, FaPrint } from "react-icons/fa";

const Note = () => {
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState([]);

  const [noteType, setNoteType] = useState("Select");
  const [noteContent, setNoteContent] = useState("");
  const [noteUrl, setNoteUrl] = useState("");
  const [alertNote, setAlertNote] = useState(false);
  const [careNote, setCareNote] = useState(false);

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const handleSaveNote = () => {
    const newNote = {
      noteType,
      noteFrom: "Auth Notes",
      noteContent,
      noteUrl: noteUrl || "N/A",
      createdBy: "William Leung",
      createdOn: new Date().toLocaleString(),
      updatedBy: "N/A",
      updatedOn: "N/A",
    };
    setNotes([...notes, newNote]);
    // Reset form
    setNoteType("Select");
    setNoteContent("");
    setNoteUrl("");
    setAlertNote(false);
    setCareNote(false);
    setShowForm(false);
  };

  return (
    <div className="border border-gray-300 rounded bg-white">
      {/* Banner Section */}
      <div className="flex justify-between items-center px-4 py-2 bg-blue-100 text-gray-800 rounded-t">
        <div className="flex items-center space-x-2">
          <FaStickyNote className="text-blue-600" />
          <span className="font-semibold text-sm">Authorization Notes</span>
        </div>

        {!showForm && (
          <div className="flex items-center space-x-2">
            <button className="text-sm text-gray-700 border px-3 py-1 rounded hover:bg-gray-100">
              <FaPrint className="inline mr-1" /> Print
            </button>
            <button
              id="addNewNoteBtn"
              onClick={handleOpenForm}
              className="bg-blue-500 text-white text-sm px-4 py-1.5 rounded hover:bg-blue-600"
            >
              Add New
            </button>
          </div>
        )}
      </div>

      {/* Form Content */}
      {showForm && (
        <div className="p-6 ml-72 space-y-4">
          <div className="flex items-start">
            <label
              htmlFor="noteType"
              className="w-1/4 text-sm font-medium mt-1"
            >
              Note Type <span className="text-red-500">*</span>
            </label>
            <select
              id="noteType"
              className="w-1/4 border px-2 py-1 rounded text-sm"
              value={noteType}
              onChange={(e) => setNoteType(e.target.value)}
            >
              <option value="Select">Select</option>
              <option value="Approval Note">Approval Note</option>
              <option value="General Note">General Note</option>
              <option value="Request Services">
                Request Services/Item/Procedure
              </option>
              <option value="Out of Service Area">
                Out of Service Area Notification
              </option>
            </select>
          </div>

          <div className="flex items-start">
            <label
              htmlFor="noteContent"
              className="w-1/4 text-sm font-medium mt-1"
            >
              Notes <span className="text-red-500">*</span>
            </label>
            <textarea
              id="noteContent"
              rows="5"
              className="w-2/4 border px-2 py-1 rounded text-sm"
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              placeholder="Type your note here..."
            />
          </div>

          <div className="flex items-start">
            <label htmlFor="noteUrl" className="w-1/4 text-sm font-medium mt-1">
              Note URL
            </label>
            <input
              id="noteUrl"
              type="text"
              value={noteUrl}
              onChange={(e) => setNoteUrl(e.target.value)}
              className="w-1/10 border px-2 py-1 rounded text-sm"
              placeholder="Enter URL"
            />
          </div>

          <div className="flex items-start">
            <label className="w-1/4 text-sm font-medium mt-1">
              Alert Note?
            </label>
            <input
              id="alertNote"
              type="checkbox"
              checked={alertNote}
              onChange={() => setAlertNote(!alertNote)}
              className="mt-1"
            />
          </div>
          <div className="flex items-start">
            <label className="w-1/4 text-sm font-medium mt-1">
              Save as Care Note?
            </label>
            <input
              id="careNote"
              type="checkbox"
              checked={careNote}
              onChange={() => setCareNote(!careNote)}
              className="mt-1"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-start space-x-4 mt-4 ml-[25%]">
            <button
              id="saveNoteBtn"
              onClick={handleSaveNote}
              className="bg-blue-500 text-white px-4 py-2 rounded text-sm"
            >
              Save
            </button>
            <button
              id="cancelNoteBtn"
              onClick={handleCloseForm}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Notes Table */}
      {/* Notes Table */}
      {!showForm && notes.length > 0 && (
        <div className="overflow-x-auto px-4 pb-4">
          <table className="w-full text-sm border mt-2 border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2 py-1 text-left">Note Type</th>
                <th className="border px-2 py-1 text-left">Note From</th>
                <th className="border px-2 py-1 text-left">Note Description</th>
                <th className="border px-2 py-1 text-left">Note URL</th>
                <th className="border px-2 py-1 text-left">Created By</th>
                <th className="border px-2 py-1 text-left">Created On</th>
                <th className="border px-2 py-1 text-left">Updated By</th>
                <th className="border px-2 py-1 text-left">Updated On</th>
                <th className="border px-2 py-1 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note, index) => (
                <tr key={index} className="border-b">
                  <td className="border-b px-2 py-1">{note.noteType}</td>
                  <td className="border-b px-2 py-1">{note.noteFrom}</td>
                  <td className="border-b px-2 py-1">{note.noteContent}</td>
                  <td className="border-b px-2 py-1 text-blue-600 underline cursor-pointer">
                    {note.noteUrl}
                  </td>
                  <td className="border-b px-2 py-1">{note.createdBy}</td>
                  <td className="border-b px-2 py-1">{note.createdOn}</td>
                  <td className="border-b px-2 py-1">{note.updatedBy}</td>
                  <td className="border-b px-2 py-1">{note.updatedOn}</td>
                  <td className="border-b px-2 py-1">
                    <button
                      id={`deleteNote-${index}`}
                      onClick={() =>
                        setNotes((prev) => prev.filter((_, i) => i !== index))
                      }
                      className="text-red-600 hover:text-red-800"
                      title="Delete Note"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Note;
