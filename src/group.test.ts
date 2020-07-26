import { receiveGroups, initialState, reducer } from "./groups";

const group = {
  "1": {
    id: 1,
    name: "new state",
    recipe: 1,
    ingredients: [1],
  },
};

it("should dispatch an action with type RECEIVE_GROUP", () => {
  const res = receiveGroups(group);
  expect(res.type).toBe("RECEIVE_GROUP");
});

test("reducer should return default state when wrong action is dispatched", () => {
  const action = { type: "ASDF", payload: group };
  const state = reducer(initialState, action);
  expect(state).toBe(initialState);
});

test("reducer should return new state when RECEIVE_GROUP action type is dispatched", () => {
  const action = { type: "RECEIVE_GROUP", payload: group };
  const state = reducer(initialState, action);
  expect(state).toStrictEqual(group);
});
