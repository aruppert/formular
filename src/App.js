import React from "react";
import "./App.css";
import ContactFormular from "./components/ContactFormular";
import Enquiries from "./components/Enquiries";

function App() {
  const [showForm, setShowForm] = React.useState(true);

  return (
    <>
      <button onClick={() => setShowForm(!showForm)}>View Toggle</button>
      {showForm && <ContactFormular />}
      {!showForm && <Enquiries />}
    </>
  );
}

export default App;
