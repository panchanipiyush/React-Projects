const initialState = {
  count: 0,
};
const changMode = (state = initialState, action) => {
  switch (action.type) {
    case "DARKMODE":
      return {};
    case "LIGHTMODE":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default changMode;
