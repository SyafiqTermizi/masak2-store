import { receiveSavedRecipes, reducer } from "./savedRecipes";

const savedRecipes = {
  id: 1,
  user: 1,
  recipes: [1],
};

test("action of type RECEIVE_SAVED_RECIPES should be dispatched when receiveSavedRecipes is called", () => {
  const action = receiveSavedRecipes(savedRecipes);

  expect(action.type).toBe("RECEIVE_SAVED_RECIPES");
  expect(action.payload).toStrictEqual(savedRecipes);
});

test("reducer should return new state if action of type RECEIVE_SAVED_RECIPES is passed", () => {
  const oldState = {
    id: 1,
    user: 1,
    recipes: [1, 2, 3],
  };
  const state = reducer(oldState, {
    type: "RECEIVE_SAVED_RECIPES",
    payload: savedRecipes,
  });

  expect(state).toStrictEqual(savedRecipes);
});

test("reducer should return old state if unknown action type is passed", () => {
  const oldState = {
    id: 1,
    user: 1,
    recipes: [1, 2, 3],
  };
  const state = reducer(oldState, {
    type: "UNKNOWN_123",
    payload: savedRecipes,
  });

  expect(state).toStrictEqual(oldState);
});
