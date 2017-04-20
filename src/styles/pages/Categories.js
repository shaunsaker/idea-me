import styleConstants from '../styleConstants';

const styles = {
    container: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingTop: 92
    },
    categoriesContainer: {
        flex: 1,
        width: '100%',
        overflow: 'auto',
        maxWidth: 720
    },
    categoryItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        marginBottom: 8,
        padding: 16,
        flexWrap: 'wrap',
        backgroundColor: styleConstants.white,
        borderRadius: 16,
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
    },
    categoryTextContainer: {

    },
    categoryText: {
        fontSize: 18,
        flex: 1
    },
    deleteIcon: {
        color: styleConstants.grey,
        backgroundColor: styleConstants.white,
        padding: 8,
        borderRadius: '50%',
        fontSize: 41,
        marginLeft: 16,
        minWidth: 41,
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
    }
};

export default styles;
