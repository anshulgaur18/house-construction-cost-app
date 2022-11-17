import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const TableData = ({ allEntry, setAllentry }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  let data = allEntry.map((value)=>value.cost);
  console.log(data);
  let dataNo = data.map(Number);
  console.log(dataNo);
  let sum = 0;
  for(let i=0;i<dataNo.length;i++){
    sum += dataNo[i];
  }
  console.log(sum);
  
  

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const deleteItem = (index) => {
    const updateditems = allEntry.filter((elem) => {
      return index !== elem.id;
    });

    setAllentry(updateditems);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 765 }} aria-label="customized table">
          <TableHead>
            <TableRow >
              <StyledTableCell >Serial no</StyledTableCell>
              <StyledTableCell>Item</StyledTableCell>
              <StyledTableCell align="right">Cost</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allEntry.map((row, index) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="left">{index}</StyledTableCell>
                <StyledTableCell align="left">{row.item}</StyledTableCell>
                <StyledTableCell align="right">{row.cost}</StyledTableCell>
                <StyledTableCell align="right">
                  <button onClick={() => deleteItem(row.id)}>
                    <DeleteIcon />
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
            <TableRow>
              <TableCell></TableCell>
              <TableCell style={{fontSize:"20px",fontWeight:"bold"}}>Total</TableCell>
              <TableCell><ArrowRightAltIcon style={{padding:"10px"}}/></TableCell>
              <TableCell style={{fontSize:"20px",fontWeight:"bold"}}>{sum}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableData;
