import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { IoMdContact } from "react-icons/io";
// import { CgWebsite } from "react-icons/cg";

const Contact = ({ name, phone, email, website }) => {
  phone = phone.split(" ");
  phone = phone[0].replace(/\D/g, "");
  email = email.toLowerCase();

  const [showModal, setShowModal] = useState(false);

  const copyToClipBoard = async (copyPhone) => {
    try {
      await navigator.clipboard.writeText(copyPhone);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 3210);
      // dispatch({ type: "REMOVE_ITEM", payload: Contact.id });
    } catch (error) {
      console.log(error);
    }
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <article className="single-contact">
      <footer>
        <h3 className="contact-name">
          <IoMdContact /> {name}
        </h3>
        <div>
          <h4
            className="phone-number"
            style={{ cursor: "pointer" }}
            onClick={() => copyToClipBoard(phone)}
          >
            {showModal ? <Modal /> : null}
            <BsFillTelephoneFill />

            {" " + phone}
          </h4>
          <h4>
            <div>
              <button
                onClick={() =>
                  openInNewTab(
                    `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`
                  )
                }
              >
                <SiGmail /> {" " + email}
              </button>
              <input
                type="button"
                className="copy-email"
                value="Copy Email"
                onClick={() => copyToClipBoard(email)}
              />
            </div>
          </h4>

          {/* <h4>Company: {company.name} </h4> */}
          <h4>
            website:{" "}
            <button onClick={() => openInNewTab(`http://${website}`)}>
              {website}
            </button>
          </h4>
        </div>
      </footer>
    </article>
  );
};

const Modal = () => {
  return (
    <div id="modal" className="modal">
      <p>copied to clipboard</p>
    </div>
  );
};

export default Contact;
