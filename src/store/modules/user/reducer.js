import { ADD_COMMENT } from "./actionTypes";

const initialState = { name: "Kenzie", comments: [] };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      // Lembre de fluxo da aula anterior, essa action chega aqui depois de passar pelo thunks
      return action.updatedUser;
    default:
      return state;
  }
};

export default userReducer;
