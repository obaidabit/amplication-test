import { Decimal } from "decimal.js";

export type OrderUpdateInput = {
  total?: Decimal | null;
};
