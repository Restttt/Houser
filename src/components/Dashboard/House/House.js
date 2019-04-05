import React, {Component} from 'react';

import './House.css';
import Axios from 'axios';

class House extends Component {
    constructor(props) {
        super(props);

        this.state = {
            houses: this.props.houses
        };
    };

    deleteHouse = (id) => {
        Axios.delete('/api/deleteHouse', {data: {id} }).then(res =>{
            window.location.reload();
        }).catch(err => console.log(`unable to delete house: ${err}`));
    };

    render() {
        const house = this.props.houses.map((house) => {
            return(
                <div className="house-parent-box" key={house.id}>
                    <div className="house-box">
                        <img src={house.img} alt="house"/>
                        <ul>
                            <li>Property Name: {house.property_name}</li>
                            <li>Address: {house.address}</li>
                            <li>City: {house.city}</li>
                            <li>State: {house.state}</li>
                            <li>Zip: {house.zip}</li>
                        </ul>
                        <ul>
                            <li>Monthly Mortgage: {house.monthly_mortgage}</li>
                            <li>Desired Rent: {house.desired_rent}</li>
                        </ul>
                    </div>

                    <div className="delete-house-box">
                        <h3 onClick={() => this.deleteHouse(house.house_id)}>×</h3>
                    </div>
                </div>
            )
        })
        return this.props.houses ? (
            <div>
                {house}
            </div>
        ) : (
            <div>
                <h1>Hello</h1>
            </div>
        )
    };
};

export default House