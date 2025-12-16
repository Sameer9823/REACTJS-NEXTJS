import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

function Form({ onAdd }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //validation
    if (!name.trim() || !service.trim()) {
      alert("Please fill in all fields");
      return;
    }
    onAdd({ name, service });
    setName("");
    setService("");
  };
  return (
    <>
      <form className="queue-form" onSubmit={handleSubmit}>
        <h2>Add to Queue</h2>
        <div className="form-group">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Customer Name"
            type="text"
          />
        </div>
        <div className="form-group">
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Select Service</option>
            <option value="consultation">consultation</option>
            <option value="payment">payment</option>
            <option value="support">support</option>
          </select>
        </div>
        <button type="submit">
          <FaUserPlus /> Add Customer
        </button>
      </form>
    </>
  );
}

export default Form;
