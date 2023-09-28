import { Decimal } from "decimal.js";

export type OrderCreateInput = {
  total?: Decimal | null;
};
