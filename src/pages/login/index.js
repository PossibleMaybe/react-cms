import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

    componentDidMount() {
        console.log('login did mounted');
    }

    render() {
        return (
            <div>
                <p>hello login</p>
                {/* {this.props.route.routes} */}

                <Link to='/main/page1'>Main</Link>
            </div>
        )
    }
}

export default Login;
