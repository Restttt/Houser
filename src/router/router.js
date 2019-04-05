import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import Dashboard from '../components/Dashboard/Dashboard';
import AddAddress from '../components/Wizard/AddAddress';
import AddImage from '../components/Wizard/AddImage';
import AddCost from '../components/Wizard/AddCost';

export default (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/wizard/address' component={AddAddress}/>
            <Route exact path='/wizard/image' component={AddImage}/>
            <Route exact path='/wizard/cost' component={AddCost}/>
        </Switch>
    </HashRouter>
)