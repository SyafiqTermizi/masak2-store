import axios from "axios";
import { AxiosInstance } from "axios";
import { Dispatch } from "redux";

export interface MadeRecipes {
  id: number;
  user: number;
  recipes: number[];
}

interface Action {
  type: string;
  payload: any;
}

export const receiveMadeRecipes = (madeRecipes: MadeRecipes): Action => ({
  type: "RECEIVE_MADE_RECIPES",
  payload: madeRecipes,
});

export const retrieveMadeRecipes = (userId: number) => (dispatch: Dispatch) => {
  return axios
    .get(`${window.API_BASE_URL}/maderecipes/${userId}`)
    .then((res) => dispatch(receiveMadeRecipes(res.data)));
};

export const addMadeRecipe = (
  axiosParam: AxiosInstance,
  userId: number,
  recipeId: number,
) => (dispatch: Dispatch) => {
  axiosParam
    .put(`/maderecipes/${userId}`, {
      recipe_id: recipeId,
    })
    .then((res) => dispatch(receiveMadeRecipes(res.data)));
};

export const removeMadeRecipe = (
  axiosParam: AxiosInstance,
  userId: number,
  recipeId: number,
) => (dispatch: Dispatch) => {
  axiosParam
    .delete(`/maderecipes/${userId}`, { data: { recipe_id: recipeId } })
    .then((res) => dispatch(receiveMadeRecipes(res.data)));
};

const initialState: MadeRecipes = {
  id: 0,
  user: 0,
  recipes: [],
};

export const reducer = (state = initialState, action: Action): MadeRecipes => {
  switch (action.type) {
    case "RECEIVE_MADE_RECIPES":
      return action.payload;
    default:
      return state;
  }
};
