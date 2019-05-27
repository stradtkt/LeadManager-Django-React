import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addLead} from './../../actions/leads';

export class Form extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    };
    static propTypes = {
        addLead: PropTypes.func.isRequired
    };
    render() {
        const {name, email, message} = this.state;
        onChange = e => this.setState({[e.target.name]: e.target.value});
        onSubmit = e => {
            e.preventDefault();
            const {name, email, message} = this.state;
            const lead = {name, email, message};
            this.props.addLead(lead);
        };
        return (
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
        )
    }
}


export default connect(null, {addLead})(Form);
