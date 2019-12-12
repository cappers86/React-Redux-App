import axios from "axios";
import actionCreators, {FETCH_DATA_START,FETCH_DATA_SUCCESS,FETCH_DATA_FAIL} from './actionCreators';


export const getUser = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios
      .get(`https://api.github.com/users/cappers86`)
      .then(res => dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: FETCH_DATA_FAIL, payload: err }));
  };