import { createContext, useEffect, useReducer } from "react";

// Initial state
const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  data: [],
};

// Action types
const actionTypes = {
  SET_LOADING: "SET_LOADING",
  SET_IS_ERROR: "SET_IS_ERROR",
  SET_ERROR: "SET_ERROR",
  SET_DATA: "SET_DATA",
  ADD_DATA: "ADD_DATA", // New action type for adding data
};

// Reducer function

const dataReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case actionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    case actionTypes.SET_IS_ERROR:
      return { ...state, isError: action.payload };
    case actionTypes.SET_DATA:
      return { ...state, data: action.payload };
    case actionTypes.ADD_DATA:
      return { ...state, data: [...state.data, action.payload] }; // Add new data
    default:
      return state;
  }
};

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  //get popular item using fetch request
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: actionTypes.SET_IS_ERROR, payload: false });
        dispatch({ type: actionTypes.SET_ERROR, payload: "" });
        dispatch({ type: actionTypes.SET_LOADING, payload: true });

        const response = await fetch(
          `http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10`
        );

        const data = await response.json();
        if (data?.Items) {
          dispatch({ type: actionTypes.SET_DATA, payload: data?.Items });
        }
      } catch (error) {
        dispatch({ type: actionTypes.SET_IS_ERROR, payload: true });
        dispatch({ type: actionTypes.SET_ERROR, payload: error.message });
        dispatch({ type: actionTypes.SET_LOADING, payload: false });
      }
    };

    fetchData();
  }, []);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider, actionTypes };
