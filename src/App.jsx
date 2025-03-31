import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Modal from "./Modal";
import "./App.css";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activities, setActivities] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addActivity = (activity) => {
    setActivities((prev) => [...prev, activity]);
  };

  return (
    <div>
      <Header openModal={openModal} />
      <Body
        activities={activities}
        addActivity={addActivity}
        openModal={openModal}
      />
      {isModalOpen && (
        <Modal addActivity={addActivity} closeModal={closeModal} />
      )}
    </div>
  );
};

export default App;
