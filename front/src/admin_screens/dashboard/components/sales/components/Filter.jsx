import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Filter = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="admin_products_filter">
      <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
        <InputLabel id="demo-select-small">SORT</InputLabel>{" "}
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={0}>Newest</MenuItem>
          <MenuItem value={10}>Features</MenuItem>
          <MenuItem value={20}>Price: Low To High</MenuItem>
          <MenuItem value={30}>Price: High To Low</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
