import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Total" source="total" />
      </SimpleForm>
    </Create>
  );
};
