import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {Dispatch, SetStateAction, useState} from "react";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

type Props ={
    isOpen:boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    handleDelete: () => Promise <void>
}
export default function DeleteConfirmDialog({isOpen, setIsOpen, handleDelete}:Props ){
    const[isDeleting, setIsDeleting] = useState<boolean>(false);
    const handleDeleteClick = async () =>{
        setIsDeleting(true);
        await handleDelete();
        setIsOpen(false);
        setIsDeleting(false);
    }

    return (
        <Dialog
            open={isOpen}
    onClose={() =>setIsOpen(false)}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    >

    <DialogContent>
    <DialogContentText id="alert-dialog-description">
        {"Confirm delete item from shopping cart?"}
    </DialogContentText>
    </DialogContent>
            {
                isDeleting
                    ? <DialogActions>
                <DeleteSweepIcon/>
                    </DialogActions>
                    :<DialogActions>
                        <Button onClick={() => setIsOpen(false)}>No</Button>
                        <Button onClick={handleDeleteClick} autoFocus>
                            Yes
                        </Button>
                    </DialogActions>
            }
    </Dialog>
    );

}