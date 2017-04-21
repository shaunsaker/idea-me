import styleConstants from '../styleConstants';

const styles = {
    errorMessageContainer: {
        position: 'absolute',
        bottom: 16,
        left: '50%',
        transform: 'translateX(-50%)',
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

export default styles;
