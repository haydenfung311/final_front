import Grid from "@mui/material/Grid";
import {Button, ButtonGroup} from "@mui/joy";
import Typography from "@mui/material/Typography";

type Props = {
    quantity:number;
    handleMinus: () => void;
    handlePlus: () => void;
}

export default function RenderAddToCart ({quantity, handlePlus, handleMinus}: Props) {

    // const renderAddToCart = () =>{
    //     if(dto.stock>0){
    return (

        <Grid item container alignItems="center" paddingTop={2}>
            <ButtonGroup variant="outlined" aria-label="Basic button group">
                <Button onClick={handlePlus} sx={{borderTopLeftRadius: "50%", borderBottomLeftRadius: "50%"}}>+</Button>
                {/* Display the quantity */}
                <Typography sx={{display: 'flex', alignItems: 'center', px: 2}}>{quantity}</Typography>
                <Button onClick={handleMinus}
                        sx={{borderTopRightRadius: "50%", borderBottomRightRadius: "50%"}}>-</Button>
            </ButtonGroup>
        </Grid>
    )
    }

// }else {
//         return(
//         <Box>
//             <Typography color={"red"}>
//                 Sold Out!
//             </Typography>
//         </Box>
//         )
//
//     }
// }
