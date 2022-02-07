import { createContext } from "react";
import { useState } from "react";

const Context = createContext()

function AuthProvider({ children }) {
    const [token, setToken] = useState('')
    const [userData, setUserData] = useState({
        name: ''
    })
    const [transactions, setTransactions] = useState([])

    return(
        <Context.Provider value={{ token, setToken, userData, setUserData, transactions, setTransactions}}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider}

