
import React from 'react';
import Hamborger from './Hamborger';
import './headerStyles.css';
import { Link } from "react-router-dom";

class Header extends React.Component {

    _onSearchClick = () => {
        console.log('history: ', this.props);
        this.props.history.goBack();
    }

    render() {
        return (
        <div className="Header-mainContainer">

            <div className="Header-leftContainer">
                <Hamborger />
            </div>

            <div className="Header-midContainer">
                <div className="logo-img"/>
            </div>

            <div className="Header-rightContainer">
                <div className="search" onClick={this._onSearchClick}></div>
                <Link to="/profile" className="profile"></Link>
                <div className="like"></div>
                
            </div>

        </div>

        );
    }
}

export default Header;