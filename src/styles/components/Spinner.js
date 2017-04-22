import styleConstants from '../styleConstants'; import Prefixer from 'inline-style-prefixer';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    spinner: {
        width: 36,
        height: 36,
        borderRadius: '50%',
        background: 'transparent', // need this?
        borderWidth: 4,
        borderStyle: 'solid',
        borderTopColor: styleConstants.white,
        borderRightColor: styleConstants.white,
        borderBottomColor: styleConstants.grey,
        borderLeftColor: styleConstants.grey
    }
};

const prefixer = new Prefixer(); const prefixedStyle = prefixer.prefix(styles); export default prefixedStyle;
