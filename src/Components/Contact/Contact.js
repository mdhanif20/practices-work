import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Contact.css';
import ContactData from '../ContactData/ContactData';
const Contact = () => {
    return (
        <div>
            <div>
                {/* header load  */}
                <Header></Header>
            </div>
            <div>
                {/* contact components load  */}
                <ContactData></ContactData>
            </div>
            <div>
                {/* footer load  */}
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Contact;