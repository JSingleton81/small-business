import { combineReducers } from "redux";

const user = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":

      return {
        ...state,
        username: action.payload
      };

    default:
      return state;
  }
};

const businesses = (state = [], action) => {
  switch (action.type) {
    case "ADD_BUSINESS":
      return [...state, action.payload];

    case "DELETE_LISTING":
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;

    case "FETCH_COORDINATES_SUCCESS":
      return state.map((business) =>
        business.id === action.payload.id
          ? { ...business, coordinates: action.payload.coordinates }
          : business
      );

    case "FETCH_COORDINATES_FAILURE":
      console.error("Failed to fetch coordinates:", action.payload);
      return state;

    case "SET_USER":
      return action.payload;

    case "LOGOUT":
      return null;

    default:
      return state;
  }
};

export default combineReducers({ user, businesses });
