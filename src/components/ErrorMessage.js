import React from "react";
import { Motion, spring } from 'react-motion';

import styles from '../styles/components/ErrorMessage';
import styleConstants from '../styles/styleConstants';

export default class ErrorMessage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showErrorMessage: true
        }
    }

    static get propTypes() {
        return {
            text: React.PropTypes.string.isRequired
        };
    }

    componentDidMount() {
        if (this.state.showErrorMessage) {
            setTimeout(() => {
                this.setState({
                    showErrorMessage: false
                });
            }, 3000);
        }
    }

    render() {
        const errorMessage = this.state.showErrorMessage ?
            <Motion
                defaultStyle={{ bottom: -105 }}
                style={{ bottom: spring(0) }}>
                {
                (style) =>
                    <div key='errorMessage' style={{...styles.errorMessageContainer, ...style}}>
                        <p style={{...styles.errorMessageText, ...styleConstants.sourceSansPro}}>
                            { this.props.text }
                        </p>
                    </div>
                }
            </Motion>
            :
            <Motion
                defaultStyle={{ bottom: 0 }}
                style={{ bottom: spring(-105) }}>
                {
                (style) =>
                    <div key='errorMessage' style={{...styles.errorMessageContainer, ...style}}>
                        <p style={{...styles.errorMessageText, ...styleConstants.sourceSansPro}}>
                            { this.props.text }
                        </p>
                    </div>
                }
            </Motion>

        return (
            <div>
                { errorMessage }
            </div>
        );
    }
}