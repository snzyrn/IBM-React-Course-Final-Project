import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function App() {
  const [currency, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  console.log(currency);

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
              {currency.substring(0, 1)}
            </span>
          </label>
          <TextField
            required
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
            <span style={{ fontWeight: "bold", paddingLeft: "5px" }}>
              {currency.substring(0, 1)}
            </span>
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
            <span style={{ fontWeight: "bold", paddingLeft: "5px" }}>
              {currency.substring(0, 1)}
            </span>
          </label>
        </Box>
      </Box>

      {/* Currency 93E59A*/}
      <Box sx={{ minWidth: 120, width: "15em" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currency}
            label="Currency"
            onChange={handleChange}
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

export default App;
