import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddContact.css";
import { useLocation } from "react-router-dom";
function UpdateContact(props) {
  const [contact, setContact] = useState([]);
  const location = useLocation();
  let propsData = location.state;
  const navigate = useNavigate();
  useEffect(() => {
    //Runs only on the first render
    getData();
  }, []);

  const getData = async () => {
    if (propsData != null) {
      const apiResponse = await fetch(
        `https://jsonplaceholder.typicode.com/users/${propsData.ContactId}`
      );
      if (apiResponse != null) {
        const apiContact = await apiResponse.json();
        setContact(apiContact);
        console.log(contact);
      }
    }
  };

  const handleSubmit = () => {
    navigate(-1);
  };
  return (
    <form id="addFormContainer" onSubmit={handleSubmit}>
      <input
        className="inputControl"
        placeholder="Name"
        value={contact.name}
        required
      />
      <input
        className="inputControl"
        placeholder="User Name"
        value={contact.username}
        required
      />
      <input
        className="inputControl"
        value={contact.email}
        placeholder="Email"
        inputMode="email"
        required
      />

      <input
        className="inputControl"
        value={contact.phone}
        placeholder="Phone"
        inputMode="tel"
        required
      />
      <button>Update</button>
    </form>
  );
}

export default UpdateContact;
