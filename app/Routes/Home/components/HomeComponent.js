
import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Slider from '../../../components/Slider';
import '../styles/homeStyles.css';

class HomeComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            homeSalesItems: [],
            recommendedItems: [],
            recentlyViewedItems: [],
        }
    }

    render() {
        return (
            <div className="HomeComponent-mainContainer">
                <div className="HomeComponent-sliderContainer"> 
                    <Slider title="Recommended for you ..." items={this.state.homeSalesItems} />
                </div>
            </div>
        );
        }
    }

export default HomeComponent;
