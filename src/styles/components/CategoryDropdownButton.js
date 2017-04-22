import styleConstants from '../styleConstants'; import Prefixer from 'inline-style-prefixer';

const styles = {
    dropdownButton: {
        width: 200,
        fontSize: 18,
        borderRadius: 32,
        marginBottom: 32,
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        width: 280
    },
    dropdownItem: {
        fontSize: 18,
        textAlign: 'center',
        width: 280
    },
    dropdownItemAdd: {
        borderBottomWidth: 2,
        borderBottomStyle: 'solid',
        borderBottomColor: styleConstants.blue
    },
    editIcon: {
        marginRight: 16,
        marginBottom: 4,
    }
};

const prefixer = new Prefixer(); const prefixedStyle = prefixer.prefix(styles); export default prefixedStyle;
