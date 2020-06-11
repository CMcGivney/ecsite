import React from 'react';
import { Route, Switch } from 'react-router-dom';
 
export default (
    <Switch>
	   <Route exact path='/' />
       <Route exact path='/Contact' />
	   <Route exact path='/about' />
	   <Route exact path='/Events' />
	   <Route exact path='/Menu' />
	   <Route exact path='/FAQ' />
    </Switch>
);
