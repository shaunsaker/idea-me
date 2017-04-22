import styleConstants from '../styleConstants'; import Prefixer from 'inline-style-prefixer';

const styles = {
    container: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    button: {
        padding: 16,
        margin: 16,
        borderRadius: '50%',
        borderWidth: 8,
        borderColor: styleConstants.white,
        backgroundColor: 'transparent',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
    },
    icon: {
        fontSize: 48,
        color: styleConstants.white,
    },
};

const prefixer = new Prefixer(); const prefixedStyle = prefixer.prefix(styles); export default prefixedStyle;
