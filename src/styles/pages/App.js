import styleConstants from '../styleConstants'; import Prefixer from 'inline-style-prefixer';

const styles = {
    container: {
        height: '100vh',
        backgroundColor: styleConstants.blue,
        paddingLeft: 16,
        paddingRight: 16,
        position: 'relative',
        overflow: 'hidden'
    },
};

const prefixer = new Prefixer(); const prefixedStyle = prefixer.prefix(styles); export default prefixedStyle;
