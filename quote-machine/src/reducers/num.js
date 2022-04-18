export const numReducer = (state = 0, action) => {
  switch (action.type) {
    case 'NUM':
      return action.num;
    default:
      return state;
  }
};