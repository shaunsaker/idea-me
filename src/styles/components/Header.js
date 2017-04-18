import styleConstants from '../styleConstants';

const styles = {
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        margin: 'auto',
        marginTop: 16,
        width: '100%',
    },
    icon: {
        color: styleConstants.white,
        fontSize: 36,
        cursor: 'pointer'
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
