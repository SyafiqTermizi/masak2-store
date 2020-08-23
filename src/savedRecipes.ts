import axios from "axios";
import { AxiosInstance } from "axios";
import { Dispatch } from "redux";

export interface SavedRecipes {
  id: number;
  user: number;
  recipes: number[];
}

interface Action {
  type: string;
  payload: any;
}

export const receiveSavedRecipes = (savedRecipes: SavedRecipes): Action => ({
  type: "RECEIVE_SAVED_RECIPES",
  payload: savedRecipes,
});

export const retrieveSavedRecipes = (userId: number) => (
  dispatch: Dispatch,
) => {
  return axios
    .get(`${window.API_BASE_URL}/savedrecipes/${userId}`)
    .then((res) => dispatch(receiveSavedRecipes(res.data)));
};

export const addSavedRecipe = (
  axiosParam: AxiosInstance,
  userId: number,
  recipeId: number,
) => (dispatch: Dispatch) => {
  axiosParam
    .put(`/savedrecipes/${userId}`, {
      recipe_id: recipeId,
    })
    .then((res) => dispatch(receiveSavedRecipes(res.data)));
};

export const removeSavedRecipe = (
  axiosParam: AxiosInstance,
  userId: number,
  recipeId: number,
) => (dispatch: Dispatch) => {
  axiosParam
    .delete(`/savedrecipes/${userId}`, { data: { recipe_id: recipeId } })
    .then((res) => dispatch(receiveSavedRecipes(res.data)));
};

const initialState: SavedRecipes = {
  id: 0,
  user: 0,
  recipes: [],
};

export const reducer = (state = initialState, action: Action): SavedRecipes => {
  switch (action.type) {
    case "RECEIVE_SAVED_RECIPES":
      return action.payload;
    default:
      return state;
  }
};
