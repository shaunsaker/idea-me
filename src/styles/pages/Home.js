import styleConstants from '../styleConstants';

const styles = {
    container: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        position: 'relative'
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        marginTop: 16
    },
    image: {
        marginRight: 8,
        marginBottom: 8
    },
    title: {
        fontSize: 36
    },
    subtitle: {
        fontSize: 24
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
    plusIcon: {
        paddingTop: 4
    }
};

export default styles;
