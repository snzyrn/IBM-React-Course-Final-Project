import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ChangeAllocation = () => {
  const [department, setDepartment] = React.useState("");

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  const [allocation, setAllocation] = React.useState("");

  const handleAllocation = (event) => {
    setAllocation(event.target.value);
  };

  return (
    <div>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "30px",
          }}
        >
          {/* Department */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <label
              style={{
                fontSize: "1.2rem",
                paddingLeft: "8px",
                background: "#E2E4E6",
                height: "2em",
                display: "flex",
                alignItems: "center",
                borderRadius: "3px",
                padding: "9px",
              }}
            >
              Department
            </label>
            <FormControl sx={{ minWidth: 120 }}>
              <Select
                value={department}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Choose</em>
                </MenuItem>
                <MenuItem value={10}>Marketing</MenuItem>
                <MenuItem value={20}>Finance</MenuItem>
                <MenuItem value={30}>Sales</MenuItem>
                <MenuItem value={30}>Human Resource</MenuItem>
                <MenuItem value={30}>IT</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Allocation */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <label
              style={{
                fontSize: "1.2rem",
                paddingLeft: "8px",
                background: "#E2E4E6",
                height: "2em",
                display: "flex",
                alignItems: "center",
                borderRadius: "3px",
                padding: "9px",
              }}
            >
              Allocation
            </label>
            <FormControl sx={{ minWidth: 120 }}>
              <Select
                value={allocation}
                onChange={handleAllocation}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Choose</em>
                </MenuItem>
                <MenuItem value={10}>Add</MenuItem>
                <MenuItem value={20}>Reduce</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Text Input */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <label
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              £
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

          {/* Save Button */}
          <Button variant="contained">Save</Button>
        </Box>
      </Box>
    </div>
  );
};

export default ChangeAllocation;
