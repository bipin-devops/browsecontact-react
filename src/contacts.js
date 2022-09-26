import React from "react";
import Contact from "./contact";
const Contacts = ({ contacts }) => {
  return (
    <section>
      <div className="title">
        <h2>My Contacts</h2>
        <div className="underline"></div>

        {contacts
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((contact) => {
            return <Contact key={contact.id} {...contact}></Contact>;
          })}
      </div>
    </section>
  );
};

export default Contacts;
