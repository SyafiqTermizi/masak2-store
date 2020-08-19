import axios from "axios";
import { store } from "./index";
import { normalize } from "normalizr";
import { Dispatch } from "redux";

import { recipes as recipesSchema, recipe as recipeSchema } from "./normalizer";
import { receiveMedias, initialState as initialMedia } from "./medias";
import { receiveGroups, initialState as initialGroup } from "./groups";
import { receiveSteps, initialState as initialStep } from "./steps";
import {
  receiveIngredients,
  initialState as initialIngredient,
} from "./ingredients";

export interface Recipe {
  id: number;
  name: string;
  description: string;
  rating: number;
  difficulty: number;
  created_by: string;
  groups: number[];
  medias: number[];
  steps: number[];
}

export interface RecipeState {
  [recipeId: string]: Recipe;
}

export interface Action {
  type: string;
  payload: RecipeState;
}

const initialState = {
  "1": {
    id: 1,
    name: "",
    description: "",
    rating: 1,
    difficulty: 1,
    created_by: "",
    groups: [],
    medias: [],
    steps: [],
  },
};

export const receiveRecipes = (recipes: RecipeState) => ({
  type: "RECEIVE_RECIPES",
  payload: recipes,
});

export const retrieveRecipes = () => (dispatch: Dispatch) => {
  const searchParam = store.getState().search.searchTerm;
  const tagFilter = store.getState().tag.selectedTagName;
  let url = `http://localhost:8000/api/recipes?q=${searchParam}&t=${tagFilter}`;

  return axios.get(url).then((res) => {
    const { recipe, media, group, ingredient, step } = normalize(
      res.data,
      recipesSchema,
    ).entities;
    dispatch(receiveMedias(media || initialMedia));
    dispatch(receiveGroups(group || initialGroup));
    dispatch(receiveIngredients(ingredient || initialIngredient));
    dispatch(receiveSteps(step || initialStep));
    return dispatch(receiveRecipes(recipe || initialState));
  });
};

export const retrieveRecipe = (id: number) => (dispatch: Dispatch) => {
  return axios.get(`http://localhost:8000/api/recipes/${id}`).then((res) => {
    const { recipe, media, group, ingredient, step } = normalize(
      res.data,
      recipeSchema,
    ).entities;
    dispatch(receiveMedias(media || initialMedia));
    dispatch(receiveGroups(group || initialGroup));
    dispatch(receiveIngredients(ingredient || initialIngredient));
    dispatch(receiveSteps(step || initialStep));
    return dispatch(receiveRecipes(recipe || initialState));
  });
};

export const reducer = (state = initialState, action: Action): RecipeState => {
  switch (action.type) {
    case "RECEIVE_RECIPES":
      return { ...action.payload };
    default:
      return state;
  }
};
