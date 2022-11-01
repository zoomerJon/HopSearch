import { type } from "@testing-library/user-event/dist/type";

const activeTagReducer = (state, action) => {
  switch (action.type) {
    case "SET_TAG":
      const newState = state.map((arrOpt) => {
        // console.log(Object.keys(arrOpt)[0]);
        // console.log(Object.values(arrOpt)[0]);
        return Object.keys(arrOpt)[0] === action.payload.filter
          ? {
              [action.payload.filter]: [
                ...Object.values(arrOpt),
                action.payload.tag,
              ].flatMap((el) => el),
            }
          : arrOpt;
      });
      // console.log(Object.keys(state[0])[0] === "Campus");
      // console.log(state[0]);
      // console.log(newState.map((obj) => Object.values(obj)).flat(2));

      // console.log(action.payload.tag);

      return newState;
    case "REMOVE_TAG":
      const newArr = state.map((arrOpt) => {
        // console.log(Object.keys(arrOpt)[0]);
        // console.log(action.payload.filter);
        // console.log(Object.keys(arrOpt)[0] === action.payload.filter);
        // console.log(
        //   Object.values(arrOpt)[0].filter((tag) => tag !== action.payload.tag)
        // );

        return Object.keys(arrOpt)[0] === action.payload.filter
          ? {
              [action.payload.filter]: [
                Object.values(arrOpt)[0].filter(
                  (tag) => tag !== action.payload.tag
                ),
              ].flatMap((el) => el),
            }
          : arrOpt;
        // return state.filter((tag) => tag !== action.payload.tag);
      });

      return newArr;

    case "CLEAR_ALL_TAGS":
      return action.payload.initialState;
    case "CLEAR_LOCAL_TAGS":
      const clearLocalTagsState = state.map((arrOpt) => {
        // console.log(Object.keys(arrOpt)[0]);
        // console.log(Object.values(arrOpt)[0]);
        return Object.keys(arrOpt)[0] === action.payload.filter
          ? {
              [action.payload.filter]: [],
            }
          : arrOpt;
      });
      return clearLocalTagsState;
    default:
      return state;
  }
};

export default activeTagReducer;
