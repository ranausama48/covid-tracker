import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";

const CountryPicker = () => {
  const [countriesFetch, setCountriesFetch] = useState({});
  useEffect(() => {
    const fetchContries = async () => {
      setCountriesFetch(await fetchCountries());
    };
    fetchContries();
  }, [setCountriesFetch]);

  return (
    <FormControl>
      <NativeSelect>
        {console.log(countriesFetch)}
        <option value="global">global</option>
      </NativeSelect>
    </FormControl>
  );
};
export default CountryPicker;
