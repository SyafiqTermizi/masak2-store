import { receiveTags, selectTag, reducer } from "./tags";

const tags = [
  {
    id: 1,
    name: "tags",
  },
];

const dummyState = {
  selectedTagName: "test",
  tags: [
    {
      id: 1,
      name: "tags",
    },
  ],
};

test("action of types RECEIVE_TAGS should be dispatched when receiveTgas is called", () => {
  const action = receiveTags(tags);
  expect(action.type).toBe("RECEIVE_TAGS");
});

test("action of type SELECT_TAG should be dispatched when selecTag is called", () => {
  const action = selectTag("name");
  expect(action.payload).toBe("name");
  expect(action.type).toBe("SELECT_TAG");
});

test("reducer should return default state if weird action is dispatched", () => {
  const action = {
    type: "WEIRD_ACTIONS",
    payload: [{ id: 2, name: "blergh" }],
  };
  const state = reducer(dummyState, action);
  expect(state.tags[0].name).toBe("tags");
});

test("reducer should replace current state if RECEIVE_TAGS action is dispatched", () => {
  const action = {
    type: "RECEIVE_TAGS",
    payload: [{ id: 2, name: "new state" }],
  };
  const state = reducer(dummyState, action);
  expect(state.tags[0].name).toBe("new state");
});
