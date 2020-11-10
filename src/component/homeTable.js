import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { fetchData } from "../api/index";

// ===== STYLE COMPONENT ===== //
const useStyles = makeStyles({
  table: {
    minWidth: 650,

  },
});

// ===== API FETCH FROM API > INDEX.JS ===== //
function BasicTable() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    (async () => {
      const rowData = await fetchData();
      //   console.log(response);
      setRowData(rowData);
    })();
  }, []);

  // ===== STYLE COMPONENT ===== //
  const classes = useStyles();

  // ===== RENDER DOM ===== //
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead style={{ backgroundColor: "purple" }}>
            <TableRow>
              <TableCell style={{ color: "white" }}>Asset</TableCell>
              <TableCell style={{ color: "white" }}>Acquisition Type</TableCell>
              <TableCell style={{ color: "white" }}>Transaction Value</TableCell>
              <TableCell style={{ color: "white" }}>Country</TableCell>
              <TableCell style={{ color: "white" }}>Asset Tertiery Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.location.street.name}
                </TableCell>
                <TableCell>{row.login.username}</TableCell>
                <TableCell>{row.location.coordinates.latitude}</TableCell>
                <TableCell>{row.location.country}</TableCell>
                <TableCell>{row.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BasicTable;
