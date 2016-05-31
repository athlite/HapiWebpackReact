import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import NormalizeCss from '../css/normalize.css'
import SkeletonCss from '../css/skeleton.css'

const About = React.createClass({
    render () {
        return (
            <div id='about'>
                <p>We are about to bring you the new deal.</p>
                <Link id='about-close' to='/'>Close</Link>
            </div>
        );
    }
});

const Index = React.createClass({

    render () {

        return (
            <div>
                <h1>New deal, is here</h1>
                <div>
                    <div>Go pro bro, ok?</div>
                    <div>
                        <Link id='about-link' to='/about'>About</Link>
                    </div>
                </div>
                <div>{this.props.children}</div>
            </div>
        );
    }
});

const Routes = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={Index}>
                <Route path="about" component={About} />
            </Route>
        </Router>
    );
};

ReactDOM.render(<Routes />, document.getElementById('app'));
