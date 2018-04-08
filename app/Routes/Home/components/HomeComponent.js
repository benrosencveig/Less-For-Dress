
import React from 'react';
import Header from '../../../components/Header';
import '../styles/homeStyles.css';
import Footer from '../../../components/Footer';
import Group from "./Group";

class HomeComponent extends React.Component {

    // constructor() {
    //     super();

    //     this.state = { counter: 0 }
    // }

    // onBenClick = () => {
    //     this.setState({ counter: this.state.counter + 1})
    // }

    // onTalClicked = () => {
    //     alert('tal clicked');
    // }

    render() {
        console.log('home props: ', this.props);
        return (
            <div className="HomeComponent-mainContainer">

                <div className="HomeComponent-headerContainer">
                    <Header history={this.props.history} /> 
                </div>

                <div className="Group-mainContiner">
                    <Group/>
                </div>

               <div className="ItemComponent">
                      <a href="" alt="item" />               
                </div>
            
                <div className="HomeComponent-footerContainer">
                     <Footer />
                </div>
            </div>
                
           
        );
    }
}

export default HomeComponent;
