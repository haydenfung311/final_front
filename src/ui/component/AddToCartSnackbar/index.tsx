
import {Alert, Snackbar} from "@mui/material";
import {Dispatch, SetStateAction} from "react";
import {Link} from "react-router-dom";

type Props = {
    snackbarOpen: boolean;
    setSnackbarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function AddToCartSnackbar({snackbarOpen, setSnackbarOpen}:Props) {
    return (
        <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={()=>setSnackbarOpen(false)}
            anchorOrigin={{vertical:"bottom", horizontal:"center"}}>
            <Alert
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
            >
                Added to Cart Successfully. <Link to={"/shoppingcart"} style={{ color: 'white' }} >  Go to Cart</Link>
            </Alert>
        </Snackbar>
    );
}