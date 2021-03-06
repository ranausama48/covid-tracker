import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";

const CountryPicker = () => {
  const [countries, setCountries] = useState({});
  useEffect(() => {
    const fetchContries = async () => {
      setCountries(await fetchCountries());
    };
    fetchContries();
  }, [setCountries]);
  return (
    <FormControl>
      {console.log("get countries", countries)}
      <NativeSelect>
        <option value="global">global</option>
      </NativeSelect>
    </FormControl>
  );
};
export default CountryPicker;
