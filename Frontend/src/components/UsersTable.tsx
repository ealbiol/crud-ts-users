import * as React from 'react';
import { useState, useEffect, useReducer } from 'react';
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
  Stack,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  DialogContentText,
  DialogActions,
  Slide
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { getAllUsers, updateUser } from "../api/user";
import { IUser } from '../interfaces/User';
import { StyledTableCell } from '../utils/utils';
import UserRow from './UserRow';
import { createUser, deleteUser } from '../api/user';
import DataDialog from './Dialogs/DataDialog';

export const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const initUser = {
  _id: "",
  email: "",
  first: "",
  last: "",
  company: "",
  country: "",
  created_at: new Date()
}
export default function CustomizedTables() {
  const [open, setOpen] = useState<boolean>(false);
  const [contentButton, setContentButton] = useState<string>("");
  const [rowSelected, setRowSelected] = useState<IUser>(initUser);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [formInput, setFormInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      id: "",
      first: "",
      last: "",
      email: "",
      company: "",
      country: ""
    }
  );
  const tableHeaders = ["ID", "First Name", "Last Name", "Email", "Company", "Created at", "Country", "Action"];
  const [allUsers, setAllUsers] = useState([])

  //
  const refresh = () => {
    gettingAllUsers(currentPage);
  }
  const gettingAllUsers = async (page: number) => {
    const response = await getAllUsers(page);
    console.log("DATA", response);
    setAllUsers(response)
  }
  //
  const onChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    console.log("ELEMENT", page);
    gettingAllUsers(page - 1)
    setCurrentPage(page - 1)
  }

  useEffect(() => {
    gettingAllUsers(0);
  }, [])

  const handleClickOpen = (e: any, rowSelected: IUser = initUser) => {
    console.log(e.target.id);
    const content = e.target.id
    setContentButton(content);
    if (rowSelected) {
      setRowSelected(rowSelected);
      if (content==="edit"){

        setFormInput(rowSelected);
      }
    }
    setOpen(true);

  };
  const handleCreate = async (e: any) => {
    e.preventDefault();
    let data = formInput;
    await createUser(data)
    handleClose();
    refresh();

  }
  const handleUpdate = async (e:any) => {
    e.preventDefault();
    let data = formInput;
    await updateUser(data._id, data);
    handleClose();
    refresh();
  }
  const handleClose = () => {
    setContentButton("")
    setOpen(false);
  };
  const handleDelete = async (id: string) => {
    await deleteUser(id);
    handleClose();
    refresh();
  }
  const handleInput = (evt: any) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    console.log("NAME ", name, "VALUE", newValue);
    setFormInput({ [name]: newValue });
  };
  return (
    <Box sx={{ m: 2 }}>
      <Button id="create" sx={{ m: 2 }} variant="contained" color="success" onClick={handleClickOpen}>Add New User</Button>
  
      {contentButton === "create" && (
        <DataDialog open={open} handleData={handleCreate} handleInput={handleInput} handleClose={handleClose} input={formInput} />
      )}
      {contentButton === "edit" && (
        <DataDialog open={open} handleData={handleUpdate} handleInput={handleInput} handleClose={handleClose} input={formInput} />
      )}

      {contentButton === "delete" &&
        <>
          <Dialog sx={{ '& .MuiBackdrop-root': { backgroundColor: 'transparent' }, backdropFilter: "blur(1px)" }} open={open} onClose={handleClose} TransitionComponent={Transition}>
            <DialogTitle>Are you sure you want to delete "<b>{rowSelected.first}{" "}{rowSelected.last}</b>"?</DialogTitle>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={() => handleDelete(rowSelected._id)}>Delete</Button>
            </DialogActions>
          </Dialog>
        </>
      }
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
              <UserRow
                handleClose={handleClose}
                contentButton={contentButton}
                setContentButton={setContentButton}
                open={open}
                setOpen={setOpen}
                key={row._id}
                row={row}
                handleClickOpen={handleClickOpen}
                setRowSelected={setRowSelected}
              />
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