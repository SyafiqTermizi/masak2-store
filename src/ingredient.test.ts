import { receiveIngredients, toggleIngredient, reducer } from "./ingredients";

const ingredient = {
  "1": {
    id: 1,
    group: 1,
    name: "name",
    unit: "kg",
    amount: "1",
    note: "",
    isDone: false,
  },
};

test("action of types RECEIVE_INGREDIENT should be dispatched when receiveIngredients is called", () => {
  const action = receiveIngredients(ingredient);
  expect(action.type).toBe("RECEIVE_INGREDIENT");
});

test("action of types TOGGLE_INGREDIENT should be dispatched when toggleIngredient is called", () => {
  const action = toggleIngredient(1);
  expect(action.type).toBe("TOGGLE_INGREDIENT");
});

test("reducer should add new ingredient to the state when RECEIVE_INGREDIENT is dispatched", () => {
  const action = { type: "RECEIVE_INGREDIENT", payload: ingredient };
  const state = reducer(ingredient, action);
  expect(state).toStrictEqual(ingredient);
});

test("dispatching TOGGLE_INGREDIENT, should toggle ingredient.isDone", () => {
  const action = { type: "RECEIVE_INGREDIENT", payload: ingredient };
  const state = reducer(ingredient, action);
  expect(state["1"].isDone).toBeFalsy();

  const toggleAction = { type: "TOGGLE_INGREDIENT", payload: 1 };
  const newState = reducer(ingredient, toggleAction);
  expect(newState["1"].isDone).toBeTruthy();
});
