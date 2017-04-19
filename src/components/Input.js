import React from "react";
import { FormControl } from 'react-bootstrap';

import styles from '../styles/components/Input';
import styleConstants from '../styles/styleConstants';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            placeholder: React.PropTypes.string
        };
    }

    render() {
        return (
            <FormControl
                value={this.props.value ? this.props.value : ''}
                placeholder={this.props.placeholder ? this.props.placeholder : ''} 
                style={{...styles.input, ...styleConstants.sourceSansPro}} />
        );
    }
}