import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Card, Button } from 'react-bootstrap';
import './Service.css';
const Service = (props) => {
    const {tutorImg,language,details,totalLession,totalRetting,tutor,price} = props.language;
    const element = <FontAwesomeIcon icon={faStar} />
    return (
        <div id="service-area">
            {/* service area card  */}
            <Card>
                {/* tutor image  */}
                <Card.Img variant="top" src={tutorImg} />
                {/* course details  */}
                <Card.Body>
                    <p id="course-tutor"> <strong>Tutor {tutor}</strong> </p>

                    <Card.Title> <h3>Learn {language} Language With Our Tutor</h3> </Card.Title><br/>

                     
                   <p id="course-description"><strong>Total Lession{totalLession}</strong>
                    <strong>{element} {totalRetting}</strong>
                    <strong>${price}</strong></p>

                    <Card.Text>
                        <p>Course Details</p>
                        {details.slice(1,300)}
                    </Card.Text>
                    <Button variant="primary" className="py-1 px-4 fs-5 rounded">Buy Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;