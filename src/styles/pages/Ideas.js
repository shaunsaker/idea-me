import styleConstants from '../styleConstants';

const styles = {
    container: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'relative',
        paddingTop: 92,
        paddingBottom: 118
    },
    dropdownButton: {
        width: 200,
        fontSize: 18,
        borderRadius: 32,
        marginBottom: 32,
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
    },
    dropdownItem: {
        fontSize: 18,
        textAlign: 'center',
        width: 200
    },
    ideasContainer: {
        borderRadius: 32,
        backgroundColor: styleConstants.white,
        padding: 32,
        width: '100%',
        overflow: 'auto',
        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.12), inset 0 1px 2px rgba(0,0,0,0.24)',
        maxWidth: 720
    },
    ideaItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        marginBottom: 8,
        borderBottomWidth: 2,
        borderBottomColor: styleConstants.yellow,
        borderBottomStyle: 'solid',
        paddingBottom: 16 ,
        flexWrap: 'wrap'
    },  
    ideaText: {
        fontSize: 18,
        flex: 1
    },
    ideaChip: {
        fontSize: 18,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: styleConstants.yellow,
        borderRadius: 32,
        marginLeft: 16,
        whiteSpace: 'nowrap'
    },
    labelsContainer: {
        display: 'flex',
    },
    editIcon: {
        color: styleConstants.white,
        backgroundColor: styleConstants.blue,
        padding: 8,
        borderRadius: '50%',
        fontSize: 41,
        marginLeft: 16,
        minWidth: 41,
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
    },
    footer: {
        position: 'absolute',
        bottom: 0
    }
};

export default styles;
