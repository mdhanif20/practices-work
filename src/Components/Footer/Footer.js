import React from 'react'; /*  
import "./Footer.css";
import { Button, Form, FormControl } from 'react-bootstrap';

const Footer = () => {
    return (S
        <div>
            {/* footer data  */}
            <div className="row bg-dark text-light p-5">
                {/* footer about our training center  */}
                <div className="col-md-3">
                    <h5 className="lh-base">Orbin Foreign Language Training Center</h5>
                    <small id="footer-details">Foreign language teaching and learning have changed from teacher-centered to learner/learning-centered environments.
                    Relying on language theories, research findings, and experiences, educators developed teaching strategies and learning environments that engaged learners in interactive communicative language tasks. </small>
                </div>
                {/* our all course  */}
                <div className="col-md-3">
                    <h2>Our Course</h2>
                    <ul id="course">
                        <li>Mandarin Chainese</li>
                        <li>Spanish</li>
                        <li>English</li>
                        <li>Russian</li>
                        <li>Japanese</li>
                        <li>Turkish</li>
                    </ul>
                </div>
                {/* contact info  */}
                <div className="col-md-3">
                    <h2>Contact Us</h2>
                    <small>Email:mdhanif115825@gmail.com</small><br/>
                    <small>Phone:+880187908098</small><br/>
                    <small>Address: Road-08,Khanchonnagor,Chandanish,Chittagong</small>

                </div>
                {/* search bar  */}
                <div className="col-md-3">
                    <h2>Search</h2>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Footer;