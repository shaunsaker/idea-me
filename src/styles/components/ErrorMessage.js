import styleConstants from '../styleConstants';

const styles = {
    errorMessageContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: styleConstants.clearBlack,
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 16,
        paddingRight: 16
    },
    errorMessageText: {
        fontSize: 18,
        textAlign: 'center',
        color: styleConstants.white
    }
};

export default styles;
