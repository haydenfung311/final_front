import {Backdrop, Box, Button, CircularProgress, Stack, Typography} from "@mui/material";
import * as TransactionApi from "../../../api/TransactionApi.ts";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

type Props ={
    total: number
    tid: string
}
export default function CheckoutBox({total, tid}:Props){
   const navigate = useNavigate();
   const [isBackdropOpen, setIsBackdropOpen] = useState<boolean>(false);
    const handleCheckout = async ()=> {
        setIsBackdropOpen(true);
        try {
            await TransactionApi.finishTransaction(tid);
            navigate("/thankyou");
        } catch (error) {
            navigate("/error");
        }
    }

    return(
        <Stack direction ="row" justifyContent="space-between" my={3} ml={3} mr={3}>
            <Box sx={{
                borderRadius: 1,
            }}>
                <Typography variant="h4" color="red" sx={{ textAlign: 'center' }}>
                    Total: ${total.toLocaleString()}
                </Typography>
            </Box>
            <Box>
<Button variant="outlined" onClick={handleCheckout} sx={{ typography: 'h4' }}>
    Proceed
</Button>
            </Box>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isBackdropOpen}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Stack>
    )
}