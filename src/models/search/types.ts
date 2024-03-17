enum SearchActionType {
  SET_SEARCH = "SET_SEARCH",
}

type SearchAction = {
  type: SearchActionType.SET_SEARCH;
  payload?: string;
};

export { SearchActionType };
export type { SearchAction };
