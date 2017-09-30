import React from 'react';
import { Link } from 'react-router-dom'

class LoginComponent extends React.Component {
    render() {
    return (
        <div className="main container">
            <div className="row">
                <div className="buttons">
                    <Link to="/giphy">
                        <button className="btn-login">log in</button>
                    </Link>
                    <button onClick={this.props.toggleShow}className="btn-signup">sign up</button>
                </div>
            </div>
            <div className="welcome">
                <h1>Welcome to <span className="matum-blue">Matumbiroo</span><span className="blue-period">.</span></h1>
                <h4>See data about your <span className="matum-blue matum-underline">music</span><span className="blue-period">.</span></h4>
                <h4>Gif-ify your <span className="matum-blue matum-underline">songs</span><span className="blue-period">.</span></h4>
                <h4><span className="blue-period">/</span><span className="matum-blue"> mə ˈ tu:m ˌ bəru: </span><span className="blue-period">/</span></h4>
            </div>
            <form className={`default-form ${this.props.className}`} >
                <button onClick={this.props.toggleShow} className="button-hideform">></button>
                <h3 className="form-signup-text">/ Sign Up /</h3>
                <input placeholder="Username" type="text"/>
                <input placeholder="Password" type="password"/>
                <input placeholder="Email" type="email"/>
                <button className="button-conf-signup">Sign up</button>
            </form>
        </div>
        )
    }
}

export default LoginComponent;