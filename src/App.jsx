import { useState } from "react";

import { TimeTable } from "./components/TimeTable";

import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="bg-indigo-600 hover:bg-indigo-700 rounded-full"
        onClick={() => setShowModal(!showModal)}
      >
        Mostrar EPG
      </button>
      {showModal && (
        <TimeTable showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
}

export default App;
