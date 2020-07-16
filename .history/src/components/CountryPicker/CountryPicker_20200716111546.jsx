import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";
import styled from "styled-components";
const StyledSelect = styled.select`
  height: 40px;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.15) 2px 2px;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  padding: 0px 10px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(222, 222, 222);
`;
const CountryPicker = ({ onChange }) => {
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
        {/* <input type="text" name="firstname" onChange={changeHandler} /> */}
        <StyledSelect onChange={(e) => onChange(e.target.value)}>
          <option value="">global</option>
          {countriesFetch.map((data, i) => (
            <option name={data} value={data} key={i}>
              {data}
            </option>
          ))}
        </StyledSelect>
      </FormControl>
    );
  }
  return;
};
export default CountryPicker;
