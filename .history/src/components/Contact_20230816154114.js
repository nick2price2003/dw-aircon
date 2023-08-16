"use client";

import React, { useState } from "react";

const CallBack = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      className="php-email-form"
      name="dw-contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <div className="row gy-4">
        <div className="col-md-6">
          <input type="hidden" name="form-name" value="dw-contact" />
          <input
            type="text"
            name="fullname"
            className="form-control"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            placeholder="Name"
            required
          />
        </div>

        <div className="col-md-6 ">
          <input
            type="email"
            className="form-control"
            name="emailAdd"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email Address"
            required
          />
        </div>

        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            name="subject"
            placeholder="Subject"
            required
          />
        </div>

        <div className="col-md-12">
          <textarea
            className="form-control"
            name="message"
            rows="6"
            placeholder="Message"
            required
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>

        <div className="col-md-12 text-center">
          <div className="loading">Loading</div>
          <div className="error-message"></div>
          <div className="sent-message">
            Your message has been sent. Thank you!
          </div>

          <button type="submit">Send Message</button>
        </div>
      </div>
    </form>
  );
};

export default CallBack;
