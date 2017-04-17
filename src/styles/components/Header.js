import styleConstants from '../styleConstants';

const styles = {
    headerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        marginTop: 16,
        width: '100%'
    },
    icon: {
        color: styleConstants.white,
        fontSize: 36,
        position: 'absolute',
        left: 0
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    image: {
        marginRight: 12,
        marginBottom: 8
    },
    title: {
        fontSize: 36
    },
    subtitle: {
        fontSize: 24
    },
};

export default styles;
