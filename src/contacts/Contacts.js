import React from "react";
import "./Contacts.css";
import ListOfContacts from "./ListOfContacts";

export default function Contacts() {
  return (
    <div className="contacts">
      <div className="contactsList">
        <input type="text" className="input" />
        <button className="btn btn-outline-secondary">Search</button>
        <div className="list">
          <ul>
            <ListOfContacts />
          </ul>
        </div>
      </div>
    </div>
  );
}
