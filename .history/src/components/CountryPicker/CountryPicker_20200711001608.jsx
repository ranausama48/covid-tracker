import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";

const CountryPicker = ({ onChange }) => {
  const [countriesFetch, setCountriesFetch] = useState([]);
  useEffect(() => {
    const fetchContries = async () => {
      setCountriesFetch(await fetchCountries());
    };
    fetchContries();
  }, [setCountriesFetch]);
  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);
  };

  if (countriesFetch) {
    return (
      <FormControl>
        <NativeSelect>
          <option value="global">global</option>
          {countriesFetch.map((data, i) => (
            <option
              name={data}
              // onChange={(e) => onChange(e.target.value)}
              onChange={changeHandler}
              value={data}
              key={i}
            >
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
