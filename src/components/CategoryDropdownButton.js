import React from "react";
import { DropdownButton, MenuItem } from 'react-bootstrap';
import EditIcon from "react-icons/lib/fa/pencil";

import styles from '../styles/components/CategoryDropdownButton';
import styleConstants from '../styles/styleConstants';

export default class CategoryDropdownButton extends React.Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {

        };
    }

    render() {
        return (
            <DropdownButton
                style={{ ...styles.dropdownButton, ...styleConstants.sourceSansPro }}
                id='sortDropdown'
                title={this.props.currentCategory}
                noCaret={true}
                onSelect={(event) => { this.handleSelect(event) }}>
                <MenuItem
                    eventKey={200}
                    style={{ ...styles.dropdownItem, ...styles.dropdownItemAdd, ...styleConstants.sourceSansPro }}>
                    <EditIcon style={styles.editIcon}/>
                    Edit Categories
                </MenuItem>
                <MenuItem
                    eventKey={100}
                    style={{ ...styles.dropdownItem, ...styleConstants.sourceSansPro }}>
                    All
                </MenuItem>
                {
                    this.props.categories.map((value, index) => {
                        return (
                            <MenuItem
                                eventKey={index}
                                key={'category' + index}
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