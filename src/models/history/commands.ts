import { HistoryActionType, HistoryItem } from "./types";

const HistoryCommand = {
  addItem: (item: HistoryItem) => {
    return {
      type: HistoryActionType.ADD_ITEM_HISTORY,
      payload: item,
    };
  },
};

export { HistoryCommand };
