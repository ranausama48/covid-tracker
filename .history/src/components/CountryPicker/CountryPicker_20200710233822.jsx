import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";

const CountryPicker = () => {
  const [countriesFetch, setCountriesFetch] = useState([]);
  useEffect(() => {
    const fetchContries = async () => {
      setCountriesFetch(await fetchCountries());
    };
    fetchContries();
  }, [setCountriesFetch]);

  if (countriesFetch) {
    return (
      <FormControl>
        <NativeSelect>
          <option value="global">global</option>
          {countriesFetch.map((data, i) => (
            <option value={data} key={i}>
              {data}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    );
  }
  return;
};
export default CountryPicker;
