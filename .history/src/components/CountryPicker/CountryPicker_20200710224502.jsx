import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

const CountryPicker = () => {
  return (
    <FormControl>
      <NativeSelect>
        <option value="global">global</option>
      </NativeSelect>
    </FormControl>
  );
};
export default CountryPicker;
