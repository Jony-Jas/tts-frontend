import createDataContext from "./createDataContext";
import api from "../api/api";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return [...state, ...action.payload];
    case "NEW_DATA":
      return [...state.splice(0,state.length-1), action.payload];
    default:
      return state;
  }
};

const sendreq = (dispatch) => {
  return async ({ id, data, sample }) => {
    const res = await api.post("/convert", { id, data, sample });
    console.log(res.data);
    dispatch({ type: "NEW_DATA", payload: { data, voice: res.data } });
  };
};

const addData = (dispatch) => (data) => {
  dispatch({ type: "ADD_DATA", payload: [{ data, voice: "Loading" }] });
};

export const { Provider, Context } = createDataContext(
  reducer,
  {
    sendreq,
    addData,
  },
  [{ data: "", voice: "Loading" }]
);
