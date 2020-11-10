export const initialState = {
  user: null,
  token: null,
  quizScore: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_QUIZ_SCORE":
      return {
        ...state,
        quizScore: action.quizScore,
      };
    default:
      return state;
  }
};

export default reducer;
