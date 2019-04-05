import {createStore} from 'redux';

const defaultState = {
    propertyName: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    imageUrl: '',
    mortage: 0,
    rent: 0,
    houses: []
};

export const UPDATE_IMAGE = "UPDATE_IMAGE";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_COST = "UPDATE_COST";
export const RESET_STATE = "RESET_STATE";
export const ADDED_HOUSE = "ADDED_HOUSE";

function reducer(state = defaultState, action) {
    switch(action.type) {
        case UPDATE_IMAGE: {
            return state = {
                ...state, 
                imageUrl: action.payload
            };
        };
        case UPDATE_ADDRESS: {
            return state = {
                ...state, 
                propertyName: action.payload.propertyName, 
                address: action.payload.address,
                city: action.payload.city,
                state: action.payload.state,
                zip: action.payload.zip
            }
        };
        case UPDATE_COST: {
            return state = {
                ...state,
                mortage: action.payload.mortage,
                rent: action.payload.rent
            };
        };
        case RESET_STATE: {
            return state = {
                ...state,
                propertyName: '',
                address: '',
                city: '',
                state: '',
                zip: 0,
                imageUrl: '',
                mortage: 0,
                rent: 0
            };
        };
        case ADDED_HOUSE: {
            const updatedHouses = [...state.houses, action.payload]
            return state = {...state, houses: updatedHouses}
        }
        default: {
            return state;
        };
    };
};

export default createStore(reducer);