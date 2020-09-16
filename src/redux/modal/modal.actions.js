import ConstantActionTypes from './modal.constants';

export const showModal = () => ({ type: ConstantActionTypes.SHOW_MODAL });
export const isLoading = () => ({ type: ConstantActionTypes.IS_LOADING });
export const closeModal = () => ({ type: ConstantActionTypes.CLOSE_MODAL });
