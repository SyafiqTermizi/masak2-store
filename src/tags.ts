import axios from "axios";
import { Dispatch } from "redux";

export interface Tag {
  id?: number;
  name: string;
  image?: string;
}

export interface ReceiveAction {
  type: string;
  payload: Tag[];
}

export interface SelectAction {
  type: string;
  payload: string;
}

export const selectTag = (tagName: string): SelectAction => ({
  type: "SELECT_TAG",
  payload: tagName,
});

export const receiveTags = (tags: Tag[]): ReceiveAction => ({
  type: "RECEIVE_TAGS",
  payload: tags,
});

export const retrieveTags = () => (dispatch: Dispatch) => {
  return axios
    .get("http://localhost:8000/api/tags")
    .then((res) => dispatch(receiveTags(res.data)));
};

export interface TagState {
  selectedTagName: string;
  tags: Tag[];
}

const initialState: TagState = {
  selectedTagName: "",
  tags: [],
};

export const reducer = (
  state: TagState = initialState,
  action: any,
): TagState => {
  switch (action.type) {
    case "RECEIVE_TAGS":
      return { ...state, tags: action.payload };
    case "SELECT_TAG":
      return { ...state, selectedTagName: action.payload };
    default:
      return state;
  }
};