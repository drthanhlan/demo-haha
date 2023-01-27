/*
export function someMutation (state) {
}
*/
export const updateDrawerState = (state, opened) => {
  state.drawerState = !opened;
};

export const SET_DATA_LOGIN = (state, object) => {
  state.isLogin = object.isLogin;
  state.userName = object.userName;
  state.nameOfUser = object.nameOfUser;
};
