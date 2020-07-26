import { receiveMedias, reducer, initialState } from "./medias";

const media = {
  "1": {
    media_type: "IMG",
    media: "new urls",
    recipe: 1,
    id: 1,
  },
};

test("receiveMedias should dispatch action with type RECEIVE_MEDIA", () => {
  const action = receiveMedias(media);
  expect(action.type).toBe("RECEIVE_MEDIA");
});

test("reducer should return default state is weird action type is dispatched", () => {
  const action = { type: "ASDF", payload: media };
  const state = reducer(initialState, action);
  expect(state).toStrictEqual(initialState);
});

test("reducer should return new state if RECEIVE_MEDIA is dispatched", () => {
  const action = { type: "RECEIVE_MEDIA", payload: media };
  const state = reducer(initialState, action);
  expect(state).toStrictEqual(media);
});
