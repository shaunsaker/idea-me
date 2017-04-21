import React from "react";

import Header from '../components/Header';
import Input from '../components/Input';
import FooterButton from '../components/FooterButton';
import ErrorMessage from '../components/ErrorMessage';

import styles from '../styles/pages/SignIn';

export class SignIn extends React.Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            errorMessage: React.PropTypes.string
        };
    }

    render() {
        const errorMessage = this.props.errorMessage ?
            <ErrorMessage text={this.props.errorMessage} />
            :
            null;

        return (
            <div style={{ height: '100%' }}>
                <div style={styles.container}>
                    <Header />
                    <Input
                        placeholder="Email..."
                        value={this.props.userEmail}
                        handleChange={this.updateUserEmail} />
                    <Input
                        placeholder="Password..."
                        value={this.props.userPassword}
                        handleChange={this.updateUserPassword} />
                    <FooterButton />
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
        errorMessage: state.main.user.errorMessage
    });
}

export default connect(MapStateToProps)(SignIn);