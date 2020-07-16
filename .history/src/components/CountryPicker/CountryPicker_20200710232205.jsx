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

  console.log("get countries", countries);

  return (
    <FormControl>
      <NativeSelect>
        {countries.map((data, i) => (
          <option key={i} value={data}>
            {data}
          </option>
        ))}
        {/* {countries.map((countryName, i) => {
          console.log(countryName);
        })} */}
        <option value="global">global</option>
        {/* {countries.map((countryName, index) => (
          
        ))} */}
      </NativeSelect>
    </FormControl>
  );
};
export default CountryPicker;
