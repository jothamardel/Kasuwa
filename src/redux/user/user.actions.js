import ConstantActionTypes from './user.constants';

export const mountUser = (user) => ({
  type: ConstantActionTypes.MOUNT_USER,
  payload: user
});

export const unmountUser = () => ({ type: ConstantActionTypes.UNMOUNT_USER });