import React from "react";
import "../styles/ContactCard.css";
import { Link } from "react-router-dom";
function ContactCard(props) {
  let { Name, Username, Email, Phone, id } = props;
  const data1 = {
    ContactId: id
  };
  const deleteContact = () => {
    alert("Delete Clicked!!");
  };
  return (
    <div id="dataContainer">
      <label className="dataLabel">{Name}</label>
      <label className="dataLabel">{Username}</label>
      <label className="dataLabel">{Email}</label>
      <label className="dataLabel">{Phone}</label>

      <Link to="/updateContact" state={data1}>
        <img
          alt="editContact"
          className="contactIcon"
          src="https://img.icons8.com/?size=512&id=12082&format=png"
        />
      </Link>

      <img
        alt="deleteContact"
        className="contactIcon"
        src="https://img.icons8.com/?size=512&id=102350&format=png"
        onClick={deleteContact}
      />
    </div>
  );
}

export default ContactCard;
