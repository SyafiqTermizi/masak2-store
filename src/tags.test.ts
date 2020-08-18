import { receiveTags, reducer } from "./tags";

const dummyState = [
  {
    id: 1,
    name: "tags",
  },
];

test("action of types RECEIVE_TAGS should be dispatched when receiveTgas is called", () => {
  const action = receiveTags(dummyState);
  expect(action.type).toBe("RECEIVE_TAGS");
});

test("reducer should return default state if weird action is dispatched", () => {
  const action = {
    type: "WEIRD_ACTIONS",
    payload: [{ id: 2, name: "blergh" }],
  };
  const state = reducer(dummyState, action);
  expect(state[0].name).toBe("tags");
});

test("reducer should replace current state if RECEIVE_TAGS action is dispatched", () => {
  const action = {
    type: "RECEIVE_TAGS",
    payload: [{ id: 2, name: "new state" }],
  };
  const state = reducer(dummyState, action);
  expect(state[0].name).toBe("new state");
});
