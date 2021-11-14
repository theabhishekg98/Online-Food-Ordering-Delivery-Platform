import * as actions from '../actions/actionsTypes'

const setUser = (user)=>{
       console.log("inside the set user",user);
       return {
            type: actions.LOGIN,
            payload: user
        }
}

const doLogoutUser = ()=>{
    return {
            type: actions.LOGOUT,
            payload: {}
        }
}

export {setUser,doLogoutUser as default};
