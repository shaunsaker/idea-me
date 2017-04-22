import React from "react";
import { DropdownButton, MenuItem } from 'react-bootstrap';
import EditIcon from "react-icons/lib/fa/pencil";

import styles from '../styles/components/Dropdown';
import styleConstants from '../styles/styleConstants';

export default class Dropdown extends React.Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            displayText: React.PropTypes.string,
            value: React.PropTypes.string,
            handleSelect: React.PropTypes.func.isRequired,
            values: React.PropTypes.array.isRequired,
            editItem: React.PropTypes.bool
        };
    }

    render() {
        return (
            <DropdownButton
                style={{ ...styles.dropdownButton, ...styleConstants.sourceSansPro }}
                id='sortDropdown'
                title={this.props.value ? this.props.value : this.props.displayText}
                noCaret={true}
                onSelect={(event) => { this.props.handleSelect(event) }}>
                {
                    this.props.editItem ?
                        <MenuItem
                            eventKey={200}
                            style={{ ...styles.dropdownItem, ...styles.dropdownItemAdd, ...styleConstants.sourceSansPro }}>
                            <EditIcon style={styles.editIcon} />
                            Edit Categories
                        </MenuItem>
                        :
                        null
                }
                {
                    this.props.displayText ?
                        null :
                        <MenuItem
                            eventKey={100}
                            style={{ ...styles.dropdownItem, ...styleConstants.sourceSansPro }}>
                            All
                        </MenuItem>      
                }
                {
                    this.props.values.map((value, index) => {
                        return (
                            <MenuItem
                                eventKey={index}
                                key={'value' + index}
                                style={{ ...styles.dropdownItem, ...styleConstants.sourceSansPro }}>
                                {value}
                            </MenuItem>
                        );
                    })
                }
            </DropdownButton>
        );
    }
}