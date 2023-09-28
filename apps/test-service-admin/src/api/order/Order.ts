import { Decimal } from "decimal.js";

export type Order = {
  createdAt: Date;
  id: string;
  total: Decimal | null;
  updatedAt: Date;
};
