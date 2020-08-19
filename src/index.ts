import thunkMiddleware from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";

import { reducer as recipe, RecipeState } from "./recipes";
import { reducer as group, GroupState } from "./groups";
import { reducer as step, StepState } from "./steps";
import { reducer as media, MediaState } from "./medias";
import { reducer as ingredient, IngredientState } from "./ingredients";
import { reducer as search, SearchState } from "./search";
import { reducer as tag, TagState } from "./tags";

export interface StateTree {
  recipe: RecipeState;
  group: GroupState;
  ingredient: IngredientState;
  step: StepState;
  media: MediaState;
  search: SearchState;
  tag: TagState[];
}

const reducer = combineReducers({
  recipe,
  group,
  ingredient,
  step,
  media,
  search,
  tag,
});

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));
