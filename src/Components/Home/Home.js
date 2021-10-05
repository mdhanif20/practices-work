import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeContact from '../HomeContact/HomeContact';
import Languages from '../Languages/Languages';
import Slider from '../Slider/Slider';

import './Home.css';
import PopularTeacher from './../PopularTeacher/PopularTeacher';
const Home = () => {
    return (
        <div>
            {/* home page component load here  */}
            <Header></Header>
            <Slider></Slider>
            <PopularTeacher></PopularTeacher>
            <Languages></Languages>
            <HomeContact></HomeContact>
            <Footer></Footer>
        </div>
    );
};

export default Home;