import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

import House from './House/House';

import './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            houses: []
        };
    };

    componentDidMount() {
        Axios.get('/api/houses').then(res => {
            this.setState({ houses: res.data });
        });
    };

    render() {
        return(
            <div className="default-styling-box">

                <div className="default-margin-box">

                    <div className="dashboard-title">
                        <h1>Dashboard</h1>
                        <Link to="/wizard/address"><button className="button-good">Add New Property</button></Link>
                    </div>

                    <h3 className="home-listings-title">Home Listings</h3>

                    <House 
                    houses={this.state.houses}/>
                    
                </div>

            </div>

        );
    };
};

export default Dashboard;