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
  }, [countriesFetch]);


  return (
    <FormControl>
      <NativeSelect>
        {
  console.log("get countries", countriesFetch);

        }
        {/* {countries
          ? countries.map((data, i) => (
              <option key={i} value={data}>
                {data}
              </option>
            ))
          : null} */}
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
