import * as React from "react";
import { useContext } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../context/AppContext";

const ChangeAllocation = () => {
  const { currency, dispatch, remainingBudget, totalAllocation } =
    useContext(AppContext);

  const [department, setDepartment] = React.useState("");
  const [actionType, setActionType] = React.useState("");
  const [amount, setAmount] = React.useState(0);

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleActionChange = (event) => {
    setActionType(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(Number(event.target.value));
  };

  const handleSave = () => {
    if (remainingBudget >= totalAllocation) {
      if (actionType === "Add") {
        dispatch({
          type: "ADD_ALLOCATION",
          payload: { name: department, budget: amount },
        });
      } else if (actionType === "Reduce") {
        dispatch({
          type: "RED_ALLOCATION",
          payload: { name: department, budget: amount },
        });
      }
    } else {
      alert("You have exceeded the budget.");
    }
  };

  return (
    <div>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "40px",
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
                onChange={handleDepartmentChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Choose</em>
                </MenuItem>
                <MenuItem value={"Marketing"}>Marketing</MenuItem>
                <MenuItem value={"Finance"}>Finance</MenuItem>
                <MenuItem value={"Sales"}>Sales</MenuItem>
                <MenuItem value={"HumanResource"}>Human Resource</MenuItem>
                <MenuItem value={"IT"}>IT</MenuItem>
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
                value={actionType}
                onChange={handleActionChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Choose</em>
                </MenuItem>
                <MenuItem value="Add">Add</MenuItem>
                <MenuItem value="Reduce">Reduce</MenuItem>
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
              {currency}
            </label>
            <TextField
              type="number"
              inputProps={{ step: "10" }}
              onChange={handleAmountChange}
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
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ChangeAllocation;
