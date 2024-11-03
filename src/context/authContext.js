import { Children, createContext, useEffect, useReducer } from 'react';

export const authContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN' :
            return {
                user: action.payload
            }
        case 'LOGOUT' : 
            return {
                user: null
            }
        case 'RESET PASS' :
            return {
                userVerification: action.payload
            }
        default:
            return state
    }
}


export const AuthContextProvider = ({ children }) => {

    const initialState = {
        user: JSON.parse(localStorage.getItem("user")),
        userVerification: JSON.parse(localStorage.getItem("userVerification")),
    };

    const [state, dispatch] = useReducer(authReducer, initialState)

    console.log('AuthContext state: ', state);
    

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        const userVerification = JSON.parse(localStorage.getItem('userVerification'))

        if (user) {
            dispatch({type: 'LOGIN', payload:user})
        }
        if (userVerification) {
            dispatch({type: 'RESET PASS', payload:userVerification})
        }
    }, [])

    return (
        <authContext.Provider value={{...state, dispatch}}>
            { children }
        </authContext.Provider>
    )
} 