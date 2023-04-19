import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Pagination,
  Stack
} from '@mui/material';
import { getAllUsers } from "../api/user";
import { IUser } from '../interfaces/User';
import { StyledTableCell } from '../utils/utils';
import UserRow from './UserRow';








export default function CustomizedTables() {

  const tableHeaders = ["ID", "First Name", "Last Name", "Email", "Company", "Created at", "Country", "Action"];
  const [allUsers, setAllUsers] = useState([])
  // 
  const gettingAllUsers = async (page: number) => {
    const response = await getAllUsers(page);
    console.log("DATA", response);
    setAllUsers(response)
  }
  //
  const onChangePage = (event: React.ChangeEvent<unknown>, page: number) => {

    console.log("ELEMENT", page);
    gettingAllUsers(page - 1)
  }
  useEffect(() => {

    gettingAllUsers(0);

  }, [])




  return (
    <Box sx={{ m: 2 }}>

      <Button sx={{ m: 2 }} variant="contained" color="success">Add New User</Button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {tableHeaders.map((header, key) => (
                <StyledTableCell key={key} sx={{ fontWeight: 'bold', m: 1 }}>{header}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {allUsers.map((row: IUser) => (
              <UserRow key={row._id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ m: 4, display: "flex", justifyContent: "center" }}>
        <Stack spacing={2}>
          <Pagination count={15} color="primary" onChange={onChangePage} />
        </Stack>
      </Box>
    </Box>
  );
}