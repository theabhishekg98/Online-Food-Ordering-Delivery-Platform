const loggedReducer = (state = { username: '', email: ''}, action) => {
    switch (action.type) {
      case 'LOG_IN':
        // eslint-disable-next-line no-param-reassign
        state = { email: action.payload};
        return state;
      case 'SIGN_IN':
        // eslint-disable-next-line no-param-reassign
        state = { username: action.payload, email: action.email};
        return state;
      default:
        return state;
    }
  };
  
  export default loggedReducer;