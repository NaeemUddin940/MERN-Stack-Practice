export const FilterReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FILTER":
      const { section, value } = action.payload;
      return {
        ...state,
        [section]: state[section] === value ? null : value,
      };

    case "RESET_FILTER":
      return action.payload;

    default:
      return state;
  }
};
