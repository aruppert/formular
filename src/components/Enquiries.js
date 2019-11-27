import React from "react";
import Enquiry from "./Enquiry";
import { getEnquiries } from "../api/enquiries";

function Enquiries() {
  const enquiries = getEnquiries();

  return (
    <div>
      {enquiries.map(enquiry => (
        <Enquiry
          key={`${enquiry.lastName}.${enquiry.firstName}`}
          {...enquiry}
        />
      ))}
    </div>
  );
}

export default Enquiries;
