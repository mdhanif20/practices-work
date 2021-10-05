import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/page-not-found/Screenshot_1.png'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
const NotFound = () => {
    return (
        // not found page 
        <div>
            <div>
                <Header></Header>
            </div>
            <div className="my-5">
                {/* not found image  */}
            <img src={img} alt="" />
            <h1 style={{fontSize:"4rem"}}>Page Not Found</h1>
            <p className="my-4">
            <strong>Please try searching for some other page.</strong>
            </p>
            {/* go to home page  */}
            <Link to={"/home"}>
                <button className="btn-primary border-0 fs-5 fw-bold py-2 px-4 rounded">Back To Home</button>

            </Link>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
        
    );
};

export default NotFound;