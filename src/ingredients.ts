import { retrieveRecipe } from "./recipes";

export interface Ingredient {
  id: number;
  group: number;
  name: string;
  unit: string;
  amount: string;
  note: string;
  isDone: boolean;
}

export interface IngredientState {
  [ingredientId: string]: Ingredient;
}

export interface ReceiveAction {
  type: string;
  payload: IngredientState;
}

export interface ToggleAction {
  type: string;
  payload: number;
}

export const initialState: IngredientState = {
  "1": {
    id: 1,
    group: 1,
    name: "",
    unit: "",
    amount: "",
    note: "",
    isDone: false,
  },
};

export const receiveIngredients = (
  ingredients: IngredientState,
): ReceiveAction => ({
  type: "RECEIVE_INGREDIENT",
  payload: ingredients,
});

export const toggleIngredient = (id: number): ToggleAction => ({
  type: "TOGGLE_INGREDIENT",
  payload: id,
});

export const reducer = (
  state = initialState,
  action: ReceiveAction | ToggleAction,
): IngredientState => {
  switch (action.type) {
    case "RECEIVE_INGREDIENT":
      // @ts-ignore
      return { ...state, ...action.payload };
    case "TOGGLE_INGREDIENT":
      const ing = {
        ...state[String(action.payload)],
        isDone: !Boolean(state[String(action.payload)].isDone),
      };
      return { ...state, [ing.id]: ing };
    default:
      return state;
  }
};
