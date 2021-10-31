import React from "react";
import "./InvestmentTable.scss";
import { investmentDetails } from "../../../data/InvestmentDetails";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const InvestmentTable = () => {
  return (
    <div>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Types of Investment</TableCell>
              <TableCell align="left">Specify</TableCell>
              <TableCell align="center">Time</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {investmentDetails
              .filter((investment) => investment.date === "21/10/2021")
              .map((details) => {
                return (
                  <>
                    {details.investments.map((investment) => {
                      return (
                        <TableRow key={investment.id}>
                          <TableCell align="left">
                            {investment.typeOfInvestment}
                          </TableCell>
                          <TableCell align="left">
                            {investment.specify}
                          </TableCell>
                          <TableCell align="center">
                            {investment.time}
                          </TableCell>
                          <TableCell align="center">
                            {investment.amount}
                          </TableCell>
                          <TableCell align="center">
                            <Button>
                              <EditIcon />
                            </Button>
                            <Button color="error">
                              <DeleteIcon />
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}

                    {details.investments.reduce((acc, curr) => {
                      return acc + parseFloat(curr.amount);
                    }, 0)}
                  </>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InvestmentTable;
