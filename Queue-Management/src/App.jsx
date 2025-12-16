import { useState } from "react";

import "./App.css";
import DisplayComponent from "./components/DisplayComponent";
import Form from "./components/Form";

function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
  };
  const updateStatus = (id, newStatus) => {
    setQueue(
      queue.map((customer) =>
        customer.id === id ? { ...customer, status: newStatus } : customer
      )
    );
  };
  const removeFromQueue = (id) => {
    setQueue(queue.filter((customer) => customer.id !== id));
  };
  return (
    <div className="app">
      <header>
        <h1>Queue Management Application</h1>
        <p>Manage your customers efficiently</p>
      </header>
      <main>
        <Form onAdd={addToQueue} />
        <DisplayComponent
          queue={queue}
          updateStatus={updateStatus}
          removeFromQueue={removeFromQueue}
        />
      </main>
    </div>
  );
}

export default App;
