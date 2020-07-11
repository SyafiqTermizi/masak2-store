export interface Media {
  media_type: string;
  media: string;
}

export interface MediaState {
  [mediaId: string]: Media;
}

export interface MediaAction {
  type: string;
  payload: MediaState;
}

export const initialState: MediaState = {
  "1": {
    media_type: "",
    media: "",
  },
};

export const receiveMedias = (medias: MediaState): MediaAction => ({
  type: "RECEIVE_MEDIA",
  payload: medias,
});

export const reducer = (
  state = initialState,
  action: MediaAction,
): MediaState => {
  switch (action.type) {
    case "RECEIVE_MEDIA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
