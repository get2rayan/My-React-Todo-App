import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Test from './Test'

export default function NotFound() {
    return (
        <h1>Not Found</h1>
    )
}

const routing=
    (
        <Router>
            <div>
                <div><div>
                    <Link to="/">TodoList</Link></div>
                    <div>
                    <Link to="/Test">Test</Link></div>
                </div>
            </div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/test" component={Test} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )

ReactDOM.render(routing, document.getElementById('root'));
