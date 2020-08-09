import { receiveRecipes, reducer } from "./recipes";

const recipe = {
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

test("action with type of RECEIVE_RECIPES should be dispatched when receiveRecipes is called", () => {
  const action = receiveRecipes(recipe);
  expect(action.type).toBe("RECEIVE_RECIPES");
});

test("reducer should return new state containing action's payload", () => {
  const action = { type: "RECEIVE_RECIPES", payload: recipe };
  const state = reducer(recipe, action);
  expect(state).toStrictEqual(recipe);
});
