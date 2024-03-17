import { CartModel } from "@models/cart/types";

interface HistoryItem extends CartModel {
  date: Date;
  orderTotal: number;
  deliveryCharge: number;
}

interface HistoryModel {
  histories: HistoryItem[];
}

enum HistoryActionType {
  ADD_ITEM_HISTORY = "ADD_ITEM_HISTORY",
}

type HistoryAction = {
  type: HistoryActionType.ADD_ITEM_HISTORY;
  payload?: HistoryItem;
};

export { HistoryActionType };
export type { CartModel, HistoryAction, HistoryItem, HistoryModel };
