export interface Step {
  id: number;
  recipe: number;
  step: string;
}

export interface StepState {
  [stepId: string]: Step;
}

export interface StepAction {
  type: string;
  payload: StepState;
}

export const initialState = {
  "1": {
    id: 1,
    recipe: 1,
    step: "",
  },
};

export const receiveSteps = (steps: StepState): StepAction => ({
  type: "RECEIVE_STEPS",
  payload: steps,
});

export const reducer = (
  state = initialState,
  action: StepAction,
): StepState => {
  switch (action.type) {
    case "RECEIVE_STEPS":
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
