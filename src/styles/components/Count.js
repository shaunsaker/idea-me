import styleConstants from '../styleConstants'; import Prefixer from 'inline-style-prefixer';

const styles = {
    countContainer: {
        display: 'flex',
        position: 'absolute',
        right: 16
    },
    countText: {
        fontSize: 18,
        color: styleConstants.white
    },
    separator: {
        marginLeft: 4,
        marginRight: 4, 
    },
    unit: {
        marginLeft: 4
    }
};

const prefixer = new Prefixer(); const prefixedStyle = prefixer.prefix(styles); export default prefixedStyle;
