import React, { useState } from 'react'
import { IUser } from '../interfaces/User'
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  DialogContentText,
  DialogActions,
  Slide,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { StyledTableCell, StyledTableRow } from '../utils/utils';

export const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  row: IUser;
  open: boolean;
  setOpen: (open: boolean) => void;
  contentButton: string;
  setContentButton: (contentButton: string) => void;
  handleClose: () => void;
  handleClickOpen: (e:any, row:any) => void;
  setRowSelected: (row: IUser) => void;
}


export default function UserRow({ row, open, setOpen, contentButton, setContentButton, handleClose, handleClickOpen }: Props) {
  //const handleDelete = (id:number) => {

  //}
  console.log("CONTENT" , contentButton);

  return (
    <StyledTableRow key={row._id}>
      <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
      <StyledTableCell>{row.first}</StyledTableCell>
      <StyledTableCell>{row.last}</StyledTableCell>
      <StyledTableCell>{row.email}</StyledTableCell>
      <StyledTableCell>{row.company}</StyledTableCell>
      <StyledTableCell>{row?.created_at.toString()}</StyledTableCell>
      <StyledTableCell>{row.country}</StyledTableCell>
      <StyledTableCell>
        <Button id="edit" onClick={(e) => handleClickOpen(e, row)} sx={{ marginRight: "10px" }} variant="contained" color="primary">Edit</Button>
       
        <Button id="delete" onClick={(e) => handleClickOpen(e,row)} variant="contained" color="error">Delete</Button>
      
      </StyledTableCell>
    </StyledTableRow>
  )
}
