export interface Search {
  searchTerm: string;
}

export interface SearchState {
  searchTerm: string;
}

export interface SearchAction {
  type: string;
  payload?: string;
}

export const initialState = {
  searchTerm: "",
};

export const setSearchTerm = (term: string) => ({
  type: "SET_SEARCH_TERM",
  payload: term,
});

export const clearSearchTerm = () => ({
  type: "CLEAR_SEARCH_TERM",
});

export const reducer = (
  state = initialState,
  action: SearchAction,
): SearchState => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return { searchTerm: action.payload || "" };
    case "CLEAR_SEARCH_TERM":
      return { searchTerm: "" };
    default:
      return state;
  }
};
