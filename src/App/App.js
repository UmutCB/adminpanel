import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';

import {Sidebar} from './Sidebar';
import exportMap from './map';
import {Bar} from './bar';
import Urunler from './urunler';
import Odemeler from './Odemeler';
import Satilanlar from './Satilanlar';
class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
          
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Route path="/map" component={exportMap}/>
                                <Route path="/bar" component={Bar}/>
                                <Route path="/odemeler" component={Odemeler}/>
                                <Route path="/urunler" component={Urunler}/>
                                <Route path="/satilanlar" component={Satilanlar}/>
                            </Switch>
                        </Router>
                 
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };