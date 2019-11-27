export function getEnquiries() {
  const enquiriesJSON = localStorage.getItem("enquiries") || "[]";
  const enquiries = JSON.parse(enquiriesJSON);
  return enquiries;
}

export function setEnquiries(enquiries) {
  localStorage.setItem("enquiries", JSON.stringify(enquiries));
}

export function addEnquiry(enquiry) {
  const enquiries = getEnquiries();
  enquiries.push(enquiry);
  setEnquiries(enquiries);
}
