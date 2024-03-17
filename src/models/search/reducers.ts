import { SearchAction, SearchActionType } from "./types";

const SearchReducer = (
  state: string = "",
  action: Readonly<SearchAction>
): string => {
  switch (action.type) {
    case SearchActionType.SET_SEARCH:
      return action.payload || "";
    default:
      return state;
  }
};

export { SearchReducer };
