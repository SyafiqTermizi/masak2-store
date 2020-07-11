import thunkMiddleware from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";

import { reducer as recipe, RecipeState } from "./recipes";
import { reducer as group, GroupState } from "./groups";
import { reducer as step, StepState } from "./steps";
import { reducer as media, MediaState } from "./medias";
import { reducer as ingredient, IngredientState } from "./ingredients";

export interface StateTree {
  recipe: RecipeState;
  group: GroupState;
  ingredient: IngredientState;
  step: StepState;
  media: MediaState;
}

const reducer = combineReducers({ recipe, group, ingredient, step, media });

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));
