import React from "react";

export default function Contact() {
  return (
    <div id="contact">
      <ul>
        Contact Us : +91-7741884882
        <li>
          <a target="_blank" href="mailto:amol.gawande13@vit.edu">
            click to Mail
          </a>
        </li>
        <li>
          <a target="_blank" href="tel:+99999999999">
            click to Call
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://wa.me/917397890525?text=I am Interested in the Services "
            className="border-btn2 border-btn4"
          >
            click to whatsapp
          </a>
        </li>
      </ul>
    </div>
  );
}
