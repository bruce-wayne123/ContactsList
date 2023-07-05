import { useSelector, useDispatch } from "react-redux";

import "../styles/ContactList.css";
import ContactCard from "./ContactCard";
import { fetchContacts } from "../store/contacts";
const _ = require("lodash");
function ContactList() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  dispatch(fetchContacts());

  if (_.isEmpty(state.contacts.contacts)) {
    return <h1>Loading...</h1>;
  }

  return (
    <div id="container">
      <div id="headerContainer">
        <label className="headerLabel">Name</label>
        <label className="headerLabel">Username</label>
        <label className="headerLabel">Email</label>
        <label className="headerLabel">Phone</label>
      </div>
      {
        <div>
          {state.contacts.contacts &&
            state.contacts.contacts.map((contact) => (
              <ContactCard
                id={contact.id}
                Name={contact.name}
                Username={contact.username}
                Email={contact.email}
                Phone={contact.phone}
              />
            ))}
        </div>
      }
    </div>
  );
}

export default ContactList;
