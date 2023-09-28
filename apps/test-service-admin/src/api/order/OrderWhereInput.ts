import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  total?: DecimalNullableFilter;
};
