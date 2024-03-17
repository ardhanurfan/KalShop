import { HistoryAction, HistoryActionType, HistoryModel } from "./types";

const HistoryReducers = (
  state: HistoryModel = { histories: [] },
  action: Readonly<HistoryAction>
): HistoryModel => {
  switch (action.type) {
    case HistoryActionType.ADD_ITEM_HISTORY:
      if (action.payload) {
        console.log(action.payload);
        return {
          ...state,
          histories: [...state.histories, action.payload],
        };
      }
      return state;
    default:
      return state;
  }
};

export { HistoryReducers };
