import * as React from "react";
import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AppContext } from "../context/AppContext";

function Header() {
  const { dispatch, totalAllocation, currency, budget, remainingBudget } =
    useContext(AppContext);
  const [inputBudget, setInputBudget] = useState(budget);

  const changeCurrency = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  const handleBudgetChange = (event) => {
    const newBudget = Number(event.target.value);
    if (newBudget < 20000) {
      setInputBudget(newBudget);
    } else {
      alert("Please enter value less than 20000");
      newBudget = 0;
      setInputBudget(newBudget);
    }
    dispatch({
      type: "SET_BUDGET",
      payload: newBudget,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "50px",
      }}
    >
      {/* Budget */}
      <Box sx={{ width: "21em" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            background: "#E2E4E6",
            padding: "3px",
            borderRadius: "5px",
            height: "4em",
          }}
        >
          <label
            style={{
              fontSize: "1.2rem",
              paddingLeft: "8px",
            }}
          >
            Budget:
            <span style={{ fontWeight: "bold", paddingLeft: "30px" }}>
              {currency}
            </span>
          </label>
          <TextField
            type="number"
            inputProps={{ step: "10", max: 20000 }}
            onChange={handleBudgetChange}
            sx={{
              "& .MuiInputBase-root": {
                height: 40,
                background: "white",
                marginLeft: "5px",
              },
            }}
          />
        </Box>
      </Box>
      {/* Remaining */}
      <Box sx={{ width: "20em" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            background: "#D2E8DD",
            padding: "3px",
            borderRadius: "5px",
            height: "3em",
            color: "#346D56",
          }}
        >
          <label
            htmlFor="outlined-required"
            style={{
              fontSize: "1.2rem",
              paddingLeft: "8px",
            }}
          >
            Remaining:
            <span
              style={{
                fontWeight: "bold",
                paddingLeft: "5px",
                paddingRight: "3px",
              }}
            >
              {currency}
            </span>
            {remainingBudget}
          </label>
        </Box>
      </Box>
      {/* Spent so far */}
      <Box sx={{ width: "20em" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            background: "#D1E3FF",
            padding: "3px",
            borderRadius: "5px",
            height: "3em",
            color: "#3A54AE",
          }}
        >
          <label
            htmlFor="outlined-required"
            style={{
              fontSize: "1.2rem",
              paddingLeft: "8px",
            }}
          >
            Spent so far:
            <span
              style={{
                fontWeight: "bold",
                paddingLeft: "5px",
                paddingRight: "3px",
              }}
            >
              {currency}
            </span>
            {totalAllocation}
          </label>
        </Box>
      </Box>

      {/* Currency */}
      <Box sx={{ minWidth: 120, width: "15em" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currency}
            label="Currency"
            onChange={(event) => changeCurrency(event.target.value)}
          >
            <MenuItem value={"$"}>$ Dollar</MenuItem>
            <MenuItem value={"£"}>£ Pound</MenuItem>
            <MenuItem value={"€"}>€ Euro</MenuItem>
            <MenuItem value={"₹"}>₹ Rupee</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}

export default Header;
