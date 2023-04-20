import React from 'react'
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    DialogContentText,
    DialogActions
} from '@mui/material';
import { IUser } from '../../interfaces/User';

interface Props {

    open: boolean;
    handleData: (e: any) => Promise<void>;
    handleInput: (event: any) => void;
    handleClose: () => void;
    input: IUser;
}

export default function DataDialog({ open, handleData, handleInput, handleClose, input }: Props) {
    return (
        <Dialog sx={{ '& .MuiBackdrop-root': { backgroundColor: 'transparent' }, backdropFilter: "blur(1px)" }} open={open} onClose={handleClose} >
            <DialogTitle>Create User </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please fill the user data.
                </DialogContentText>
                <form onSubmit={handleData}>
                    <TextField onChange={handleInput} defaultValue={input.first} autoFocus margin="dense" id="first" name="first" label="Firstname" type="text" fullWidth variant="standard" />
                    <TextField onChange={handleInput} defaultValue={input.last} autoFocus margin="dense" id="last" name="last" label="Lastname" type="text" fullWidth variant="standard" />
                    <TextField onChange={handleInput} defaultValue={input.email} autoFocus margin="dense" id="email" name="email" label="Email Address" type="email" fullWidth variant="standard" />
                    <TextField onChange={handleInput} defaultValue={input.company} autoFocus margin="dense" id="company" name="company" label="Company Name" type="text" fullWidth variant="standard" />
                    <TextField onChange={handleInput} defaultValue={input.country} autoFocus margin="dense" id="country" name="country" label="Country" type="text" fullWidth variant="standard" />
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit"
                            variant="contained"
                            color="primary" >Send</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    )
}
