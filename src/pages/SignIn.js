import React from "react";
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import Header from '../components/Header';
import Input from '../components/Input';
import FooterButton from '../components/FooterButton';
import ErrorMessage from '../components/ErrorMessage';

import styles from '../styles/pages/SignIn';
import styleConstants from '../styles/styleConstants';

export class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.updateUserEmail = this.updateUserEmail.bind(this);
        this.updateUserPassword = this.updateUserPassword.bind(this);
        this.signIn = this.signIn.bind(this);

        this.state = {
            loading: false
        }
    }

    static get propTypes() {
        return {
            userEmail: React.PropTypes.string,
            userPassword: React.PropTypes.string,
            errorMessage: React.PropTypes.string,
            authenticated: React.PropTypes.bool
        };
    }

    updateUserEmail(event) {
        this.props.dispatch({
            type: 'main.UPDATE_USER_EMAIL',
            value: event.target.value
        });
    }

    updateUserPassword(event) {
        this.props.dispatch({
            type: 'main.UPDATE_USER_PASSWORD',
            value: event.target.value
        });
    }

    signIn() {
        if (this.props.userEmail && (this.props.userPassword && this.props.userPassword.length >= 6)) {
            this.setState({
                loading: true 
            });

            this.props.dispatch({
                type: 'signInUser',
                email: this.props.userEmail,
                password: this.props.userPassword
            });
        }
        else if (this.props.userPassword && this.props.userPassword.length < 6) {
            this.props.dispatch({
                type: 'main.USER_ERROR',
                message: 'Password should be at least 6 characters long'
            });
            setTimeout(() => {
                this.props.dispatch({
                    type: 'main.RESET_USER_ERROR'
                });
            }, 2500);  
        }
        else {
            const emptyInput = this.props.userEmail ? 'password' : 'email';

            this.props.dispatch({
                type: 'main.USER_ERROR',
                message: 'You forgot to enter your ' + emptyInput
            });
            setTimeout(() => {
                this.props.dispatch({
                    type: 'main.RESET_USER_ERROR'
                });
            }, 2500);
        }
    }

    componentDidUpdate() {
        if (this.props.errorMessage) {
            if (this.state.loading) {
                this.setState({
                    loading: false
                });
            }
        }
        else if (this.props.authenticated) {
            browserHistory.push('/');
        }
    }

    render() {
        const errorMessage = this.props.errorMessage ?
            <ErrorMessage text={this.props.errorMessage} />
            :
            null;

        return (
            <div style={{ height: '100%' }}>
                <div style={styles.container}>
                    <Header
                        allowBack={false} />
                    <div style={styles.inputContainer}>
                        <Input
                            placeholder="Email..."
                            value={this.props.userEmail}
                            handleChange={this.updateUserEmail} />
                        <div style={styles.passwordContainer}>
                            <Input
                                placeholder="Password..."
                                value={this.props.userPassword}
                                handleChange={this.updateUserPassword}
                                type='password' />
                            <p style={{ ...styles.passwordText, ...styleConstants.sourceSansPro }}>*Password at least 6 characters long</p>
                        </div>
                    </div>
                    <FooterButton
                        text='SIGN IN'
                        loading={this.state.loading}
                        handleClick={this.signIn} />
                </div>
                {errorMessage}
            </div>
        );
    }
}

function MapStateToProps(state) {
    return ({
        userEmail: state.main.user.email,
        userPassword: state.main.user.password,
        errorMessage: state.main.user.errorMessage,
        authenticated: state.main.user.authenticated
    });
}

export default connect(MapStateToProps)(SignIn);