import { receiveSteps, reducer, initialState } from "./steps";

const step = {
  "1": {
    id: 1,
    recipe: 1,
    step: "new step",
  },
};

test("action of type RECEIVE_STEPS should be dispatched", () => {
  const action = receiveSteps(step);
  expect(action.type).toBe("RECEIVE_STEPS");
});

test("reducer should return default state if weird action is dipatched", () => {
  const action = { type: "ASDF", payload: step };
  const state = reducer(initialState, action);
  expect(state).toStrictEqual(initialState);
});

test("reducer should return new state if RECEIVE_STEPS is dispatched", () => {
  const action = { type: "RECEIVE_STEPS", payload: step };
  const state = reducer(initialState, action);
  expect(state).toStrictEqual(step);
});
