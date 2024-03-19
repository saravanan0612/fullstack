// actions.js
export const SET_MOBILE_NUMBER = 'SET_MOBILE_NUMBER';

export const setMobileNumber = (number) => ({
  type: SET_MOBILE_NUMBER,
  payload: number,
});
