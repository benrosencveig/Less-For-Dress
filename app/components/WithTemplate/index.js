import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './style.css';

const withTemplate = (Component) => 
    (props) => 
        (
            <div className="WithTemplate-mainContainer">
                <div className="WithTemplate-headerContainer">
                    <Header />
                </div>
                <div className="WithTemplate-bodyContainer">
                    <Component {...props} />
                </div>
                <div className="WithTemplate-FooterContainer">
                    <Footer />
                </div>
            </div>
        )

export default withTemplate;