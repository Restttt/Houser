import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import store, {UPDATE_IMAGE, RESET_STATE} from '../../redux/store';

import './Wizard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        const reduxState = store.getState();

        this.state = {
            imageUrl: reduxState.imageUrl
         };
     };
 
     changeEvent = (e) => {
         const { name, value } = e.target
         this.setState({ [name]: value })
     };

     submitToRedux = () => {
        store.dispatch({
            type: UPDATE_IMAGE,
            payload: this.state.imageUrl
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

                            <span className="wizard-input-box wizard-image">
                                <h3>Image URL</h3>
                                <input type="text" onChange={this.changeEvent} name="imageUrl" value={this.state.imageUrl}/>
                            </span>

                        </div>
                    </div>

                    <div className="wizard-bottom-box">
                        <Link to="/wizard/address"><button className="wizard-next">Previous Step</button></Link>
                        <Link to="/wizard/cost"><button className="wizard-next" onClick={() => this.submitToRedux()}>Next Step</button></Link>
                    </div>
                    
                </div>

            </div>

        );
    };
};

export default Dashboard;