import axios from "axios";
import {
    fetchingInProgress,
    fetchingSuccess,
    fetchingError,
} from "./contactSlice";

axios.defaults.baseURL = "https://63c683234ebaa80285476130.mockapi.io";
export const fetchTasks = () => async dispatch => {
    try {
        dispatch(fetchingInProgress());
        const response = await axios.get("/contacts");
        dispatch(fetchingSuccess(response.data));
    } catch (e) {
        dispatch(fetchingError(e.message));
    }
};