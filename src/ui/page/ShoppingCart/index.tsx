import NavList from "../../component/NavList";
import {useContext, useEffect, useState} from "react";
import * as CartItemApi from "../../../api/CartItemApi.ts"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import Footer from "../../component/Footer";
import {useNavigate} from "react-router-dom";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CardContent from "@mui/joy/CardContent";
import Divider from "@mui/material/Divider";
import CardOverflow from "@mui/joy/CardOverflow";
import Button from "@mui/joy/Button";
// import mockData from "./response.json";
import {CartItemDto} from "../../../data/cartItem/CartItemDto.ts";
import LoadingContainer from "../../component/LoadingContainer";
import CartTable from "../../component/CartTable/index.tsx"
import {LoginUserContext} from "../../../context/LoginUserContext.ts";
import {UserData} from "../../../data/user/UserData.ts"
import {Backdrop, CircularProgress, Grid } from "@mui/material";
import * as TransactionApi from "../../../api/TransactionApi.ts";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
}));


    export default function ShoppingCart() {
        const navigate = useNavigate();
        const [dtoList, setDtoList] = useState<CartItemDto[] |undefined>(undefined);
        const loginUser = useContext<UserData | undefined | null>(LoginUserContext);
        const [isBackdropOpen, setIsBackdropOpen] = useState<boolean>(false);
        const fetchDtoList = async () =>{
            try{
                const responseDtoList = await CartItemApi.getUserCart();
                setDtoList(responseDtoList);
            } catch (error){
                navigate("/error");
            }
        }

        useEffect(() => {
            if (loginUser) {
            fetchDtoList();
        }
        }, [loginUser]);
        const calTotal = () => {
            // Check if dtoList is not null or undefined and if it has elements
            if (dtoList && dtoList.length > 0) {
                // Use map to calculate the subtotal for each dto and then use reduce to sum them up
                return dtoList.map(dto => dto.price * dto.cartQuantity).reduce((subTotal, currentValue) => subTotal + currentValue, 0);
            } else {
                // Return 0 if dtoList is null, undefined, or empty
                return 0;
            }
        };

        const handlePay = async () =>{
        setIsBackdropOpen(true);
        const responseData = await TransactionApi.prepareTransaction();
        navigate(`/checkout/${responseData.tid}`);
        }
        const totalBox = () => {
            return (
                <Card sx={{width: '100%', maxWidth: '100%'}}>
                    <Typography
                        level="body-lg"
                        sx={{
                            backgroundColor: 'rgba(228, 0, 15, 0.7)', // Background color with 70% transparency
                            color: '#fff', // Text color
                            padding: '8px', // Padding for better visibility
                            borderTopLeftRadius: '6px',
                            borderTopRightRadius: '6px',
                        }}
                    >
                        Order Summary
                    </Typography>
                    <CardContent sx={{backgroundColor: 'white'}}>
                        <Grid container spacing={1} sx={{flexGrow: 1, backgroundColor: 'white'}}>
                            <Grid item xs={6} md={8}>
                                <Item sx={{textAlign: 'left'}}>Sub Total</Item>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Item sx={{textAlign: 'right'}}>${calTotal().toLocaleString()}</Item>
                            </Grid>
                            <Grid item xs={6} md={8}>
                                <Item sx={{textAlign: 'left'}}>Discount</Item>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Item sx={{textAlign: 'right'}}>-</Item>
                            </Grid>
                            <Grid item xs={6} md={8}>
                                <Item sx={{textAlign: 'left'}}>Shipping</Item>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Item sx={{textAlign: 'right'}}>Free</Item>
                            </Grid>
                        </Grid>
                        <Divider sx={{marginTop: '10px', marginBottom: '10px'}}/>
                        <Grid container spacing={2} sx={{flexGrow: 1, backgroundColor: 'white'}}>
                            <Grid item xs={6} md={8}>
                                <Item sx={{textAlign: 'left', fontWeight: 'bold', fontSize: '16px'}}>Total</Item>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Item sx={{textAlign: 'right', fontWeight: 'bold', fontSize: '16px'}}>${calTotal().toLocaleString()}</Item>
                            </Grid>
                        </Grid>
                    </CardContent>

                    <CardOverflow>
                        <Button
                            variant="solid"
                            size="lg"
                            sx={{
                                backgroundColor: '#E4000F',
                                color: 'white', // Optionally, set text color to white
                                '&:hover': {
                                    backgroundColor: '#E4000F', // Change background color on hover if needed
                                },
                            }}
                            onClick={handlePay}
                        >
                            Check Out
                        </Button>
                    </CardOverflow>
                </Card>
            )
        }

        return (
            <>
                <NavList/>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column', md: 'row'}, // For smaller screens, switch to column layout
                        justifyContent: 'center', // Horizontally center the content
                        flexGrow: 1,
                        marginTop: '120px',
                        marginLeft: '60px',
                        marginRight: '60px',
                        backgroundColor: 'rgba(255, 255, 255, 0)', // Completely transparent
                        '& > *:not(:last-child)': { // Apply margin to all children except the last one
                            marginBottom: {xs: '20px', md: 0}, // Add margin bottom for smaller screens, and remove it for larger screens
                            marginRight: {xs: 0, md: '20px'}, // Add margin right for smaller screens, and remove it for larger screens
                        },
                    }}>
                    {
                        dtoList
                            ?dtoList.length >0
                            ?<>
                                <Item sx={{flex: '1 0 70%', display: 'flex', flexDirection: 'column'}}>
                                    <CartTable dtoList={dtoList} setDtoList={setDtoList}/></Item>
                                <Item sx={{flex: '1 0 25%', display: 'flex', flexDirection: 'column'}}>
                                    {totalBox()}
                                </Item>
                            </>
                            :<Typography>
                                    <Typography
                                        // variant="h1"
                                        sx={{
                                            display: 'flex',
                                            flexDirection: { xs: 'column', md: 'row' },
                                            alignSelf: 'center',
                                            textAlign: 'center',
                                            fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                                        }}
                                    >
                                        Empty Cart!
                                        <Typography
                                            component="span"
                                            // variant="h1"
                                            sx={{
                                                fontSize: 'clamp(3rem, 10vw, 4rem)',
                                                color: '#E4000F',
                                            }}
                                        >
                                            Shop with us NOW!
                                        </Typography>
                                    </Typography>
                                </Typography>
                            : <LoadingContainer/>
                    }
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={isBackdropOpen}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>

                </Box>
                <Footer/>

            </>
        )

}