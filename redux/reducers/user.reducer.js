//import actions Types
import * as Actions from "../actions/index";
//declare initialState variables
const initialState = {
  loading: false,
  getUser: [],
  addUser: [],
  userId: "",
};

const albums = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_USER_LOAD: {
      return {
        ...state,
        loading: true,
      };
    }

    //get user Types and return statement
    case Actions.GET_USER: {
      return {
        ...state,
        getUser: action?.payload,
        loading: true,
      };
    }
    // add Types and return statement
    case Actions.ADD_USER: {
      return {
        ...state,
        addUser: state.getUser.push(action.payload),
        loading: true,
      };
    }
    //delete Types and return statement
    case "DELETE_USER": {
      const existingUser = state.getUser.find(
        (user) => user.id === action.payload
      );
      if (existingUser) {
        state.getUser = state.getUser.filter(
          (user) => user.id !== action.payload
        );
      }
      return {
        ...state,
        loading: true,
      };
    }
    //update  Types and return statement
    case Actions.UPDATE_USER: {
      const { id, name, email } = action.payload;
      const existingUser = state.getUser.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
      return {
        ...state,
        loading: true,
      };
    }
    //store user id for update user
    case "USER_ID": {
      return {
        ...state,
        userId: action.payload,
        loading: true,
      };
    }

    case Actions.USER_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};
export default albums;
