import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
const CountryPicker = ({ onChange, country }) => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const [countriesFetch, setCountriesFetch] = useState([]);
  const [age, setAge] = React.useState("");
  useEffect(() => {
    const fetchContries = async () => {
      setCountriesFetch(await fetchCountries());
    };
    fetchContries();
  }, [setCountriesFetch]);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  if (countriesFetch) {
    return (
      <FormControl>
        {/* <input type="text" name="firstname" onChange={changeHandler} /> */}
        {/* <select onChange={(e) => onChange(e.target.value)}>
          <option value="">global</option>
          {countriesFetch.map((data, i) => (
            <option name={data} value={data} key={i}>
              {data}
            </option>
          ))}
        </select> */}
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Country
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={country === undefined ? global : country}
            // onChange={handleChange}
            onChange={(e) => onChange(e.target.value)}
            label="Country"
          >
            {console.log("USama", country)}
            <MenuItem value="global">
              <em>global</em>
            </MenuItem>
            {countriesFetch.map((data, i) => (
              <MenuItem value={data} key={i}>
                {data}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FormControl>
    );
  }
  return;
};
export default CountryPicker;
