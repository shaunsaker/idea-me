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
            placeholder: React.PropTypes.string.isRequired
        };
    }

    render() {
        return (
            <FormControl
                placeholder={this.props.placeholder} 
                style={{...styles.input, ...styleConstants.sourceSansPro}} />
        );
    }
}