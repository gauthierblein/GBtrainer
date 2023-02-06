import React from "react";
import './Contact.css'

const Contact = () => {
  return (
    <div name="contact" className="contact">
      <div className="contact-container">
        <h2>Contact</h2>
        <p>Remplissez le formulaire ci-dessous pour me contacter directement</p>

        <div className="input-container">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
          >
            <input type="text" name="name" placeholder="Votre nom"/>
            <input type="text" name="email" placeholder="Votre email"/>
            <textarea
              name="message"
              placeholder="Ecrivez votre message"
              rows="8"
            ></textarea>
            <div className="btn-container">
              <button>Ecrivez-moi</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
