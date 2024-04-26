import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from "@mui/joy/IconButton";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {ProductDetailDto} from "../../../data/product/ProductDetailDto.ts";
import {useState} from "react";
import RenderAddToCart from "../Selector";
import * as CartItemApi from "../../../api/CartItemApi.ts";
import AddToCartSnackbar from "../AddToCartSnackbar";
import {useNavigate} from "react-router-dom";

type Props = {
    dto:ProductDetailDto
}
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ShowProductDetail({dto}: Props) {
    const navigate = useNavigate();
// // State to keep track of the quantity
    const [quantity, setQuantity] = useState(1);
    const [isAddingCart, setIsAddingCart] = useState<boolean>(false);
    const [snackbarOpen, setSnackbarOpen]= useState<boolean>(false);

    // Function to handle increasing the quantity
    const handlePlus = () => {
        if (quantity <dto.stock){
            setQuantity((prevState) =>(
                prevState + 1
            ))
        }
    }
//
    // Function to handle decreasing the quantity
    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity((prevState) =>(
                prevState - 1
            ))
        }
    }

    const handleAddToCart = async () => {
        try {
            setIsAddingCart(true);
            await CartItemApi.putCartItem(dto.pid, quantity);
            setIsAddingCart(false);
            setSnackbarOpen(true);
        } catch (error) {
            navigate("/error");
        }
    }
    // const renderAddToCart = () =>{
    //     if(dto.stock>0){
    //         return(
    //         <Grid item container alignItems="center" paddingTop={2}>
    //             <ButtonGroup variant="outlined" aria-label="Basic button group">
    //                 <Button onClick={increaseQuantity} sx={{borderTopLeftRadius: "50%", borderBottomLeftRadius:"50%"}}>+</Button>
    //                 {/* Display the quantity */}
    //                 <Typography sx={{  display: 'flex', alignItems: 'center', px: 2  }}>{quantity}</Typography>
    //                 <Button onClick={decreaseQuantity} sx={{borderTopRightRadius: "50%", borderBottomRightRadius:"50%"}}>-</Button>
    //             </ButtonGroup>
    //             <ButtonGroup>
    //                 <IconButton color="primary" aria-label="add to shopping cart" sx={{ cursor: 'pointer', ml: '8px'}} variant="body2">
    //                     <AddShoppingCartIcon/>
    //                 </IconButton>
    //             </ButtonGroup>
    //         </Grid>
    //         )
    //         } else {
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

    return (
        <Paper
            sx={{
                p: 8,
                pt: { xs: 4, sm: 6 },
                margin: '120px auto 40px',
                maxWidth: '80%',
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                boxShadow: '0px 2px 64px rgba(255, 0, 0, 0.5)',
                borderRadius: '20px',
            }}
        >
            <Grid container spacing={0}>
                <Grid item paddingRight={4}>
                    <ButtonBase sx={{ width: '100%', borderRadius: '16px', overflow: 'hidden' }}>
                        <Img alt="complex" src={dto.image_url} sx={{ width: '100%', maxHeight: '380px', objectFit: 'cover' }} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" paddingTop={2} paddingRight={4}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {dto.name}
                            </Typography>
                            <Typography variant="body2" gutterBottom marginTop='14px' sx={{whiteSpace:'pre-line'}}>
                                {dto.description}
                            </Typography>
                        </Grid>
                        <Grid container position="relative" wrap ="wrap">
                            <Grid item minWidth='200px'>
                                <RenderAddToCart
                                    quantity={quantity}
                                    handleMinus={handleMinus}
                                    handlePlus={handlePlus}
                                />
                            </Grid>
                            <Grid item sx={{ position: 'absolute', bottom: 0, right: 0}}> {/* Set position to absolute and specify bottom and right values */}
                                <IconButton color="primary" aria-label="add to shopping cart" onClick={handleAddToCart} disabled={isAddingCart}>
                                    <AddShoppingCartIcon /> ADD
                                </IconButton>
                            </Grid>
                            <AddToCartSnackbar snackbarOpen={snackbarOpen} setSnackbarOpen={setSnackbarOpen}/>
                        </Grid>




                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div" paddingTop={2} sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                            ${(dto.price).toLocaleString()}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}