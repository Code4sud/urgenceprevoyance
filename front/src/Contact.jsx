import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <h1>Me contacter</h1>
            <form>
                <label>Nom :</label>
                <input type="text" name="lastname" required />
                <br />
                <label>Prénom :</label>
                <input type="text" name="firstname" required />
                <br />
                <label>Adresse e-mail :</label>
                <input type="email" name="email" required />
                <br />
                <label>N° de téléphone :</label>
                <input type="tel" name="phone" required />
                <br />
                <label>Message :</label>
                <textarea name="message" required />
                <br />
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
};

export default Contact;
