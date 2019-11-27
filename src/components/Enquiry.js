import React from "react";
import PropTypes from "prop-types";

export default function Enquiry({ firstName, lastName, email, tel, text }) {
  return (
    <div>
      <p>
        {firstName} {lastName}
      </p>
      <p>
        {email} {tel}
      </p>
      <p>{text} </p>
    </div>
  );
}

Enquiry.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  tel: PropTypes.string,
  text: PropTypes.string
};
