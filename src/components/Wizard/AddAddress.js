import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import store, {UPDATE_ADDRESS, RESET_STATE} from '../../redux/store';

import './Wizard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        const reduxState = store.getState();

        this.state = {
           propertyName: reduxState.propertyName,
           address: reduxState.address,
           city: reduxState.city,
           state: reduxState.state,
           zip: reduxState.zip,
           imageUrl: reduxState.imageUrl
        };
    };

    changeEvent = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    };

    submitToRedux = () => {
        store.dispatch({
            type: UPDATE_ADDRESS,
            payload: {
                propertyName: this.state.propertyName,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip
            }
        });
     };

     cancelAdd = () => {
        store.dispatch({
            type: RESET_STATE
        });
     }

    render() {
        return(
            <div className="default-styling-box">

                <div className="default-margin-box">

                    <div className="wizard-title">
                        <h1>Add New Listing</h1>
                        <Link to="/"><button className="wizard-cancel" onClick={() => this.cancelAdd()}>Cancel</button></Link>
                    </div>

                    <div className="wizard-add-fields-parent-box">
                        <div className="wizard-add-fields-box">

                            <span className="wizard-input-box wizard-propname">
                                <h3>Property Name</h3>
                                <input type="text" onChange={this.changeEvent} name="propertyName" value={this.state.propertyName}/>
                            </span>

                            <span className="wizard-input-box wizard-address">
                                <h3>Address</h3>
                                <input type="text" onChange={this.changeEvent} name="address" value={this.state.address}/>
                            </span>

                            <span className="wizard-3input-box wizard-input-box">

                                <span className="wizard-3input">
                                    <h3>City</h3>
                                    <input type="text" onChange={this.changeEvent} name="city" value={this.state.city}/>
                                </span>

                                <span className="wizard-3input">
                                    <h3>State</h3>
                                    <input type="text" onChange={this.changeEvent} name="state" value={this.state.state}/>
                                </span>

                                <span className="wizard-3input">
                                    <h3>Zip</h3>
                                    <input type="number" onChange={this.changeEvent} name="zip" value={this.state.zip}/>
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="wizard-bottom-box">
                        <Link to="/"><button className="wizard-cancel">Home</button></Link>
                        <Link to="/wizard/image"><button className="wizard-next" onClick={() => this.submitToRedux()}>Next Step</button></Link>
                    </div>
                    
                </div>

            </div>

        );
    };
};

export default Dashboard;