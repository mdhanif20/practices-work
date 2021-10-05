import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import img from '../../images/about us/our.jpg'
import './About.css';
const About = () => {
    return (
        // about page 
        <div>
            <div>
                <Header></Header>
            </div>
            <div>
                {/* about header  */}
            <h2 className="mt-5 mb-3">Orbin Foreign Language Traning Center</h2>
                <Card>
                    {/* about our company image  */}
                        <Card.Img  id="about-img" src={img} />
                        
                        <Card.Body>
                        <h2>OFLEC</h2>
                        <Card.Text>
                            {/* about details  */}
                        A language school is a school where one studies a foreign language. Classes at a language school are usually geared towards, for example, communicative competence in a foreign language. Language learning in such schools typically supplements formal education or existing knowledge of a foreign language.<br/><br/>

                        Students vary widely by age, educational background, work experience.Further, at language school students usually have the possibility of selecting a specific course according to their language proficiency. According to the Common European Framework of Reference for Languages (CEFR),[1] there are six language levels that define students language proficiency based on their speaking, writing and reading skills. Students will be then assigned to the course that matches their skills.<br/><br/>

                        Foreign Language Training Center (FLTC) supports the ITMO University status as internationally-oriented institution by creating an English-friendly environment. FLTC offers a wide range of English courses, designed to provide students, faculty and administration with sufficient knowledge of English to satisfy the relevant requirements for studies, participation in exchange programs, international research or getting double degree.<br/><br/>

                        Teaching is based on materials of Cambridge University Press courses. All students are provided with a package of materials, including books, workbooks, software, audio and video materials and online components.<br/><br/>

                        Students, doctorates, faculty and administration personnel are placed in relevant-level courses for improving their professional communication, academic writing and presentation skills.  After completing the course and passing the final, students receive certificate of completion
                        </Card.Text>
                        <Button className="py-2 px-5 fs-5" variant="primary">Buy Course Now</Button>
                    </Card.Body>
                       
                    
                </Card>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default About;