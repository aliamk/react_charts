import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function BasicTable() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=100")
      .then((response) => {
        console.log("response", response);
        setRowData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const classes = useStyles();
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Asset</TableCell>
              <TableCell>Acquisition Type</TableCell>
              <TableCell>Transaction Value</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Asset Tertiery Type</TableCell>
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