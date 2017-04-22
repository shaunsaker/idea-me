import styleConstants from '../styleConstants'; import Prefixer from 'inline-style-prefixer';

const styles = {
    container: {
        display: 'flex',
        height: '100%',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        paddingTop: 92
    },
    inputArea: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

const prefixer = new Prefixer(); const prefixedStyle = prefixer.prefix(styles); export default prefixedStyle;
