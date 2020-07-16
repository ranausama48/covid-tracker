import React, { useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";

const CountryPicker = () => {
  useEffect(() => {
    const fetchContries = async () => {
      const getCountries = await fetchCountries();
    };
    fetchContries();
  }, []);
  return (
    <FormControl>
      <NativeSelect>
        <option value="global">global</option>
      </NativeSelect>
    </FormControl>
  );
};
export default CountryPicker;
