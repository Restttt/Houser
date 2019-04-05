import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import store, {UPDATE_COST, RESET_STATE, ADDED_HOUSE} from '../../redux/store';
import Axios from 'axios';

import './Wizard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        const reduxState = store.getState();
        this.state = {
            mortage: reduxState.mortage,
            rent: reduxState.rent
         };
     };
 
     changeEvent = (e) => {
         const { name, value } = e.target
         this.setState({ [name]: value })
     };

     submitToRedux = () => {
        store.dispatch({
            type: UPDATE_COST,
            payload: {
                mortage: this.state.mortage,
                rent: this.state.rent
            }
        });
     };

     addToDataBase = () => {
        const reduxState = store.getState();
        const newHouse = {
            propertyName: reduxState.propertyName,
            address: reduxState.address,
            city: reduxState.city,
            imageUrl: reduxState.imageUrl,
            state: reduxState.state,
            zip: reduxState.zip,
            mortage: reduxState.mortage,
            rent: reduxState.rent
        };
        Axios.post('/api/addHouse', newHouse).then(res => {
            store.dispatch({
                type: RESET_STATE
            });
            store.dispatch({
                type: ADDED_HOUSE,
                payload: res.data
            });
            console.log("ADDED HOUSE");
        }).catch(err => console.log("We have an error"));

        const { history } = this.props;

        setTimeout(() => {
            history.push('/');
        }, 1200);
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

                            <span><h5>Recommended Rent: $0</h5></span>

                            <span className="wizard-input-box wizard-address">
                                <h3>Monthly Mortgage Amount</h3>
                                <input type="number" onChange={this.changeEvent} name="mortage"  value={this.state.mortage}/>
                            </span>

                            <span className="wizard-input-box wizard-address">
                                <h3>Desired Monthly Rent</h3>
                                <input type="number" onChange={this.changeEvent} name="rent"  value={this.state.rent}/>
                            </span>

                        </div>
                    </div>

                    <div className="wizard-bottom-box">
                        <Link to="/wizard/image"><button className="wizard-next">Previous Step</button></Link>
                        <button className="button-good" onClick={() => {
                                this.submitToRedux();
                                this.addToDataBase();
                            }}>Complete</button>
                    </div>
                    
                </div>

            </div>

        );
    };
};

export default Dashboard;