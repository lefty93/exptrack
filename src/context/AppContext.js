import { createContext, useReducer } from "react"

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };

        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            };

        case 'SET_INCOME':
            return {
                ...state,
                income: action.payload
            }
        default:
            return state;
    }
};

const initialState = {
    income: 0,
    expenses: [],
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return <AppContext.Provider
        value={{
            income: state.income,
            expenses: state.expenses,
            dispatch,
        }}>
        {props.children}
    </AppContext.Provider>
}



