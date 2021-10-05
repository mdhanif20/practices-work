import React from 'react';
import './PopularTeacher.css';
import teacher1 from '../../images/popular-teacher/t1.jpg'
import teacher2 from '../../images/popular-teacher/t2.jpg'
import teacher3 from '../../images/popular-teacher/t3.jpg'
import teacher4 from '../../images/popular-teacher/t4.jpg'
import teacher5 from '../../images/popular-teacher/t5.jpg'
import teacher6 from '../../images/popular-teacher/t6.jpg'
const PopularTeacher = () => {
    return (
        // popular teacher card 
        <div id="teacher-area">
            <h2 className="my-5">Our Most <br/>Popular Teachers</h2>
            <div id="popular-teacher">
                {/* single teacher card  */}
                <div>
                    <img src={teacher1} alt="" />
                    <h4 className="py-2">Lillian Walsh, <span className="fs-6">CO Founder</span></h4>
                </div>
                {/* single teacher card  */}
                <div>
                    <img src={teacher2} alt="" />
                    <h4 className="py-2">Noman Ali Khan, <span className="fs-6">Arabic Tutor</span></h4>
                </div>
                {/* single teacher card  */}
                <div>
                    <img src={teacher3} alt="" />
                    <h4 className="py-2">Hilary Ouse, <span className="fs-6">English Tutor</span></h4>
                </div>
                {/* single teacher card  */}
                <div>
                    <img src={teacher4} alt="" />
                    <h4 className="py-2">Shahnewaz, <span className="fs-6">Turkish Tutor</span></h4>
                </div>
                {/* single teacher card  */}
                <div>
                    <img src={teacher5} alt="" />
                    <h4 className="py-2">Nicola Tesla, <span className="fs-6">Japanis Tutor</span></h4>
                </div>
                {/* single teacher card  */}
                <div>
                    <img src={teacher6} alt="" />
                    <h4 className="py-2">Saddam Hossain, <span className="fs-6">Chines Tutor</span></h4>
                </div>
            </div>
        </div>
    );
};

export default PopularTeacher;