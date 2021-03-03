import React, { Component } from 'react'
class SignOut extends Component {
    state ={
        email:"",
        password:"",
        firstname: "",
        Lastname: ""
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)

    }
    handleChnage = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" onChange= {this.handleChnage}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange= {this.handleChnage}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id="firstname" onChange= {this.handleChnage}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="lastname" onChange= {this.handleChnage}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignOut