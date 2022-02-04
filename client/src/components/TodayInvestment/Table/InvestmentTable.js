import React from "react";
import "./InvestmentTable.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const InvestmentTable = ({ details }) => {
  const [filter, setFilter] = React.useState("All");

  const filterItems = [
    ...new Set(details.investments.map((item) => item.typeOfInvestment)),
  ];

  return (
    <div>
      <div className="filter-tabs">
        <div className="filter-items">
          <div
            className="filter-item"
            onClick={() => {
              setFilter("All");
            }}
          >
            All
          </div>
          {filterItems.map((item) => (
            <div
              className="filter-item"
              onClick={() => {
                setFilter(item);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
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
            {filter === "All"
              ? details.investments.map((investment) => (
                  <TableRow>
                    <TableCell align="left">
                      {investment.typeOfInvestment}
                    </TableCell>
                    <TableCell align="left">{investment.specify}</TableCell>
                    <TableCell align="center">{investment.time}</TableCell>
                    <TableCell align="center">{investment.amount}</TableCell>
                    <TableCell align="center">
                      <Button>
                        <EditIcon />
                      </Button>
                      <Button color="error">
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              : details.investments
                  .filter((item) => item.typeOfInvestment === filter)

                  .map((investment) => {
                    return (
                      <TableRow>
                        <TableCell align="left">
                          {investment.typeOfInvestment}
                        </TableCell>
                        <TableCell align="left">{investment.specify}</TableCell>
                        <TableCell align="center">{investment.time}</TableCell>
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
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InvestmentTable;
