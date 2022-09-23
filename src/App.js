import React, { useState, useEffect } from "react";
import Contacts from "./contacts";
import Loading from "./loading";

const url = "https://jsonplaceholder.typicode.com/users";
function App() {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([]);

  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchContacts = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const contacts = await response.json();
      setLoading(false);
      setContacts(contacts);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

    // console.log(contacts);
  };
  useEffect(() => {
    fetchContacts();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // const onChangeHandler = (text) => {
  //   let matches = [];

  //   if (text.length > 0) {
  //     matches = contacts.filter(() => {
  //       // const regex = new RegExp(`${text}`, "gi");
  //       return contacts.name.match(/text/gi);
  //     });
  //   }
  //   console.log("matches", matches);
  //   setSuggestions(matches);
  //   setText(text);
  // };

  return (
    <main>
      {/* <input
        className="searchbox"
        type="text"
        placeholder="Search here"
        onChange={(e) => onChangeHandler(e.target.value)}
        value={text}
      /> */}
      <Contacts contacts={contacts} />
    </main>
  );
}

export default App;
