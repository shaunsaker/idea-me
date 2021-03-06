import styleConstants from '../styleConstants'; import Prefixer from 'inline-style-prefixer';

const styles = {
    button: {
        padding: 16,
        margin: 16,
        borderRadius: '50%',
        borderWidth: 8,
        borderColor: styleConstants.white,
        backgroundColor: 'transparent',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        width: 96,
        height: 96
    },
    icon: {
        color: styleConstants.white,
    }
};

const prefixer = new Prefixer(); const prefixedStyle = prefixer.prefix(styles); export default prefixedStyle;
