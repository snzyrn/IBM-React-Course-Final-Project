import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IoAddCircleSharp } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";
import { IoMdRemoveCircle } from "react-icons/io";

const Allocation = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const addIconStyle = { color: "#4FAD5B", fontSize: "24px" };
  const removeIconStyle = { color: "#AF1D11", fontSize: "24px" };
  const deleteIconStyle = { fontSize: "24px" };

  const rows = [
    createData(
      "Marketing",
      159,
      <IoAddCircleSharp style={addIconStyle} />,
      <IoMdRemoveCircle style={removeIconStyle} />,
      <TiDelete style={deleteIconStyle} />
    ),
    createData(
      "Finance",
      237,
      <IoAddCircleSharp style={addIconStyle} />,
      <IoMdRemoveCircle style={removeIconStyle} />,
      <TiDelete style={deleteIconStyle} />
    ),
    createData(
      "Sales",
      262,
      <IoAddCircleSharp style={addIconStyle} />,
      <IoMdRemoveCircle style={removeIconStyle} />,
      <TiDelete style={deleteIconStyle} />
    ),
    createData(
      "Human Resource",
      305,
      <IoAddCircleSharp style={addIconStyle} />,
      <IoMdRemoveCircle style={removeIconStyle} />,
      <TiDelete style={deleteIconStyle} />
    ),
    createData(
      "IT",
      356,
      <IoAddCircleSharp style={addIconStyle} />,
      <IoMdRemoveCircle style={removeIconStyle} />,
      <TiDelete style={deleteIconStyle} />
    ),
  ];
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Department</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Allocated Budget
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Increase by 10
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Decrease by 10
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Allocation;
