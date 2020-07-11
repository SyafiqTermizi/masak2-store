export interface Group {
  id: number;
  name: string;
  recipe: number;
  ingredients: number[];
}

export interface GroupState {
  [groupId: string]: Group;
}

export interface GroupAction {
  type: string;
  payload: GroupState;
}

export const initialState: GroupState = {
  "1": {
    id: 1,
    name: "",
    recipe: 1,
    ingredients: [],
  },
};

export const receiveGroups = (groups: GroupState): GroupAction => ({
  type: "RECEIVE_GROUP",
  payload: groups,
});

export const reducer = (
  state = initialState,
  action: GroupAction,
): GroupState => {
  switch (action.type) {
    case "RECEIVE_GROUP":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
