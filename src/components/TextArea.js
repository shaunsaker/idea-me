import React from "react";
import { FormControl } from 'react-bootstrap';

import styles from '../styles/components/TextArea';
import styleConstants from '../styles/styleConstants';

export default class TextArea extends React.Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {

        return {
            placeholder: React.PropTypes.string,
            onChange: React.PropTypes.func,
            value: React.PropTypes.string,
        };
    }

    render() {
        return (
            <FormControl
                componentClass='textarea'
                value={this.props.value ? this.props.value : ''}
                placeholder={this.props.placeholder ? this.props.placeholder : ''} 
                style={{...styles.textarea, ...styleConstants.sourceSansPro}}
                onChange={(event) => this.props.handleChange(event)} />
        );
    }
}