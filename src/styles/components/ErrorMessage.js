import styleConstants from '../styleConstants'; import Prefixer from 'inline-style-prefixer';

const styles = {
    errorMessageWrapper: {
        display: 'flex',
        justifyContent: 'center'
    },
    errorMessageContainer: {
        position: 'absolute',
        bottom: 16,
        minWidth: 280,
        backgroundColor: styleConstants.clearBlack,
        paddingTop: 22,
        paddingBottom: 22,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 32,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorMessageText: {
        fontSize: 18,
        textAlign: 'center',
        color: styleConstants.white
    },
    icon: {
        color: styleConstants.red,
        fontSize: 18,
        marginRight: 8
    }
};

const prefixer = new Prefixer(); const prefixedStyle = prefixer.prefix(styles); export default prefixedStyle;
