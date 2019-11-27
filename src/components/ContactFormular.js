import React from "react";
import styled from "@emotion/styled";
import { addEnquiry } from "../api/enquiries";

const Formular = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background: lightgray;
`;

export default function ContactFormular() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [text, setText] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const enquiry = {
      firstName,
      lastName,
      email,
      tel,
      text
    };

    addEnquiry(enquiry);
  }

  return (
    <>
      <Formular onSubmit={handleSubmit}>
        <div>
          <div>
            First Name
            <input
              type="text"
              required
              value={firstName}
              onChange={event => setFirstName(event.target.value)}
            />
          </div>
          <div>
            Last Name
            <input
              type="text"
              value={lastName}
              onChange={event => setLastName(event.target.value)}
            />
          </div>
        </div>
        <div>
          <div>
            E-Mail
            <input
              type="text"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </div>
          <div>
            Telephone
            <input
              type="number"
              value={tel}
              onChange={event => setTel(event.target.value)}
            />
          </div>
        </div>
        <div>
          Text
          <textarea
            rows="10"
            type="text"
            value={text}
            onChange={event => setText(event.target.value)}
          />
        </div>
        <button>Submit</button>
      </Formular>
    </>
  );
}
