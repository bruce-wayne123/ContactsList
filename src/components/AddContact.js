import React from "react";
import "../styles/AddContact.css";
function AddContact() {
  const handleSubmit = () => {
    alert("Form data");
  };
  return (
    <form id="addFormContainer" onSubmit={handleSubmit}>
      <input className="inputControl" placeholder="Name" required />
      <input className="inputControl" placeholder="User Name" required />
      <input
        className="inputControl"
        placeholder="Email"
        inputMode="email"
        required
      />
      <input
        className="inputControl"
        placeholder="Phone"
        inputMode="tel"
        required
      />
      <button>Submit</button>
    </form>
  );
}

export default AddContact;
