import ConstantActionTypes from './modal.constants';


const INITIAL_STATE = {
  modal: false
}

const modalReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ConstantActionTypes.SHOW_MODAL:
      return {
        ...state,
        modal: !state.modal
      }

    case ConstantActionTypes.CLOSE_MODAL:
      return {
        ...state,
        modal: false
      }

    default:
      return state;
  }
}

export default modalReducer;