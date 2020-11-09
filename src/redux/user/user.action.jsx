import {userActions} from './user.types'

const {SET_CURRENT_USER} = userActions

export const setCurrentUser = (user)=>({
    type: SET_CURRENT_USER,
    payload: user
})