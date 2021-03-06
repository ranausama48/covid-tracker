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
  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);
  };

  if (countriesFetch) {
    return (
      <FormControl>
        {/* <input type="text" name="firstname" onChange={changeHandler} /> */}
        <select>
          <option onChange={changeHandler} value="global">
            global
          </option>
          <option onChange={changeHandler} value="global1">
            global1
          </option>
          <option onChange={changeHandler} value="global2">
            global2
          </option>

          {/* 
          {countriesFetch.map((data, i) => (
            <option
              name={data}
              // onChange={(e) => onChange(e.target.value)}
              onChange={changeHandler}
              // value={data}
              key={i}
            >
              {data}
            </option>
          ))} */}
        </select>
      </FormControl>
    );
  }
  return;
};
export default CountryPicker;
