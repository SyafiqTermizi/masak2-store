import { receiveMadeRecipes, reducer } from "./madeRecipes";

const madeRecipes = {
  id: 1,
  user: 1,
  recipes: [1],
};

test("action of type RECEIVE_MADE_RECIPES should be dispatched when receiveMadeRecipes is called", () => {
  const action = receiveMadeRecipes(madeRecipes);

  expect(action.type).toBe("RECEIVE_MADE_RECIPES");
  expect(action.payload).toStrictEqual(madeRecipes);
});

test("reducer should return new state if action of type RECEIVE_MADE_RECIPES is passed", () => {
  const oldState = {
    id: 1,
    user: 1,
    recipes: [1, 2, 3],
  };
  const state = reducer(oldState, {
    type: "RECEIVE_MADE_RECIPES",
    payload: madeRecipes,
  });

  expect(state).toStrictEqual(madeRecipes);
});

test("reducer should return old state if unknown action type is passed", () => {
  const oldState = {
    id: 1,
    user: 1,
    recipes: [1, 2, 3],
  };
  const state = reducer(oldState, {
    type: "UNKNOWN_123",
    payload: madeRecipes,
  });

  expect(state).toStrictEqual(oldState);
});
