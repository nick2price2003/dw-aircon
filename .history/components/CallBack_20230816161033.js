"use client";
import React, { useState } from "react";

const CallBack = () => {
  const [fullname, setFullname] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  return (
    <>
    <form
      name="dw-callback"
      method="POST"
      data-netlify="true"
      encType="application/x-www-form-urlencoded"
    >
      <input type="hidden" name="form-name" value="dw-callback" />
      <label htmlFor="fullname" className="form-label mb-3">
        Name:
      </label>
      <input
        type="text"
        className="form-control mb-3"
        id="fullname"
        name="fullname"
        placeholder="Name"
        value={fullname}
        onChange={(e) => {
          setFullname(e.target.value);
        }}
        required
      />

      <label htmlFor="phonenumber" className="form-label mb-3">
        Phone Number:
      </label>
      <input
        type="tel"
        className="form-control mb-3"
        id="phonenumber"
        name="phonenumber"
        placeholder="Phone Number"
        value={phonenumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
        required
      />

      <button type="submit" className="btn btn-primary btn-submit">
        Submit
      </button>
    </form>
    </>
  );
};

export default CallBack;
