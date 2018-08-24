// import React from "react";
const initialState = {
  username: "",
  userId: 0,
  profile: ""
};

const DISPLAY_USER = "DISPLAY_USER";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_USER: {
      return Object.assign({}, state, {
        userId: action.payload.userId,
        username: action.payload.username,
        profile: action.payload.profile
      });
    }
    default:
      return state;
  }
}

export function displayUser(username, userId, profile) {
  console.log(username, userId, profile);
  return {
    type: DISPLAY_USER,
    payload: {
      username,
      userId,
      profile
    }
  };
}
