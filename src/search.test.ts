import { setSearchTerm, clearSearchTerm, reducer } from "./search";

test("action of type SET_SEARCH_TERM should be dispatched when setSearchTerm is called", () => {
  const action = setSearchTerm("search");
  expect(action.type).toBe("SET_SEARCH_TERM");
});

test("action of type CLEAR_SEARCH_TERM should be dispatched when clearSearchTerm is called", () => {
  const action = clearSearchTerm();
  expect(action.type).toBe("CLEAR_SEARCH_TERM");
});

test("reducer should return new search term if action of type SET_SEARCH_TERM is passed as args", () => {
  const action = { type: "SET_SEARCH_TERM", payload: "search term" };
  const state = reducer({ searchTerm: "" }, action);
  expect(state.searchTerm).toBe("search term");
});

test("reducer should return clear search term if action of type CLEAR_SEARCH_TERM is passed as args", () => {
  const action = { type: "CLEAR_SEARCH_TERM" };
  const state = reducer({ searchTerm: "blergh" }, action);
  expect(state.searchTerm).toBe("");
});
