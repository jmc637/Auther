import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const LOGIN = 'SET_USER';
const LOGOUT = 'LOGOUT';


/* ------------   ACTION CREATORS     ------------------ */

const login  = user => ({ type: LOGIN, user });

const logout = () => ({type: LOGOUT})

/* ------------       REDUCER     ------------------ */

export default function reducer (user = {}, action) {
  switch (action.type) {

    case LOGIN:
      return action.user;
    
    case LOGOUT:
      return {};

    default:
      return user;
  }
}


/* ------------       DISPATCHERS     ------------------ */

export const getUser = (email, password) => dispatch => {
  axios.post('/login', {email, password})
    .then(res => { 
        dispatch(login(res.data));
    }).catch(err => console.error(`Logging in user unsuccesful`, err));
};

export const getUserSignUp = (email, password) => dispatch => {
  axios.post('/signUp', {email, password})
    .then(res => { 
        dispatch(login(res.data));
    }).catch(err => console.error(`Signing up user unsuccesful`, err));
};

export const logoutUser = () => dispatch => {
  axios.post('/logout')
    .then(res => { 
        dispatch(logout());
    }).catch(err => console.error(`Logging out user unsuccesful`, err));
}