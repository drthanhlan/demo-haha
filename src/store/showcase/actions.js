/*
export function someAction (context) {
}
*/
export function setData(context, object) {
  context.commit("SET_DATA_LOGIN", object);
}
