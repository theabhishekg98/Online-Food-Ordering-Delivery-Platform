const logged = (email) => ({
    type: 'LOG_IN',
    payload: email,
    // email: emailaddress
  });
  
  const signed = (username = '', emailaddress = '') => ({
    type: 'SIGN_IN',
    payload: username,
    email: emailaddress,
  });
  
  export { signed, logged as default };