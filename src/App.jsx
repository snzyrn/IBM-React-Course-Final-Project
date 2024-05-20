import * as React from "react";
import Header from "./components/Header";
import ChangeAllocation from "./components/ChangeAllocation";
import Allocation from "./components/Allocation";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box sx={{ margin: "0 20px 0 20px" }}>
      <Box sx={{ margin: "10px" }}>
        <Typography variant="h2" gutterBottom>
          Company's Budget Allocation
        </Typography>
        <Header />
      </Box>
      <Box sx={{ margin: "20px 10px 20px 10px" }}>
        <Typography variant="h4" gutterBottom>
          Allocation
        </Typography>
        <Allocation />
      </Box>
      <Box sx={{ margin: "10px" }}>
        <Typography variant="h4" gutterBottom>
          Change Allocation
        </Typography>
        <ChangeAllocation />
      </Box>
    </Box>
  );
}

export default App;
