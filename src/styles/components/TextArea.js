import styleConstants from '../styleConstants'; import Prefixer from 'inline-style-prefixer';

const styles = {
    textarea: {
        borderRadius: 20,
        width: 280,
        height: 200,
        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.12), inset 0 1px 2px rgba(0,0,0,0.24)',
        marginBottom: 16,
        fontSize: 16,
    }
};

const prefixer = new Prefixer(); const prefixedStyle = prefixer.prefix(styles); export default prefixedStyle;
