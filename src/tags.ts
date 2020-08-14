import axios from "axios";
import { Dispatch } from "redux";

export interface Tag {
  id?: number;
  name: string;
  image?: string;
}

export interface Action {
  type: string;
  payload: Tag[];
}

export const receiveTags = (tags: Tag[]) => ({
  type: "RECEIVE_TAGS",
  payload: tags,
});

export const retrieveTags = () => (dispatch: Dispatch) => {
  return axios
    .get("http://localhost:8000/api/tags")
    .then((res) => dispatch(receiveTags(res.data)));
};

export const reducer = (state: Tag[] = [], action: Action): Tag[] => {
  switch (action.type) {
    case "RECEIVE_TAGS":
      return [...state, ...action.payload];
    default:
      return state;
  }
};
