const initiatlState = 0;

const changeTheNumber = (state = initiatlState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECEREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default changeTheNumber;
