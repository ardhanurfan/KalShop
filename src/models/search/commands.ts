import { SearchAction, SearchActionType } from "./types";

const SearchCommand = {
  setSearch: (keyword: string): SearchAction => {
    return {
      type: SearchActionType.SET_SEARCH,
      payload: keyword,
    };
  },
};

export { SearchCommand };
