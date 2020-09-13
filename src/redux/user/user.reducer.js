import ConstantActionTypes from './user.constants';


const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action = {}) => {

  switch (action.type) {
    case ConstantActionTypes.MOUNT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    case ConstantActionTypes.UNMOUNT_USER:
      return {
        ...state,
        currentUser: null
      }
    default:
      return state;
  }
}

export default userReducer;