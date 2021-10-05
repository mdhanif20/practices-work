import React from 'react';
import ContactData from '../ContactData/ContactData';
import './HomeContact.css';
const HomeContact = () => {
    return (
        <div>
            <h2 className="fw-bold mt-5 pb-1">Contact With Us</h2>
            {/* contact area load  */}
            <ContactData></ContactData>
        </div>
    );
};

export default HomeContact;