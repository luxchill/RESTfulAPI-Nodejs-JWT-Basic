import axios from "axios"
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "./authSlice"
import { deleteUserFailed, deleteUserStart, deleteUserSuccess, getUsersFailed, getUsersStart, getUsersSuccess } from "./userSlice"

export const loginUser =  async(user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await axios.post("http://localhost:6789/luxchill/auth/login", user)
        dispatch(loginSuccess(res.data)) 
        navigate("/")
    } catch (err) {
        dispatch(loginFailed())
    }
}

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart())

    try {
        await axios.post("http://localhost:6789/luxchill/auth/register", user)
        dispatch(registerSuccess())
        navigate('/login')
    } catch (err) {
        dispatch(registerFailed())
    }
}

export const getAllUser = async (accessToken, dispatch) => {
    dispatch(getUsersStart())
    try {
        const res = await axios.get("http://localhost:6789/luxchill/user/", {
            headers:{token: `Bearer ${accessToken}`}
        })

        dispatch(getUsersSuccess(res.data))
    } catch (err) {
        dispatch(getUsersFailed())
    }
}


export const deleteUser = async(accessToken, dispatch, id) => {
    dispatch(deleteUserStart())
    try {
        const res = await axios.delete("http://localhost:6789/luxchill/user/"+id, {
            headers:{token: `Bearer ${accessToken}`}
        })
        dispatch(deleteUserSuccess(res.data))
    } catch (err) {
        dispatch(deleteUserFailed(err.response.data))
    }
}

