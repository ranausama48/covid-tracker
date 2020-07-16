import React, { useEffect, useState } from "react";
import { FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";
import styled from "styled-components";
const StyledSelect = styled.select`
  height: 40px;
  height: 50px;

  background: rgb(255, 255, 255);
  border-radius: 10px;
  padding: 0px 10px;
  border-width: 2px;
  font-size: 20px;
  border-style: solid;
  color: rgb(64, 78, 103);
  border-color: rgb(64, 78, 103);
  cursor: pointer;
  :hover,
  :active,
  :focus {
    outline: none;
    height: 40px;
    height: 50px;

    background: rgb(255, 255, 255);
    border-radius: 10px;
    padding: 0px 10px;
    border-width: 2px;
    font-size: 20px;
    border-style: solid;
    border-color: rgb(64, 78, 103);
  }
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
