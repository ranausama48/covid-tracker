import React from "react";
import { NativexSelect, FormControl } from "@material-ui/core";

const CountryPicker = () => {
  return( <FormControl>
            <NativexSelect>
              <option value="global">global</option>
            </NativexSelect>
  </FormControl>)

export default CountryPicker;
