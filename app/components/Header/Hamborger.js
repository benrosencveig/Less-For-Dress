
import React from 'react';
import './hamborgerStyle.css'

class Hamborger extends React.Component {
    render() {
        return (
            <div className="Hamborger-container">
                <div className="Hamborger-space"/>
                <div className="Hamborger-line"/>
                <div className="Hamborger-space"/>                
                <div className="Hamborger-line"/>
                <div className="Hamborger-space"/>                
                <div className="Hamborger-line"/>
                <div className="Hamborger-space"/>             
            </div>
        )
    }
}

export default Hamborger;