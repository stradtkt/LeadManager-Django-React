import React, { Component } from 'react'

export class Form extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }
    render() {
        const {name, email, message} = this.state;
        onChange = e => this.setState({[e.target.name]: e.target.value});
        onSubmit = e => {
            e.preventDefault();
            console.log("Submit");
        };
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="text" 
                            className="form-control"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <textarea 
                            name="" 
                            cols="30" 
                            rows="10" 
                            className="form-control"
                            name="message"
                            value={message}
                            />
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
