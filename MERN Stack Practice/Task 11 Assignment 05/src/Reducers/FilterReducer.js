export const FilterReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SELECT":
      const { section, value } = action.payload;
      return {
        ...state,
        [section]: state[section] === value ? null : value,
      };

    case "RESET_SELECT":
      return action.payload;

    default:
      return state;
  }
};
