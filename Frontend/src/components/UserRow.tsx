import React , {useState} from 'react'
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
}


  

export default function UserRow({row} : Props) {
    const [open, setOpen] = useState(false);
    const [contentButton, setContentButton] = useState("")
    const handleClickOpen = (e: any) => {
        console.log(e.target.id);
        const content = e.target.id
        setContentButton(content)
        setOpen(true);
    
      };
    
      const handleClose = () => {
        setContentButton("")
        setOpen(false);
      };
  return (
    <StyledTableRow key={row._id}>
    <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
    <StyledTableCell>{row.first}</StyledTableCell>
    <StyledTableCell>{row.last}</StyledTableCell>
    <StyledTableCell>{row.email}</StyledTableCell>
    <StyledTableCell>{row.company}</StyledTableCell>
    <StyledTableCell>{row.created_at.toString()}</StyledTableCell>
    <StyledTableCell>{row.country}</StyledTableCell>
    <StyledTableCell>
      <Button id="edit" onClick={handleClickOpen} sx={{ marginRight: "10px" }} variant="contained" color="primary">Edit</Button>

      {contentButton === "edit" &&
        <>
          <Dialog sx={{ '& .MuiBackdrop-root': { backgroundColor: 'transparent' }, backdropFilter: "blur(1px)" }} open={open} onClose={handleClose} TransitionComponent={Transition}>
            <DialogTitle>Update User</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please fill the data you want to update.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Update</Button>
            </DialogActions>
          </Dialog>
        </>
      }

      <Button id="delete" onClick={handleClickOpen} variant="contained" color="error">Delete</Button>
      {contentButton === "delete" &&
        <>
          <Dialog sx={{ '& .MuiBackdrop-root': { backgroundColor: 'transparent' }, backdropFilter: "blur(1px)" }} open={open} onClose={handleClose} TransitionComponent={Transition}>
            <DialogTitle>Are you sure you want to delete this user?</DialogTitle>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Delete</Button>
            </DialogActions>
          </Dialog>
        </>
      }
    </StyledTableCell>
  </StyledTableRow>
  )
}
