import { createContext, useContext, useState } from "react";
import axios, { Axios } from "axios";

const BASE_URL = 'http://localhost:5000/api';

const GlobalContext = createContext()


export const GlobalProvider = ({ children }) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    const addIncomes = async (incomes) => {
        try {
            const response = await axios.post(`${BASE_URL}/add-income`,  incomes)
        } catch (error) {
            setError(error);
        }
    }

    return (
        <GlobalContext.Provider value={addIncomes} >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}