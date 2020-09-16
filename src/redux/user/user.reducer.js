import ConstantActionTypes from './user.constants';


const INITIAL_STATE = {
  currentUser: null,
  businessDetails: null
}

const userReducer = (state = INITIAL_STATE, action = {}) => {

  switch (action.type) {
    case ConstantActionTypes.MOUNT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    case ConstantActionTypes.GET_BUSINESS_DETAILS:
      return {
        ...state,
        businessDetails: action.payload
      }
    case ConstantActionTypes.UNMOUNT_USER:
      return {
        ...state,
        currentUser: null,
        businessDetails: null
      }
    default:
      return state;
  }
}

export default userReducer;