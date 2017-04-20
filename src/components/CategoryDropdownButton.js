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
            currentCategory: React.PropTypes.string,
            handleSelect: React.PropTypes.func.isRequired,
            categories: React.PropTypes.array.isRequired,
            initial: React.PropTypes.string.isRequired,
        };
    }

    render() {
        return (
            <DropdownButton
                style={{ ...styles.dropdownButton, ...styleConstants.sourceSansPro }}
                id='sortDropdown'
                title={this.props.currentCategory ? this.props.currentCategory : 'Select a Category'}
                noCaret={true}
                onSelect={(event) => { this.props.handleSelect(event) }}>
                <MenuItem
                    eventKey={200}
                    style={{ ...styles.dropdownItem, ...styles.dropdownItemAdd, ...styleConstants.sourceSansPro }}>
                    <EditIcon style={styles.editIcon}/>
                    Edit Categories
                </MenuItem>
                { this.props.initial === 'Select a Category' ?
                    null
                    :
                    <MenuItem
                        eventKey={100}
                        style={{ ...styles.dropdownItem, ...styleConstants.sourceSansPro }}>
                        {this.props.initial}
                    </MenuItem>
                }
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