import React from "react";

const CallBack = () => {
  return (
    <form
    name="dw-callback"
    method="POST" 
    netlify="true"
    enctype="application/x-www-form-urlencoded"
    netlify-honeypot="bot-field"
  >
    <input
      type="hidden"
      name="form-name"
      value="dw-callback"
    />
    <label htmlFor="fullname" className="form-label mb-3">
      Name:
    </label>
    <input
      type="text"
      className="form-control mb-3"
      id="fullname"
      name="fullname"
      placeholder="Name"
      required
    ></input>

    <label
      htmlFor="phonenumber"
      className="form-label mb-3"
    >
      Phone Number:
    </label>
    <input
      type="tel"
      className="form-control mb-3"
      id="phonenumber"
      name="phonenumber"
      placeholder="Phone Number"
      required
    ></input>

    <button
      type="submit"
      className="btn btn-primary btn-submit"
    >
      Submit
    </button>
  </form>
  );
};

export default CallBack;
