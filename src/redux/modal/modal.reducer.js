import ConstantActionTypes from './modal.constants';


const INITIAL_STATE = {
  modal: false,
  isLoading: false
}

const modalReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ConstantActionTypes.SHOW_MODAL:
      return {
        ...state,
        modal: !state.modal
      }

    case ConstantActionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: true
      }

    case ConstantActionTypes.CLOSE_MODAL:
      return {
        ...state,
        modal: false,
        isLoading: false
      }

    default:
      return state;
  }
}

export default modalReducer;