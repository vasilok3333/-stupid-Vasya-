import { updateMessageTextCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
    messagesPage:state.messagesPage 
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChange: (text) => {
            dispatch(updateMessageTextCreator(text));
        },
        addMessage: () => { dispatch(sendMessageCreator()); }
    
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;