import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Services.css';
import LoadData from './../Hooks/LoadData';
import Service from '../Service/Service';
const Services = () => {
    // load fake data from hooks 
    const [languages] = LoadData();
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div>
                <div>
                     <h2 className="pt-3 mt-3">OUR COURSE DETAILS</h2>
                </div>
                <div  id="services-data">
                    {
                        languages.map(language => <Service key={language.rank} language={language}></Service>)
                    }
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Services;