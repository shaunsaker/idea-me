import styleConstants from '../styleConstants'; import Prefixer from 'inline-style-prefixer';

const styles = {
    button: {
        padding: 16,
        margin: 16,
        borderRadius: 32,
        backgroundColor: styleConstants.yellow,
        width: 280,
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        height: 68
    },
    buttonText: {
        fontSize: 24,
    }
};

const prefixer = new Prefixer(); const prefixedStyle = prefixer.prefix(styles); export default prefixedStyle;
